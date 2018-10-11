#!/usr/bin/python3.6

from http import server

file_name = "data.json"

def run(server_class=server.HTTPServer, handler_class=server.BaseHTTPRequestHandler, port=3000):
    """Lance le server."""
    print("Lancement du server sur le port {}.".format(port))
    server_address = ('', port)
    httpd = server_class(server_address, handler_class)
    httpd.serve_forever()

class MyHTTPRequestHandler(server.BaseHTTPRequestHandler):

    def do_GET(self):

        self.send_response(200)

        self.send_header('content-type', 'text-json')
        self.send_header('Access-Control-Allow-Origin', '*')
        self.end_headers()

        with open(file_name, "r") as file_object:
            self.wfile.write(file_object.read().encode('utf-8'))

        return

if __name__ == '__main__':
    run(handler_class=MyHTTPRequestHandler)
