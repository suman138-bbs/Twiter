import Tweet from "../models/tweet.model.js";

class TweetRepository {
  async create(data) {
    try {
      const tweet = await Tweet.create(data);
      return tweet;
    } catch (error) {
      console.log(error);
    }
  }

  async get(id) {
    try {
      const tweet = await Tweet.findById(id);
      return tweet;
    } catch (error) {
      console.log(error);
    }
  }

  async update(id, data) {
    try {
      const tweet = await Tweet.findByIdAndUpdate(id, data, { new: true });
      return tweet;
    } catch (error) {
      console.log(error);
    }
  }

  async delete(id) {
    try {
      const tweet = await Tweet.findByIdAndRemove(id);
      return tweet;
    } catch (error) {
      console.log(error);
    }
  }

  async getAll(offSet, limit) {
    try {
      const tweet = await Tweet.find()

        .skip(offSet)
        .limit(limit);
      return tweet;
    } catch (error) {
      console.log(error);
    }
  }
}

export default TweetRepository;
