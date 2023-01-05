from fastapi import APIRouter
from src.timetable import service
from src.timetable.schema import Timetable


timetable_router = APIRouter()


@timetable_router.get('/{course}')
def get_timetable(course: str):
    return service.get_timetable(course)


@timetable_router.post('/{course}')
def create_timetable(course: str, timetable: Timetable):
    return service.create_timetable(course, timetable)
