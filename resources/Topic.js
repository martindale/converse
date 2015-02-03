module.exports = {
  attributes: {
      name: { type: String, required: true, max: 255 }
    , description: { type: String, required: true }
    , _author: { type: ObjectId, required: true, ref: 'Person' }
    , _forum:  { type: ObjectId, required: true, ref: 'Forum' }
    , created: { type: Date, required: true, default: Date.now }
  }
}
