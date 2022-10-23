const http = require('http');

var app = {};

var middlewares = [];
app.use = function use(fn) {
	middlewares.push(fn);
	return this;
};

var run = (function factory() {
	var slice = Array.prototype.slice;
	function fail(err) {
		throw err;
	}
	return function run() {
		var self = this;
		var i = 0;
		var last = arguments[arguments.length - 1];
		var done = 'function' == typeof last && last;
		var args = done
			? slice.call(arguments, 0, arguments.length - 1)
			: slice.call(arguments);

		// next step
		function next(err) {
			if (err) return (done || fail)(err);
			var fn = middlewares[i++];
			var arr = slice.call(args);

			if (!fn) {
				return done && done.apply(null, [null].concat(args));
			}

			arr.push(next);
			fn.apply(self, arr);
		}

		next();

		return this;
	};
})();

app.use(function middleware1(req, res, next) {
	console.log("middleware1");
	next();
})

app.use(function middleware2(req, res, next) {
	console.log("middleware2");
	// Some async task that calls next later.
	setTimeout(next, 1000);
});

app.use(function middleware3(req, res, next) {
	console.log("middleware3");
	res.writeHead(200, {'Content-Type': 'text/plain'});
	res.write('Hello World!');
	res.end();
});

http.createServer(function (req, res) {
	run(req, res);
}).listen(8080);
