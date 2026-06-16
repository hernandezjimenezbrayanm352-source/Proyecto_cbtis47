# Database Performance Audit & Indexing Report (Week 16)

**Project:** Technology and Academic Performance Survey  
**Developers:** José Ignacio Oporto Hernández & Ulises Rojas González  
**Date:** June 2026

---

# 1. Introduction and Technical Justification

During the development of the Survey Management System, database access speed is critical for retrieving participant information and survey responses efficiently. The objective of this audit is to demonstrate how indexes improve MongoDB performance by transforming expensive collection scans (**COLLSCAN**) into optimized index scans (**IXSCAN**).

This optimization reduces server workload and improves response times as the number of participants and responses increases.

---

# 2. Case Study 1: Searching Participants by Email

This query simulates a common administrative task where a researcher searches for a participant using their email address.

## Audited Target Query

```javascript
db.usuarios.find({ correo: "usuario1@gmail.com" }).explain("executionStats")
```

## Baseline Status (COLLSCAN)

Without an index, MongoDB performs a full collection scan.

The database examines all participant documents before finding the requested record.

This represents an inefficient **O(N)** operation.

## Index Design Strategy (createIndex)

1. Open MongoDB Compass.
2. Select the `usuarios` collection.
3. Navigate to the **Indexes** tab.
4. Click **Create Index**.
5. Select the field `correo`.
6. Choose Ascending (1).
7. Save the index.

MongoDB creates:

```javascript
db.usuarios.createIndex({ correo: 1 })
```

## Optimized Status (IXSCAN)

After creating the index, MongoDB uses an Index Scan (**IXSCAN**) instead of a Collection Scan (**COLLSCAN**).

Only the matching document is examined, significantly reducing execution time.

---

# 3. Case Study 2: Searching Participants by User ID

This query simulates retrieving participant information using the unique identifier.

## Audited Target Query

```javascript
db.usuarios.find({ usuario_id: "U001" }).explain("executionStats")
```

## Baseline Status (COLLSCAN)

Before indexing, MongoDB scans the entire collection to locate the matching participant.

This causes unnecessary processing as the collection grows.

## Index Design Strategy (createIndex)

1. Open MongoDB Compass.
2. Navigate to the `usuarios` collection.
3. Open the **Indexes** tab.
4. Create an index on `usuario_id`.
5. Save the configuration.

MongoDB creates:

```javascript
db.usuarios.createIndex({ usuario_id: 1 })
```

## Optimized Status (IXSCAN)

After indexing, MongoDB directly accesses the desired participant using the B-Tree index structure.

The number of examined documents decreases dramatically, improving query performance.

---

# 4. Consolidated Performance Metrics Matrix

| Target Query | Metric Analyzed | Before Index | After Index | Impact |
|-------------|----------------|--------------|-------------|---------|
| `{ correo: "usuario1@gmail.com" }` | Execution Stage | COLLSCAN | IXSCAN + FETCH | Faster participant retrieval |
| | Documents Examined | All documents | 1 document | Reduced processing cost |
| | Structure Used | Raw Collection | correo_1 | Optimized searches |
| `{ usuario_id: "U001" }` | Execution Stage | COLLSCAN | IXSCAN + FETCH | Faster participant lookup |
| | Documents Examined | All documents | 1 document | Better scalability |
| | Structure Used | Raw Collection | usuario_id_1 | Efficient indexing |

---

# 5. Query Developer Conclusion

By implementing indexes on the `correo` and `usuario_id` fields, the survey database is now optimized for production-level workloads.

Frequently executed queries benefit from significantly reduced execution times and lower resource consumption.

The use of indexes transforms query complexity from approximately **O(N)** to **O(log N)**, ensuring scalability as participant and response data continue to grow.

---

## Team Members

- José Ignacio Oporto Hernández
- Ulises Rojas González
