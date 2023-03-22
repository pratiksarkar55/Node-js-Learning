const url = require('url');

const myurl = new URL('http://mywebsite.com:8000/hello.html?id=100&status=active');

//Gives normal URL
console.log(myurl.href);
console.log(myurl.toString());

//host or domain name
console.log(myurl.host);
//host or domain name without port number
console.log(myurl.hostname);

//Pathname
console.log(myurl.pathname);

//serializedquery
console.log(myurl.search);

//params object
console.log(myurl.searchParams);

//append params
myurl.searchParams.append('abc','123');
console.log(myurl.href);
