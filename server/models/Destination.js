const { Schema, model, Types: { ObjectId } } = require('mongoose');

const destinationSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      minLength: [6, 'Name should be minimum 5 characters long'],
    },
    description: {
      type: String,
      required: true,
      minLength: [100, 'Description should be minimum 100 characters long'],
      maxLength: [300, 'Description should be maximum 300 characters long'],
    },
    likes: {
      count: {
        type: Number,
        default: 0,
      },
      users: [{ type: ObjectId, ref: 'User' }],
    },
    comments: [
      {
        owner: { type: ObjectId, ref: 'Comment' },
        text: { type: String },
      },
    ],
    owner: { type: ObjectId, ref: 'User' },
  }
);

destinationSchema.index(
  { name: 1 },
  {
    unique: true,
    collation: {
      locale: 'en',
      strength: 2,
    },
  }
);

module.exports = model('Destination', destinationSchema);