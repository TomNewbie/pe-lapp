# [GET] /api/courses

Authorization: JWT

Response:

```ts
Array<{
  name: string;
  lecturer: string;
  progress: number;
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
