INSERT INTO course (title) VALUES
    ('firstauto'),
    ('secondauto'),
    ('thirdauto'),
    ('fourthauto'),
    ('firstmecha'),
    ('secondmecha'),
    ('thirdmecha'),
    ('fourthmecha'),
    ('firsteco'),
    ('secondeco'),
    ('thirdeco'),
    ('fourtheco');

-- INSERT INTO timetable (course_id, one, two, three, four, five, six)
-- VALUES
--     (
--         1, '{one, two, three}', '{one, two, three}', '{one, two, three}',
--         '{one, two, three}', '{one, two, three}', '{one, two, three}'
--     ),
--     (
--         2, '{one, two, three}', '{one, two, three}', '{one, two, three}',
--         '{one, two, three}', '{one, two, three}', '{one, two, three}'
--     ),
--     (
--         3, '{one, two, three}', '{one, two, three}', '{one, two, three}',
--         '{one, two, three}', '{one, two, three}', '{one, two, three}'
--     ),
--     (
--         4, '{one, two, three}', '{one, two, three}', '{one, two, three}',
--         '{one, two, three}', '{one, two, three}', '{one, two, three}'
--     );


INSERT INTO students (course_id, username, surname, card_id)
VALUES
    (3, 'Allamyrat', 'Allanurow', 194100),
    (3, 'Ahmet', 'Dadabayew', 194102),
    (3, 'Ahmet', 'Commanow', 194103),
    (3, 'Berdimyrat', 'Nazarow', 194101),
    (3, 'Nikita', 'Titow', 194108),
    (3, 'Merjen', 'Orazberdiyewa', 194106),
    (3, 'Kadyr', 'Kurbanow', 194121),
    (3, 'Dovrangeldi', 'Rahymov', 194107),
    (3, 'Kakamyrat', 'Annayew', 194105),
    (3, 'Myrat', 'Saparow', 194123);
