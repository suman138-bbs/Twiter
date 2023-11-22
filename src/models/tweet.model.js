import mongoose from "mongoose";

const tweetSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },
    userEmail: {
      type: String,
    },
    comments: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment",
      },
    ],
  },
  { timestamps: true }
);

tweetSchema.virtual("getContentAndEmail").get(function () {
  return `${this.content} Created By ${this.userEmail}`;
});
const Tweet = mongoose.model("Tweet", tweetSchema);

export default Tweet;
