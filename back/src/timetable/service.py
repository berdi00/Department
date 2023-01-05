from ..database import DB
from src.timetable.schema import Timetable


def get_timetable(course: str) -> list:
    id = DB.select('''
        SELECT id FROM course WHERE title = %(title)s
    ''', {'title': course})

    result = DB.select('''
        SELECT * FROM timetable WHERE course_id = %(id)s
    ''', {'id': id[0][0]})

    return result[0]


def create_timetable(course: str, timetable: Timetable) -> None:
    id = DB.select('''
        SELECT id FROM course WHERE title = %(title)s
    ''', {'title': course})

    raw = '''
        INSERT INTO timetable (
            course_id, one, two, three, four, five, six
        ) VALUES (
            %s, %s, %s, %s, %s, %s, %s
        )
    '''

    DB.execute(raw, (
        id[0][0],
        timetable.one,
        timetable.two,
        timetable.three,
        timetable.four,
        timetable.five,
        timetable.six
    ))
