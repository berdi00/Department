# Backend

## Request 1

| URL | METHOD |
| :--- | :--- |
| localhost:3001/timetable/{course: string} | GET |

### Example of Request 1

```http
GET localhost:3001/timetable/firstauto
```

## Response 1

```json
[
  1, // id of timetable
  1, // id of course (f.e. 'thirdauto')
  [
    "one",
    "two",
    "three"
  ],
  [
    "one",
    "two",
    "three"
  ],
  [
    "one",
    "two",
    "three"
  ],
  [
    "one",
    "two",
    "three"
  ],
  [
    "one",
    "two",
    "three"
  ],
  [
    "one",
    "two",
    "three"
  ]
]
```

## Request 2

| URL | METHOD |
| :--- | :--- |
| localhost:3001/timetable/{course: string} | POST |

### Example of Request 2

```http
POST localhost:3001/timetable/firstauto
```

### BODY

```json
{
  "one": ["one", "two", "three"], // list of subjects
  "two": ["one", "two", "three"],
  "three": ["one", "two", "three"],
  "four": ["one", "two", "three"],
  "five": ["one", "two", "three"],
  "six": ["one", "two", "three"]
}
```
