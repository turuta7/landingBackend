import Category from '../models/category.js';

const getAll = async (req, res) => {
  try {
    // const ress = await (await Category.find({}, { img: 1, _id: 0 }))[2];
    const ress = await (await Category.find());
    console.log(ress);
    res.send(ress);

    // res.send(await Category.find());
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
  // console.log('fff');
  // console.log('fff', req.file.buffer);
  // console.log(req.body.text);

  console.log(req.file.buffer);
  console.log(req.body);
  try {
    if (!req.file.buffer || !req.body) {
      throw new Error('error buffer and data');
    }
    console.log('++++++++++++++++++++++++');
    const {
      title, name, link, SEO,
    } = req.body;
    console.log('ddd', SEO[0].title);

    res.send(
      await Category.create({
        name,
        title,
        link,
        SEO: {
          description: SEO[0].description,
          title: SEO[0].title,
        },
        img: req.file.buffer,
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
  const { id } = req.params;
  console.log(id, 'body', req.body);
  // console.log(await Category.find({ _id: id }));
  try {
    res.send(
      await Category.updateOne(
        {
          _id: id,
        },
        {
          img: req.file.buffer,
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
