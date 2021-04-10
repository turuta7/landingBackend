import mongoose from 'mongoose';
import app from './server/server.js';

const url = process.env.DB;

const PORT = process.env.PORT || 3005;

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
  console.log('start DB ok');
  app.listen(PORT, () => console.log('server ok'));
}).catch((err) => console.error((err)));