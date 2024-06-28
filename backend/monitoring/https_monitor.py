import requests
from config import HTTPS_URLS

class HTTPSMonitor:
    def check_urls(self):
        results = {}
        for url in HTTPS_URLS:
            response = requests.get(url)
            results[url] = response.status_code
        return results
