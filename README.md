# runnel-backend

## Endpoints

| Action                    | Method | Route        | Response         |
| ------------------------- | ------ | ------------ | ---------------- |
| List all records          | GET    | /streams     | Array of Records |
| Get one particular record | GET    | /streams/:id | Single Record    |
| Create record             | POST   | /streams     | Single Record    |
| Update a record           | PATCH    | /streams/:id | Single Record    |
| Delete a record           | DELETE | /streams/:id | Nothing          |
