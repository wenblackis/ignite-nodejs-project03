# App

GymPass style app.

## Functional Requirements

- [ ] It must be possible to register;
- [ ] It must be possible to authenticate;
- [ ] It must be possible to obtain the profile of a logged in user;
- [ ] It must be possible to obtain the number of check-ins performed by the logged in user;
- [ ] It must be possible for the user to obtain their check-in history;
- [ ] It must be possible for the user to search for nearby gyms;
- [ ] It must be possible for the user to search for gyms by name;
- [ ] It must be possible for the user to check-in at a gym;
- [ ] It must be possible to validate a user's check-in;
- [ ] It must be possible to register a gym;

## Business Rules

- [ ] The user must not be able to register with a duplicate email;
- [ ] The user cannot do 2 check-ins on the same day;
- [ ] The user cannot check in if they are not close (100m) to the gym;
- [ ] Check-in can only be validated up to 20 minutes after being created;
- [ ] Check-in can only be validated by administrators;
- [ ] The gym can only be registered by administrators;

## Nonfunctional Requirements

- [ ] The user password must be encrypted;
- [ ] The application data must be persisted in a PostgreSQL database;
- [ ] All data lists must be paginated with 20 items per page;
- [ ] The user must be identified by a JWT (JSON Web Token);