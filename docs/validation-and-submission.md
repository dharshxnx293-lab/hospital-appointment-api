# Assignment validation and submission

The implementation files are committed on `main`. This feature branch adds the final validation checklist for the assignment.

## Run locally before submission

1. Create the PostgreSQL database and tables using `database/schema.sql`.
2. Add your own local `.env` file with the correct `DATABASE_URL`. Never commit this file.
3. Run `npm install`.
4. Run `npm run generate`.
5. Run `npm run seed`.
6. Run `npm test`.
7. Capture a screenshot of the successful terminal output and attach it to the pull request.

## Expected checks

- Patient create, read, search, update and delete.
- Doctor create, read, specialty filter and delete.
- Appointment booking with existing patient and doctor relations.
- Nested patient and doctor fetch using `include`.
- Upcoming schedule query and appointment status update.
- Cleanup of test records.

## Important

The GitHub-hosted code has not been run against the user's local PostgreSQL database. A successful local test screenshot must be attached after running the commands above. The repository implements CRUD, not login/JWT authentication.
