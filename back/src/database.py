from psycopg2.pool import SimpleConnectionPool
from psycopg2 import Error
# import logging
# from psycopg2.extras import LoggingConnection
from src.config import env


# logging.basicConfig(level=logging.DEBUG)
# logger = logging.getLogger(__name__)

pool = SimpleConnectionPool(
    1,
    20,
    user=env['DB_USER'],
    password=env['DB_PASSWORD'],
    host=env['DB_HOST'],
    database=env['DB_DATABASE']
)


class DB:
    @staticmethod
    def execute(query: str, params: tuple):
        connection = pool.getconn()
        cursor = connection.cursor()

        try:
            cursor.execute(query, params)
            connection.commit()
        except (Exception, Error) as error:
            print(error)
        finally:
            cursor.close()
            pool.putconn(connection)

    @staticmethod
    def select(query: str, params: tuple) -> list:
        connection = pool.getconn()
        cursor = connection.cursor()
        results: list = None

        try:
            cursor.execute(query, params)
            results = cursor.fetchall()
        except (Exception, Error) as error:
            print(error)
        finally:
            cursor.close()
            pool.putconn(connection)

            return results
