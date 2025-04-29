import Game from "../models/Games.js";

class gameService {
  // Game.find().then(games => {
  // //sucesso
  // }).catch(error => {
  // // falha
  // })

  // async / await
  async getAll() {
    try {
      const games = await Game.find();
      return games;
    } catch (error) {
      console.log(error);
    }
  }

  //Função para cadastrar jogos
  async Create(title, platform, year, price) {
    try {
      const newGame = new Game({
        title,
        platform,
        year,
        price,
      });
      // Método do mongoose para cadastrar .save()
      await newGame.save();
    } catch (error) {
      console.log(error);
    }
  }

  // Função para deletar jogos
  async Delete(id) {
    try {
      await Game.findByIdAndDelete(id);
      console.log(`Game com a id: ${id} foi excluido.`);
    } catch (error) {
      console.log(error);
    }
  }

  // Função para alterar jogos
  async Update(id, title, platform, year, price) {
    try {
      await Game.findByIdAndUpdate(id, {
        title,
        platform,
        year,
        price,
      });
      console.log(`Dados do game com a id: ${id} alterados com sucesso.`);
    } catch {
      console.log(error);
    }
  }
  // Função para listar um único jogo
  async getOne(id) {
    try {
      const game = await Game.findOne({_id : id})
      return game
    } catch {
      console.log(error)
    }
  }
}



export default new gameService();
