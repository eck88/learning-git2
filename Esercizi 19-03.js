var cons=function(array){
	return function (x){
	var array2= new array2();
	for (var i=0; i<array.length; i++){
		array2.push(array[i](x));	
	}}

	return array2;}


function distl(array){
	var x=array[0];
	var y=array[1];

	var array2=[];
	for (var i=0;i<y.length;i++){
		array2.push([x,y[i]]);
	}

	return array2;
}


function trans(matrix){
	var matrix2=[];
	for(var z=0;z<matrix.length;z++){
		var c=matrix[z];
		var array=[];
		for (var i=0;i< matrix.length;i++){
			array.push(c[i]);
	}
	matrix2.push(array);
}

	return matrix2;
}













































