from task_bar.web import app


@app.route('/')
def hello_world():
    return 'Hello World!'

