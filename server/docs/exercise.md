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

"grade: undefined -> teacher not yet assign point to student"

### Lecturer view

```ts
Array<{
  name: string;
  id: string;
  deadline: Date;
  submission_count: number;
}>;
```

- Error :  
  404 -> Course not found

# [POST] /api/course/:id/exercise

Create an exercise

## Request

- Header  
  Cookie: access_token=`<token>`

  Content-Type="multipart/form-data"

- Body

```ts
{
  name: string;
  deadline: Date;
  files?: File[]
  description: string;
}
```

## Response:

- 200 -> OK
- 404 -> Course not found
- 401 -> Unauthorize (student)
- 400 -> Missing info
- 404 -> Wrong content-type header

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
    // _id: string;
    name: string;
    deadline: Date;
    grade?: number;
    submitted: boolean;
    description: string;
    exercise_files: Array<{
      name: string,
      url: string
    }>;
    solution_files?: Array<{
      name: string,
      url: string
    }>;
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
    submit_time?: Date;
    file?: {
      url: string;
      name: string;
    };
    grade?: number;
  }>;
}
```

The `grade` in lecturer view can be a `number` or `null` (if the teacher not assign grade to student yet).

If the student have not submit the solutions, there will be no attribute `{submit_time, file, grade}`

_Error_:

- 403 -> User not join course to see exercise
- 404 -> Exercise not found

# [PATCH] /api/exercises/:id

Edit exercise by specify id.

## Request

- Header  
  Cookie: access_token=`<token>`

  Content-Type="multipart/form-data"

- Body

```ts
{
  name?: string;
  deadline?: Date;
  description?: string;
  /**
   * remove contain url string of the file that being store on cloud storage
   */
  remove?: string[];
  /**
   * the new File that upload from the user
   */
  files?: File[]
}
```

## Response:

- 200 -> OK
- 404 -> Exercise not found
- 401 -> Unauthorize (student)
- 404 -> Wrong content-type header

# [PATCH] /api/exercises/:id/students/:id

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
- 404 -> Wrong content-type header

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

Submit solution

## Request

- Header  
  Cookie: access_token=`<token>`

  Content-Type="multipart/form-data"

- Body

```ts
{
  files: File[]
}
```

## Response:

- 201 -> OK
- 404 -> Exercise not found
- 404 -> Missing file
- 404 -> Wrong content-type header

# [GET] /api/course/:id/exercises/grade?s=`start`&n=`num`

Get all grades of students in all exercises in the course `:id`

- `start`
  query a list starting at the `start + 1`-th student (0-based index; defaults to 0)
- `num`
  number of students to return in a list. If `num` is 0, return ALL students.

## Request

- Header  
  Cookie: access_token=`<token>`

## Response

- 200 -> Return json
- 401 -> Unauthorized (student)

```ts
{
  /**
   * all exercise name
   */
  exercises: {
    _id: string;
    name: string;
  }[];
  students: {
    name: string;
    id: string;
    /**
     * all the grade corresponding to the exercise
     * the order of grade[] will similar to the exercise_name[]
     * if the grade[i] of exercise_name[i] is not set grade[i] will be null, i is index of the array
     */
    grade: (number | null)[];
  }[]
}
```
