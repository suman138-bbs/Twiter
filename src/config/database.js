import mongoose from "mongoose";

const connect = async () => {
  await mongoose.connect(
    "mongodb+srv://sumanbhandari9860:bhairav98@cluster0.ce6nvuw.mongodb.net/?retryWrites=true&w=majority"
  );
};
export default connect;
