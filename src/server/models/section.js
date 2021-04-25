import mongoose from 'mongoose';

const { Schema } = mongoose;

const Section = new Schema(
  {
    textRu: {
      type: String,
      required: true,
    },
    textEn: {
      type: String,
    },
    textUa: {
      type: String,
    },
  },
  { timestamps: true },
);

export default mongoose.model('Section', Section);
