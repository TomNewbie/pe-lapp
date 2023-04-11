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
