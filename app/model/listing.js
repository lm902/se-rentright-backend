module.exports = app => {
  const mongoose = app.mongoose
  const Schema = mongoose.Schema

  const ListingSchema = new Schema({
    publisher: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    title: String,
    images: [String],
    description: String,
    rent: Number,
    location: {
      lat: Number,
      lon: Number,
      address: String,
      city: String,
      state: String,
      zip: String
    },
    category: String
  })

  return mongoose.model('Listing', ListingSchema)
}
