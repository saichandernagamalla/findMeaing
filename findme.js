document.getElementsByTagName("body")[0].addEventListener("dblclick", showCoords);
document.getElementsByTagName("body")[0].addEventListener("click", remove);
var sEle,gflag;

function showCoords(event) {
	
	sEle=event.path[0];
	gflag=0;
	var enter=0;
	
	var prenode=document.getElementById("ext");
	if(prenode==null);
		
	else{
		
		sEle.removeChild(prenode);
		prenode=null;
	}
	
	var node = document.createElement("div");
    
	var word=((document.getSelection(event).toString()).trim()).toLowerCase();
	
	if(word!="" && gflag==0){
		var url='https://api.pearson.com/v2/dictionaries/ldoce5/entries?headword='+word;
	fetch(url)
	  .then(function(response) {
		return response.json();
	  })
	  
	  .then(function(myJson) {
		var i;
		var flag=0;
		enter=1;
		for(i=0;i<Object.keys(myJson.results).length && gflag==0;i++)
		{
			try{
				if(myJson.results[i].headword.toString().toLowerCase()===word && myJson.results[i].senses[0].definition){
					var str=myJson.results[i].senses[0].definition;
					
					var textnode = document.createTextNode(str);
					node.appendChild(textnode);
					sEle.appendChild(node);
					gflag=1;
					flag=1;
					break;
				}
			}
			catch(err){}
		}
		if(flag==0)
		{
			for(i=0;i<Object.keys(myJson.results).length && gflag==0;i++)
			{
				try{
					if((word.includes(myJson.results[i].headword.toString()) || (myJson.results[i].headword.toString()).includes(word)) && myJson.results[i].senses[0].definition){
						var str=myJson.results[i].senses[0].definition;
						
						var textnode = document.createTextNode(str);
						node.appendChild(textnode);
						sEle.appendChild(node);
						flag=1;
						gflag=1;
						break;
					}
				}
				catch(err){}
			}
		}
	  });
	}
	
	if(word!="" && gflag==0){
		var url='https://api.pearson.com/v2/dictionaries/laad3/entries?headword='+word;
		fetch(url)
			.then(function(response){
				return response.json();
			})
			.then(function(myJson){
				var i;
				var flag=0;
				enter=1;
				for(i=0;i<Object.keys(myJson.results).length && gflag==0;i++)
				{
					try{
						if(myJson.results[i].headword.toString().toLowerCase()===word && myJson.results[i].senses[0].definition){
							var str=myJson.results[i].senses[0].definition;
							
							var textnode = document.createTextNode(str);
							//textnode.style.fontSize="medium";
							node.appendChild(textnode);
							sEle.appendChild(node);
							gflag=1;
							flag=1;
							break;
						}
					}
					catch(err){}
				}
				if(flag==0)
				{
					for(i=0;i<Object.keys(myJson.results).length && gflag==0;i++)
					{
						try{
							if((word.includes(myJson.results[i].headword.toString()) || (myJson.results[i].headword.toString()).includes(word)) && myJson.results[i].senses[0].definition){
								var str=myJson.results[i].senses[0].definition;
								
								var textnode = document.createTextNode(str);
								//textnode.style.fontSize="medium";
								node.appendChild(textnode);
								sEle.appendChild(node);
								flag=1;
								gflag=1;
								break;
							}
						}
						catch(err){}
					}
				}
			});
	}
	
	if(word!="" && gflag==0){
		var url='https://api.pearson.com/v2/dictionaries/lasde/entries?headword='+word;
		fetch(url)
			.then(function(response){
				return response.json();
			})
			.then(function(myJson){
				var i;
				var flag=0;
				enter=1;
				for(i=0;i<Object.keys(myJson.results).length && gflag==0;i++)
				{
					try{
						if(myJson.results[i].headword.toString().toLowerCase()===word && myJson.results[i].senses[0].definition){
							var str=myJson.results[i].senses[0].definition;
							
							var textnode = document.createTextNode(str);
							//textnode.style.fontSize="medium";
							node.appendChild(textnode);
							sEle.appendChild(node);
							gflag=1;
							flag=1;
							break;
						}
					}
					catch(err){}
				}
				if(flag==0)
				{
					for(i=0;i<Object.keys(myJson.results).length && gflag==0;i++)
					{
						try{
							if((word.includes(myJson.results[i].headword.toString()) || (myJson.results[i].headword.toString()).includes(word)) && myJson.results[i].senses[0].definition){
								var str=myJson.results[i].senses[0].definition;
								
								var textnode = document.createTextNode(str);
								//textnode.style.fontSize="medium";
								node.appendChild(textnode);
								sEle.appendChild(node);
								flag=1;
								gflag=1;
								break;
							}
						}
						catch(err){}
					}
				}
			});
	}
	
	if(word!="" && gflag==0){
		var url='https://api.pearson.com/v2/dictionaries/ldec/entries?headword='+word;
		fetch(url)
			.then(function(response){
				return response.json();
			})
			.then(function(myJson){
				var i;
				var flag=0;
				enter=1;
				for(i=0;i<Object.keys(myJson.results).length && gflag==0;i++)
				{
					try{
						if(myJson.results[i].headword.toString().toLowerCase()===word && myJson.results[i].senses[0].definition){
							var str=myJson.results[i].senses[0].definition;
							
							var textnode = document.createTextNode(str);
							//textnode.style.fontSize="medium";
							node.appendChild(textnode);
							sEle.appendChild(node);
							gflag=1;
							flag=1;
							break;
						}
					}
					catch(err){}
				}
				if(flag==0)
				{
					for(i=0;i<Object.keys(myJson.results).length && gflag==0;i++)
					{
						try{
							if((word.includes(myJson.results[i].headword.toString()) || (myJson.results[i].headword.toString()).includes(word)) && myJson.results[i].senses[0].definition){
								var str=myJson.results[i].senses[0].definition;
								
								var textnode = document.createTextNode(str);
								node.appendChild(textnode);
								sEle.appendChild(node);
								flag=1;
								gflag=1;
								break;
							}
						}
						catch(err){}
					}
				}
			});
	}
	
	if(word!="" && gflag==0){
		var url='https://api.pearson.com/v2/dictionaries/wordwise/entries?headword='+word;
		fetch(url)
			.then(function(response){
				return response.json();
			})
			.then(function(myJson){
				var i;
				var flag=0;
				enter=1;
				for(i=0;i<Object.keys(myJson.results).length && gflag==0;i++)
				{
					try{
						if(myJson.results[i].headword.toString().toLowerCase()===word && myJson.results[i].senses[0].definition){
							var str=myJson.results[i].senses[0].definition;
							
							var textnode = document.createTextNode(str);
							node.appendChild(textnode);
							sEle.appendChild(node);
							gflag=1;
							flag=1;
							break;
						}
					}
					catch(err){}
				}
				if(flag==0)
				{
					for(i=0;i<Object.keys(myJson.results).length && gflag==0;i++)
					{
						try{
							if((word.includes(myJson.results[i].headword.toString()) || (myJson.results[i].headword.toString()).includes(word)) && myJson.results[i].senses[0].definition){
								var str=myJson.results[i].senses[0].definition;
								
								var textnode = document.createTextNode(str);
								node.appendChild(textnode);
								sEle.appendChild(node);
								flag=1;
								gflag=1;
								break;
							}
						}
						catch(err){}
					}
				}
			});
	}
	
	node.style.background='#0070d2';//'#f7cac9';
	node.style.position="absolute";
	node.setAttribute("id","ext");
	node.style.color='black solid';
	node.style.color='#f4f6fe';
	node.style.padding=10+'px';
	node.style.borderRadius="1px 10px 10px";
	node.style.border='1px solid';
	node.style.boxShadow="2px 2px 5px 5px #888888";
	
	node.style.zIndex=999999;
}

function remove(event){
	
	var node=document.getElementById("ext");
	if(node==null);
		
	else{
		
		sEle.removeChild(node);
		node=null;
		sEle=null;
	}
	return;
}