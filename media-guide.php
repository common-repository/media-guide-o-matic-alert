<?php 
/**
 * Plugin Name: Media Guide-o-Matic Alert
 * Plugin URI: https://www.flewid.ca/
 * Version: 2.0.5
 * Author: Flewid Inc
 * Author URI: https://www.flewid.ca/
 * Description: A plugin to validate restricted words in Post/Page.
 * License: GPL2
 */

Class Flewid_Media_Guide_Class{
	function __construct(){
		if(is_admin()){ 
			add_action('init', array(&$this, 'setup_media_guide_plugin'));
		} 
	}

	// Check if the current user can edit Posts or Pages, and is using the Visual Editor If so, add some filters so we can register the plugin
	function setup_media_guide_plugin (){
		// Check if the logged in WordPress User can edit Posts or Pages
		// If not, don't register the plugin

		if(!current_user_can('edit_post') && !(current_user_can('edit_pages')))
			return;

		// Add JavaScripts
		wp_enqueue_script('jquery');
		wp_enqueue_script('media_guide_validation_js', plugin_dir_url(__FILE__) . 'media_guide_validation.js');
	}
}

$Flewid_Media_Guide = new Flewid_Media_Guide_Class();
