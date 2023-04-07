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

# [GET] /api/courses?start=`s`&num=`n`&search=`search`&sort=`sort`&asc=`asc`

Get the courses of a user. For a student, it will be the courses that they have
joined. For a lecturer, it will be the courses that they have created.

`s`: query a list starting at the `s`-th course. (0-based index; default to 0)
`n`: query n courses to return in a list. (default to 1)
`search`: the string to search/filter the courses by. For a student, this will
search in the order of course name, lecturer name and semester. For a lecturer,
this will search only for the course name.
`sort`: `''` (empty string), `'name'` or `'semester'`. Either not sort the order
of the courses returned, sort by their course name or by semester, respectively.
(default to `''`)
`asc`: `1`, `true`, or any other value. When the value is either `1` or `true`,
the courses are sorted in the ascending order. Otherwise, sort in the descending
order. (default to `1`)

Authorization: JWT

Response:

```ts
// Student:
Array<{
  name: string;
  lecturer_name: string;
  semester: string;
  picture: string;
}>;

// Lecturer:
Array<{
  name: string;
  participant_count: number;
  picture: string;
}>;
```

Status code: 200

# [POST] /api/course/:id

Join a course by `id`.

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
