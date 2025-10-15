let nextId = 4;
const appointments = [
  { id: 1, patientId: 1, dentistId: 2, date: '2025-10-15', treatment: 'Limpieza' },
  { id: 2, patientId: 2, dentistId: 1, date: '2025-10-18', treatment: 'Ortodoncia — control' },
  { id: 3, patientId: 3, dentistId: 3, date: '2025-10-20', treatment: 'Consulta periodoncia' }
];

module.exports = { appointments, nextIdRef: { get: () => nextId, inc: () => ++nextId } };