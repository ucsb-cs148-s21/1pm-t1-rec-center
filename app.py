import time
from flask import Flask

app = Flask(__name__, static_folder='./build', static_url_path='/')

@app.route('/hello')
def hello():
    return {'content' : 'Hello world!'}

@app.route('/')
def home():
    return "<h1>Hello world!<h1>"

