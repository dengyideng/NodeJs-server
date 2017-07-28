global.BASE_DIR = __dirname;

var http = require('http'),
    fs = require('fs'),
    url = require('url'),
    register = require(__dirname + '/node_modules/register'),
    push = require(__dirname + '/node_modules/push'),
    personInfoChange = require(__dirname + '/node_modules/personInfoChange'),
    sendPostings = require(__dirname + '/node_modules/sendPostings'),
    sendPostingsAction = require(__dirname + '/node_modules/sendPostingsAction'),
    deletePostingsAction = require(__dirname + '/node_modules/deletePostingsAction');

var app = http.createServer(function(req, res){
	console.log(req.url);
	if(url.parse(req.url).pathname == '/'){
		var retHtml = fs.readFileSync(BASE_DIR + '/test.html');
		res.writeHead(200, {'Content-Type' : 'text/html'});
    	res.write(retHtml);
    	res.end();
	}else if(url.parse(req.url).pathname == '/favicon.ico'){
		return;
	}else{

		/*addUser(req, res, function(){
			var userStr = fs.readFileSync(BASE_DIR + '/data/user.json');
		    res.writeHead(200, {'Content-Type' : 'application/json'});
    	    res.write(userStr);
    	    res.end();
		    console.log("now we are in register module!");
		});

		function addUser(req, res, callback){
			register.register(req, res);
			setTimeout(callback, 2000);
		}*/

		//push.push(req, res);

		/*changeInfo(req, res, function(){
			var userStr = fs.readFileSync(BASE_DIR + '/data/user.json');
		    res.writeHead(200, {'Content-Type' : 'application/json'});
    	    res.write(userStr);
    	    res.end();
		    
		});

		function changeInfo(req, res, callback){
			personInfoChange.personInfoChange(req, res);
			setTimeout(callback, 1000);
		}*/

		//sendPostings.sendPostings(req, res);

		//sendPostingsAction.sendPostingsAction(req, res);

		deletePostingsAction.deletePostingsAction(req, res);
	}

}).listen(1337);

console.log('server is running!');