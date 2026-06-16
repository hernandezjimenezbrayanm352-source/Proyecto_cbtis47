# Sprint Backlog — Technology and Academic Performance Survey

## Sprint Goal

Implement MongoDB querying, survey management, and participant response features, allowing users to register participants, create questionnaires, store responses, execute advanced searches, and generate analytical reports efficiently.

---

# Sprint 1 — "Project Setup & NoSQL Foundations"

### Duration
4 Weeks

### Objective

Configure the development environment, understand NoSQL fundamentals, and establish the initial architecture for the survey management system.

---

# Sprint Parameters & Capacity Plan

- **Sprint Duration:** 4 Weeks
- **Daily Commitment:** 2 Hours (Monday-Friday)
- **Total Sprint Capacity:** 250 Hours
- **Estimated Workload:** 100 Hours
- **Buffer:** 100 Hours

---

# Sprint Backlog

| ID | Story | Description | Priority | Estimate |
|----|---------|-------------|----------|----------|
| SP1-01 | Development Environment Setup | Install and configure VS Code, MongoDB Compass, and Git | High | 2 pts |
| SP1-02 | Initial Repository Setup | Create repository with README.md and signed Student Pledge | High | 1 pt |
| SP1-03 | JSON/BSON Fundamentals | Create valid JSON structures representing survey participants and responses | High | 2 pts |
| SP1-04 | Project Idea Definition | Define project objectives and survey requirements | Medium | 2 pts |
| SP1-05 | Schema Modeling | Design ER diagram using Mermaid.js | High | 3 pts |
| SP1-06 | MongoDB Atlas Integration | Create MongoDB Atlas cluster and connect database | High | 3 pts |
| SP1-07 | Collection Initialization Script | Create initialization script for collections | Medium | 2 pts |
| SP1-08 | Seed Data Generation | Generate test dataset with +50 participant records | Medium | 3 pts |
| SP1-09 | Architecture Defense Preparation | Prepare documentation and repository for RELEASE v1.0 | Low | 2 pts |

**Total: 20 Points**

---

# Sprint Acceptance Criteria

| Sprint Backlog ID | Acceptance Criteria | Validation Method |
|-------------------|---------------------|-------------------|
| SP1-01 | VS Code, Git, and MongoDB Compass are correctly installed and configured. | Verify installation and screenshots. |
| SP1-02 | Repository contains README.md and Student Pledge. | Review repository structure. |
| SP1-03 | JSON and BSON files are syntactically valid. | Validate using MongoDB Compass. |
| SP1-04 | Survey objectives and requirements are documented. | Review project proposal. |
| SP1-05 | Mermaid.js ER diagram accurately represents the database structure. | Inspect diagram consistency. |
| SP1-06 | MongoDB Atlas cluster is connected successfully. | Test database connection. |
| SP1-07 | Initialization script executes without errors. | Verify collections creation. |
| SP1-08 | Dataset contains at least 50 valid participant documents. | Verify document count. |
| SP1-09 | Repository is organized and prepared for RELEASE v1.0. | Review final structure and documentation. |

---

# Technical Tasks

## SP1-01 — Development Environment Setup

- Install VS Code
- Install MongoDB Compass
- Install Git
- Configure GitHub repository access

## SP1-02 — Initial Repository Setup

- Create README.md
- Add signed Student Pledge
- Perform Initial Commit

## SP1-03 — JSON/BSON Fundamentals

- Create portfolio/me.json
- Define nested objects and arrays
- Validate JSON syntax

## SP1-04 — Project Idea Definition

- Define survey objectives
- Identify system requirements
- Analyze participant and response data requirements

## SP1-05 — Schema Modeling

- Design ER Diagram using Mermaid.js
- Compare Embedding vs Referencing
- Define collection relationships

## SP1-06 — MongoDB Atlas Integration

- Create MongoDB Atlas cluster
- Configure database user
- Obtain Connection String
- Connect Compass to Atlas

## SP1-07 — Collection Initialization

- Create scripts/01_create_collections.js
- Initialize collections
- Verify database structure

## SP1-08 — Seed Data Generation

- Create data/seeds.json
- Generate +50 participant records
- Insert seed data into collections

## SP1-09 — Architecture Defense

- Review repository structure
- Validate loaded data
- Create RELEASE v1.0 tag

---

# Weekly Execution Roadmap

## Week 1: Environment Setup & NoSQL Foundations

### Focus
Setting up the development environment and defining the survey architecture.

### Key Tasks

- Install and configure VS Code, Git, and MongoDB Compass.
- Create GitHub repository with README.md and Student Pledge.
- Create portfolio/me.json.
- Define project objectives and requirements.
- Analyze survey data requirements.

### Friday Milestone

Development environment configured and repository initialized.

---

## Week 2: Database Modeling & MongoDB Integration

### Focus
Designing the database schema and integrating MongoDB Atlas.

### Key Tasks

- Design ER Diagram using Mermaid.js.
- Compare Embedding vs Referencing.
- Create MongoDB Atlas cluster.
- Configure database access.
- Connect MongoDB Compass.
- Create collection initialization script.

### Friday Milestone

Atlas connected and collections created successfully.

---

## Week 3: Data Initialization & Seed Management

### Focus
Generating and validating test data.

### Key Tasks

- Create seed dataset.
- Insert participant and survey records.
- Validate JSON/BSON structures.
- Verify collection integrity.
- Test initialization scripts.

### Friday Milestone

Database populated with valid data.

---

## Week 4: Documentation, Validation & Release v1.0

### Focus
Final validation and project delivery.

### Key Tasks

- Review repository organization.
- Validate scripts and queries.
- Complete technical documentation.
- Verify GitHub version history.
- Create RELEASE v1.0.

### Friday Milestone

Documentation completed and release ready.

---

# Expected Deliverables

- Functional GitHub Repository
- Configured MongoDB Atlas Cluster
- Database Schema Diagram
- Collection Initialization Scripts
- Seed Dataset
- RELEASE v1.0 Ready for Deployment

---

# Impediments & Dependencies

### Dependencies

- MongoDB Atlas connection must be configured before creating collections.
- JSON/BSON validation must be completed before inserting documents.
- MongoDB Compass and VS Code must be installed before executing scripts.

### Impediments

- Atlas connection issues caused by incorrect Connection Strings.
- Invalid JSON syntax causing insertion failures.
- Missing database permissions affecting collection creation.

---

# Definition of Done

- [x] All scripts execute without errors
- [x] Database connection works correctly
- [x] JSON/BSON structures validated
- [x] Repository uploaded to GitHub
- [x] Documentation completed
- [x] MongoDB collections created successfully
- [x] Seed data inserted correctly

---

## Team Members

- José Ignacio Oporto Hernández
- Ulises Rojas González
