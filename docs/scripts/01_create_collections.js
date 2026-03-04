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