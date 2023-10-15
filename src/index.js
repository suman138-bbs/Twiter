import express from "express";
import connect from "./config/database.js";
import Tweet from "./models/tweet.model.js";
const app = express();

app.listen(8080, async () => {
  console.log("Server running");
  await connect();
  console.log("connected");
  const newTweet = await Tweet({
    content: "This my first Tweet From VS CODE",
    userEmail: "bhandarisuman986051@gmail.com",
  });
  newTweet
    .save()
    .then((savedTweet) => {
      console.log("Tweet Saved", savedTweet);
    })
    .catch((err) => {
      console.log("Error", err);
    });

  const tweet = await Tweet.find({ userEmail: "sumanbhandari9860@gmail.com" });
  console.log(tweet);
});

// 1 hours  12 minutes
