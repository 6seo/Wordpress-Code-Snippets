<?php
// Register menus
register_nav_menus(
	array(
		'main-nav'		=> __( 'The Main Menu', 'blankslate' ),		// Main nav in header		
	)
);

// The Top Menu
function nort0n_top_nav() {  
	wp_nav_menu(array(
		'container'			=> false,						// Remove nav container
		'menu_id'			=> '',					// Adding custom nav id
		'menu_class'		=> 'menu',	// Adding custom nav class
		'items_wrap'		=> '<ul class="%2$s">%3$s</ul>',
		'theme_location'	=> 'main-nav',					// Where it's located in the theme
		'depth'				=> 5,							// Limit the depth of the nav
		'fallback_cb'		=> false,						// Fallback function (see below)
		'walker'			=> new Topbar_Menu_Walker()
	));
}

// Big thanks to Brett Mason (https://github.com/brettsmason) for the awesome walker
class Topbar_Menu_Walker extends Walker_Nav_Menu {
	function start_lvl(&$output, $depth = 0, $args = Array() ) {
		$indent = str_repeat("\t", $depth);
		$output .= "\n$indent<ul class=\"sub-menu\">\n";
	}
}

// Header Fallback Menu
function nort0n_main_nav_fallback() {
	wp_page_menu( array(
		'show_home'		=> true,
		'menu_class'	=> '',		// Adding custom nav class
		'include'		=> '',
		'exclude'		=> '',
		'echo'			=> true,
		'link_before'	=> '',		// Before each link
		'link_after'	=> ''		// After each link
	));
}

// Footer Fallback Menu
function nort0n_footer_links_fallback() {
	/* You can put a default here if you like */
}
