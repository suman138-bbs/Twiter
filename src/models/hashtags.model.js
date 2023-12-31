import mongoose from "mongoose";

const hashTagSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    tweets: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Tweet",
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Hashtag = mongoose.model("Hashtag", hashTagSchema);

export default Hashtag;

//1 h 8 min
