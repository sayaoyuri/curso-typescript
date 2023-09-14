import gamesRepository from "../repository/games-repository";
import { CreateGame, Game } from "./../protocols/game-protocol";

async function getGames() {
  const games = await gamesRepository.getGames();

  return games.rows;
};

async function createGame(game: CreateGame) {
  const isGameExist: boolean = await gameAlreadyExists(game)
  if (isGameExist) {
    throw { message: "Game already exists" }
  }

  await gamesRepository.createGame(game);
}

async function gameAlreadyExists(game: CreateGame) {
  const result: Game[] = await gamesRepository.getGameByTitleAndPlatform(game);

  if(result.length > 0) return true;

  return false;
}

const gamesService = {
  getGames,
  createGame
}

export default gamesService;