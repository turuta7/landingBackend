import Category from '../models/category.js';

const getAll = async (req, res) => {
  try {
    res.send(await Category.find());
  } catch (err) {
    res.send(err.message || err);
  }
};

const getOne = async (req, res) => {
  const { id } = req.params;
  console.log(id);
  try {
    res.send(
      await Category.findOne({
        _id: id,
      }),
    );
  } catch (err) {
    res.send(err.message || err);
  }
};

const create = async (req, res) => {
  const { name } = req.body;
  try {
    res.send(
      await Category.create({
        name,
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
      await Category.deleteOne({
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
      await Category.updateOne(
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
