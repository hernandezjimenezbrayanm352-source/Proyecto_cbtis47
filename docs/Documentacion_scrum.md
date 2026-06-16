# 🔍 Database Analysis and Queries (MQL)

The queries performed on the **Technology and Academic Performance Survey** database are essential tools for analyzing participant responses. They allow the extraction of strategic information about students and their use of technology in education.

Below are the key queries implemented in this deliverable:

---

### 📚 1. User Count by Age

**Objective:** Identify how many participants belong to a specific age group.

**Code:**
```javascript
{ "edad": 18 }

Field used: "edad" to filter users by age.

---

👨‍🎓 2. User Search by ID

Objective: Locate a specific participant using their unique identifier.

Code:

{ "usuario_id": "U001" }

Field used: "usuario_id".

---

📝 3. Required Questions Filter

Objective: Identify all questions that must be answered before submitting the survey.

Code:

{ "requerido": true }

Field used: "requerido" (boolean).

---

📋 4. Questions by Format

Objective: Retrieve all questions that use a specific response format.

Code:

{ "formato": "opcion_multiple" }

Field used: "formato".

---

🎯 5. Alternatives Associated with a Question

Objective: Obtain all response options belonging to a specific question.

Code:

{ "item_id": "I1" }

Field used: "item_id".

---

📅 6. Participation Search by Date

Objective: Analyze survey submissions made on a specific date.

Code:

{ "fecha_envio": "2026-06-10" }

Field used: "fecha_envio".

---

🔎 7. Search Responses by Participation

Objective: Retrieve all responses submitted by a specific participant.

Code:

{ "participacion_id": "P001" }

Field used: "participacion_id".

---

📊 8. Data Distribution (Survey Structure Overview)

Objective: Visualize the distribution of survey questions and alternatives using MongoDB Compass Schema Analysis.

Insights:

* The survey contains 8 multiple-choice questions.
* A total of 27 alternatives are distributed across all questions.
* This analysis helps verify the completeness and consistency of the questionnaire before deployment.

The generated charts allow developers and researchers to understand the structure of the survey and ensure proper data collection.
