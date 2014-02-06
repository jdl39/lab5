var data = require("../data.json");

exports.addFriend = function(req, res) { 
	var name = req.query.name
	var desc = req.query.description
	var url = "http://lorempixel.com/400/400/people"
	var newFriend = {
		'name' : name,
		'description' : desc,
		'imageURL' : url
	}
	data["friends"].push(newFriend)
	res.render('add', data)
 }