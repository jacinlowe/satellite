const options = {
  method: 'GET',
  headers: {
    'Content-Type' : 'application/json'
  }
}

export const getObservatories = async () => {
  const response = await fetch('https://sscweb.gsfc.nasa.gov/WS/sscr/2/observatories/', options)
  console.log(response)
}

export const getLocations = async ({observatories, timeRange, coordinateSystems, resolutionFactor}) => {
  const response = await fetch(`https://sscweb.gsfc.nasa.gov/WS/sscr/2//locations/${observatories}/${timeRange}/${coordinateSystems}/?resolutionFactor=${resolutionFactor}`, options)
  const data = await response.json();
  return data;
}

