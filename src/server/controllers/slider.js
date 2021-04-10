import Slider from '../models/slider.js';

const getAll = async (req, res) => {
  try {
    res.send(await Slider.find());
  } catch (err) {
    res.send(err.message || err);
  }
};

const create = async (req, res) => {
  const {
    title, url
  } = req.body;
  try {
    res.send(await Slider.create({
      title,
      url
    }));
  } catch (err) {
    res.send(err.message || err);
  }
};

const deleteSliderUrl = async (req, res) => {
  const { id } = req.params;
  console.log(id);
  try {
    res.send(await Slider.deleteOne({
      _id: id,
    }));
  } catch (err) {
    res.send(err.message || err);
  }
};

export default {
  create, getAll, deleteSliderUrl,
};
