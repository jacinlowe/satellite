
const NASA_API = process.env["NASA_API_URL"]??"";

export const response = async() => {
    const res = await fetch(NASA_API);
    console.log(res);
} 

console.log(response)


export const TLE_API = "http://tle.ivanstanojevic.me"
const TLE_ENDPOINTS =(satQuery:string) => `/api/tle?search=${satQuery}`