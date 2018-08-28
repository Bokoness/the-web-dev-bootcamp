let request = require("request");

/*  params: 
    err - every error that occurs will store in err param, its important to chack for errors in function
    body - the data the api sends back 
*/
request('http://www.google.com', (error, response, body) => {
    if(error)  {
        console.log('something went wrong');
        console.log(error);
    } else {
        if(response.statusCode == 200) {
            //things worked!
            console.log(body);
        };
    };
});