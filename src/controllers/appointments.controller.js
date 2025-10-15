const { appointments, nextIdRef } = require('../data/appointmentsData');
const { patients } = require('../data/patientsData');
const { dentists } = require('../data/dentistsData');

function listAppointments(req, res) {
  res.json(appointments);
}

function getAppointmentById(req, res) {
  const id = parseInt(req.params.id);
  const appt = appointments.find(a => a.id === id);
  if (!appt) return res.status(404).json({ error: 'Appointment not found' });
  res.json(appt);
}

function createAppointment(req, res) {
  const { patientId, dentistId, date, treatment } = req.body;
  if (!patientId || !dentistId || !date || !treatment) {
    return res.status(400).json({ error: 'Missing required fields: patientId, dentistId, date, treatment' });
  }

  const patientExists = patients.some(p => p.id === parseInt(patientId));
  const dentistExists = dentists.some(d => d.id === parseInt(dentistId));

  if (!patientExists) return res.status(400).json({ error: 'Referenced patientId does not exist' });
  if (!dentistExists) return res.status(400).json({ error: 'Referenced dentistId does not exist' });

  const newAppt = { id: nextIdRef.inc(), patientId: parseInt(patientId), dentistId: parseInt(dentistId), date, treatment };
  appointments.push(newAppt);
  res.status(201).json(newAppt);
}

function updateAppointment(req, res) {
  const id = parseInt(req.params.id);
  const appt = appointments.find(a => a.id === id);
  if (!appt) return res.status(404).json({ error: 'Appointment not found' });

  const { patientId, dentistId, date, treatment } = req.body;
  if (!patientId && !dentistId && !date && !treatment) {
    return res.status(400).json({ error: 'At least one field must be provided to update' });
  }

  if (patientId) appt.patientId = parseInt(patientId);
  if (dentistId) appt.dentistId = parseInt(dentistId);
  if (date) appt.date = date;
  if (treatment) appt.treatment = treatment;

  res.json(appt);
}

function deleteAppointment(req, res) {
  const id = parseInt(req.params.id);
  const idx = appointments.findIndex(a => a.id === id);
  if (idx === -1) return res.status(404).json({ error: 'Appointment not found' });
  const removed = appointments.splice(idx, 1)[0];
  res.json({ message: 'Appointment deleted', removed });
}

module.exports = { listAppointments, getAppointmentById, createAppointment, updateAppointment, deleteAppointment };