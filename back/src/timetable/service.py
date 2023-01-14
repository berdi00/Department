from src.database import DB
from src.timetable.schema import Timetable


def get_timetable(course: str) -> list | str:
    result = DB.select(
        '''
            SELECT one, two, three, four, five, six
            FROM timetable t
            INNER JOIN course ON course.id = t.course_id
            WHERE course.title = %(course)s
        ''',
        {"course": course}
    )

    return result[0]


def get_students(course: str) -> list | str:
    result = DB.select(
        '''
            SELECT s.username, s.surname, s.card_id
            FROM students s
            INNER JOIN course ON course.id = s.course_id
            WHERE course.title = %(course)s
        ''',
        {"course": course}
    )

    return result


def create_timetable(course: str, timetable: Timetable) -> None:
    lessons = timetable.schedule

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
        [lessons[0].lesson_1, lessons[0].lesson_2, lessons[0].lesson_3],
        [lessons[1].lesson_1, lessons[1].lesson_2, lessons[1].lesson_3],
        [lessons[2].lesson_1, lessons[2].lesson_2, lessons[2].lesson_3],
        [lessons[3].lesson_1, lessons[3].lesson_2, lessons[3].lesson_3],
        [lessons[4].lesson_1, lessons[4].lesson_2, lessons[4].lesson_3],
        [lessons[5].lesson_1, lessons[5].lesson_2, lessons[5].lesson_3]
    ))
