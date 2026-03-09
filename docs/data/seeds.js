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
// =============================
// Insertar otros 30 Usuarios
// =============================
db.usuarios.insertMany([
  { usuario_id: "U021", nombre: "Usuario 21", correo: "usuario21@gmail.com", edad: 16 },
  { usuario_id: "U022", nombre: "Usuario 22", correo: "usuario22@gmail.com", edad: 17 },
  { usuario_id: "U023", nombre: "Usuario 23", correo: "usuario23@gmail.com", edad: 18 },
  { usuario_id: "U024", nombre: "Usuario 24", correo: "usuario24@gmail.com", edad: 16 },
  { usuario_id: "U025", nombre: "Usuario 25", correo: "usuario25@gmail.com", edad: 17 },
  { usuario_id: "U026", nombre: "Usuario 26", correo: "usuario26@gmail.com", edad: 18 },
  { usuario_id: "U027", nombre: "Usuario 27", correo: "usuario27@gmail.com", edad: 16 },
  { usuario_id: "U028", nombre: "Usuario 28", correo: "usuario28@gmail.com", edad: 17 },
  { usuario_id: "U029", nombre: "Usuario 29", correo: "usuario29@gmail.com", edad: 18 },
  { usuario_id: "U030", nombre: "Usuario 30", correo: "usuario30@gmail.com", edad: 16 },

  { usuario_id: "U031", nombre: "Usuario 31", correo: "usuario31@gmail.com", edad: 17 },
  { usuario_id: "U032", nombre: "Usuario 32", correo: "usuario32@gmail.com", edad: 18 },
  { usuario_id: "U033", nombre: "Usuario 33", correo: "usuario33@gmail.com", edad: 16 },
  { usuario_id: "U034", nombre: "Usuario 34", correo: "usuario34@gmail.com", edad: 17 },
  { usuario_id: "U035", nombre: "Usuario 35", correo: "usuario35@gmail.com", edad: 18 },
  { usuario_id: "U036", nombre: "Usuario 36", correo: "usuario36@gmail.com", edad: 16 },
  { usuario_id: "U037", nombre: "Usuario 37", correo: "usuario37@gmail.com", edad: 17 },
  { usuario_id: "U038", nombre: "Usuario 38", correo: "usuario38@gmail.com", edad: 18 },
  { usuario_id: "U039", nombre: "Usuario 39", correo: "usuario39@gmail.com", edad: 16 },
  { usuario_id: "U040", nombre: "Usuario 40", correo: "usuario40@gmail.com", edad: 17 },

  { usuario_id: "U041", nombre: "Usuario 41", correo: "usuario41@gmail.com", edad: 18 },
  { usuario_id: "U042", nombre: "Usuario 42", correo: "usuario42@gmail.com", edad: 16 },
  { usuario_id: "U043", nombre: "Usuario 43", correo: "usuario43@gmail.com", edad: 17 },
  { usuario_id: "U044", nombre: "Usuario 44", correo: "usuario44@gmail.com", edad: 18 },
  { usuario_id: "U045", nombre: "Usuario 45", correo: "usuario45@gmail.com", edad: 16 },
  { usuario_id: "U046", nombre: "Usuario 46", correo: "usuario46@gmail.com", edad: 17 },
  { usuario_id: "U047", nombre: "Usuario 47", correo: "usuario47@gmail.com", edad: 18 },
  { usuario_id: "U048", nombre: "Usuario 48", correo: "usuario48@gmail.com", edad: 16 },
  { usuario_id: "U049", nombre: "Usuario 49", correo: "usuario49@gmail.com", edad: 17 },
  { usuario_id: "U050", nombre: "Usuario 50", correo: "usuario50@gmail.com", edad: 18 }
])