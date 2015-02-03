module.exports = {
  attributes: {
      _author: { type: ObjectId, required: true, ref: 'Person' }
    , _topic: { type: ObjectId, required: true }
    , created: { type: Date, required: true, default: Date.now }
    , updated: { type: Date }
    , content: { type: String, min: 1 }
  }
}
