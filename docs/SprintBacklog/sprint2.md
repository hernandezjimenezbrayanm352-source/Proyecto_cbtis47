# Sprint Backlog — Survey Management System

## Sprint Goal

Develop and validate MongoDB query operations for the survey management system, allowing users to retrieve, filter, update, and manage survey information efficiently through advanced NoSQL queries and document modification techniques.

## Sprint 2 — "MongoDB Queries & Document Operations"

**Duration:** 4 weeks

**Objective:** Implement MongoDB query operations, apply advanced filters, and manage document updates within the survey management database.

---

## Sprint Parameters & Capacity Plan

- Sprint Duration: 4 weeks
- Daily Commitment: 2 hours (Monday-Friday)
- Total Sprint Capacity: 200 hours
- Estimated Workload: 100 hours
- Buffer: 100 hours

---

## Sprint Backlog

| ID | User Story | Description | Priority | Estimation |
|----|------------|-------------|----------|------------|
| SP2-01 | Basic Read Queries | Implement `find()` and `findOne()` queries for survey collections | High | 3 pts |
| SP2-02 | Projection Queries | Create projections to return only specific survey fields | Medium | 2 pts |
| SP2-03 | Advanced Filters | Add filtering using `$gt`, `$lt`, `$in`, and `$ne` operators | High | 4 pts |
| SP2-04 | Logical Queries | Implement complex searches using `$and`, `$or`, and `$not` | High | 4 pts |
| SP2-05 | Update Survey Information | Modify survey documents using `$set` and `$inc` | Medium | 3 pts |
| SP2-06 | Array Data Management | Add new alternatives or responses using `$push` | Medium | 3 pts |
| SP2-07 | Query Testing & Optimization | Test and validate all MongoDB queries | Low | 2 pts |

**Total: 21 points**

---

## Sprint Acceptance Criteria

| Sprint Backlog ID | Acceptance Criteria | Validation Method |
|-------------------|--------------------|------------------|
| SP2-01 | `find()` and `findOne()` queries retrieve correct survey records. | Execute queries and verify returned documents in MongoDB Compass. |
| SP2-02 | Projection queries display only requested fields without affecting document integrity. | Compare query outputs with original documents. |
| SP2-03 | Advanced filters using `$gt`, `$lt`, `$in`, and `$ne` return accurate filtered results. | Test filters with different survey attributes and validate outputs. |
| SP2-04 | Logical queries using `$and`, `$or`, and `$not` perform complex searches correctly. | Execute combined conditions and verify query accuracy. |
| SP2-05 | Survey documents update correctly using `$set` and `$inc` operators. | Modify sample documents and confirm changes. |
| SP2-06 | New elements are successfully inserted into arrays using `$push`. | Validate array updates in alternatives or responses collections. |
| SP2-07 | All queries execute without errors and return expected results efficiently. | Run query testing sessions and validate performance. |

---

## Technical Tasks

### SP2-01 — Basic Read Queries

- Create `find()` queries for survey collections
- Implement `findOne()` searches
- Validate returned documents

### SP2-02 — Projection Queries

- Select specific fields from survey documents
- Exclude unnecessary attributes
- Validate projection outputs

### SP2-03 — Advanced Filters

- Apply `$gt` and `$lt` conditions
- Implement `$in` operator queries
- Use `$ne` for exclusion filters
- Validate filtered results

### SP2-04 — Logical Queries

- Implement `$and` conditions
- Create `$or` search combinations
- Use `$not` operator in filters
- Test complex query structures

### SP2-05 — Update Survey Information

- Update fields using `$set`
- Increment numeric values using `$inc`
- Validate document modifications

### SP2-06 — Array Data Management

- Insert new alternatives using `$push`
- Add survey responses
- Validate array integrity

### SP2-07 — Query Testing & Optimization

- Execute query validation tests
- Identify query errors
- Optimize query performance
- Verify database consistency

---

## Weekly Execution Roadmap

### Week 1: Basic Queries & Data Retrieval

**Focus:** Implementing basic MongoDB read operations and validating retrieved survey data.

**Key Tasks:**

- Create `find()` queries for survey collections.
- Implement `findOne()` searches.
- Test query outputs in MongoDB Compass.
- Create projections for specific survey fields.
- Validate returned documents and field visibility.

**Friday Milestone:** Basic read queries functioning correctly with validated outputs.

### Week 2: Advanced Filtering & Logical Queries

**Focus:** Applying advanced MongoDB filters and logical conditions for complex searches.

**Key Tasks:**

- Implement `$gt` and `$lt` filters.
- Create queries using `$in` and `$ne`.
- Develop logical conditions with `$and`, `$or`, and `$not`.
- Test combined query structures with survey data.
- Validate accuracy of filtered results.

**Friday Milestone:** Advanced filtering and logical query operations working successfully.

### Week 3: Document Updates & Array Management

**Focus:** Managing document modifications and array operations within MongoDB collections.

**Key Tasks:**

- Update survey documents using `$set`.
- Increment numeric values using `$inc`.
- Add new alternatives with `$push`.
- Validate updated documents and array structures.
- Test database consistency after updates.

**Friday Milestone:** Document updates and array operations validated successfully.

### Week 4: Testing, Optimization & Validation

**Focus:** Final testing, query optimization, and sprint validation.

**Key Tasks:**

- Execute complete query testing sessions.
- Identify and fix query execution errors.
- Optimize MongoDB query performance.
- Validate database integrity and consistency.
- Organize repository documentation and scripts.

**Friday Milestone:** MongoDB queries optimized and sprint deliverables completed.

---

## Expected Deliverables

- Functional MongoDB query scripts
- Advanced filtering operations
- Logical query implementations
- Updated survey documents
- Array management operations
- Query testing documentation
- Optimized database queries

---

## Team Members

- José Ignacio Oporto Hernández
- Ulises Rojas González
