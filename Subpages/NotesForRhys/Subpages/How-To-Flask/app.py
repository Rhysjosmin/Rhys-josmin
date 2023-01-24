from flask import Flask
        
app = Flask(__name__)

@app.route('/')
def Home():
    return 'Hello'

if __name__ =='__main__':
    print(app)
    app.run(debug=True)