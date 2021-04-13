import time
from flask import Flask

app = Flask(__name__)

@app.route('/')
def home():
    return "<h1>Hello World!</h1>"

@app.route('/hello')
def get_current_time():
    return {'content': "Hello world!"}
