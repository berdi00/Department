from fastapi import APIRouter
from src.timetable import service
from src.timetable.schema import Timetable


timetable_router = APIRouter()


@timetable_router.get('/{course}')
def get_timetable(course: str) -> list | str:
    return service.get_timetable(course)


@timetable_router.get('/group/{course}')
def get_students(course: str) -> list | str:
    return service.get_students(course)


@timetable_router.post('/{course}')
def create_timetable(course: str, timetable: Timetable):
    return service.create_timetable(course, timetable)
