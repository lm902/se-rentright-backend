module.exports = app => {
  const mongoose = app.mongoose
  const Schema = mongoose.Schema

  const UserSchema = new Schema({
    username: { type: String },
    password: { type: Buffer }
  })

  return mongoose.model('User', UserSchema)
}
