const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Rutas modularizadas
const patientsRoutes = require('./src/routes/patients.routes');
// const dentistsRoutes = require('./src/routes/dentists.routes');
// const appointmentsRoutes = require('./src/routes/appointments.routes');

app.use('/api/patients', patientsRoutes);
// app.use('/api/dentists', dentistsRoutes);
// app.use('/api/appointments', appointmentsRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));