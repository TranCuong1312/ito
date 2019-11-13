var url = "https://github.com/TranCuong1312/ito/blob/master/main.json";
 
 
function doGetJSON()  {
 
  // Call fetch(url) with default options.
  // It returns a Promise object:
  var aPromise = fetch(url);
 
  // Work with Promise object:
  aPromise
    .then(function(response) {
        console.log("OK! Server returns a response object:");
        console.log(response);
 
        if(!response.ok) {
           throw new Error("HTTP error, status = " + response.status);
        }
 
        // Get TEXT Promise object from response object:
        var name = response.text();
        return name;
    })
    .then(function(name) {
        console.log("OK! TEXT:");
        console.log(name);
 
        var myJSON = null;
 
        if(name != null && name.trim().length > 0)  {
            myJSON = JSON.parse(name);
        }
        console.log("OK! JSON:");
        console.log(myJSON);
    })
    .catch(function(error)  {
        console.log("Noooooo! Something error:");
        console.log(error);
    });
 
}