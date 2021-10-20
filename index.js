
	
let myImage = document.querySelector('img');

myImage.onclick=function(){
   let mySrc = myImage.getAttribute('src');
   if(mySrc==='https://i.postimg.cc/Kv5p31Nc/I1.jpg'){

   myImage.setAttribute('src','https://i.postimg.cc/6qrj0qx0/I2.jpg');
}

else if(mySrc==='https://i.postimg.cc/6qrj0qx0/I2.jpg'){

   myImage.setAttribute('src','https://i.postimg.cc/mrKmWCbj/I3.jpgs');
}


else{

myImage.setAttribute('src','https://i.postimg.cc/Kv5p31Nc/I1.jpg');

}

}


