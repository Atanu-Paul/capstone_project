const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });
    console.log(`MONGODB IS UP @ MONGO_ATLAS : " ${conn.connection.host} "`);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

// //Local connection -MongoDB-Compass
// const connectDB = async () => {
//   try {
//     const conn = await mongoose.connect(process.env.MONGO_LOCAL_URI, {
//       useNewUrlParser: true,
//       useCreateIndex: true,
//       useUnifiedTopology: true,
//     });
//     console.log(`MongoDB is up @ mongoLocal :${conn.connection.host}`);
//   } catch (error) {
//     console.error(error);
//     process.exit(1);
//   }
// };

module.exports = connectDB;
