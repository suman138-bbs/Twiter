import mongoose from "mongoose";

const tweetSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
      max: [250, "Tweet can't be more than 250 characters"],
    },
    hashtags: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Hashtag",
    },
  },
  { timestamps: true }
);

const Tweet = mongoose.model("Tweet", tweetSchema);

export default Tweet;

///////////////////////////////////////

// tweetSchema.virtual("getContentAndEmail").get(function () {
//   return `${this.content} Created By ${this.userEmail}`;
// });

// tweetSchema.pre("save", function (next) {
//   this.content = this.content + "Learning Hooks In mongoose";
//   next();
// });
