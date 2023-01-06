from pydantic import BaseModel
from pydantic import Field


class Day(BaseModel):
    lesson_1: str
    lesson_2: str
    lesson_3: str


class Timetable(BaseModel):
    schedule: list[Day] = Field(None, max_items=6, min_items=6)
