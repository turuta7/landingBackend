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
    },
    SEO: {
      title: {
        type: String,

      },
      description: {
        type: String,
      },
    },
    img: { type: Buffer, contentType: String, required: true },
  },
  { timestamps: true },
);

export default mongoose.model('Category', Category);
