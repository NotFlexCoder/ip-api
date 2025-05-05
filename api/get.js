const fetch = require('node-fetch');

module.exports = async (req, res) => {
  const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  const response = await fetch(`http://ip-api.com/json/${ip}`);
  const data = await response.json();

  const result = {
    ip_address: data.query,
    country: {
      name: data.country,
      code: data.countryCode,
      region: data.regionName,
      city: data.city,
      timezone: data.timezone,
      zip_code: data.zip
    },
    location: {
      latitude: data.lat,
      longitude: data.lon
    },
    internet_service_provider: {
      isp: data.isp,
      organization: data.org,
      as: data.as
    },
    details: {
      continent: "Not available",
      country_code: data.countryCode,
      region_code: data.region,
      city: data.city
    },
    map_links: {
      google_maps: `https://www.google.com/maps/search/?api=1&query=${data.lat},${data.lon}`,
      openstreetmap: `https://www.openstreetmap.org/?mlat=${data.lat}&mlon=${data.lon}&zoom=12`
    }
  };

  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(result));
};