// Create helper function to automatically convert response to JSON, and add a bit of extra error checking
export function getJSON(url){
    return fetch(url)
        .then(function(response) {
            if (!response.ok) {
                throw Error(response.statusText);
            } else {
                return response.json();
                
            }
        })
        .catch(function(error) {
            console.log(error);
        });
}

export const getLocation = function(options) {
    console.log('get location called');
    return new Promise(function(resolve, reject) {
        navigator.geolocation.getCurrentPosition(resolve, reject, options);
    });
};
 
// getJSON('https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2019-01-01&endtime=2019-02-02');

// console.log(getJSON('https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2019-01-01&endtime=2019-02-02'));