// import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

import User from '../models/user.js';

dotenv.config();

const jwtSecret = process.env.JWTSECRET;

const singIn = async (req, res) => {
  const { email, password } = req.body;
  try {
    const candidate = await User.findOne({ email });
    if (!candidate) {
      res.status(401).send({ message: 'User does not exist!' });
    }
    const isValid = bcrypt.compareSync(password, candidate.password);
    if (isValid) {
      // eslint-disable-next-line no-underscore-dangle
      const token = jwt.sign(candidate._id.toString(), jwtSecret);
      console.log(token);
      res.send({ token });
    } else {
      res.status(401).send({ message: 'Invalid password' });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export default { singIn };
