var key = "";
var data = "";
var multichain = require("multichain-node")({
		port:6282,
		host:'127.0.0.1',
		user:"multichainrpc",
		pass:"somepass"
});

module.exports = {
	putData: function(req, res, next){
		key = req.key;
		data = req.data;
		hexData = "";

		for(var i = 0; var len = data.length; i < len; i++){
			hexData += data.charCodeAt(i).toString(16);
		}

		multichain.publish({stream: stream1, key: key, data: hexData}, (err, res) => {
			console.log(res);
		});

	}
}