import express from "express";

import connect from "./config/database.js";
import Tweet from "./models/tweet.model.js";
import TweetRepository from "./repository/tweet-repository.js";
import Comment from "./models/comment.model.js";
const app = express();

app.listen(8080, async () => {
  await connect();
  //   console.log("connected");
  //   const newTweet = await Tweet({
  //     content: "This my first Tweet From VS CODE",
  //     userEmail: "bhandarisuman986051@gmail.com",
  //   });
  //   newTweet
  //     .save()
  //     .then((savedTweet) => {
  //       console.log("Tweet Saved", savedTweet);
  //     })
  //     .catch((err) => {
  //       console.log("Error", err);
  //     });

  //   const tweet = await Tweet.find({ userEmail: "sumanbhandari9860@gmail.com" });
  //   console.log(tweet);

  const tweetRepo = new TweetRepository();

  //   try {
  //     const newTweetData = {
  //       content: "Developer Let's connect",
  //       userEmail: "bhandari986051@gamil.com",
  //     };

  //     // const newTweet = await tweetRepo.create(newTweetData);

  //     console.log("New Tweet is Created", newTweet);
  //   } catch (error) {
  //     console.log("Error creating tweet", error);
  //   }

  // const findTweet = await Tweet.find({ userEmail: "bhandari986051@gamil.com" });
  // const tweetId = findTweet[0].id;

  const tweet = await tweetRepo.create({
    content:
      "Developer lets have a fun with mongoose and Databases using Cloud and leave a comment",
  });

  console.log(tweet);

  // const comment = await Comment.create({ comment: "This is Good Content" });

  // console.log(tweet);
  // console.log(comment);
  // tweet.comments.push(comment);
  // await tweet.save();
  // console.log(tweet);

  const tweets = await tweetRepo.getAll(4, 1);
  console.log(tweets[0].getContentAndEmail);
});
