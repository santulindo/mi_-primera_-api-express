const express = require('express');
const router = express.Router();
const controller = require('../controllers/patients.controller');

// GET /api/patients  (opcional: ?name=...&page=1&limit=10)
router.get('/', controller.listPatients);

// GET /api/patients/:id
router.get('/:id', controller.getPatientById);

// POST /api/patients
router.post('/', controller.createPatient);

// PUT /api/patients/:id
router.put('/:id', controller.updatePatient);

// DELETE /api/patients/:id
router.delete('/:id', controller.deletePatient);

module.exports = router;