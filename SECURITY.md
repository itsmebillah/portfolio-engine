# Security Policy

## Prototype Status

Portfolio Engine is not approved for sensitive or production data. The current custom-table password comparison and `localStorage` user state do not provide a secure authentication or authorization boundary.

Before production use:

- replace custom credential queries with Supabase Auth;
- use server-verified sessions for protected routes;
- define least-privilege Row Level Security for every table;
- enforce editor, admin, and super-admin authorization on the server;
- hash no passwords manually and never return password fields;
- add authorization, session, and API integration tests.

## Secrets

Use [`.env.example`](.env.example). Never commit populated environment files, service-role keys, password exports, database dumps, or private portfolio/customer content.

Report vulnerabilities privately to [itsmbillah@gmail.com](mailto:itsmbillah@gmail.com). Do not open public issues containing credentials or exploit details.
