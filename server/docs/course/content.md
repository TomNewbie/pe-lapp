# [DELETE] /api/course/:id/content/:course_content_id

API for delete course content

Request

Cookie: access_token=`<token>`

## Request Body

```ts
{
  remove?: url[]
}
```

## Response

- 200 -> OK
- 404 -> Course not found
- 404 -> Course Content not found
- 403 -> Unauthorized

# [GET] /api/view/:file_path

API for viewing/ downloading the file

# [PATCH] /api/course/:id/content/:course_content_id

API for update course content

Request

Cookie: access_token=`<token>`

## Request Body

```ts
{
  title?: string,
  files?: Array<{
    name: string,
    url: string
  }>,
  body?: string,
  remove?: url[]
}
```

## Response

- 200 -> OK
- 404 -> Course not found
- 404 -> Course Content not found
- 403 -> Unauthorized
- 400 -> Missing information to update

# [POST] /api/content/course/:id

API for create content with specified course id

Request

Cookie: access_token=`<token>`

## Request Body

```ts
{
  title: string,
  body: string,
}
```

## Response

- 200 -> OK
- 404 -> Course not found
- 403 -> Unauthorized
- 400 -> Missing _title, body_

## Multer Error will return error code 400

- 'LIMIT_FILE_SIZE' -> File exceed limit
- 'LIMIT_FILE_COUNT' -> Exceed number of files
- 'LIMIT_FIELD_COUNT' -> Exceed number of fields
- 'LIMIT_UNEXPECTED_FILE' -> File field not match
- File extension ... is not supported

# [GET] /api/course/:id

Get all content from courseId

Request

Cookie: access_token=`<token>`

## Response

200 -> Return json

- Student view

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

- Teacher view

```ts
{
  name: string,
  picture: string,
  semester?: string,
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
