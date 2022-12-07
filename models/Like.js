import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const likeSchema = Schema(
  {
    review: {
      type: Schema.Types.ObjectId,
      ref: 'Review',
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('Like', likeSchema);
