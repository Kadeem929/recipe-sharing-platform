// // models/user.js
// const mongoose = require('mongoose');
// const bcrypt = require('bcryptjs');

// // Define the schema for the user
// const userSchema = new mongoose.Schema({
//   username: {
//     type: String,
//     required: true,
//     unique: true,
//   },
//   email: {
//     type: String,
//     required: true,
//     unique: true,
//   },
//   password: {
//     type: String,
//     required: true,
//   },
// });

// // Hash the password before saving the user
// userSchema.pre('save', async function (next) {
//   if (!this.isModified('password')) return next();

//   const salt = await bcrypt.genSalt(10);
//   this.password = await bcrypt.hash(this.password, salt);
//   next();
// });

// // Compare entered password with hashed password
// userSchema.methods.matchPassword = async function (enteredPassword) {
//   return await 