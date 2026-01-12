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
<img width="681" height="650" alt="image" src="https://github.com/user-attachments/assets/4b1a7ee8-078c-4225-b387-f1f5d9931c5c" />



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
### 1. Clone repository
git clone https://github.com/PaNiNi005/midterm-individual-67543210063-3/tree/main

### 2. Install dependencies
npm install

### 3. Run server
npm start

# 4. Test API
## Open browser: http://localhost:3000/api/books


📝 API Endpoints

1️⃣ 🔹 GET - ดึงหนังสือทั้งหมด

Method: GET

URL: http://localhost:3000/api/books

กด Send

ถ้ามีหนังสืออยู่ใน DB จะขึ้น JSON list ของหนังสือ

<img width="824" height="276" alt="image" src="https://github.com/user-attachments/assets/45ed9b77-7a42-4c08-8a28-886d433cc1f2" />




2️⃣ 🔹 POST - เพิ่มหนังสือใหม่

Method: POST

URL: http://localhost:3000/api/books

ไปที่ Body → raw → JSON

ใส่ข้อมูลตัวอย่าง:

{
    "title": "Harry Potter",
    "author": "J.K. Rowling",
    "isbn": "9780747532743"
}


กด Send

ถ้าเพิ่มสำเร็จ จะได้ JSON ของหนังสือที่ถูกเพิ่ม

<img width="796" height="295" alt="image" src="https://github.com/user-attachments/assets/2b1794fa-961b-41c8-b09d-0a9f3c07b2cd" />


3️⃣ 🔹 PATCH - ยืมหนังสือ

Method: PATCH

URL: http://localhost:3000/api/books/1/borrow
(1 = id ของหนังสือที่ต้องการยืม)

กด Send

หนังสือ status จะเปลี่ยนเป็น "borrowed"

<img width="784" height="278" alt="image" src="https://github.com/user-attachments/assets/c8f27ea8-0745-41e5-ad46-60c5dc0a94c1" />


4️⃣ 🔹 PATCH - คืนหนังสือ

Method: PATCH

URL: http://localhost:3000/api/books/1/return

กด Send

หนังสือ status จะเปลี่ยนเป็น "available"

<img width="787" height="290" alt="image" src="https://github.com/user-attachments/assets/55b47dea-6c5c-425a-9e7b-569c18e853b3" />


5️⃣ 🔹 PUT - แก้ไขหนังสือ

Method: PUT

URL: http://localhost:3000/api/books/1

Body → raw → JSON

{
    "title": "Harry Potter and the Sorcerer's Stone",
    "author": "J.K. Rowling",
    "isbn": "9780747532743"
}


กด Send

จะได้ JSON ของหนังสือที่อัปเดตแล้ว

<img width="785" height="295" alt="image" src="https://github.com/user-attachments/assets/ddb3d63f-a404-4aaa-8345-7f20881841d7" />


6️⃣ 🔹 DELETE - ลบหนังสือ

Method: DELETE

URL: http://localhost:3000/api/books/1

กด Send

ถ้าลบสำเร็จ จะได้ข้อความ { "message": "Book deleted successfully" }

<img width="786" height="185" alt="image" src="https://github.com/user-attachments/assets/4a03d9b3-aede-4c5d-8d0d-6ec3344d3bbd" />
