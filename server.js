const mongoose = require('mongoose');
const dotenv = require('dotenv');

process.on('uncaughtException', err => {
  console.log('UNHANDLED REJECTION Shutting down....');
  console.log(err.name, err.message);
  process.exit(1);
});

dotenv.config({ path: './config.env' });
const app = require('./app');

// console.log(app.get('env'));
//console.log(process.env);
const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  })
  .then(() => console.log('Connection is successful'));

const port = process.env.PORT || 8000;
const server = app.listen(port, () => {
  console.log(`App is running at port no ${port}.`);
});

process.on('unhandledRejection', err => {
  console.log('UNHANDLED REJECTION Shutting down....');
  console.log(err);
  server.close(() => process.exit(1));
});
