from ping3 import ping
from config import PING_HOSTS

class PingMonitor:
    def check_hosts(self):
        results = {}
        for host in PING_HOSTS:
            results[host] = ping(host)
        return results
