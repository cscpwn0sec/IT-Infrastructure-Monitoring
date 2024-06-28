import psutil

class BandwidthMonitor:
    def check_bandwidth(self):
        io_counters = psutil.net_io_counters(pernic=True)
        return {iface: {'bytes_sent': io.bytes_sent, 'bytes_recv': io.bytes_recv} for iface, io in io_counters.items()}
