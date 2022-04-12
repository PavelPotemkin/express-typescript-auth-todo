import {body, param} from "express-validator";
import {Router} from "express";

import basketController from "../controller/basket.controller";

// @ts-ignore
const router = new Router();
router.post('/',
  body('id').isNumeric(),
  basketController.add
);
router.get('/', basketController.getAll);
router.delete('/:id',
    param('id').isString(),
    basketController.delete
);

export default router