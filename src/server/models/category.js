import mongoose from 'mongoose';

const { Schema } = mongoose;

const Category = new Schema(
  {
    name: {
      type: String,
      unique: true,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
    SEO: {
      title: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
    },
    img: { type: Buffer, contentType: String, required: true },
  },
  { timestamps: true },
);

export default mongoose.model('Category', Category);
