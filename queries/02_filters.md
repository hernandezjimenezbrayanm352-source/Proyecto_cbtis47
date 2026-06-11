# 📊 Evidencia de Filtrado Avanzado de Datos - MongoDB

Este documento presenta consultas **MQL (MongoDB Query Language)** utilizadas para el análisis de preguntas, alternativas y participaciones dentro del sistema de encuestas.

---

## 📝 1. Preguntas Obligatorias
**Objetivo:** Identificar todas las preguntas que requieren respuesta obligatoria.  
**Operador:** Comparación directa de valor booleano.  
**Colección:** `items`

```js
{ requerido: true }
[Parece que el resultado no era seguro para mostrar. ¡Cambiemos de enfoque y probemos algo diferente!]

🔍 2. Búsqueda de Preguntas sobre Tecnología
Objetivo: Localizar preguntas relacionadas con el uso de la tecnología.
Operador: Expresión Regular (Regex).
Colección: items

js
{ pregunta_texto: /tecnología/i }
[Parece que el resultado no era seguro para mostrar. ¡Cambiemos de enfoque y probemos algo diferente!]

📱 3. Alternativas Relacionadas con Dispositivos Tecnológicos
Objetivo: Mostrar las opciones de respuesta de la pregunta sobre herramientas tecnológicas utilizadas por los estudiantes.
Colección: alternativas

js
{ item_id: "I3" }
[Parece que el resultado no era seguro para mostrar. ¡Cambiemos de enfoque y probemos algo diferente!]

📚 4. Preguntas Relacionadas con el Estudio
Objetivo: Encontrar preguntas asociadas al proceso de aprendizaje y estudio.
Operador: Regex.
Colección: items

js
{ pregunta_texto: /estudiar/i }
[Parece que el resultado no era seguro para mostrar. ¡Cambiemos de enfoque y probemos algo diferente!]

🆔 5. Búsqueda Precisa por Identificador
Objetivo: Localizar una pregunta específica utilizando su identificador único.
Colección: items

js
{ item_id: "I5" }
[Parece que el resultado no era seguro para mostrar. ¡Cambiemos de enfoque y probemos algo diferente!]

📋 6. Alternativas de una Pregunta Específica
Objetivo: Consultar todas las alternativas disponibles para una pregunta determinada.
Colección: alternativas

js
{ item_id: "I1" }
[Parece que el resultado no era seguro para mostrar. ¡Cambiemos de enfoque y probemos algo diferente!]

📊 7. Conteo de Participaciones Registradas
Objetivo: Verificar el número total de encuestas respondidas por los usuarios.
Colección: participacion

js
db.participacion.countDocuments()
[Parece que el resultado no era seguro para mostrar. ¡Cambiemos de enfoque y probemos algo diferente!]

🎓 8. Preguntas sobre Rendimiento Académico
Objetivo: Identificar preguntas relacionadas con el impacto de la tecnología en el rendimiento escolar.
Operador: Expresión Regular (Regex).
Colección: items

js
{ pregunta_texto: /rendimiento académico/i }
[Parece que el resultado no era seguro para mostrar. ¡Cambiemos de enfoque y probemos algo diferente!]

✨ Estas consultas permiten analizar la estructura de la encuesta, localizar preguntas específicas, administrar las alternativas de respuesta y obtener información relevante para el estudio del impacto de la tecnología en el rendimiento académico.
