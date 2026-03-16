from flask import Blueprint, request, jsonify
from flask_jwt_extended import jwt_required, get_jwt_identity
from extensions import db
from models import Portfolio

portfolio_bp = Blueprint("portfolio", __name__)


# Add stock to portfolio
@portfolio_bp.route("/add_stock", methods=["POST"])
@jwt_required()
def add_stock():

    data = request.get_json()
    user_id = get_jwt_identity()

    ticker = data.get("ticker")
    shares = data.get("shares")

    new_stock = Portfolio(
        ticker=ticker,
        shares=shares,
        user_id=user_id
    )

    db.session.add(new_stock)
    db.session.commit()

    return jsonify({"message": "Stock added to portfolio"}), 201


# View portfolio
@portfolio_bp.route("/", methods=["GET"])
@jwt_required()
def view_portfolio():

    user_id = get_jwt_identity()

    stocks = Portfolio.query.filter_by(user_id=user_id).all()

    result = []

    for stock in stocks:
        result.append({
            "ticker": stock.ticker,
            "shares": stock.shares
        })

    return jsonify(result)