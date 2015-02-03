module.exports = {
  attributes: {
      name: { type: String, required: true, max: 255 }
    , description: { type: String, max: 1024 }
    , created: { type: Date, required: true, default: Date.now }
    , _creator: { type: ObjectId, required: true, ref: 'Person' }
    , _owner: { type: ObjectId, required: true, ref: 'Person' }
    , _moderators: [ { type: ObjectId, ref: 'Person' }]
  }
}
