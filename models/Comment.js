import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const commentSchema = Schema(
  {
    comment: {
      type: String,
      required: true,
    },
    review: {
      type: Schema.Types.ObjectId,
      ref: 'Review',
    },
    author: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('Comment', commentSchema);
