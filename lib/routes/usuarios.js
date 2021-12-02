import express from 'express';

import { verificarAutenticacion, withErrorHandling } from './utils';

const router = express.Router();

import { index, show, create, update, ListByRol } from '../controllers/usuario_controller';

router.get('/', withErrorHandling(index));
router.get('/:id', withErrorHandling(show));
router.post('/', withErrorHandling(create));
router.put('/:id', withErrorHandling(update));
router.get('/ListByRol/:idRol', ListByRol, verificarAutenticacion);
export default router;