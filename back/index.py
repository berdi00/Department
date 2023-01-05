from src.main import app
from src.config import env
from uvicorn import run


if __name__ == '__main__':
    run(app, host=env['HOST'], port=int(env['PORT']))
