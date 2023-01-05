from ..database import DB
from src.timetable.schema import Timetable


def get_timetable(course: str) -> None:
    id = DB.select('''
        SELECT id FROM course WHERE title = %(title)s
    ''', {'title': course})

    return DB.select('''
        SELECT * FROM timetable WHERE course_id = %(id)s
    ''', {'id': id[0][0]})


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
