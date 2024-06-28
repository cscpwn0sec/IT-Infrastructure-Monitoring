from flask import jsonify

class Metrics:
    def __init__(self):
        self.data = []

    def add_metric(self, name, value):
        self.data.append({"name": name, "value": value})

    def get_metrics(self):
        return jsonify(self.data)
