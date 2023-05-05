# [GET] /api/user/info

## Request header

Cookie: access_token=`<token>`

## Response

```ts
{
  _id: string;
  name: string;
  role: "student" | "lecturer";
}
```

_Status code:_ 200 OK

_Error:_

- 500 Internal Server Error

# [PATCH] /api/user/profile

Request

Cookie: access_token=`<token>`
Body:

## Student

```ts
{
  major?: string,
  intake?: number,
  phone_number?: string
}
```

## Lecturer

```ts
{
  faculty?: string,
  phone_number?: string
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
  phone_number?: string;
  major?: string;
  intake?: number;
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
  phone_number?: string;
  faculty?: string;
  courses: Array<{ name: string; semester?: string }>;
};
```

_Status code:_ 200: OK

_Error:_

- 404: Not Found

# [GET] /api/lecturers?s=`start`&n=`num`

Get all lecturers, sorted alphabetically by name in ascending order.

- `start`
  query a list starting at the `start + 1`-th lecturer. (0-based index; defaults
  to 0)
- `num`
  number of lecturers to return in a list. If `num` is 0, return ALL lecturers,
  skipping the first `start` lecturers. (defaults to 0)

```ts
Array<{
  _id: string;
  name: string;
  faculty?: string;
}>;
```

_Status code:_ 200: OK

# [GET] /api/auth/login?redirect=`redirect_path`

Redirect the user to the Google OAuth page for logging into their account.

## Request

- `redirect_path`  
  the path to redirect to after successful authentication (defaults to `/`).

## Response

Set the `access_token` cookie to be the logged in user's access token to be sent
with every subsequent requests that requires authentication. Then redirect to
`redirect_path`.
