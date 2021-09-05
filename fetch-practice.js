// FETCH API PRACTICE / NOTES
// 9/5/21
// Video Tutorial: https://www.youtube.com/watch?v=cuEtnrL9-H0
// Fetch Docs: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
// https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
// https://developer.mozilla.org/en-US/docs/Web/API/fetch


// API to get fake test data we can use
// https://reqres.in/api/users
// https://reqres.in/api/users/1  


// fetch(url[, options]) 
//  Parameters: 
//    1) url (string)     = url string path. ex. 'https://reqres.in/api/users'
//       - can also be a Request object
//    2) options (object) = optional object that has custom settings that you 
//       want to apply thte request (ex. method, headers, body, mode, credential, ...)
//  Return:
//    Promse that resolves to a Response object


// Example 1:
// fetch('https://reqres.in/api/users')
//   .then(res => console.log(res))
// res will be a response object (we can't inspect it directly so see ex 2 below)


// Example 2:
// fetch('https://reqres.in/api/users')
//   .then(res => res.json())          // res.json() will return another promise
//   .then(data => console.log(data))  // data = {} object


// Example 3- fetching user that doesn't exist (404):
// - fetch "always" succeeds
// fetch('https://reqres.in/api/users/23')
//   .then(res => res.json())              // .then still runs even though we got a 404 response!
//   .then(data => console.log(data))    
//   .catch(error =>  console.log(error))  // error does NOT show up!


// Example 4- fetching user that doesn't exist (404), making sure response ok:
// fetch('https://reqres.in/api/users/23')
//   .then(res =>  { 
//     if (res.ok) {
//       console.log('SUCCESS')
//       return res.json();
//     } else {
//       console.log('FAILURE');
//     }
//   })
//   .then(data => console.log(data))    
//   .catch(error =>  console.log(error))  // error does NOT show up!


// Example 5- using optional {} parameter in fetch
// - if making a POST request, need to make sure we set headers to 'Content-Type': 'application/json'
// - can't send JS object to server, need to send JSON by using JSON.stringify(JS obj)
fetch('https://reqres.in/api/users', {
  method: 'POST',                       // create a new user
  headers: {                            // need to tell fetch that you're sending JSON in body to server
    'Content-Type': 'application/json'
  },                  
  body: JSON.stringify({                // need to send body to server as JSON!
    name: 'User 1'
  })
}).then(res =>  { 
    return res.json();
  })
  .then(data => console.log(data))    
  .catch(error =>  console.log(error))  // error does NOT show up!

