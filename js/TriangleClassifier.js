var TriangleClassifier = function() {

  this.classify = function(a,b,c) {
  	if (a <= 0 || b <= 0 || c <= 0)
  		throw "not a Triangle";
   	if (a==b && b==c){
  		return "equilateral";
  	}
  	if (a==b || a==c || b==c){
  		return "isosceles";
  	}
    return "scalene";
  	};
};
