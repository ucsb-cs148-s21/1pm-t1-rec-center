import time
from flask import Flask

app = Flask(__name__, static_folder='./build', static_url_path='/')

@app.route('/hello')
def hello():
    return {'content' : 'Hello world!'}

@app.route('/')
def home():
    return app.send_static_file('index.html')

@app.errorhandler(404)
def not_found(e):
    return app.send_static_file('index.html')
if __name__ == "__main__":
    app.run(host='0.0.0.0', debug=False, port=os.environ.get('PORT',80))