import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.ATLAS_URI, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
      useFindAndModify: false
    });

    console.log(`Connection established successfully to MongoDB database: ${conn.connection.host}`);

  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

export default connectDB