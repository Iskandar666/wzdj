window.onload =function(){
	var left=document.getElementById("left");
	var right=document.getElementById("right");
	var imgs=document.getElementById("imgs");
	var ul=document.getElementById("ul");
	
	left.onClick=function(){
			ul.style.left=parseInt(ul.style.left)-1000+'px';
	}
	
	}