const express = require('express');
const router = express.Router();
const controller = require('../controllers/dentists.controller');

router.get('/', controller.listDentists);
router.get('/:id', controller.getDentistById);
router.post('/', controller.createDentist);
router.put('/:id', controller.updateDentist);
router.delete('/:id', controller.deleteDentist);

module.exports = router;