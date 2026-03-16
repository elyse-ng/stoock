import unittest
from app import app, db
from models import User
import json

class AuthTestCase(unittest.TestCase):
    def setUp(self):
        app.config["TESTING"] = True
        app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///:memory:"
        self.client = app.test_client()

        with app.app_context():
            db.create_all()

    def tearDown(self):
        with app.app_context():
            db.session.remove()
            db.drop_all()

    def test_register_user(self):
        response = self.client.post("/auth/register", 
            data=json.dumps({
                "email": "testuser",
                "password": "testpass"
            }),
            content_type="application/json"
        )
        self.assertEqual(response.status_code, 201)
        self.assertIn("access_token", json.loads(response.data))

        def test_login_user(self):
            response = self.client.post("/auth/register", 
                data=json.dumps({
                    "email": "testuser",
                    "password": "testpass"
                }),
                content_type="application/json"
            )

            response = self.client.post("/auth/login", 
                data=json.dumps({
                    "email": "testuser",
                    "password": "testpass"
                }),
                content_type="application/json"
            )
            self.assertEqual(response.status_code, 200)
            self.assertIn("access_token", json.loads(response.data))

if __name__ == "__main__":
    unittest.main()