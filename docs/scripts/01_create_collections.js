// Seleccionar base de datos
use survey_db

// Crear colecciones principales
db.createCollection("surveys")
db.createCollection("questions")
db.createCollection("options")
db.createCollection("responses")
db.createCollection("answers")

print("Collections for Survey System created successfully!")