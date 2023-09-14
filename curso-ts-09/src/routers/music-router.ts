import { Router } from "express";
import musicController from "../controllers/music-controller";
import middleware from "../middlewares/validateSchema-middleware";
import schemas from "../schemas/music-schema";

const musicRouter = Router();

musicRouter.get("/musics", musicController.getMusics);
musicRouter.post("/musics", middleware.validateSchema(schemas.musicSchema), musicController.createMusic); // TODO: validação via Joi

export default musicRouter;