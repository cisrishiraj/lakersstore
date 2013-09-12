$("./body") {
	$$("#full"){ 
	    $("./div[@class='search']") { 
	     	insert_after("ul", class:"menu"){
		  	  	insert("li"){
			  	  	insert("div",data-ur-set:"toggler"){
				  	  	insert("div",data-ur-toggler-component:"button"){ 
				  	  		insert("a"){
					  	  		inner("SHOP");
				  	  		}
				  	  	}
				  	  	move_here("//div[@id='container']/table[@id='mainarea']/tr/td[@id='shop_menu']/div[@id='block-uc_catalog-0']/div[@class='content']/ul"){
				  	   	remove_class("menu");
				  	   	attribute("data-ur-toggler-component","content");
				  	   	$("./li"){
							add_class("menu_leaf");
							}
				  	  	}	
				  	}
					insert("li"){
						  	insert("div",data-ur-set:"toggler"){
						  	  	insert("div",data-ur-toggler-component:"button"){
						  	  		insert("a"){
							  	  		inner("SHOP BY PLAYER");
						  	  		}
						  	  	}
						  	  	move_here("//div[@id='container']/table[@id='mainarea']/tr/td[@id='shop_menu']/div[@id='block-taxonomyblocks-3']/div[@class='content']/ul"){
						  	   	attributes(data-ur-toggler-component:"content",class:"catalog");
						  	   		$("./li"){
										add_class("menu_leaf");
									}
						  	  	}	
						  	}
					}
					insert("li"){
					  	add_class("gray");
						  insert("div",data-ur-set:"toggler"){
						  	  insert("div",data-ur-toggler-component:"button"){
						  	  		insert("a"){
							  	  		inner("GIFT OPTIONS");
						  	  		}
						  	  	}
						  	  move_here("//div[@id='container']/table[@id='mainarea']/tr/td[@id='shop_menu']/div[@id='block-taxonomyblocks-2']/div[@class='content']/ul"){
						  	  attributes(data-ur-toggler-component:"content",class:"catalog");
						  	  $("./li"){
										add_class("menu_leaf");
										}
						  	  }	
						  }
					}
					insert("li",class:"gray"){
						insert("div",data-ur-set:"toggler"){
						  	insert("div",data-ur-toggler-component:"button"){
						  	  	insert("a"){
							  	  	inner("HELP OPTIONS");
						  	  	}
						  	}
						  	move_here("//div[@id='container']/div[@id='bottommenu']/div[@id='bottom_col1']/div[@id='block-menu-menu-help-menu']/div[@class='content']/ul"){
					  	   	attributes(data-ur-toggler-component:"content",class:"catalog");
					  	   	$("./li"){
									add_class("menu_leaf");
								}
						  	}	
						}
					} 
		  	  	}
	  	  		insert_after("div",class:"product_listing"){
		  	  	  	move_here("//div[@id='container']/table[@id='mainarea']/tr/td[@id='shopcontent']");
			  	  	insert_after("ul", class:"menu"){
				  	  	insert("li"){
					  	  	insert("div"){ 
						  	  	attribute("data-ur-set","toggler");
							  	insert("div"){
							  	 	attribute("data-ur-toggler-component","button"); 
						  	  		insert("a"){
							  	  		inner("Other Sites");
						  	  		}
							  	}
							  	move_here("//div[@id='container']/div[@id='bottommenu']/div[@id='bottom_col2']/div[@id='block-menu-menu-other-sites1']/div[@class='content']/ul"){
							  	   	remove_class("menu");
							  	   	add_class("catalog");
							  	   	attribute("data-ur-toggler-component","content");
							  	   	$("./li"){
										add_class("menu_leaf");
									}
							  	}
					  	  	}
					  	}
			  	  	}
			  	  	insert("ul", class:"menu"){
			  	  	    add_class("lastmenu");
				  	  	insert("li"){
					  	  	insert("div",data-ur-set:"toggler"){ 
						  	  	insert("div",data-ur-toggler-component:"button"){
						  	  		insert("a"){
							  	  		inner("Other Sites");
						  	  		}
						  	  	}
					  	 	 	move_here("//div[@id='container']/div[@id='bottommenu']/div[@id='bottom_col3']/div[@id='block-menu-menu-other-sites2']/div[@class='content']/ul"){
						  	   	remove_class("menu");
						  	   	add_class("catalog");
						  	   	attribute("data-ur-toggler-component","content");
							  	   	$("./li"){
										add_class("menu_leaf");
									}
						  	  	}
					  	  	}
					  	}
			  	  	}
			  	  remove("//div[@id='container']");
		  		}
	  	  	}	#ul
	    }#Search
	     remove("//div[@id='bottomcap']");
	}
}