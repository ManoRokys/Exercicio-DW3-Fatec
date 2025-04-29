import gameService from "../services/gameService.js";
import { ObjectId } from "mongodb";
 
// função para listar jogos
const getAllGames = async (req, res) => {
  try {
    const games = await gameService.getAll();
    //REQUISIÇÃO feita com sucesso - cod 200 (ok)
    res.status(200).json({ games: games });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Erro interno do Servidor." });
  }
};
 
// função para cadastrar jogos
const createGame = async (req, res) => {
  try {
    //const title = req.body.title
 
    //desestruturação => forma mais rapida de capturar valor e atribuir variaveis
    //capturando valores
    const { title, year, price, descriptions } = req.body;
    //cadastrando no banco
    await gameService.Create(title, year, price, descriptions);
    res.sendStatus(201); // Código 201 (created)
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Erro interno do Servidor" });
  }
};
 
//Função para deletar jogos
const deleteGame = async (req, res) => {
  try {
    if (ObjectId.isValid(req.params.id)) {
      const id = req.params.id;
      gameService.Delete(id);
      res.sendStatus(204); //código 204 (no content)
    } else {
      res.sendStatus(400); //codigo 400 (bad request)
      //requisiçao mal formada
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Erro interno do servidor." });
  }
};
 
//Função para alterar um jogo
const updateGame = async (req, res) => {
  try {
    if (ObjectId.isValid(req.params.id)) {
      const id = req.params.id;
      //Desestruturação
      const { title, year, price, descriptions } = req.body;
      gameService.Update(id, title, year, price, descriptions);
      res.sendStatus(200); // código 200 (OK) Requisição bem sucedida
    } else {
      res.sendStatus(400); // codigo de requisição mal formada (BAD REQUEST)
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Erro interno do servidor." });
  }
};
 
//Função para buscar um unico jogo
const getOneGame = async (req, res) => {
  try {
    if (ObjectId.isValid(req.params.id)) {
      const id = req.params.id;
      const game = await gameService.getOne(id);
      if (!game) {
        res.sendStatus(404); //NOT FOUND
      } else {
        res.status(200).json({ game });
      }
    } else {
      res.sendStatus(400); // 400 bad request
    }
  } catch (error) {
    console.log(error);
    res.sendStatus(500); // erro interno do servidor
  }
};
 
export default { getAllGames, createGame, deleteGame, updateGame, getOneGame };