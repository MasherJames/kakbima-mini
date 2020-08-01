const geoIpLookUp = (callback) => {
  fetch(`https://ipinfo.io?token=${process.env.REACT_APP_IP_INFO_TOKEN}`)
    .then((response) => response.json())
    .then((data) => {
      const countryCode = data && data.country ? data.country : "";
      callback(countryCode);
    });
};

export { geoIpLookUp };
