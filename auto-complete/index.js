module.exports = {
	createAutoComplete: function(data) {
		return function(input) {
			
			let output = [];
			
			if (Array.isArray(data) && data.length && input && input.length) {
				let str = input.toLowerCase();
				for (let i = 0; i < data.length; i++) {
					if (data[i].toLowerCase().startsWith(str)) {
						output.push(data[i]);
					}
				}
				return output;
			}
			return output;
		}  
	}
};