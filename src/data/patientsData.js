let nextId = 4;
const patients = [
  { id: 1, name: 'Juan Pérez', age: 28, phone: '+57 300 111 2222', medicalHistory: 'Ninguna relevante' },
  { id: 2, name: 'María López', age: 34, phone: '+57 300 333 4444', medicalHistory: 'Alergia a la penicilina' },
  { id: 3, name: 'Pedro García', age: 45, phone: '+57 300 555 6666', medicalHistory: 'Hipertensión' }
];

module.exports = { patients, nextIdRef: { get: () => nextId, inc: () => ++nextId } };