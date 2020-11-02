const { model, Schema } = require("mongoose");

// здесь мы не описываем дом requirements, они будут описаны ан уровне graphql
const userSchema = new Schema({
  username: String,
  password: String,
  email: String,
  createdAt: String,
});

module.exports = model("User", userSchema);
