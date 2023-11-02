module.exports = app => {
  const mongoose = app.mongoose
  const Schema = mongoose.Schema

  const UserSchema = new Schema({
    username: { type: String, required: false },
    password: Buffer,
    profilePicture: { type: String, required: false },
    phone: { type: String, required: false },
    email: String
  })

  return mongoose.model('User', UserSchema)
}
