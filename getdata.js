module.exports.getUserFromJSONData = getUserFromJSONData;

function getUserFromJSONData(error,content){
	if(error) throw(error);

	const position = process.argv[2];

	let data = JSON.parse(content);
	console.log('username-> ' + data[position].username);
}