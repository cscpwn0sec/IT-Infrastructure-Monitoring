from flask import Flask
from monitoring.ping_monitor import PingMonitor
from monitoring.https_monitor import HTTPSMonitor
from monitoring.snmp_monitor import SNMPMonitor
from monitoring.os_process_monitor import OSProcessMonitor
from monitoring.bandwidth_monitor import BandwidthMonitor
from reports.health_report import HealthReport
from reports.inventory_report import InventoryReport
from reports.custom_report import CustomReport
from monitoring.alert_manager import AlertManager

app = Flask(__name__)

@app.route('/')
def home():
    return "IT Infrastructure Monitoring API"

@app.route('/ping')
def ping():
    return PingMonitor().check_hosts()

@app.route('/https')
def https():
    return HTTPSMonitor().check_urls()

@app.route('/snmp')
def snmp():
    return SNMPMonitor().check_devices()

@app.route('/os')
def os_process():
    return OSProcessMonitor().check_processes()

@app.route('/bandwidth')
def bandwidth():
    return BandwidthMonitor().check_bandwidth()

@app.route('/health-report')
def health_report():
    return HealthReport().generate_report()

@app.route('/inventory-report')
def inventory_report():
    return InventoryReport().generate_report()

@app.route('/custom-report')
def custom_report():
    return CustomReport().generate_report()

@app.route('/alerts')
def alerts():
    return AlertManager().get_alerts()

if __name__ == '__main__':
    app.run(debug=True)
