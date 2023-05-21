const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const User = require('./User');
const bcrypt = require('bcrypt');
const sendEmail = require('./sendEmail');
const emailVerificationCodes = new Map();


// Middleware
app.use(cors());
app.use(express.json());

const mongoDBUri = process.env.MONGODB_URI || 'mongodb://localhost:27017/myapp';
mongoose.connect(mongoDBUri, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB 연결 오류:'));

// 라우트
app.post('../pages/Register', async (req, res) => {
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

app.get('/request-email-verification/:email', async (req, res) => {
  const email = req.params.email;
  
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
    res.json({ success: true });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ success: false, message: '서버 오류, 다시 시도하세요.' });
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