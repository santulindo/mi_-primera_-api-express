const { patients, nextIdRef } = require('../data/patientsData');

function listPatients(req, res) {
  // Filtrado por name (query) y paginación opcional
  let results = [...patients];

  if (req.query.name) {
    const q = req.query.name.toLowerCase();
    results = results.filter(p => p.name.toLowerCase().includes(q));
  }

  // Paginación
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || results.length;
  const start = (page - 1) * limit;
  const paged = results.slice(start, start + limit);

  res.json({ page, limit, total: results.length, data: paged });
}

function getPatientById(req, res) {
  const id = parseInt(req.params.id);
  const patient = patients.find(p => p.id === id);
  if (!patient) return res.status(404).json({ error: 'Patient not found' });
  res.json(patient);
}

function createPatient(req, res) {
  const { name, age, phone, medicalHistory } = req.body;
  if (!name || !age || !phone) {
    return res.status(400).json({ error: 'Missing required fields: name, age, phone' });
  }
  const newPatient = { id: nextIdRef.inc(), name, age, phone, medicalHistory: medicalHistory || '' };
  patients.push(newPatient);
  res.status(201).json(newPatient);
}

function updatePatient(req, res) {
  const id = parseInt(req.params.id);
  const patient = patients.find(p => p.id === id);
  if (!patient) return res.status(404).json({ error: 'Patient not found' });

  const { name, age, phone, medicalHistory } = req.body;
  if (!name && !age && !phone && !medicalHistory) {
    return res.status(400).json({ error: 'At least one field must be provided to update' });
  }

  if (name) patient.name = name;
  if (age) patient.age = age;
  if (phone) patient.phone = phone;
  if (medicalHistory) patient.medicalHistory = medicalHistory;

  res.json(patient);
}

function deletePatient(req, res) {
  const id = parseInt(req.params.id);
  const idx = patients.findIndex(p => p.id === id);
  if (idx === -1) return res.status(404).json({ error: 'Patient not found' });
  const removed = patients.splice(idx, 1)[0];
  res.json({ message: 'Patient deleted', removed });
}

module.exports = { listPatients, getPatientById, createPatient, updatePatient, deletePatient };