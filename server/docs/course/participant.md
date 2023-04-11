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

# [POST] /api/course/:id/participant/:studentId

Request

Authorization: Bearer `token`

Backlog -> use when teacher want to manually add student
https://chat.openai.com/chat/1ab1dd0d-31a9-4394-8d18-6abb67a0c095 (cua tho de xem sau)

## Response

204 -> No content
404 -> Course not found
404 -> Student not found in course
403 -> Unauthorize

# [DELETE] /api/course/:id/participant/:studentId

Request

Authorization: Bearer `token`

Backlog -> use when teacher want to manually delete student they don't like
https://chat.openai.com/chat/1ab1dd0d-31a9-4394-8d18-6abb67a0c095 (cua tho de xem sau)

## Response

200 -> OK
404 -> Course not found
404 -> Student not found in course
403 -> Unauthorized
