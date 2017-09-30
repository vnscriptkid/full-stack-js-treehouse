1 - Home Route
  http.createServer(function(req, res){  
    homeRoute(req, res);
  }).listen(3000);
  
  function homeRoute(req, res){
    if(req.url === '/'){
      res.write('Header\n');
      res.write('Search\n');
      res.end('Footer\n');
    }
    
  }
2 - User Route

3 - Populating User Information

