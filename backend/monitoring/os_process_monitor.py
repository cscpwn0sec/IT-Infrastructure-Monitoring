import psutil

class OSProcessMonitor:
    def check_processes(self):
        processes = []
        for proc in psutil.process_iter(['pid', 'name']):
            processes.append(proc.info)
        return processes
