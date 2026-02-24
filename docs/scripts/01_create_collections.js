// Seleccionar base de datos
use survey_db


// =============================
// Crear colección: surveys
// =============================
db.createCollection("surveys", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["survey_id", "titulo", "tema", "grado", "activa"],
      properties: {
        survey_id: { bsonType: "string" },
        titulo: { bsonType: "string" },
        tema: { bsonType: "string" },
        grado: { bsonType: "string" },
        activa: { bsonType: "bool" }
      }
    }
  }
})


// =============================
// Crear colección: questions
// =============================
db.createCollection("questions", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["question_id", "enunciado", "tipo", "puntos", "obligatoria", "survey_id"],
      properties: {
        question_id: { bsonType: "string" },
        enunciado: { bsonType: "string" },
        tipo: { bsonType: "string" },
        puntos: { bsonType: "int" },
        obligatoria: { bsonType: "bool" },
        survey_id: { bsonType: "string" }
      }
    }
  }
})


// =============================
// Crear colección: options
// =============================
db.createCollection("options", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["option_id", "texto", "es_correcta", "question_id"],
      properties: {
        option_id: { bsonType: "string" },
        texto: { bsonType: "string" },
        es_correcta: { bsonType: "bool" },
        question_id: { bsonType: "string" }
      }
    }
  }
})


// =============================
// Crear colección: responses
// =============================
db.createCollection("responses", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["response_id", "nombre_alumno", "fecha_entrega", "calificacion_total", "survey_id"],
      properties: {
        response_id: { bsonType: "string" },
        nombre_alumno: { bsonType: "string" },
        fecha_entrega: { bsonType: "date" },
        calificacion_total: { bsonType: "int" },
        survey_id: { bsonType: "string" }
      }
    }
  }
})


// =============================
// Crear colección: answers
// =============================
db.createCollection("answers", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["answer_id", "opcion_seleccionada", "es_correcta", "question_id", "response_id"],
      properties: {
        answer_id: { bsonType: "string" },
        opcion_seleccionada: { bsonType: "string" },
        es_correcta: { bsonType: "bool" },
        question_id: { bsonType: "string" },
        response_id: { bsonType: "string" }
      }
    }
  }
})


print("Survey System collections created successfully!")