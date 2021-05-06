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
        required: true,
      },
      description: {
        type: String,
      },
    },
    img: { data: Buffer, contentType: String },
  },
  { timestamps: true },
);

export default mongoose.model('Category', Category);
