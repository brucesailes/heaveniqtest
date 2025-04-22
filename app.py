from flask import Flask, request, session, redirect, url_for, send_from_directory
import smtplib
from email.mime.text import MIMEText
from flask_session import Session
import secrets
from dotenv import load_dotenv
import os

# Load environment variables
load_dotenv()

app = Flask(__name__)

# Secure app session config
app.secret_key = os.getenv('FLASK_SECRET_KEY', secrets.token_hex(32))
app.config['SESSION_TYPE'] = 'filesystem'
Session(app)

### ---------------- FEEDBACK ROUTE ---------------- ###

@app.route('/feedback', methods=['POST'])
def send_feedback():
    user_feedback = request.form.get('user_feedback', '').strip()
    user_email = request.form.get('user_email', '').strip()

    if not user_feedback:
        return "Feedback cannot be empty!", 400

    subject = "User Feedback - Application"
    message_body = f"Feedback from User:\n\n{user_feedback}\n\n"
    if user_email:
        message_body += f"Contact Email: {user_email}\n"

    try:
        msg = MIMEText(message_body)
        msg['Subject'] = subject
        msg['From'] = os.getenv('EMAIL_USERNAME', 'no-reply@yourdomain.com')
        msg['To'] = os.getenv('CREATOR_EMAIL')

        smtp_server = os.getenv('SMTP_SERVER', 'smtp.gmail.com')
        smtp_port = int(os.getenv('SMTP_PORT', 587))
        email_username = os.getenv('EMAIL_USERNAME')
        email_password = os.getenv('EMAIL_PASSWORD')

        with smtplib.SMTP(smtp_server, smtp_port) as server:
            server.starttls()
            server.login(email_username, email_password)
            server.sendmail(msg['From'], [msg['To']], msg.as_string())

        # Redirect to the email sent confirmation page
        return redirect(url_for('success'))
    except Exception as e:
        return f"Error sending feedback: {str(e)}", 500

### ---------------- INVITE + SCORE ROUTES ---------------- ###

@app.route('/clear_session', methods=['GET', 'POST'])
def clear_session():
    session.clear()
    return "Session data cleared!", 200


@app.route('/set_score', methods=['POST'])
def set_score():
    if 'score' in session:
        return f"Score already set to: {session['score']}/33", 200

    score = request.form.get('score', default=0, type=int)
    score = max(0, min(score, 33))
    session['score'] = score

    return f"Score set to: {score}/33", 200


@app.route('/check_answers', methods=['POST'])
def check_answers():
    answer_key = {
        1: "A", 2: "B", 3: "C", 4: "D", 5: "A", 6: "C", 7: "D", 8: "E", 9: "A", 10: "C",
        11: "D", 12: "B", 13: "C", 14: "A", 15: "D", 16: "C", 17: "B", 18: "A", 19: "D", 20: "B",
        21: "C", 22: "A", 23: "D", 24: "B", 25: "C", 26: "A", 27: "D", 28: "B", 29: "C", 30: "A",
        31: "D", 32: "B", 33: "C"
    }

    correct_count = 0
    wrong_questions = []

    for i in range(1, 34):
        answer = request.form.get(str(i), "").strip().upper()
        if answer == answer_key[i]:
            correct_count += 1
        else:
            wrong_questions.append(i)

    session['score'] = correct_count
    session['wrong_questions'] = wrong_questions

    return f"Score calculated: {correct_count}/33", 200


@app.route('/get_score', methods=['GET'])
def get_score():
    stored_score = session.get('score', 0)
    try:
        stored_score = int(stored_score)
    except (ValueError, TypeError):
        stored_score = 0
    return f"Current score: {stored_score}/33", 200


@app.route('/invite', methods=['POST'])
def invite():
    friend_email = request.form.get('friend_email')
    your_name = request.form.get('your_name', '').strip()
    comment = request.form.get('comment', '').strip()

    subject = "You're Invited to Learn More!"
    message_body = f"Hello,\n\n{your_name or 'Anonymous'} has invited you to learn more!\n\n"
    if comment:
        message_body += f"Comment: {comment}\n\n"
    message_body += "Visit: https://heaveniqtest.vercel.app/."

    try:
        msg = MIMEText(message_body)
        msg['Subject'] = subject
        msg['From'] = os.getenv('EMAIL_USERNAME', 'no-reply@yourdomain.com')
        msg['To'] = friend_email

        smtp_server = os.getenv('SMTP_SERVER', 'smtp.gmail.com')
        smtp_port = int(os.getenv('SMTP_PORT', 587))
        email_username = os.getenv('EMAIL_USERNAME')
        email_password = os.getenv('EMAIL_PASSWORD')

        with smtplib.SMTP(smtp_server, smtp_port) as server:
            server.starttls()
            server.login(email_username, email_password)
            server.sendmail(msg['From'], [msg['To']], msg.as_string())

       # Redirect to the email sent confirmation page
        return redirect(url_for('success'))
    except Exception as e:
        return f"Error sending email: {str(e)}", 500
    ### ---------------- SUCCESS ROUTE ---------------- ###

@app.route('/success')
def success():
    # Serve the static success.html page
    return send_from_directory('static', 'success.html')

### ---------------- START SERVER ---------------- ###

if __name__ == '__main__':
    app.run(debug=True, port=5000)
