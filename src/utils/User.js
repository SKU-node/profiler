const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');
const crypto = require('crypto');

const userSchema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  isVerified: { type: Boolean, default: false },                        
  emailToken: { type: String, required: true, unique: true, default: () => crypto.randomBytes(16).toString('hex') }
});

userSchema.pre('save', async function (next) {  
    // 비밀번호가 변경되지 않았으면 그대로 넘어감
    if (this.isModified('password')){
    try {
        // bcrypt 적용
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
        next();
      } catch (error) {
        next(error);
        }
        }
      next();
    });

const User = mongoose.model('User', userSchema);

module.exports = User;