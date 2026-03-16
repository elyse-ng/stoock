from flask import Flask
from extensions import db, jwt, bcrypt
from dotenv import load_dotenv
from routes.auth import auth_bp
from routes.portfolio import portfolio_bp
from flask_cors import CORS
import os

load_dotenv()

app = Flask(__name__)

CORS(app)

app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///app.db"
app.config["JWT_SECRET_KEY"] = os.getenv("SECRET_KEY")

db.init_app(app)
jwt.init_app(app)
bcrypt.init_app(app)

app.register_blueprint(auth_bp, url_prefix="/auth")
app.register_blueprint(portfolio_bp, url_prefix="/portfolio")

with app.app_context():
    db.create_all()

if __name__ == "__main__":
    app.run(debug=True)