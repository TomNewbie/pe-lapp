# [DELETE] /api/course/:id/content/:course_content_id

API for delete course content

Request

Cookie: access_token=`<token>`

## Response

200 -> OK
404 -> Course not found
404 -> Course Content not found
403 -> Unauthorized

# [PATCH] /api/course/:id/content/:course_content_id

API for update course content

Request

Cookie: access_token=`<token>`

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

# [POST] /api/course/:id/

API for create content with specified course id

Request

Cookie: access_token=`<token>`

## Request Body

```ts
{
  title: string,
  file?: Array<{
    name: string,
    url: string
  }>,
  body: string,
}
```

## Response

200 -> OK
404 -> Course not found
403 -> Unauthorized
400 -> Missing information to create

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
