import mongoose from 'mongoose';

const {Schema} = mongoose;

const Slider = new Schema({
    title: {
        type: String,
        required: true,
    },
    url: {
        type: String,
        required: true,
        unique: true
    },
}, {timestamps: true});

export default mongoose.model('Slider', Slider);
