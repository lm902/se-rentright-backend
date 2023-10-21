module.exports = app => {
  const mongoose = app.mongoose
  const Schema = mongoose.Schema

  const UserSchema = new Schema({
    username: String,
    password: Buffer,
    profilePicture: { type: String, required: false },
    phone: { type: String, required: false },
    email: { type: String, required: false }
  })

  return mongoose.model('User', UserSchema)
}
