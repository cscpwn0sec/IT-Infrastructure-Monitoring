import requests

class WebhookNotifier:
    def __init__(self, url):
        self.url = url

    def send_notification(self, message):
        payload = {'text': message}
        requests.post(self.url, json=payload)
