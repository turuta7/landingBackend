import Category from '../models/category.js';

const getAll = async (req, res) => {
  try {
    const returnResult = await await Category.find();
    res.send(returnResult);
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
  try {
    if (!req.file.buffer || !req.body) {
      throw new Error('error buffer and data');
    }
    console.log('++++++++++++++++++++++++');
    const {
      title, name, link, description,
    } = req.body;

    res.send(
      await Category.create({
        name,
        link,
        SEO: {
          description,
          title,
        },
        img: req.file.buffer || undefined,
      }),
    );
  } catch (err) {
    res.send(err.message || err || 'error');
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
  console.log('----------------------');
  const { id } = req.params;
  const {
    title, name, link, description,
  } = req.body;

  try {
    const category = await Category.findOne({
      _id: id,
    });
    let photo;
    if (req.file) {
      photo = req.file.buffer;
    }

    res.send(
      await Category.findByIdAndUpdate(
        {
          _id: id,
        },
        {
          name: name || category.name,
          link: link || category.link,
          SEO: {
            description: description || category.SEO.description,
            title: title || category.SEO.title,
          },
          img: photo || category.img,
        },
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
