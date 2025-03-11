import gameService from "../services/gameService.js";
import { ObjectId } from "mongodb";

// Função para listar os jogos
const getAllGames = async (req, res) => {
  try {
    const games = await gameService.getAll();
    // Requisição feita com sucesso - Cod. 200 (OK)
    res.status(200).json({ games: games });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Erro interno do servidor." });
  }
};

// Função para cadastrar jogos
const createGame = async (req, res) => {
  try {
    // Capturando valores
    const { title, platform, year, price } = req.body;
    // Cadastrando no banco
    await gameService.Create(title, platform, year, price);
    res.sendStatus(201); // Código 201 (CREATED)
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Erro interno do servudor." });
  }
};

// Função para deletar jogos
const deleteGame = async (req, res) => {
  try {
    if (ObjectId.isValid(req.params.id)) {
      const id = req.params.id;
      gameService.Delete(id);
      res.sendStatus(204); // Codigo 204 (NO CONTENT)
    } else {
      res.sendStatus(400); // Código 400 (BAD REQUEST)
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Erro interno do servidor." });
  }
};

export default { getAllGames, createGame, deleteGame };
