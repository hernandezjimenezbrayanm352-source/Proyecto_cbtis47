// ======================================
// SEEDING COMPLETO - FORMULARIO TECNOLOGÍA
// Base de datos: survey_db
// ======================================

use survey_db

// Limpiar colecciones (opcional)
db.respuestas_detalle.deleteMany({})
db.respuestas.deleteMany({})
db.alternativas.deleteMany({})
db.items.deleteMany({})
db.formularios.deleteMany({})


// =============================
// Insertar Formulario
// =============================
db.formularios.insertOne({
  formulario_id: "F1",
  titulo: "Uso de la tecnología en el rendimiento académico",
  tema: "Tecnología y educación",
  grado: "Secundaria",
  activo: true
})


// =============================
// Insertar Items (Preguntas)
// =============================
db.items.insertMany([
{
  item_id: "I1",
  pregunta_texto: "¿Consideras que la tecnología mejora tu rendimiento académico?",
  formato: "opcion_multiple",
  requerido: true,
  formulario_id: "F1"
},
{
  item_id: "I2",
  pregunta_texto: "¿Cuántas horas al día utilizas dispositivos tecnológicos para estudiar?",
  formato: "opcion_multiple",
  requerido: true,
  formulario_id: "F1"
},
{
  item_id: "I3",
  pregunta_texto: "¿Qué herramienta tecnológica utilizas más para realizar tareas escolares?",
  formato: "opcion_multiple",
  requerido: true,
  formulario_id: "F1"
},
{
  item_id: "I4",
  pregunta_texto: "¿Has tomado clases en línea como apoyo a tus estudios?",
  formato: "opcion_multiple",
  requerido: true,
  formulario_id: "F1"
},
{
  item_id: "I5",
  pregunta_texto: "¿Crees que el uso excesivo del celular afecta tu concentración al estudiar?",
  formato: "opcion_multiple",
  requerido: true,
  formulario_id: "F1"
},
{
  item_id: "I6",
  pregunta_texto: "¿Qué tipo de contenido digital te ayuda más a comprender un tema?",
  formato: "opcion_multiple",
  requerido: true,
  formulario_id: "F1"
},
{
  item_id: "I7",
  pregunta_texto: "¿Prefieres estudiar con recursos digitales o con libros físicos?",
  formato: "opcion_multiple",
  requerido: true,
  formulario_id: "F1"
},
{
  item_id: "I8",
  pregunta_texto: "¿La tecnología facilita la comunicación con tus profesores?",
  formato: "opcion_multiple",
  requerido: true,
  formulario_id: "F1"
}
])


// =============================
// Insertar Alternativas
// =============================
db.alternativas.insertMany([

// Pregunta 1
{ alternativa_id: "A1", descripcion: "Sí, mucho", item_id: "I1" },
{ alternativa_id: "A2", descripcion: "Sí, un poco", item_id: "I1" },
{ alternativa_id: "A3", descripcion: "No influye", item_id: "I1" },
{ alternativa_id: "A4", descripcion: "No, empeora mi rendimiento", item_id: "I1" },

// Pregunta 2
{ alternativa_id: "A5", descripcion: "Menos de 1 hora", item_id: "I2" },
{ alternativa_id: "A6", descripcion: "1 a 2 horas", item_id: "I2" },
{ alternativa_id: "A7", descripcion: "3 a 4 horas", item_id: "I2" },
{ alternativa_id: "A8", descripcion: "Más de 4 horas", item_id: "I2" },

// Pregunta 3
{ alternativa_id: "A9", descripcion: "Computadora", item_id: "I3" },
{ alternativa_id: "A10", descripcion: "Celular", item_id: "I3" },
{ alternativa_id: "A11", descripcion: "Tablet", item_id: "I3" },
{ alternativa_id: "A12", descripcion: "Plataformas educativas", item_id: "I3" },

// Pregunta 4
{ alternativa_id: "A13", descripcion: "Sí", item_id: "I4" },
{ alternativa_id: "A14", descripcion: "No", item_id: "I4" },

// Pregunta 5
{ alternativa_id: "A15", descripcion: "Sí, mucho", item_id: "I5" },
{ alternativa_id: "A16", descripcion: "Sí, un poco", item_id: "I5" },
{ alternativa_id: "A17", descripcion: "No afecta", item_id: "I5" },

// Pregunta 6
{ alternativa_id: "A18", descripcion: "Videos educativos", item_id: "I6" },
{ alternativa_id: "A19", descripcion: "Presentaciones digitales", item_id: "I6" },
{ alternativa_id: "A20", descripcion: "Aplicaciones interactivas", item_id: "I6" },
{ alternativa_id: "A21", descripcion: "Libros digitales", item_id: "I6" },

// Pregunta 7
{ alternativa_id: "A22", descripcion: "Recursos digitales", item_id: "I7" },
{ alternativa_id: "A23", descripcion: "Libros físicos", item_id: "I7" },
{ alternativa_id: "A24", descripcion: "Ambos", item_id: "I7" },

// Pregunta 8
{ alternativa_id: "A25", descripcion: "Sí, facilita mucho", item_id: "I8" },
{ alternativa_id: "A26", descripcion: "Sí, un poco", item_id: "I8" },
{ alternativa_id: "A27", descripcion: "No facilita", item_id: "I8" }

])


