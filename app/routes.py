from app import app
from flask import render_template, request, redirect, url_for


@app.route('/', methods=['GET', 'POST'])
def index():
    return render_template('index.html')


@app.route('/signUp', methods=['GET', 'POST'])
def sign_up():
    return render_template('index.html')
