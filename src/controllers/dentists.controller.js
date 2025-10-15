const { dentists, nextIdRef } = require('../data/dentistsData');

function listDentists(req, res) {
  res.json(dentists);
}

function getDentistById(req, res) {
  const id = parseInt(req.params.id);
  const dentist = dentists.find(d => d.id === id);
  if (!dentist) return res.status(404).json({ error: 'Dentist not found' });
  res.json(dentist);
}

function createDentist(req, res) {
  const { name, specialty, license, email } = req.body;
  if (!name || !specialty || !license || !email) {
    return res.status(400).json({ error: 'Missing required fields: name, specialty, license, email' });
  }
  const newDentist = { id: nextIdRef.inc(), name, specialty, license, email };
  dentists.push(newDentist);
  res.status(201).json(newDentist);
}

function updateDentist(req, res) {
  const id = parseInt(req.params.id);
  const dentist = dentists.find(d => d.id === id);
  if (!dentist) return res.status(404).json({ error: 'Dentist not found' });

  const { name, specialty, license, email } = req.body;
  if (!name && !specialty && !license && !email) {
    return res.status(400).json({ error: 'At least one field must be provided to update' });
  }
  if (name) dentist.name = name;
  if (specialty) dentist.specialty = specialty;
  if (license) dentist.license = license;
  if (email) dentist.email = email;

  res.json(dentist);
}

function deleteDentist(req, res) {
  const id = parseInt(req.params.id);
  const idx = dentists.findIndex(d => d.id === id);
  if (idx === -1) return res.status(404).json({ error: 'Dentist not found' });
  const removed = dentists.splice(idx, 1)[0];
  res.json({ message: 'Dentist deleted', removed });
}

module.exports = { listDentists, getDentistById, createDentist, updateDentist, deleteDentist };