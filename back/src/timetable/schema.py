from pydantic import BaseModel


class Timetable(BaseModel):
    one: list[str, 3]
    two: list[str, 3]
    three: list[str, 3]
    four: list[str, 3]
    five: list[str, 3]
    six: list[str, 3]
