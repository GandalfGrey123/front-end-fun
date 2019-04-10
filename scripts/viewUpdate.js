var accordionDescriptions = {
	'homepage':{
	  projects:"Hello my name is Marcus Wong, welcome to my website where you can learn more about me, my software and art projects. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
   	  code:"hello",
   	  about:"in the bio section you will find my resume and briefy summary of who I am",
	},

	'code':{
	},
	
	'projects':{
	},	
	
	'contact':{
		email:"email",
		phone:"phone"
	},

	'bio':{
	}
}

var accordionButtonSection = document.getElementsByClassName('accordion-buttons');
var panel = document.getElementsByClassName('accordionPanel');
var panelParagraph = document.getElementById('accordionDescription');
var showing = ""

function loadPage(page){
 var keys = Object.keys(accordionDescriptions[page])
 keys.forEach(function(key){
 	let nextButton = document.createElement("button");
 	nextButton.setAttribute('id', key);

 	nextButton.addEventListener("click", function() {
  	if(showing == this.id){
  	 panel[0].style.visibility = "hidden";
	 panel[0].style.width = '0%';
	 panel[0].style.height = '0%';	 
	 showing = ""
  	}else{
  	 panel[0].style.visibility = "visible";
	 panel[0].style.width = '100%';
	 panel[0].style.height = '100%';	
  	 showing = this.id
  	}	
    panelParagraph.innerHTML = accordionDescriptions[page][this.id]
  });
 	let span = document.createElement("span");
 	span.appendChild(document.createTextNode("/ "));
	accordionButtonSection[0].appendChild(span);

 	nextButton.appendChild(document.createTextNode(key));
 	accordionButtonSection[0].appendChild(nextButton);	   
 });
}

 
