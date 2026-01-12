# Library Management System - Architecture Documentation

## C1: Context
ระบบ Library Management System เป็นระบบจัดการหนังสือภายในห้องสมุด
ผู้ใช้งานสามารถ:
- ดูรายการหนังสือ
- เพิ่ม/แก้ไข/ลบหนังสือ
- ยืมและคืนหนังสือ

ระบบนี้ถูกพัฒนาด้วย **Layered Architecture (3-tier)** เพื่อแยกความรับผิดชอบ (Separation of Concerns) ทำให้ maintainable, scalable และง่ายต่อการทำงานร่วมกันในทีม

---

## C2: Container Diagram

┌─────────────────────────────────────┐
│ Presentation Layer │
│ ┌──────────────────────────────┐ │
│ │ Routes → Controllers │ │
│ │ (HTTP Handling) │ │
│ └──────────────────────────────┘ │
└──────────────┬──────────────────────┘
│
▼
┌─────────────────────────────────────┐
│ Business Logic Layer │
│ ┌──────────────────────────────┐ │
│ │ Services → Validators │ │
│ │ (Business Rules) │ │
│ └──────────────────────────────┘ │
└──────────────┬──────────────────────┘
│
▼
┌─────────────────────────────────────┐
│ Data Access Layer │
│ ┌──────────────────────────────┐ │
│ │ Repositories → Database │ │
│ │ (SQL Queries) │ │
│ └──────────────────────────────┘ │
└──────────────┬──────────────────────┘
│
▼
┌──────────┐
│ SQLite │
└──────────┘

yaml
คัดลอกโค้ด

---

## Responsibilities ของแต่ละ Layer

**1. Presentation Layer**
- รับและตอบสนอง HTTP request/response
- Routing: กำหนด endpoint ต่างๆ เช่น `/api/books`
- Controller: รับ request, เรียก Service, ส่ง response
- Error handling ผ่าน middleware

**2. Business Logic Layer**
- ประมวลผล rules ของระบบ เช่น ตรวจสอบ ISBN, ตรวจสอบสถานะหนังสือ
- Validators: ตรวจสอบความถูกต้องของข้อมูล
- Service: จัดการ business flow เช่น borrow, return, delete

**3. Data Access Layer**
- Repository: ทำงานกับ database
- CRUD operations: create, read, update, delete
- Database connection: เชื่อมกับ SQLite

**4. SQLite Database**
- เก็บข้อมูลหนังสือจริง
- ตาราง `books` มีฟิลด์: id, title, author, isbn, status, created_at

---

## Data Flow (Request → Response)

1. ผู้ใช้ส่ง HTTP request ผ่าน browser หรือ Postman
2. Request ตกไปยัง **Routes** → ถูกส่งต่อไปยัง **Controller**
3. Controller เรียก **Service** ใน Business Layer
4. Service ทำ validation และ business logic
5. Service เรียก **Repository** เพื่อเข้าถึง **Database**
6. Database ส่งผลลัพธ์กลับไปยัง Repository
7. Repository ส่งข้อมูลกลับไปยัง Service
8. Service ประมวลผลและส่งผลลัพธ์กลับไปยัง Controller
9. Controller ส่ง HTTP response กลับไปยังผู้ใช้

User → Routes → Controller → Service → Repository → Database
← Response กลับตามลำดับ

คัดลอกโค้ด
