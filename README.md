# 📚 Library Management System - Layered Architecture

---

## 📋 Project Information
- **Student Name:** รัฐจิกาลณ์ กวงคำ  
- **Student ID:** 67543210063-3  
- **Course:** ENGSE207 Software Architecture  

---

## 🏗️ Architecture Style
**Layered Architecture (3-tier)**

1. **Presentation Layer** – Routes & Controllers, HTTP handling  
2. **Business Logic Layer** – Services & Validators, business rules  
3. **Data Access Layer** – Repositories & Database connection, SQL operations  

---

## 📂 Project Structure
```text
midterm-individual-6531503001/
├── src/
│   ├── presentation/
│   │   ├── controllers/
│   │   ├── routes/
│   │   └── middlewares/
│   ├── business/
│   │   ├── services/
│   │   └── validators/
│   └── data/
│       ├── repositories/
│       └── database/
├── server.js
├── library.db
├── README.md
└── ARCHITECTURE.md



