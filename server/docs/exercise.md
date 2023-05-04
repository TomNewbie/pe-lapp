# [GET] /api/course/:id/exercises

Get all exercise from a specific course

Cookie: access_token=`<token>`

## Response

- 200 -> Return json

### Student view

```ts
Array<{
  name: string;
  id: string;
  deadline: Date;
  grade?: number;
  submitted: boolean;
}>;
```

### Lecturer view

```ts
Array<{
  name: string;
  id: string;
  deadline: Date;
  submission_count: number;
  participant_count: number;
}>;
```

- Error :  
  404 -> Course not found

# [POST] /api/course/:id/exercise

Create an exercise

## Request

- Header  
  Cookie: access_token=`<token>`

- Body

```ts
{
  name: string;
  deadline: Date;
  files?: Array<{
    name: string,
    url: string
  }>,
  description: string;
}
```

## Response:

- 200 -> OK
- 404 -> Course not found
- 401 -> Unauthorize (student)
- 400 -> Missing info

# [GET] /api/exercises/:id

Get exercise detail by id

## Request

- Header  
  Cookie: access_token=`<token>`

## Response

- 200 -> Return json

- Student view

```ts
{
    name: string;
    deadline: Date;
    grade?: number;
    submitted: boolean;
    description: string;
    exercise_files: Array<string>;
    solution_files: Array<string>;
}
```

- Lecturer view

```ts
{
  name: string;
  deadline: Date;
  description: string;
  exercise_files: Array<string>;
  solutions: Array<{
    student: {
      name: string;
      id: string;
    };
    submit_time: Date;
    file: {
      url: string;
      name: string;
    };
    grade?: number;
  }>;
}
```

_Error_:

- 403 -> User not join course to see exercise
- 404 -> Exercise not found

# [PATCH] /api/exercises/:id

Edit exercise by specify id. **Not modify files yet**

## Request

- Header  
  Cookie: access_token=`<token>`

- Body

```ts
{
  name?: string;
  deadline?: Date;
  description?: string;
  files?: Array<{
    name: string,
    url: string
  }>,
  remove?: url[]
}
```

## Response:

- 200 -> OK
- 404 -> Exercise not found
- 401 -> Unauthorize (student)

# [POST] /api/exercises/:id/students/:id

Add grade for student solution

## Request

- Header  
  Cookie: access_token=`<token>`

- Body

```ts
{
  grade: number; // grade from [0, 100]
}
```

## Response:

- 201 -> OK
- 404 -> Solution not found
- 401 -> Unauthorize (student)

# [DELETE] /api/exercises/:id

Delete exercise by id. All student solution related to that exercise will be deleted 😿

## Request

- Header  
  Cookie: access_token=`<token>`

## Response:

- 200 -> OK
- 404 -> Exercise not found
- 401 -> Unauthorize

# [POST] /api/exercises/:id/

Add solution
Create an exercise

## Request

- Header  
  Authorization: Bearer `token`

- Body

```ts
{
  files: Array<{
    name: string;
    url: string;
  }>;
}
```

## Response:

- 201 -> OK
- 404 -> Exercise not found
- 401 -> Unauthorize (student)
- 404 -> Missing file
