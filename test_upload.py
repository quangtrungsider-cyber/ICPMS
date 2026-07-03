import requests
import json

url = "http://localhost:8765/ocr/upload"
files = {'file': ('dummy.pdf', open('dummy.pdf', 'rb'), 'application/pdf')}

print("Sending request to", url)
try:
    response = requests.post(url, files=files)
    print("Status Code:", response.status_code)
    try:
        print("Response JSON:", response.json())
    except:
        print("Response Text:", response.text)
except Exception as e:
    print("Request failed:", e)
