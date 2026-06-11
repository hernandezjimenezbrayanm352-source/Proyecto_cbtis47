📊 Análisis de Base de Datos y Consultas (MQL)
Las consultas realizadas en la base de datos de la Encuesta sobre Tecnología y Rendimiento Académico permiten analizar las preguntas, respuestas y participaciones registradas por los usuarios.
📝 1. Consulta de Preguntas del Formulario
Objetivo: Mostrar todas las preguntas pertenecientes al formulario principal.
Código: { "formulario_id": "F1" }
Colección: items
✅ 2. Preguntas Obligatorias
Objetivo: Identificar las preguntas que deben ser respondidas obligatoriamente por los participantes.
Código: { "requerido": true }
Colección: items
🔤 3. Búsqueda de Alternativas por Pregunta
Objetivo: Mostrar las opciones de respuesta asociadas a una pregunta específica.
Código: { "item_id": "I1" }
Colección: alternativas
🎓 4. Preguntas Relacionadas con el Rendimiento Académico
Objetivo: Encontrar preguntas relacionadas con el impacto de la tecnología en el aprendizaje.
Código: { "pregunta_texto": /rendimiento académico/i }
Colección: items
Técnica: Expresiones Regulares (Regex)
📱 5. Preguntas sobre Uso de Tecnología
Objetivo: Identificar preguntas relacionadas con dispositivos o herramientas tecnológicas.
Código: { "pregunta_texto": /tecnología/i }
Colección: items
Técnica: Expresiones Regulares (Regex)
🆔 6. Búsqueda por Identificador de Pregunta
Objetivo: Localizar una pregunta específica mediante su identificador.
Código: { "item_id": "I5" }
Colección: items
📋 7. Participaciones Registradas
Objetivo: Consultar todas las respuestas enviadas por los usuarios.
Código: {}
Colección: participacion
📊 8. Distribución de Alternativas
Objetivo: Analizar la cantidad de opciones de respuesta disponibles para cada pregunta de la encuesta.
Resultados:
La encuesta contiene 8 preguntas.
Se registran 27 alternativas de respuesta.
Todas las preguntas son de tipo opción múltiple.
El formulario está enfocado en evaluar la relación entre la tecnología y el rendimiento académico de los estudiantes.
Estos resultados permiten comprender la estructura de la encuesta y facilitan el análisis de las respuestas obtenidas. :::
