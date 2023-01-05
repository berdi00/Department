from fastapi import FastAPI
from src.timetable.router import timetable_router


app = FastAPI()

app.include_router(timetable_router, prefix='/timetable')
