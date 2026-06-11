# 🚀 Evidencia de Filtrado Avanzado de Datos - MongoDB

Este documento presenta las consultas **MQL (MongoDB Query Language)** y sus explicaciones técnicas para el análisis avanzado de preguntas, alternativas y participaciones dentro del proyecto de encuestas.

---

## 📝 1. Identificación de Preguntas Obligatorias ($and)
**Objetivo:** Localizar preguntas que pertenecen al formulario principal y que son obligatorias para los participantes.  
**Detalle Técnico:** El operador `$and` exige que ambas condiciones se cumplan simultáneamente.  
**Valor del Proyecto:** Permite verificar que todas las preguntas esenciales estén correctamente configuradas.  
**Colección:** `items`

```js
{
  $and: [
    { formulario_id: "F1" },
    { requerido: true }
  ]
}
[Parece que el resultado no era seguro para mostrar. ¡Cambiemos de enfoque y probemos algo diferente!]

📱 2. Preguntas Relacionadas con Tecnología ($regex)
Objetivo: Encontrar preguntas que mencionan directamente la tecnología.
Detalle Técnico: Se utiliza una expresión regular con la opción i para ignorar mayúsculas y minúsculas.
Valor del Proyecto: Facilita el análisis de preguntas enfocadas en herramientas tecnológicas.
Colección: items

js
{ pregunta_texto: /tecnología/i }
[Parece que el resultado no era seguro para mostrar. ¡Cambiemos de enfoque y probemos algo diferente!]

🎓 3. Preguntas sobre Rendimiento Académico ($or)
Objetivo: Recuperar preguntas relacionadas con el rendimiento académico o el estudio.
Detalle Técnico: El operador $or devuelve documentos que cumplan al menos una de las condiciones.
Valor del Proyecto: Permite identificar rápidamente las preguntas centrales de la investigación.
Colección: items

js
{
  $or: [
    { pregunta_texto: /rendimiento académico/i },
    { pregunta_texto: /estudiar/i }
  ]
}
[Parece que el resultado no era seguro para mostrar. ¡Cambiemos de enfoque y probemos algo diferente!]

📋 4. Control de Alternativas por Pregunta ($and)
Objetivo: Obtener las alternativas correspondientes a una pregunta específica.
Detalle Técnico: Combina la búsqueda por identificador con la validación de existencia de la descripción.
Valor del Proyecto: Garantiza la integridad de las opciones de respuesta.
Colección: alternativas

js
{
  $and: [
    { item_id: "I1" },
    { descripcion: { $exists: true } }
  ]
}
[Parece que el resultado no era seguro para mostrar. ¡Cambiemos de enfoque y probemos algo diferente!]

🔍 5. Auditoría de Participaciones Registradas ($exists)
Objetivo: Verificar que las participaciones tengan usuario registrado.
Detalle Técnico: $exists valida que el campo esté presente en el documento.
Valor del Proyecto: Ayuda a detectar registros incompletos.
Colección: participacion

js
{ usuario: { $exists: true } }
[Parece que el resultado no era seguro para mostrar. ¡Cambiemos de enfoque y probemos algo diferente!]

📚 6. Búsqueda de Preguntas sobre Recursos de Estudio ($or)
Objetivo: Encontrar preguntas relacionadas con recursos digitales o materiales de estudio.
Detalle Técnico: Se utilizan expresiones regulares combinadas mediante $or.
Valor del Proyecto: Permite analizar preferencias de aprendizaje de los estudiantes.
Colección: items

js
{
  $or: [
    { pregunta_texto: /digital/i },
    { pregunta_texto: /libros/i }
  ]
}
[Parece que el resultado no era seguro para mostrar. ¡Cambiemos de enfoque y probemos algo diferente!]

🛡️ 7. Validación de Preguntas Activas ($and + Boolean)
Objetivo: Localizar preguntas activas y obligatorias dentro del formulario.
Detalle Técnico: Combina una comparación de cadena con un valor booleano.
Valor del Proyecto: Facilita el control de calidad del cuestionario.
Colección: items

js
{
  $and: [
    { formulario_id: "F1" },
    { requerido: true }
  ]
}
[Parece que el resultado no era seguro para mostrar. ¡Cambiemos de enfoque y probemos algo diferente!]

📊 8. Recuperación de Alternativas para Análisis ($in)
Objetivo: Obtener varias alternativas específicas para análisis comparativo.
Detalle Técnico: El operador $in permite buscar múltiples valores dentro de un mismo campo.
Valor del Proyecto: Agiliza la evaluación de las respuestas asociadas a una pregunta determinada.
Colección: alternativas

js
{
  alternativa_id: {
    $in: ["A1", "A2", "A3", "A4"]
  }
}
