const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const authSchema = new mongoose.Schema({
  email: {
      type: String,
      required: true,
      unique: true
  },
  firstName: {
    type: String,
    max: [30, "First name must have fewer than 30 characters."],
    required: true,
  },
  lastName: {
    type: String,
    max: [30, "Last name must have fewer than 30 characters."],
    required: true,
  },
  creationDatetime: {
    type: Date,
    default: Date.now,
  },
  password: {
      type: String,
      required: true
  }
});

// Hash password before saving the user
authSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
      return next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

// Method to compare hashed password with plain text password
authSchema.methods.matchPassword = async function (enteredPassword) {
  console.log("User pwd : "+this.password);
  return await bcrypt.compare(enteredPassword, this.password);
};

module.exports = mongoose.model("auth", authSchema);
