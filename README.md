# Hospital Appointment API

A Node.js + TypeScript + Prisma 7 CRUD assignment using an existing PostgreSQL hospital database.

## Features
- Patient CRUD: create, read, search, update phone, delete
- Doctor CRUD: create, read, filter by specialty, delete
- Appointment operations: book with relational `connect`, fetch nested data with `include`, list upcoming doctor appointments, update status, cancel scheduled appointments, delete
- Database introspection and cleaned Prisma mappings
- Seed and end-to-end test scripts

## Requirements
- Node.js 20+
- PostgreSQL
- npm

## Setup
1. Create a PostgreSQL database named `hospital_api`.
2. Run the SQL in [database/schema.sql](database/schema.sql).
3. Install dependencies: `npm install`.
4. Create a local `.env` file (never commit it):

```env
DATABASE_URL="postgresql://postgres:YOUR_PASSWORD@localhost:5432/hospital_api?schema=public"
```

5. Generate Prisma Client: `npm run generate`.
6. Seed sample data: `npm run seed`.
7. Run CRUD verification: `npm test`.

## Introspection
To introspect an existing database, run `npx prisma db pull`, then apply the model/field mappings shown in `prisma/schema.prisma` and run `npm run generate`.

## Important database behavior
- Deleting a patient cascades to their appointments (`ON DELETE CASCADE`).
- Deleting a doctor with appointments is restricted (`ON DELETE RESTRICT`). Delete or reassign appointments first.
- `@map` maps Prisma camelCase fields to existing snake_case columns; `@@map` maps model names to existing table names. These mappings do not rename database objects.

## Security
- Keep `.env` out of Git using `.gitignore`.
- Never commit real database passwords or production credentials.
- This assignment implements CRUD, not user login/JWT authentication.

## Assignment submission
Create a feature branch and open a pull request targeting `main`. Include a screenshot of a successful local `npm test` run in the PR description.
