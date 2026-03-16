from flask import Blueprint, request, jsonify
from extensions import db, bcrypt
from flask_jwt_extended import create_access_token
from models import User

auth_bp = Blueprint("auth", __name__)

# -----------------------------
# Register User
# -----------------------------
@auth_bp.route("/register", methods=["POST"])
def register():
    data = request.get_json()

    email = data.get("email")
    password = data.get("password")

    if not email or not password:
        return jsonify({"message": "Email and password required"}), 400

    # Check if user already exists
    existing_user = User.query.filter_by(email=email).first()

    if existing_user:
        return jsonify({"message": "User already exists"}), 400

    # Hash password
    hashed_password = bcrypt.generate_password_hash(password).decode("utf-8")

    # Create new user
    new_user = User(
        email=email,
        password=hashed_password
    )

    db.session.add(new_user)
    db.session.commit()

    return jsonify({"message": "User registered successfully"}), 201


# -----------------------------
# Login User
# -----------------------------
@auth_bp.route("/login", methods=["POST"])
def login():
    data = request.get_json()

    email = data.get("email")
    password = data.get("password")

    user = User.query.filter_by(email=email).first()

    if user and bcrypt.check_password_hash(user.password, password):

        # Create JWT token
        access_token = create_access_token(identity=user.id)

        return jsonify({
            "message": "Login successful",
            "access_token": access_token
        }), 200

    return jsonify({"message": "Invalid email or password"}), 401