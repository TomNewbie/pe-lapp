# [GET] /api/course/:id/participants

Get all participants of a course

Request

Cookie: access_token=`<token>`

## Response

200 -> Return json

```ts
interface GetParticipantsResponse {
  lecturer: {
    _id: string;
    name: string;
    email: string;
    avatar: string;
  };
  students: Array<{
    _id: string;
    name: string;
    email: string;
    avatar: string;
  }>;
}
```

_Error_:

- 404 -> Course not found

# [POST] /api/course/:id/participant/:studentId

Lecturer add a student to their course.

## Request

Cookie: access_token=`<token>`

## Response

204 -> No content
401 -> Unauthorized
404 -> Cannot find course "`id`" created by you
404 -> Student not found on our system (They may not have registered (have not logged in the first time) with our app yet.)
400 -> Already joined

# [DELETE] /api/course/:id/participant/:studentId

Lecturer remove a student from their course.

## Request

Cookie: access_token=`<token>`

## Response

200 -> OK
401 -> Unauthorized
404 -> Cannot find course "`id`" created by you
404 -> Student not found in course
