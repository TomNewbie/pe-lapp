# [GET] /api/student/:id

Get student profile

Response:
[`StudentType`](../src/api/model/user.ts)

Status code: 200

Error 404: Not found

# [GET] /api/lecturer/:id

Get lecturer profile

Response:
[`LecturerType`](../src/api/model/user.ts)

Status code: 200

Error 404: Not found

# [GET] /api/courses

Get courses of a user

Authorization: JWT

Response:

Student:

```ts
Array<{
  name: string;
  lecturer_name: string;
  progress: number;
  picture: string;
}>;
```

Lecturer:

```ts
Array<{
  name: string;
  picture: string;
}>;
```

Status code: 200

# [POST] /api/course/:id

Join a course by id

Request

Authorization: JWT

Response:

Status code: 201. (Created)

Error: 404. Course not found

Error: 400. Bad request: Teacher cannot not join course

# [POST] /api/course/

Create a course

Request

Authorization: JWT

```ts
{
    name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
    index: true,
  },
  picture: {
    type: String,
    required: true,
  },
  semester: {
    type: String,
    required: true,
  },
  duration: {
    type: String,
    required: true,
  },
}
```

Response:

Statuscode 201. Created

Status code 400. Invalid input

Status code 400. Student cannot create course

# [PATCH] /api/course/:id

Create a course

Request

Authorization: JWT

```ts
{
    name?: {
    type: String,
    required: true,
  },
  description?: {
    type: String,
    required: true,
    index: true,
  },
  picture?: {
    type: String,
    required: true,
  },
  semester?: {
    type: String,
    required: true,
  },
  duration?: {
    type: String,
    required: true,
  },
}
```

Response:

Statuscode 200. Modify success

Status code 400. Invalid input

Status code 400. Student cannot modify course

# [GET] /api/auth/login

Request body:

```ts
{
    redirectUrl?: string
}
```

Response:

```ts
{
  accessToken: string;
}
```

redirect to `redirectUrl` if exist, else to course page

# Todo :

# [POST] /api/material

Upload material

# [GET] /api/course/:id

# [PATCH] /api/material/:id

Modify material

# [POST] /api/exercise/:id

Upload exercise

# [GET, DELETE, PATCH] /api/exercise

CUD exercise

# [POST] /api/solution

Upload Solution

#
