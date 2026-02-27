// ======================================
// SEEDING COMPLETO - SURVEY SYSTEM
// Base de datos: survey_db
// ======================================

use survey_db

// Limpiar colecciones (opcional para pruebas)
db.answers.deleteMany({})
db.responses.deleteMany({})
db.options.deleteMany({})
db.questions.deleteMany({})
db.surveys.deleteMany({})


// =============================
// Insertar Survey
// =============================
db.surveys.insertOne({
  survey_id: "S1",
  titulo: "Examen de Matemáticas",
  tema: "Álgebra",
  grado: "3° Secundaria",
  activa: true
})


// =============================
// Insertar Questions
// =============================
db.questions.insertMany([
  {
    question_id: "Q1",
    enunciado: "¿Cuánto es 5 + 3?",
    tipo: "multiple_choice",
    puntos: 10,
    obligatoria: true,
    survey_id: "S1"
  },
  {
    question_id: "Q2",
    enunciado: "¿Cuánto es 9 - 4?",
    tipo: "multiple_choice",
    puntos: 10,
    obligatoria: true,
    survey_id: "S1"
  }
])


// =============================
// Insertar Options
// =============================
db.options.insertMany([
  // Opciones pregunta 1
  {
    option_id: "O1",
    texto: "6",
    es_correcta: false,
    question_id: "Q1"
  },
  {
    option_id: "O2",
    texto: "8",
    es_correcta: true,
    question_id: "Q1"
  },
  {
    option_id: "O3",
    texto: "9",
    es_correcta: false,
    question_id: "Q1"
  },

  // Opciones pregunta 2
  {
    option_id: "O4",
    texto: "3",
    es_correcta: false,
    question_id: "Q2"
  },
  {
    option_id: "O5",
    texto: "5",
    es_correcta: true,
    question_id: "Q2"
  },
  {
    option_id: "O6",
    texto: "6",
    es_correcta: false,
    question_id: "Q2"
  }
])


// =============================
// Insertar Response
// =============================
db.responses.insertOne({
  response_id: "R1",
  nombre_alumno: "Juan Pérez",
  fecha_entrega: new Date(),
  calificacion_total: 20,
  survey_id: "S1"
})


// =============================
// Insertar Answers
// =============================
db.answers.insertMany([
  {
    answer_id: "A1",
    opcion_seleccionada: "8",
    es_correcta: true,
    question_id: "Q1",
    response_id: "R1"
  },
  {
    answer_id: "A2",
    opcion_seleccionada: "5",
    es_correcta: true,
    question_id: "Q2",
    response_id: "R1"
  }
])

print("Seeding completed successfully!")