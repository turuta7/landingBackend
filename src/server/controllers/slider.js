import Slider from '../models/slider.js';

const getOne = async (req, res) => {
  const { id } = req.params;
  console.log(id);
  try {
    res.send(
      await Slider.findOne({
        _id: id,
      }),
    );
  } catch (err) {
    res.send(err.message || err);
  }
};

const getAll = async (req, res) => {
  try {
    res.send(await Slider.find());
  } catch (err) {
    res.send(err.message || err);
  }
};

const create = async (req, res) => {
  const { title, url } = req.body;
  try {
    res.send(
      await Slider.create({
        title,
        url,
      }),
    );
  } catch (err) {
    res.send(err.message || err);
  }
};

const remove = async (req, res) => {
  const { id } = req.params;
  console.log('id', id);
  try {
    res.send(
      await Slider.deleteOne({
        _id: id,
      }),
    );
  } catch (err) {
    res.send(err.message || err);
  }
};

const update = async (req, res) => {
  const { id } = req.params;
  console.log(id);
  try {
    res.send(
      await Slider.updateOne(
        {
          _id: id,
        },
        req.body,
      ),
    );
  } catch (err) {
    res.send(err.message || err);
  }
};

export default {
  create,
  getAll,
  remove,
  update,
  getOne,
};
