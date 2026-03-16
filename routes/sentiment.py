from flask import Blueprint, jsonify
import requests
import os
from vaderSentiment.vaderSentiment import SentimentIntensityAnalyzer

sentiment_bp = Blueprint("sentiment", __name__)

NEWS_API_KEY = os.getenv("NEWS_API_KEY")

sia = SentimentIntensityAnalyzer()


@sentiment_bp.route("/<ticker>")
def sentiment(ticker):

    url = f"https://newsapi.org/v2/everything?q={ticker}&apiKey={NEWS_API_KEY}"

    response = requests.get(url)

    if response.status_code != 200:
        return {"error": "news api failed"}

    articles = response.json()["articles"]

    headlines = [article["title"] for article in articles[:5]]

    scores = []

    for headline in headlines:
        score = sia.polarity_scores(headline)["compound"]
        scores.append(score)

    avg_score = sum(scores) / len(scores) if scores else 0

    sentiment_label = "Neutral"

    if avg_score > 0.2:
        sentiment_label = "Bullish"
    elif avg_score < -0.2:
        sentiment_label = "Bearish"

    return jsonify({
        "ticker": ticker,
        "sentiment_score": avg_score,
        "sentiment": sentiment_label,
        "headlines": headlines
    })