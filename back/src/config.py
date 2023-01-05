from dotenv import dotenv_values
from os import getcwd


env = dotenv_values(f'{getcwd()}/.env')
