// ======================================
// SEEDING - USUARIOS
// Base de datos: survey_db
// ======================================

use survey_db

// Limpiar colección de usuarios (opcional)
db.usuarios.deleteMany({})

// =============================
// Insertar 20 Usuarios
// =============================
db.usuarios.insertMany([
  { usuario_id: "U001", nombre: "Usuario 1", correo: "usuario1@gmail.com", edad: 16 },
  { usuario_id: "U002", nombre: "Usuario 2", correo: "usuario2@gmail.com", edad: 17 },
  { usuario_id: "U003", nombre: "Usuario 3", correo: "usuario3@gmail.com", edad: 18 },
  { usuario_id: "U004", nombre: "Usuario 4", correo: "usuario4@gmail.com", edad: 16 },
  { usuario_id: "U005", nombre: "Usuario 5", correo: "usuario5@gmail.com", edad: 17 },
  { usuario_id: "U006", nombre: "Usuario 6", correo: "usuario6@gmail.com", edad: 18 },
  { usuario_id: "U007", nombre: "Usuario 7", correo: "usuario7@gmail.com", edad: 16 },
  { usuario_id: "U008", nombre: "Usuario 8", correo: "usuario8@gmail.com", edad: 17 },
  { usuario_id: "U009", nombre: "Usuario 9", correo: "usuario9@gmail.com", edad: 18 },
  { usuario_id: "U010", nombre: "Usuario 10", correo: "usuario10@gmail.com", edad: 16 },

  { usuario_id: "U011", nombre: "Usuario 11", correo: "usuario11@gmail.com", edad: 17 },
  { usuario_id: "U012", nombre: "Usuario 12", correo: "usuario12@gmail.com", edad: 18 },
  { usuario_id: "U013", nombre: "Usuario 13", correo: "usuario13@gmail.com", edad: 16 },
  { usuario_id: "U014", nombre: "Usuario 14", correo: "usuario14@gmail.com", edad: 17 },
  { usuario_id: "U015", nombre: "Usuario 15", correo: "usuario15@gmail.com", edad: 18 },
  { usuario_id: "U016", nombre: "Usuario 16", correo: "usuario16@gmail.com", edad: 16 },
  { usuario_id: "U017", nombre: "Usuario 17", correo: "usuario17@gmail.com", edad: 17 },
  { usuario_id: "U018", nombre: "Usuario 18", correo: "usuario18@gmail.com", edad: 18 },
  { usuario_id: "U019", nombre: "Usuario 19", correo: "usuario19@gmail.com", edad: 16 },
  { usuario_id: "U020", nombre: "Usuario 20", correo: "usuario20@gmail.com", edad: 17 }
])