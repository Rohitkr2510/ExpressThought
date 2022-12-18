const mongoose = require("mongoose");

const url =
  "mongodb://user:user@ac-xvu5zqx-shard-00-00.ms4dggc.mongodb.net:27017,ac-xvu5zqx-shard-00-01.ms4dggc.mongodb.net:27017,ac-xvu5zqx-shard-00-02.ms4dggc.mongodb.net:27017/stackoverflow?ssl=true&replicaSet=atlas-jk90uw-shard-0&authSource=admin&retryWrites=true&w=majority";

module.exports.connect = () => {
  mongoose
    .connect(url)
    .then((res) => console.log("MongoDB is connected successfully"))
    .catch((err) => console.log("Error", err));
};
