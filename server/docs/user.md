# [PATCH] /api/user/profile

Request

Authorization: Bearer `token`
Body:

## Student

```ts
{
  major: string,
  intake: number,
  phone_number: string

}
```

## Lecturer

```ts
{
  faculty: string,
  phone_number: string
}
```

Response:
200 -> OK
400 -> invalid input

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

# [GET] /api/lecturers?s=`start`&n=`num`

Get all lecturers

- `start`
  query a list starting at the `start + 1`-th lecturer. (0-based index; defaults
  to 0)
- `num`
  number of lecturers to return in a list. If `num` is 0, return ALL lecturers,
  skipping the first `start` lecturers. (defaults to 0)

```ts
type Array< {
  _id: string;
  name: string;
  faculty?: string;
}>;
```

_Status code:_ 200: OK

# [GET] /api/auth/login?redirect=`redirect_path`

## Request

- `redirect_path`  
  the path to redirect to after successful authentication (defaults to all
  courses page path `/courses`).

## Response

Redirect to `redirect_path` with the `access_token` query parameter set to be
the logged in user's access token to be sent with every subsequent requests that
requires authentication. (e.g., redirect to
`/redirect_path?access_token=<token>`)
