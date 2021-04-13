import time
from flask import Flask

app = Flask(__name__)

@app.route('/hello')
def hello():
    return {'content' : 'Hello world!'}

@app.route('/')
def home():
    return "<h1>Hello world!<h1>"

