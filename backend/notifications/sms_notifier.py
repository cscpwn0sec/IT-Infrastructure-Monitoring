from twilio.rest import Client

class SMSNotifier:
    def __init__(self, account_sid, auth_token, from_number):
        self.client = Client(account_sid, auth_token)
        self.from_number = from_number

    def send_sms(self, to_number, message):
        self.client.messages.create(
            body=message,
            from_=self.from_number,
            to=to_number
        )
