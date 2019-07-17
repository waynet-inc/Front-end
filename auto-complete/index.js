module.exports = {
  createAutoComplete: function(data) {
	  
	  const f = function solution(input){
		  if (Array.isArray(input) && array.length) {
			  let output = [];
			  for (let i = 0; i < data.length; i++) {
				  if (data[i].toLowerCase().startsWith(input.toLowerCase())) {
					  output.push(data[i]);
					  }
				}
		return output;
		} else { return []; }
	}	
	return f;	  
  }
};