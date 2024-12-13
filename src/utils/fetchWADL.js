const fetch = require('node-fetch');
const { parseStringPromise } = require('xml2js');

const fetchAndFormatWADL = async () => {
  try {
    const url = 'https://sscweb.gsfc.nasa.gov/WS/sscr/2/application.wadl';

    // Fetch the XML data
    const response = await fetch(url);
    const xmlText = await response.text();

    // Parse the XML into a JavaScript object
    const parsed = await parseStringPromise(xmlText);
    console.log(JSON.stringify(parsed, null, 2)); // Pretty-print the JSON object
  } catch (error) {
    console.error('Error fetching or parsing XML:', error);
  }
}

export default fetchAndFormatWADL;
