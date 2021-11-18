import express from 'express';

import carreras from './carreras';

import rol from './roles'

const router = express.Router();

router.use('/carreras', carreras);
router.use('/rol', rol);

export default router;
