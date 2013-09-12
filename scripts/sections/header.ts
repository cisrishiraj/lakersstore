$('./body') {
	$$("#full"){
		add_class("wrap");
		insert_top("div",class:"search"){
				move_here("../div[@id='container']/div/div[@id='block-search-0']/div[@class='content']"){
					add_class("S-bg")
					move_here("../div[@id='container']/div/div[@id='block-search-0']/div[@class='content']/form[@id='search-block-form']");
				}
		}
		$$("#search-block-form"){
			move_here("//div/div[@class='container-inline']/div[@class='form-item']/input[@id='edit-search-block-form-1']"){
				add_class("s-flid");
		    }
			move_here("//div/div[@class='container-inline']/input[@id='edit-submit']"){
				add_class("s-btn");
			}
			move_here("//div/div[@class='container-inline']/input[@name='form_build_id']");
			move_here("//div/div[@class='container-inline']/input[@name='form_id']");
			$$("div"){
				remove();
			}
		}
		move_here(".//div[@id='header']","top");
		$$("#header"){
			add_class("header");
			$$("#logo"){
				add_class("logo");
				$(".//img"){
					attributes(src: "/_moovweb_local_assets_/images/logo.jpg", width: "", height: "")
				}
			}
			$$("#header_right"){
				remove("./div[@id='headlines']");
			}
			insert("ul", class: "list-1"){
				insert("li"){
				 	insert("a",href:"/search"){
					 	insert("img", src:"/_moovweb_local_assets_/images/search.png" )
				 	}
				}
				insert("li", class: "bdr"){
		    	insert("div",data-ur-set:"toggler"){
						insert("div",data-ur-toggler-component:"button"){
							insert("img",src:"/_moovweb_local_assets_/images/list.png")
						}
						move_here("//div[@id='container']/div[@id='mainnav']/div[@id='block-menu-primary-links']/div[@class='content']/ul[@class='menu']"){
							attribute("class", "menur")
							attribute("data-ur-toggler-component","content");
							$("./li"){
								attribute("class", "menur_leaf")
							}
						}
					}
				}
				insert("li", class: "bdr"){
					move_here("//div[@id='topnav']/ul/li[@class='checkout']/a","top"){
					remove_text_nodes();
						insert("img", src:"/_moovweb_local_assets_/images/cart.png");
					}
					insert("span");
				}
			}
			remove("./div[@id='header_right']");
		}
	}
}