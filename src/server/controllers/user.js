import bcrypt from 'bcrypt';
import User from '../models/user.js';

const saltRounds = 10;

const getAllUser = async (req, res) => {
  try {
    res.send(await User.find());
  } catch (err) {
    res.status(401).send({ message: err.message || err });
  }
};

const createUser = async (req, res) => {
  const {
    email, password,
  } = req.body;

  try {
    const newHash = await bcrypt.hash(password, saltRounds);
    console.log(newHash);
    res.send(await User.create({
      email,
      password: newHash,
    }));
  } catch (err) {
    res.status(401).send({ message: err.message || err });
  }
};

const removeUser = async (req, res) => {
  const { id } = req.params;
  console.log(id);
  try {
    res.send(await User.deleteOne({
      _id: id,
    }));
  } catch (err) {
    res.status(401).send({ message: err.message || err });
  }
};

const updateUser = async (req, res) => {
  const { id } = req.params;
  if (req.body.password) {
    const newHash = await bcrypt.hash(req.body.password, saltRounds);
    req.body.password = newHash;
  }
  try {
    res.send(await User.updateOne({
      _id: id,
    }, req.body));
  } catch (err) {
    res.status(401).send({ message: err.message || err });
  }
};

export default {
  createUser, getAllUser, removeUser, updateUser,
};
