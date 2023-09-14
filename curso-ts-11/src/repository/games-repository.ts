import db from "../database/db-connection";
import { CreateGame, Game } from "../protocols/game-protocol";

async function getGames() {
  return await db.query<Game>(`SELECT * FROM games;`);
};

async function createGame(game: CreateGame) {
  await db.query<CreateGame>(`
    INSERT INTO games (title, platform) VALUES ($1, $2);
  `, [game.title, game.platform]);
};

async function getGameByTitleAndPlatform(game: CreateGame) {
  const gameResult = await db.query<Game>(`
    SELECT * FROM games WHERE title=$1 AND platform=$2;
  `, [game.title, game.platform]);

  console.log(gameResult.rows);

  return gameResult.rows;
};

const gamesRepository = {
  getGames,
  getGameByTitleAndPlatform,
  createGame
};

export default gamesRepository;