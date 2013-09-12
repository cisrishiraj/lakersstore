$("./body") {
	$$("#full"){
	   insert_bottom("div", class: "footer")  {
	   	move_here("//div[@id='container']/div[@id='bottommenu']/div[@id='footerarea']")  
	   	insert("div",class:"clear");
	   	insert("ul",class:"social"){
	   	 insert("li"){
	   	   insert("a"){
	   	    attribute("href","#");
	   	    insert("img",src:"/_moovweb_local_assets_/images/you.png");
	   	   }
	   	 }
	   	insert("li"){
	   	   insert("a"){
	   	    attribute("href","#");
	   	    insert("img",src:"/_moovweb_local_assets_/images/pin.png");
	   	   }
	   	 }
	   	 insert("li"){
	   	   insert("a"){
	   	    attribute("href","#");
	   	    insert("img",src:"/_moovweb_local_assets_/images/t.png");
	   	   }
	   	 }
	   	 insert("li"){
	   	   insert("a"){
	   	    attribute("href","#");
	   	    insert("img",src:"/_moovweb_local_assets_/images/f.png");
	   	   }
	   	 }
	   	}

	}
	
}
}
