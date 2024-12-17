const options = {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
  },
};

export const getObservatories = async () => {
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "text/xml",
    },
  };
  const response = await fetch(
    "https://sscweb.gsfc.nasa.gov/WS/sscr/2/observatories/",
    options
  );
  const resText = await response.text();
  const resDoc = () => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(resText, "text/xml");
    console.log(doc.documentElement.nodeName);
    return doc;
  };
  console.log(resDoc());
};

export const getLocations = async ({
  observatories,
  timeRange,
  coordinateSystems,
  resolutionFactor,
}) => {
  const response = await fetch(
    `https://sscweb.gsfc.nasa.gov/WS/sscr/2//locations/${observatories}/${timeRange}/${coordinateSystems}/?resolutionFactor=${resolutionFactor}`,
    options
  );
  const data = await response.json();
  return data;
};

export const getSatellites = async (satelliteName) => {
  const response = await fetch(
    `http://tle.ivanstanojevic.me/api/tle?search=${satelliteName}`,
    options
  );
  return await response.json();
};

export const getSatellite = async (satelliteNumber) => {
  const response = await fetch(
    `http://tle.ivanstanojevic.me/api/tle/${satelliteNumber}`,
    options
  );
  return await response.json();
};
