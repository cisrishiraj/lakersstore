$("./body") {
	$$("#full"){
	  $("./div[@class='search']") {
	  	  insert_after("ul", class:"menu"){
	  	  insert("li"){
		  	  insert("div"){
								attribute("data-ur-set","toggler");
			  	  insert("div"){
			  	  attribute("data-ur-toggler-component","button"); 
			  	  		insert("a"){
				  	  		inner("SHOP");
			  	  		}

			  	  	}
			  	  move_here("//div[@id='container']/table[@id='mainarea']/tr/td[@id='shop_menu']/div[@id='block-uc_catalog-0']/div[@class='content']/ul"){
			  	   remove_class("menu");
			  	   attribute("data-ur-toggler-component","content");
			  	   $("./li"){
							remove_class("leaf"); 
							remove_class("collapsed");
							remove_class("active-trail");
							add_class("menu_leaf");
							}
			  	  }	
			  }
			  insert("li"){
				  insert("div"){
									attribute("data-ur-set","toggler");
				  	  insert("div"){
				  	  attribute("data-ur-toggler-component","button"); 
				  	  		insert("a"){
					  	  		inner("SHOP BY PLAYER");
				  	  		}

				  	  	}
				  	  move_here("//div[@id='container']/table[@id='mainarea']/tr/td[@id='shop_menu']/div[@id='block-taxonomyblocks-3']/div[@class='content']/ul"){
				  	   remove_class("menu");
				  	   add_class("catalog");
				  	   attribute("data-ur-toggler-component","content");
				  	   $("./li"){
								add_class("menu_leaf");
								}
				  	  }	
				  }
			  }
			  insert("li"){
			  	add_class("gray");
				  insert("div"){
									attribute("data-ur-set","toggler");
				  	  insert("div"){
				  	  attribute("data-ur-toggler-component","button"); 
				  	  		insert("a"){
					  	  		inner("GIFT OPTIONS");
				  	  		}

				  	  	}
				  	  move_here("//div[@id='container']/table[@id='mainarea']/tr/td[@id='shop_menu']/div[@id='block-taxonomyblocks-2']/div[@class='content']/ul"){
				  	   remove_class("menu");
				  	   add_class("catalog");
				  	   attribute("data-ur-toggler-component","content");
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
				  	   remove_class("menu");
				  	   add_class("catalog");
				  	   attribute("data-ur-toggler-component","content");
				  	   $("./li"){
								remove_class("leaf"); 
								remove_class("first");
								remove_class("last");
								add_class("menu_leaf");
								}
				  	  }	
				  }
			  }
	  	  }
	  	  }	
		  insert_after("div",class:"fallow"){
				insert("p"){
				inner("FALLOW US FOR DISCOUNTS ON LAKERS MERCHANDISE");
				}
				move_here("../div[@id='container']/div[@class='promos']/div[@id='block-block-2']/div[@class='content']/p/a"){
				   add_class("face");
				   $("./img"){
				   remove();
				   }
				   insert("img",src:"/_moovweb_local_assets_/images/face.png");
				}
			}
			insert_after("div",class:"banner"){
				insert("img",src:"/_moovweb_local_assets_/images/banner.jpg");
			}
		}
		remove("//div[@id='container']");
		remove("//div[@id='bottomcap']");
	}
	
}