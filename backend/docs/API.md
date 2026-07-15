TaskHive REST API Documentation
Base URL
http://localhost:5000/api

Authentication APIs
Register User

POST
/auth/register

Body:
{
"name":"John",
"email":"john@gmail.com",
"password":"Password123",
"role":"TEAM_MEMBER"
}

Login

POST
/auth/login

Body:
{
"email":"john@gmail.com",
"password":"Password123"
}

Response:
{
"token":"JWT_TOKEN",
"user":{
"name":"John",
"role":"TEAM_MEMBER"
}
}

User Management

Admin Only

Get Users

GET
/users

Header:
Authorization: Bearer TOKEN

Create User

POST
/users

Update User

PUT
/users/:id

Delete User

DELETE
/users/:id

Project APIs
Create Project

POST

/projects

Body:

{
"title":"TaskHive",
"description":"Management system",
"managerId":"uuid"
}

Get Projects

GET

/projects
Update Project

PUT

/projects/:id

Delete Project

DELETE

/projects/:id
Task APIs

Create Task

POST

/tasks

Update Status

PATCH

/tasks/:id/status

Delete Task

DELETE

/tasks/:id
Comment APIs

Create Comment

POST

/tasks/:id/comments
Get Comments

GET

/tasks/:id/comments

Notification APIs

GET

/notifications

Mark Read

PATCH

/notifications/:id/read

