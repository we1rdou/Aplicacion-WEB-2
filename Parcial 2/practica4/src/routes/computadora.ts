import { Router} from 'express';
import {getAllTablas} from '../controllers/computadoraController';

const router = Router();

router.get('/', getAllTablas);


export default router;