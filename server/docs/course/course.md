# [PATCH] /api/course/:id

Patch a course

Request

Authorization: Bearer `token`

```ts
type UpdateCourseFields = {
  name?: string;
  picture?: string;
  semester?: string;
};
```

Response:

_Status code:_ 200

_Error:_

- 404: Cannot find course "`id`" created by you
- 401: Unauthorized

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

- 401: Unauthorized
- 404: Course not found
- 400: Already joined

# [POST] /api/course/

Create a course

Request

Authorization: Bearer `token`

```ts
type NewCourseType = {
  name: string;
  picture?: string;
  semester?: string;
};
```

Response:

`Status code 201`. Return with

```ts
{
  courseId: string;
}
```

_Error:_

- 401: Unauthorized
- 400: Invalid input

Regular expression for semester to make sure it is from (WS|SS) 2010 - 2029 (On progress)
