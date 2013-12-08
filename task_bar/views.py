from task_bar  import app
from flask import render_template



@app.route('/')
def hello_world():
    users = ["hello world","hello world 1"]
    return render_template("index.html",title="Hello World Title",users=users)