
## 📡 IP INFORMATION API

This is a simple API that provides information about an IP address, including location details such as country, city, ISP, and latitude/longitude. It uses the [ip-api](http://ip-api.com) for retrieving the geolocation data.

## 🚀 Features

- 🔎 Get location details of the client's IP address.
- 🌍 Get geolocation information: country, city, timezone, latitude, longitude, etc.
- 🔄 Get information for any custom IP by passing the `ip` query parameter.

## 📦 Requirements

- Node.js 14+
- `fetch` or any compatible fetch polyfill for Node

## 📡 Usage

### 1. Endpoints

- **GET /api** - Returns information about the client's IP address.
- **GET /search?ip={IP_ADDRESS}** - Returns information about a custom IP address.

### 2. Example Requests

#### Example Request 1: Client IP

```bash
curl "http://localhost:3000/"
```

#### Example Request 2: Custom IP

```bash
curl "http://localhost:3000/search?ip=8.8.8.8"
```

### 3. Example Responses

#### Response for Client IP

```json
{
  "ip_address": "127.0.0.1",
  "country": {
    "name": "United States",
    "code": "US",
    "region": "California",
    "city": "Mountain View",
    "timezone": "America/Los_Angeles",
    "zip_code": "94043"
  },
  "location": {
    "latitude": 37.386,
    "longitude": -122.0838
  },
  "internet_service_provider": {
    "isp": "Google Inc.",
    "organization": "Google LLC",
    "as": "AS15169 Google LLC"
  },
  "details": {
    "continent": "North America",
    "country_code": "US",
    "region_code": "CA",
    "city": "Mountain View"
  },
  "map_links": {
    "google_maps": "https://www.google.com/maps/search/?api=1&query=37.386,-122.0838",
    "openstreetmap": "https://www.openstreetmap.org/?mlat=37.386&mlon=-122.0838&zoom=12"
  }
}
```

#### Error Response (Missing IP)

```json
{
  "error": "IP address is required"
}
```

## 🔍 Code Explanation

- **get.js**: Fetches and returns information about the client's IP address.
- **search.js**: Fetches and returns information about a custom IP address passed as a query parameter.
- **vercel.json**: Defines the Vercel routes and serverless function setup.

## 🛠️ Setup

Watch the following video to learn how to host this API and understand it better 👇

[![Watch the video](https://img.youtube.com/vi/BlRC31IXZfg/hqdefault.jpg)](https://youtu.be/BlRC31IXZfg)

## 📄 License

This project is licensed under the License - see the [LICENSE](https://github.com/NotFlexCoder/ip-api/blob/main/LICENSE) file for details.
