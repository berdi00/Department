CREATE TABLE course (
    id SERIAL PRIMARY KEY,
    title VARCHAR UNIQUE NOT NULL
);

CREATE TABLE students (
    id SERIAL PRIMARY KEY,
    course_id INT NOT NULL,
    username VARCHAR NOT NULL,
    surname VARCHAR NOT NULL,
    card_id INT NOT NULL,

    CONSTRAINT course_id
        FOREIGN KEY (course_id)
            REFERENCES course(id)
                ON UPDATE CASCADE
);

CREATE TABLE timetable (
    id SERIAL PRIMARY KEY,
    course_id INT NOT NULL,
    one VARCHAR[3] NOT NULL,
    two VARCHAR[3] NOT NULL,
    three VARCHAR[3] NOT NULL,
    four VARCHAR[3] NOT NULL,
    five VARCHAR[3] NOT NULL,
    six VARCHAR[3] NOT NULL,

    CONSTRAINT course_id
        FOREIGN KEY (course_id)
            REFERENCES course(id)
                ON UPDATE CASCADE
);