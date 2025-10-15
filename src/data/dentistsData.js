let nextId = 4;
const dentists = [
  { id: 1, name: 'Dra. Carla Ríos', specialty: 'Ortodoncia', license: 'OD-12345', email: 'carla.rios@clinicadental.com' },
  { id: 2, name: 'Dr. Andrés Molina', specialty: 'Endodoncia', license: 'ED-54321', email: 'andres.molina@clinicadental.com' },
  { id: 3, name: 'Dra. Lucía Pérez', specialty: 'Periodoncia', license: 'PD-67890', email: 'lucia.perez@clinicadental.com' }
];

module.exports = { dentists, nextIdRef: { get: () => nextId, inc: () => ++nextId } };