
import { Router } from 'express';
import {
  getAlltuti,
  gettutiById,
  posttuti,
  puttuti,
  deletetuti
} from '../controllers/tuti.controller.js';

const tuti = Router();

tuti.get('/', getAlltuti);
tuti.get('/:id', gettutiById);
tuti.post('/', posttuti);
tuti.put('/:id', puttuti);
tuti.delete('/:id', deletetuti);

export default tuti;
