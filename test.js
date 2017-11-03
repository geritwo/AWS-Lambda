const movies = require('./movies.js').movies;

const requestMockGetList = {
  httpMethod : 'GET',
  pathParameters : {
  },
  body: {

  }
};

const requestMockPost = {
  httpMethod : 'POST',
  pathParameters : {
  },
  body: {
    title: "Alice in Wonderland",
    score: 7.2
  }
};

const requestMockGetID = {
  httpMethod : 'GET',
  pathParameters : {
    id : 4
  },
  body: {
  }
};

const requestMockDELETE = {
  httpMethod : 'DELETE',
  pathParameters : {
    id : 4
  },
  body: {
  }
};

movies(requestMockGetList, null, console.log);
// movies(requestMockPost,null,console.log);
// movies(requestMockGetID,null,console.log);
// movies(requestMockDELETE,null,console.log);
