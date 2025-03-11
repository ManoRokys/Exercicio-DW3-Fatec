import mongoose from "mongoose";

const gameSchema = new mongoose.Schema({
  title: String,
  platform: String,
  year: Number,
  price: Number,
});

// Aqui está sendo criado a coleção games no banco de dados
const Game = mongoose.model("Game", gameSchema);

export default Game;
