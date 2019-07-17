module.exports = function createAutoComplete(data) {
	
	return function(input){
		
		let output = [];
		
		for (let i = 0; i < data.length; i++) {
			if (data[i].startsWith(input)) {
				output.push(data[i]);
			}
		}
		return output;
	}
	
}