// ======================================
// GENERAR 50 RESPUESTAS AUTOMÁTICAS
// ======================================

const respuestas = []
const detalles = []

for (let i = 1; i <= 50; i++) {

  const responseId = "R" + i

  respuestas.push({
    respuesta_id: responseId,
    nombre_estudiante: "Estudiante " + i,
    fecha_envio: new Date(),
    formulario_id: "F1"
  })

  // Selecciones aleatorias por pregunta
  const opciones = {
    I1: ["A1","A2","A3","A4"],
    I2: ["A5","A6","A7","A8"],
    I3: ["A9","A10","A11","A12"],
    I4: ["A13","A14"],
    I5: ["A15","A16","A17"],
    I6: ["A18","A19","A20","A21"],
    I7: ["A22","A23","A24"],
    I8: ["A25","A26","A27"]
  }

  Object.keys(opciones).forEach((item) => {

    const lista = opciones[item]
    const seleccion = lista[Math.floor(Math.random() * lista.length)]

    detalles.push({
      detalle_id: "D" + Math.random().toString(36).substring(2,9),
      item_id: item,
      alternativa_id: seleccion,
      respuesta_id: responseId
    })

  })

}

db.respuestas.insertMany(respuestas)
db.respuestas_detalle.insertMany(detalles)

print("Se insertaron 50 respuestas correctamente!")// ======================================
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
// ======================================
// INSERTAR 50 RESPUESTAS
// ======================================

const responses = []
const answers = []

for (let i = 1; i <= 50; i++) {

  const responseId = "R" + i
  const answer1Id = "A" + (i * 2 - 1)
  const answer2Id = "A" + (i * 2)

  // Generar respuestas correctas o incorrectas aleatorias
  const q1Correct = Math.random() > 0.3
  const q2Correct = Math.random() > 0.3

  const totalScore =
    (q1Correct ? 10 : 0) +
    (q2Correct ? 10 : 0)

  responses.push({
    response_id: responseId,
    nombre_alumno: "Alumno " + i,
    fecha_entrega: new Date(),
    calificacion_total: totalScore,
    survey_id: "S1"
  })

  answers.push({
    answer_id: answer1Id,
    opcion_seleccionada: q1Correct ? "8" : "6",
    es_correcta: q1Correct,
    question_id: "Q1",
    response_id: responseId
  })

  answers.push({
    answer_id: answer2Id,
    opcion_seleccionada: q2Correct ? "5" : "3",
    es_correcta: q2Correct,
    question_id: "Q2",
    response_id: responseId
  })
}

db.responses.insertMany(responses)
db.answers.insertMany(answers)

print("50 responses inserted successfully!")