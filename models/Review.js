import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const reviewSchema = Schema(
  {
    name: {
      type: String,
      required: true,
    },
    title: {
        type: String,
        required: true,
      },
    group: {
        type: String,
        required: true,
      },
    tags:String,
    textReview:{
        type:String,
        required: true,
    },
    images: {
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
    timestamps: true,
}
);

export default mongoose.model('Review', reviewSchema);
