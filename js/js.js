 function  block(){
        var blk=document.getElementById("bg1");
        blk.style.display="block";
		
    }
	 function  none(){
        var blk=document.getElementById("bg1");
        blk.style.display="none";
    }
	

window.onload=function(){
    var oBody=document.getElementById('img_bg');
    var oS=oBody.style;
    function BgChenge(){
		var arr=[1,2,3]
        oS.backgroundImage='url(img/'+(parseInt(Math.random() *(arr.length)))+'.jpg)';
		oS
    };
    function BgPosition(){
        oS.backgroundRepeat='no-repeat';
        oS.backgroundPosition='center';
    };
    function LoadMethod(){
        BgChenge();
        BgPosition()
    };
    setInterval(LoadMethod,3000);
};
