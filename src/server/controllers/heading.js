import Heading from '../models/heading.js';

const getAll = async (req, res) => {
  try {
    res.send(await Heading.find());
  } catch (err) {
    res.send(err.message || err);
  }
};

const getOne = async (req, res) => {
  const { id } = req.params;
  console.log(id);
  try {
    res.send(
      await Heading.findOne({
        _id: id,
      }),
    );
  } catch (err) {
    res.send(err.message || err);
  }
};

const create = async (req, res) => {
  const { textRu, textEn, textUa } = req.body;
  try {
    res.send(
      await Heading.create({
        textRu,
        textEn,
        textUa,
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
      await Heading.deleteOne({
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
      await Heading.updateOne(
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
