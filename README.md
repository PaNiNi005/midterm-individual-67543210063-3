# Library Management System - Layered Architecture

## 📋 Project Information
- **Student Name:** รัฐจิกาลณ์ กวงคำ  
- **Student ID:** 67543210063-3  
- **Course:** ENGSE207 Software Architecture  

## 🏗️ Architecture Style
**Layered Architecture (3-tier)**  
1. **Presentation Layer** – Routes & Controllers, HTTP handling  
2. **Business Logic Layer** – Services & Validators, business rules  
3. **Data Access Layer** – Repositories & Database connection, SQL operations  

## 📂 Project Structure
midterm-individual-6531503001/
├── src/
│ ├── presentation/
│ │ ├── controllers/
│ │ ├── routes/
│ │ └── middlewares/
│ ├── business/
│ │ ├── services/
│ │ └── validators/
│ └── data/
│ ├── repositories/
│ └── database/
├── server.js
├── library.db
├── README.md
└── ARCHITECTURE.md

pgsql
คัดลอกโค้ด

## 🎯 Refactoring Summary

### ปัญหาของ Monolithic (เดิม)
- โค้ดปนกันหมด (HTTP, Business logic, Database) → อ่านยาก แก้ไขยาก  
- ไฟล์เดียวใหญ่กว่า 400+ บรรทัด → maintain ยาก  
- ทีมงานแก้ conflict บ่อย เพราะทุกคนแก้ไฟล์เดียวกัน  
- ไม่มี separation of concerns → เพิ่มโอกาสเกิดข้อผิดพลาด  

### วิธีแก้ไขด้วย Layered Architecture
- แยก HTTP handling เป็น **Presentation Layer**  
- แยก Business rules + Validation เป็น **Business Layer**  
- แยก Database operations เป็น **Data Layer**  
- ทำให้ maintainable, scalable และทีมสามารถทำงานแยกกันได้  

### ประโยชน์ที่ได้รับ
- รัน API ได้ครบโดยไม่ชนกัน  
- ลด conflict เวลาทีมแก้ไข  
- เพิ่ม readability & maintainability  
- เตรียมพร้อมต่อการขยายระบบในอนาคต  

## 🚀 How to Run
```bash
# 1. Clone repository
git clone [your-repo-url]

# 2. Install dependencies
npm install

# 3. Run server
npm start

# 4. Test API
# Open browser or Postman: http://localhost:3000/api/books
📝 API Endpoints
1️⃣ GET /api/books
Description: ดึงรายการหนังสือทั้งหมด
Query params (optional): status=available|borrowed

Example Request:

http
คัดลอกโค้ด
GET http://localhost:3000/api/books?status=available
Example Response:

json
คัดลอกโค้ด
{
  "books": [
    {
      "id": 1,
      "title": "Harry Potter",
      "author": "J.K. Rowling",
      "isbn": "9780747532743",
      "status": "available",
      "created_at": "2026-01-12 03:12:47"
    }
  ],
  "statistics": {
    "available": 1,
    "borrowed": 0,
    "total": 1
  }
}
2️⃣ GET /api/books/:id
Description: ดึงหนังสือเล่มเดียวตาม id

Example Request:

http
คัดลอกโค้ด
GET http://localhost:3000/api/books/1
Example Response:

json
คัดลอกโค้ด
{
  "id": 1,
  "title": "Harry Potter",
  "author": "J.K. Rowling",
  "isbn": "9780747532743",
  "status": "available",
  "created_at": "2026-01-12 03:12:47"
}
3️⃣ POST /api/books
Description: เพิ่มหนังสือใหม่

Body (JSON):

json
คัดลอกโค้ด
{
  "title": "New Book Title",
  "author": "Author Name",
  "isbn": "978XXXXXXXXX"
}
Example Response:

json
คัดลอกโค้ด
{
  "id": 2,
  "title": "New Book Title",
  "author": "Author Name",
  "isbn": "978XXXXXXXXX",
  "status": "available",
  "created_at": "2026-01-12 10:10:00"
}
4️⃣ PUT /api/books/:id
Description: อัพเดทข้อมูลหนังสือ

Body (JSON):

json
คัดลอกโค้ด
{
  "title": "Updated Book Title",
  "author": "Updated Author",
  "isbn": "978XXXXXXXXX"
}
Example Response:

json
คัดลอกโค้ด
{
  "id": 2,
  "title": "Updated Book Title",
  "author": "Updated Author",
  "isbn": "978XXXXXXXXX",
  "status": "available",
  "created_at": "2026-01-12 10:10:00"
}
5️⃣ PATCH /api/books/:id/borrow
Description: ยืมหนังสือ (status → borrowed)

Example Request:

http
คัดลอกโค้ด
PATCH http://localhost:3000/api/books/2/borrow
Example Response:

json
คัดลอกโค้ด
{
  "id": 2,
  "title": "Updated Book Title",
  "author": "Updated Author",
  "isbn": "978XXXXXXXXX",
  "status": "borrowed",
  "created_at": "2026-01-12 10:10:00"
}
6️⃣ PATCH /api/books/:id/return
Description: คืนหนังสือ (status → available)

Example Request:

http
คัดลอกโค้ด
PATCH http://localhost:3000/api/books/2/return
Example Response:

json
คัดลอกโค้ด
{
  "id": 2,
  "title": "Updated Book Title",
  "author": "Updated Author",
  "isbn": "978XXXXXXXXX",
  "status": "available",
  "created_at": "2026-01-12 10:10:00"
}
7️⃣ DELETE /api/books/:id
Description: ลบหนังสือ (ถ้า status ≠ borrowed)

Example Request:

http
คัดลอกโค้ด
DELETE http://localhost:3000/api/books/2
Example Response:

json
คัดลอกโค้ด
{
  "message": "Book deleted successfully"
}
yaml
คัดลอกโค้ด

---
