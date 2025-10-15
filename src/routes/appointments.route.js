const express = require('express');
const router = express.Router();
const controller = require('../controllers/appointments.controller');

// Rutas de citas (appointments)
router.get('/', controller.listAppointments);
router.get('/:id', controller.getAppointmentById);
router.post('/', controller.createAppointment);
router.put('/:id', controller.updateAppointment);
router.delete('/:id', controller.deleteAppointment);

module.exports = router;