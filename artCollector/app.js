const BASE_URL = 'https://api.harvardartmuseums.org';
const KEY = 'apikey=121c9dba-d718-4029-8850-92b9f083d3b8';

async function fetchObjects() {
    const url = `${ BASE_URL }/object?${ KEY }`;
  
    try {
      const response = await fetch(url);
      const data = await response.json();
  
      return data;
    } catch (error) {
      console.error(error);
    }
  }

async function fetchAllCenturies() {
    const url = `${ BASE_URL }/century?${ KEY }&size=100&sort=temporalorder`;
   
    if (localStorage.getItem('centuries')) {
        const newData = JSON.stringify(records)
        return JSON.parse(localStorage.getItem('centuries'));
      }

   try {
    const response = await fetch(url);
    const data = await response.json();
    const records = data.records;
    localStorage.setItem('centuries', records)
       return records;
   } catch (error) {
       console.error(error);
   }
}

fetchAllCenturies();
fetchAllCenturies();
fetchObjects().then(x => console.log(x));