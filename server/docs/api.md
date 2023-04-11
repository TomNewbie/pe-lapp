# [GET] /api/student/`:id`

Get student profile

### Response:

```ts
type StudentType = {
  _id: string;
  email: string;
  name: string;
  avatar: string;
  phone_number?: string | undefined;
  major?: string | undefined;
  intake?: number | undefined;
};
```

_Status code:_ 200 OK

_Error:_

- 404: Not Found

# [GET] /api/lecturer/`:id`

Get lecturer profile

### Response:

```ts
type LecturerType = {
  _id: string;
  email: string;
  name: string;
  avatar: string;
  phone_number?: string | undefined;
  faculty?: string | undefined;
  courses: Array<{ name: string; semester: string }>;
};
```

_Status code:_ 200: OK

_Error:_

- 404: Not Found

# [GET] /api/courses?s=`start`&n=`num`&q=`query`&S=`sort`

Get the courses of a user. For a student, it will be the courses that they have
joined. For a lecturer, it will be the courses that they have created.

- `start`
  query a list starting at the `start + 1`-th course. (0-based index; defaults
  to 0)
- `num`
  number of courses to return in a list. If `num` is 0, return ALL courses,
  skipping the first `start` courses. (defaults to 0)
- `query`
  the string to search/filter the courses by. Can be a regular expression.
  For a student, this will search in the order of course name, lecturer name
  and semester. For a lecturer, this will search for the course name and
  semester.
- `sort`
  the sort string, containing the names of the fields appearing in the Response
  body _(see below)_, by which to sort the resulting query. The sort order of
  each field is ascending unless the field name is prefixed with `-`, which will
  be treated as descending. Multiple field names can appear in a single `sort`
  string, separated by spaces (e.g., `S=-semester%20name` when URL encoded), or
  there can be multiple `sort` strings in the URL query _(see example below)_.
  Any field not provided in the sort string is not going to be sorted.

**Example:** `GET /api/courses?s=6&n=3&q=java&S=-semester&S=name`
Query courses that contains the string 'java', sorted by semester in descending
order and by course name in ascending order, returning 3 courses, starting from
the 7th course found

### Request headers:

Authorization: Bearer `token`

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

_Status code:_ 200: OK

# [POST] /api/course/`:id`

Join a course by `id`.

### Request headers

Authorization: Bearer `token`

### Response:

_Status code:_ 201: Created

_Error:_

- 404: Course not found
- 403: Unauthorize
- 400: Already joined

# [POST] /api/course/

Create a course

Request

Authorization: Bearer `token`

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
  semester: {
    type: String,
    required: true,
  },
}
```

Response:

`Status code 201`. Return with

```ts
{
  courseId: string;
}
```

_Error:_

- 403: Unauthorize
- 400: misisng course name
- 400: missing description name
- 400: missing semester name

Regular expression for semester to make sure it is from (WS|SS) 2010 - 2029 (On progress)

# [PATCH] /api/course/:id

Patch a course

Request

Authorization: Bearer `token`

```ts
{
    name?: {
    type: String,
  },
  description?: {
    type: String,
  },
  picture?: {
    type: String,
  },
  semester?: {
    type: String,
  },
  content?: {
    type: String,
  },
}
```

Response:

_Status code:_ 200

_Error:_

- 404: Course not found
- 403: Unauthorize
- 400: Missing information to update

# [POST] /api/course/:id/:studentId

Request

Authorization: Bearer `token`

Backlog -> use when teacher want to manually add student
https://chat.openai.com/chat/1ab1dd0d-31a9-4394-8d18-6abb67a0c095 (cua tho de xem sau)

## Response

204 -> No content
404 -> Course not found
404 -> Student not found in course
403 -> Unauthorize

# [DELETE] /api/course/:id/:studentId

Request

Authorization: Bearer `token`

Backlog -> use when teacher want to manually delete student they don't like
https://chat.openai.com/chat/1ab1dd0d-31a9-4394-8d18-6abb67a0c095 (cua tho de xem sau)

## Response

200 -> OK
404 -> Course not found
404 -> Student not found in course
403 -> Unauthorized

# [GET] /api/auth/login?redirect=`redirect_url`

## Request

- `redirect_url`  
  the url to redirect to after successful authentication (defaults to all
  courses page).

## Response

Redirect to `redirect_url` with the `access_token` query parameter set to be the
logged in user's access token to be sent with every subsequent requests that
requires authentication. (e.g., redirect to
`/redirect_url?access_token=<token>`)

# Todo :

# [POST] /api/material

Upload material

# [GET] /api/course/:id

Get all content from courseId

Request

Authorization: Bearer `token`

## Response

200 -> Return json

### Student view

```ts
{
  name: string,
  picture: string,
  teacher_name: string,
  contents: Array<{
    title: string;
    file?: Array<{
      name: string;
      url: string;
    }>;
    body: string;
    createdAt: Date;
    updatedAt: Date;
  }>;
}
```

### Teacher view

```ts
{
  name: string,
  picture: string,
  semester: string,
  teacher_name: string,
  contents: Array<{
    title: string;
    file?: Array<{
      name: string;
      url: string;
    }>;
    body: string;
    createdAt: Date;
    updatedAt: Date;
  }>;
}
```

_Error_:

- 404 -> Course not found

# [GET] /api/course/:id/participants

Get all participant

Request

Authorization: Bearer `token`

## Response

200 -> Return json

```ts
{
  teacher: {
    name: string,
    email: string,
    id: string,
    avatar: string
  }
  students: Array<{
    name: string,
    email: string,
    id: string,
    avatar: string
  }>;
}
```

_Error_:

- 404 -> Course not found

# [PATCH] /api/material/:id

Modify material

# [POST] /api/exercise/:id

Upload exercise

# [GET, DELETE, PATCH] /api/exercise

CUD exercise

# [POST] /api/solution

Upload Solution

# [PATCH] /api/user/profile

Request

Authorization: Bearer `token`
Body:

## Student

```ts
  major: string,
  intake: number,
  phone_number: string
```

## Lecturer

```ts
faculty: string, phone_number;
```

Response:
200 -> OK
400 -> invalid input

# [DELETE] /api/course/:id/:course_content_id

API for delete course content

Request

Authorization: Bearer `token`

## Response

200 -> OK
404 -> Course not found
404 -> Course Content not found
403 -> Unauthorized

# [PATCH] /api/course/:id/:course_content_id

API for update course content

Request

Authorization: Bearer `token`

## Request Body

```ts
{
  title?: string,
  file?: Array<{
    name: string,
    url: string
  }>,
  body?: string,
}
```

## Response

200 -> OK
404 -> Course not found
404 -> Course Content not found
403 -> Unauthorized
400 -> Missing information to update

<!-- # [PATCH] /api/course/:id/

API for update course content

Request

Authorization: Bearer `token`

## Request Body

```ts
{
  title?: string,
  file?: Array<{
    name: string,
    url: string
  }>,
  body?: string,
}
```

## Response

200 -> OK
404 -> Course not found
404 -> Course Content not found
403 -> Unauthorized
400 -> Missing information to update -->
