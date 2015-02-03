module.exports = {
  attributes: {
      username: { type: String, required: true }
    , bio: { type: String }
    , email: { type: String, required: true }
    , created: { type: Date, required: true, default: Date.now }
  }
}
