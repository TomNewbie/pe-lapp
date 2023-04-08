# [GET] /api/student/`:id`

Get student profile

### Response:

[`StudentType`](../stringsrc/api/model/user.ts)

_Status code:_ 200

_Error:_

- 404: Not found

# [GET] /api/lecturer/`:id`

Get lecturer profile

### Response:

[`LecturerType`](../src/api/model/user.ts)

_Status code:_ 200

_Error:_

- 404: Not found

# [GET] /api/courses

Get the courses of a user. For a student, it will be the courses that they have
joined. For a lecturer, it will be the courses that they have created.

### Request

##### Headers:

_Authorization:_ JWT

##### Body:

```ts
type RequestBody = {
  /**
   * query a list starting at the `s + 1`-th course. (0-based index; defaults
   * to 0)
   */
  s?: number;

  /**
   * number of courses to return in a list. If `n` is 0, return ALL courses,
   * skipping the first `s` courses. (defaults to 0)
   */
  n?: number;

  /**
   * the string to search/filter the courses by. Can be a regular expression.
   * For a student, this will search in the order of course name, lecturer name
   * and semester. For a lecturer, this will search for the course name and
   * semester.
   */
  q?: string;

  /**
   * the sort object (key-value pairs) by which to sort the resulting query. The
   * keys are the names of the fields appearing in the Response body (see below)
   * by which to sort. The value of each key is either 1, for ascending, or -1,
   * for descending. Any field not provided in the sort object is not going to
   * be sorted.
   */
  sort?: {
    [field: string]: 1 | -1;
  };
};

const exampleBody: RequestBody = {
  s: 6,
  n: 3,
  q: "java",
  sort: {
    semester: -1,
  },
};
// Query courses that contains the string 'java', sorted by semester in
// descending order and return 3 courses, starting from the 7th course found
```

### Response:

```ts
// Student:
type CoursesOfStudent = Array<{
  _id: string;
  name: string;
  semester: string;
  picture: string;
  lecturer_name: string;
}>;

// Lecturer:
type CoursesOfLecturer = Array<{
  _id: string;
  name: string;
  semester: string;
  picture: string;
  participant_count: number;
}>;
```

_Status code:_ 200

_Error:_

- 400: Bad request body

# [POST] /api/course/`:id`

Join a course by `id`.

### Request headers

_Authorization:_ JWT

### Response:

_Status code:_ 201. (Created)

_Error:_

- 404: Course not found
- 400: Bad request: Teacher cannot not join course

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
