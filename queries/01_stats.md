# 🚀 Deliverable Report: S14 - Introduction to Aggregation

**Role:** Query Developer (MQL Constructor)  
**Project:** Encuesta sobre Tecnología y Rendimiento Académico  
**Week:** S14  

---

## 1. Key Concepts

### Aggregation Pipeline
Aggregation es un framework que procesa documentos a través de etapas secuenciales. Cada etapa transforma los datos y pasa el resultado a la siguiente, permitiendo análisis avanzados directamente en MongoDB.

### Difference from find()
- **find():** Recupera documentos tal como están almacenados en la base de datos.  
- **aggregate():** Permite transformar datos, agrupar, contar y realizar análisis estadísticos.

### Operators Used
- **$match:** Filtra documentos según una condición específica.  
- **$group:** Agrupa documentos por un campo común y realiza cálculos.  
- **$count:** Cuenta el total de documentos que llegan a esa etapa.  

---

## 2. Pipelines Executed in the Survey Project

### Query A: Number of Questions by Format (Grouping and Count)
**Objetivo:** Agrupar preguntas según su formato y contar cuántas pertenecen a cada categoría.  

```js
[
  {
    $group: {
      _id: "$formato",
      total_preguntas: { $sum: 1 }
    }
  }
]
📷 IMG → queryA.png

Compass Result:  
El formato "opcion_multiple" registró 8 preguntas.
Esto confirma que toda la encuesta utiliza preguntas de opción múltiple.

Query B: Number of Alternatives per Question (Grouping and Count)
Objetivo: Agrupar alternativas según la pregunta a la que pertenecen.

js
[
  {
    $group: {
      _id: "$item_id",
      total_alternativas: { $sum: 1 }
    }
  }
]
📷 IMG → queryB.png

Compass Result:

Pregunta I1 registró 4 alternativas.

Pregunta I4 registró 2 alternativas.

Pregunta I8 registró 3 alternativas.

Este análisis ayuda a verificar la estructura y completitud de la encuesta.

Query C: Total Required Questions (Absolute Count)
Objetivo: Contar cuántas preguntas están marcadas como obligatorias.

js
[
  {
    $match: {
      requerido: true
    }
  },
  {
    $count: "total_preguntas_obligatorias"
  }
]
📷 IMG → queryC.png

Compass Result:  
El sistema devolvió un total de 8 preguntas obligatorias.
Esto confirma que cada pregunta de la encuesta debe ser respondida antes de enviar el formulario.

Conclusion
Los pipelines de agregación implementados optimizan el análisis de datos al filtrar y agrupar información directamente en MongoDB.
Usando $match, $group y $count, el sistema genera reportes estadísticos sobre preguntas, alternativas y estructura de la encuesta sin requerir procesamiento adicional en la capa de aplicación.
