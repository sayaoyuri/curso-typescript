import { NextFunction, Request, Response } from "express"
import Joi from "joi"

const validateSchema = (schema: Joi.Schema) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const { error } = schema.validate( req.body, { abortEarly: false } );
    
    if(error) return res.status(422).send(error.details.map(e => e.message));

    next();
  };
};

const middleware = {
  validateSchema
};

export default middleware