# [DELETE] /api/course/:id/content/:course_content_id

API for delete course content

Request

Cookie: access_token=`<token>`

## Response

- 200 -> OK
- 404 -> Course not found
- 404 -> Course Content not found
- 403 -> Unauthorized

# [PATCH] /api/course/:id/content/:course_content_id

API for update course content

Request

Cookie: access_token=`<token>`

Content-Type="multipart/form-data"

## Request Body

```ts
type Body = {
  title?: string;
  body?: string;
  /**
   * remove contain url string of the file that being store on cloud storage
   */
  remove?: string[];
  /**
   * the new File that upload from the user
   */
  files?: File[];
};
```

## Response

- 200 -> OK
- 404 -> Course not found
- 404 -> Course Content not found
- 403 -> Unauthorized
- 400 -> Missing information to update
- 404 -> Wrong content-type header

# [POST] /api/course/:id/content

API for create content with specified course id

Request

Cookie: access_token=`<token>`

Content-Type="multipart/form-data"

## Request Body

```ts
{
  /**
   * the new File that upload from the user
   */
  files: File[],
  title: string,
  body: string,
}
```

## Response

- 200 -> OK
- 404 -> Course not found
- 403 -> Unauthorized
- 404 -> Wrong content-type header
- 400 -> Missing _title, body_

## Multer Error will return error code 400

- 'LIMIT_FILE_SIZE' -> File exceed limit
- 'LIMIT_FILE_COUNT' -> Exceed number of files
- 'LIMIT_FIELD_COUNT' -> Exceed number of fields
- 'LIMIT_UNEXPECTED_FILE' -> File field not match
- File extension ... is not supported

# [GET] /api/course/:id/contents

Get all content from courseId

Request

Cookie: access_token=`<token>`

## Response

200 -> Return json

```ts
{
  Array<{
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
- 404 -> You are not join course `${courseId}`
