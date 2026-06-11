# 📋 Sistema de Encuestas

## 🏗️ Arquitectura de Datos

Como **Data Modeler**, el diseño se centró en la eficiencia para almacenar y analizar respuestas de usuarios utilizando MongoDB.

### Patrones utilizados
* **Patrón de Embebido (Embedded Pattern):** Las respuestas de cada usuario se almacenan dentro de un mismo documento para facilitar consultas rápidas.
* **Patrón de Desnormalización:** Se conservan datos relevantes de las encuestas para mantener la integridad histórica de los resultados.
* **Esquema Flexible:** Permite encuestas con distintos tipos de preguntas (opción múltiple, verdadero/falso y respuesta abierta).

## 📁 Estructura de Colecciones

El proyecto se divide en dos colecciones principales:

* **surveys (Encuestas):** Información de cada encuesta, preguntas y opciones de respuesta.
* **responses (Respuestas):** Registro de las respuestas enviadas por los participantes.

## 🛠️ Tecnologías Utilizadas

* **Motor de Base de Datos:** MongoDB Atlas / Community Server
* **Formato de Datos:** JSON / BSON
* **Gestión de Datos:** MongoDB Compass
* **Documentación Técnica:** Markdown

---

# 👥 Team Roles and Responsibilities

| # | Technical Role | Main Responsibility |
| :--- | :--- | :--- |
| **1** | **The Data Modeler** <br> José Ignacio Oporto Hernández | **JSON Architect.** Define la estructura de encuestas y respuestas. Diseña diagramas y valida el modelo de datos. |
| **2** | **The Query Developer** <br> Ulises Rojas González | **MQL Constructor.** Desarrolla consultas MongoDB para generar estadísticas y reportes de resultados. |

---

# 🔍 Database Analysis and Queries (MQL)

Las consultas realizadas en la base de datos del **Sistema de Encuestas** permiten analizar la participación de los usuarios y los resultados obtenidos.

### 📊 1. Encuestas Activas
**Objetivo:** Mostrar todas las encuestas disponibles para responder.

```js
{ "status": "active" }

---

👥 2. Participantes que Respondieron

Objetivo: Identificar los usuarios que ya completaron una encuesta.

{ "hasResponded": true }

---

⭐ 3. Respuestas por Calificación

Objetivo: Filtrar respuestas con una puntuación específica.

{ "rating": 5 }

---

📝 4. Búsqueda por Título de Encuesta

Objetivo: Localizar una encuesta mediante su nombre.

{ "title": "Satisfacción del Cliente" }

---

📅 5. Encuestas por Año

Objetivo: Consultar encuestas creadas en un año determinado.

{ "createdAt": /2026/ }

---

📞 6. Búsqueda por Correo Electrónico

Objetivo: Obtener respuestas asociadas a un participante específico.

{ "email": "usuario@email.com" }

---

📈 7. Distribución de Resultados

Objetivo: Visualizar la distribución de respuestas utilizando MongoDB Compass Schema Analysis para identificar tendencias y preferencias de los participantes.

---

Team Roles

Role| Member| Responsibility
Data Modeler| José Ignacio Oporto Hernández| Diseño del esquema JSON
Query Developer| Ulises Rojas González| Consultas MQL

---

Current Sprint

Sprint 3 - Data Analytics

- [ ] Consultas de agregación
- [ ] Optimización de índices
- [ ] Dashboard de resultados
- [ ] Presentación final

Task ID| Role| Technical Specification| Definition of Done (DoD)| Status
SURV-QRY-01| Query Developer (Ulises Rojas González)| Optimizar consultas MQL y filtros de búsqueda.| Tiempo de respuesta menor a 50 ms.| 🟢 To Do
SURV-ARC-01| Data Modeler (José Ignacio Oporto Hernández)| Diseñar validaciones JSON y documentación técnica.| Validaciones funcionando correctamente.| 🟢 To Do

---

👥 Autores y Contacto

Autor| Rol
José Ignacio Oporto Hernández| Data Modeler
Ulises Rojas González| Query Developer

© 2026 Sistema de Encuestas - Desarrollado bajo estándares de Modelado de Datos NoSQL.