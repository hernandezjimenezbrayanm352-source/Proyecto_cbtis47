# 🚀 Data Transformation Report for UI - Week 15

**Role:** Query Developer / MQL Constructor  
**Project:** Encuesta sobre Tecnología y Rendimiento Académico  

---

## 🛠️ Explicación de los Operadores Utilizados

Para satisfacer los requerimientos de la interfaz de usuario (UI) y generar reportes complejos directamente desde MongoDB, se implementaron pipelines de agregación utilizando los siguientes operadores:

- **$lookup:** Relaciona información entre colecciones, similar a un JOIN en bases de datos relacionales.  
- **$unwind:** Descompone arreglos generados por `$lookup` para trabajar con cada documento individualmente.  
- **$project:** Define la estructura final de salida, renombra campos y realiza cálculos cuando es necesario.  
- **$sort:** Ordena los documentos según criterios específicos.  
- **$limit:** Restringe la cantidad de documentos enviados al frontend para optimizar la visualización.  

---

## 💻 Consultas Implementadas y Resultados

### 1. Reporte de Preguntas con sus Alternativas (items + alternativas)
**Objetivo:** Relacionar cada pregunta de la encuesta con sus respectivas opciones de respuesta.  

**MQL Query**
```js
[
  {
    $lookup: {
      from: "alternativas",
      localField: "item_id",
      foreignField: "item_id",
      as: "opciones"
    }
  },
  {
    $project: {
      _id: 0,
      pregunta_id: "$item_id",
      pregunta: "$pregunta_texto",
      formato: 1,
      total_alternativas: { $size: "$opciones" }
    }
  },
  {
    $sort: {
      total_alternativas: -1
    }
  }
]
Result Summary:  
El pipeline relaciona las preguntas con sus alternativas mediante $lookup. El resultado permite visualizar cuántas opciones posee cada pregunta, facilitando la construcción dinámica de formularios en la interfaz de usuario.

2. Reporte de Participaciones por Formulario (participacion)
Objetivo: Obtener todas las participaciones registradas y organizarlas cronológicamente.

MQL Query

js
[
  {
    $project: {
      _id: 0,
      participacion_id: 1,
      usuario: 1,
      fecha_envio: 1,
      formulario_id: 1
    }
  },
  {
    $sort: {
      fecha_envio: -1
    }
  },
  {
    $limit: 10
  }
]
Result Summary:  
La consulta transforma la información de participación en una estructura limpia para el frontend, mostrando los usuarios más recientes que respondieron la encuesta y la fecha de envío correspondiente.

3. Reporte de Respuestas Registradas (seleccion + items)
Objetivo: Relacionar las respuestas seleccionadas con la pregunta correspondiente.

MQL Query

js
[
  {
    $lookup: {
      from: "items",
      localField: "item_id",
      foreignField: "item_id",
      as: "pregunta"
    }
  },
  {
    $unwind: "$pregunta"
  },
  {
    $project: {
      _id: 0,
      seleccion_id: 1,
      respuesta: "$respuesta_marcada",
      pregunta: "$pregunta.pregunta_texto",
      participacion_id: 1
    }
  },
  {
    $sort: {
      seleccion_id: 1
    }
  },
  {
    $limit: 10
  }
]
Result Summary:  
El pipeline vincula cada respuesta con su pregunta original utilizando $lookup. Esto permite mostrar reportes completos de respuestas sin necesidad de realizar múltiples consultas desde el frontend, mejorando el rendimiento y facilitando el análisis de resultados de la encuesta.
