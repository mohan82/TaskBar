from task_bar  import app
from flask import render_template



@app.route('/')
def hello_world():
    users = ["hello world","hello world 1"]
    return render_template("index.html",title="Hello World Title",users=users)


@app.route('/position')
def positioning():
    return  render_template("position.html",title="Positioning");

@app.route('/foodbox')
def foodbox():
	return render_template("foodbox.html",title="FoodBox WebSite");