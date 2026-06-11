{
  "usuario": {
    "usuario_id": "U001",
    "nombre": "Usuario 1",
    "correo": "usuario1@gmail.com",
    "edad": 16
  },
  "formulario": {
    "formulario_id": "F1",
    "nombre": "Encuesta sobre Tecnología y Rendimiento Académico",
    "tema_principal": "Tecnología Educativa",
    "audiencia": "Estudiantes",
    "disponible": true
  },
  "item": {
    "item_id": "I1",
    "pregunta_texto": "¿Consideras que la tecnología mejora tu rendimiento académico?",
    "formato": "opcion_multiple",
    "requerido": true,
    "formulario_id": "F1"
  },
  "alternativas": [
    {
      "alternativa_id": "A1",
      "descripcion": "Sí, mucho",
      "item_id": "I1"
    },
    {
      "alternativa_id": "A2",
      "descripcion": "Sí, un poco",
      "item_id": "I1"
    },
    {
      "alternativa_id": "A3",
      "descripcion": "No influye",
      "item_id": "I1"
    },
    {
      "alternativa_id": "A4",
      "descripcion": "No, empeora mi rendimiento",
      "item_id": "I1"
    }
  ],
  "participacion": {
    "participacion_id": "P001",
    "usuario": "Usuario 1",
    "fecha_envio": "2026-06-10",
    "formulario_id": "F1"
  },
  "seleccion": {
    "seleccion_id": "S001",
    "respuesta_marcada": "Sí, mucho",
    "item_id": "I1",
    "participacion_id": "P001"
  }
}
