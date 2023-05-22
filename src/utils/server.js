const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const User = require('./User');
const bcrypt = require('bcrypt');
const emailVerificationCodes = new Map();
const nodemailer = require("nodemailer");
const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;

const oauth2Client = new OAuth2(
    process.env.GOOGLE_CLIENT_ID,
    process.env.GOOGLE_CLIENT_SECRET,
    "https://developers.google.com/oauthplayground"
);

oauth2Client.setCredentials({
  refresh_token: process.env.GOOGLE_REFRESH_TOKEN
});

const sendEmail = async (mailOptions) => {
  try {
    const accessToken = await oauth2Client.getAccessToken();
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: "profilerverifier@gmail.com",
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        refreshToken: process.env.GOOGLE_REFRESH_TOKEN,
        accessToken: accessToken.token,
      },
    });

    transporter.sendMail(mailOptions, (error, response) => {
      error 
        ? console.error("Error sending email:", error)
        : console.log("Email sent:", response);
      transporter.close();
    });
  } catch (error) {
    console.error("Error:", error);
  }
};



// Middleware
const corsOptions = {
  origin: "http://localhost:6638", // 허용하고자 하는 도메인 변경
  methods: ["GET", "POST", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Accept"]
};

app.use(cors(corsOptions));
app.use(express.json());
app.use("/handleEmailVer", function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  next();
});
app.options('*', cors());

const mongoDBUri = process.env.MONGODB_URI || 'mongodb://localhost:27017/myapp';
mongoose.connect(mongoDBUri, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB 연결 오류:'));

app.get('/handleEmailVer', cors(), async (req, res) => {
  const email = req.query.email;
  
  const verificationCode = Math.floor(Math.random() * (999999 - 100000) + 100000);

  // Save the verification code associated with the email
  emailVerificationCodes.set(email, verificationCode);

  // Prepare the email
  const mailOptions = {
    from: 'profilerverifier@gmail.com', 
    to: email,
    subject: 'Email Verification',
    text: `Your verification code is: ${verificationCode}`,
  };

  // Send the email
  try {
    await sendEmail(mailOptions);
    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ success: false, message: '서버 오류, 다시 시도하세요.' });
  }
});

// 라우트
app.post(`/CreateUser`,cors(), async (req, res) => {
  try {
    const { email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      res.json({ success: false, message: '이미 사용중인 이메일입니다.' });
      return;
    }

    const user = new User({
      email,
      password: hashedPassword,
    });
    await user.save();

    res.status(201).json({ message: 'User created', user: User, success:true});
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false });
  }
});



app.post('/verify-email', async (req, res) => {
  const {email, verificationCode} = req.body;
  const storedVerificationCode = emailVerificationCodes.get(email);

  if(storedVerificationCode === verificationCode) {
    emailVerificationCodes.delete(email);
    res.json({success: true});
  } else {
    res.json({success: false, message: '인증 코드 불일치, 다시 시도하세요.'});
  }
});

// 서버 실행
const port = process.env.PORT || 6639;
app.listen(port, () => console.log(`서버가 포트 ${port}에서 실행 중입니다.`));