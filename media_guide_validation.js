var media_guide_validation_action = 'pending_to_perform';
var is_draft = false;

function proceed_anyway(){
    if(is_draft){
        jQuery('.editor-post-save-draft').click();
        is_draft = false;
    } else {
        jQuery('#beforeSaveCheck').hide();
        document.getElementById("post").submit();
    }
}

jQuery(document).ready(function(){ 
	
	// Close Media Guide-o-Matic Alert Popup
	jQuery(document).on('click','.closeicon',function(){
		jQuery('#media-guide-popup').slideUp();
		setTimeout(function(){
			jQuery('body').removeClass('hiddenoverflow');
            jQuery('body').removeClass('publish-draft-post');
            jQuery('body').removeClass('save-as-draft-post');
		}, 1000);
	});
	
	// Set Media Guide-o-Matic Alert Popup
	if (jQuery('#media-guide-popup').length <= 0){
		jQuery('body').append('<div id="media-guide-popup" style="display: none;"></div>');
	}

	jQuery('#media-guide-popup').html('<style type="text/css" media="screen">.hiddenoverflow{overflow:hidden !important;}.overlaybgplugin{background-color: rgba(0, 0, 0, 0.8);position:fixed;width: 100%;height: 100%;left: 0px;top: 0px; z-index: 999999999;}.scrollcontent{position: absolute;left: 0px;top: 0px;/*height:100%;width:100%;*/right: 0px;bottom: 0px;overflow-y: scroll;}.gradientmain{background: #ffc426; /* Old browsers */background: -moz-linear-gradient(left, #ffc426 0%, #ff9e11 100%); /* FF3.6-15 */background: -webkit-linear-gradient(left, #ffc426 0%,#ff9e11 100%); /* Chrome10-25,Safari5.1-6 */background: linear-gradient(to right, #ffc426 0%,#ff9e11 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */filter: progid:DXImageTransform.Microsoft.gradient( startColorstr=\'#ffc426\', endColorstr=\'#ff9e11\',GradientType=1 ); /* IE6-9 */position: absolute;width: 800px;left: 50%;-webkit-transform: translate(-50%, 0px);-moz-transform: translate(-50%, 0px);-o-transform: translate(-50%, 0px);-ms-transform: translate(-50%, 0px);transform: translate(-50%, 0px);-webkit-border-radius: 5px;-moz-border-radius: 5px;border-radius: 5px;margin: 5% 0px;-webkit-box-shadow: 2px 2px 10px 0 rgba(0,0,0,0.5);box-shadow: 2px 2px 10px 0 rgba(0,0,0,0.5);padding: 50px 50px 70px 50px;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;}.closeicon{position: absolute;right: -40px;top: -40px;width: 30px;height: 30px;/*background-color: red;*/cursor: pointer;-webkit-transform: rotate(45deg);-moz-transform: rotate(45deg);-o-transform: rotate(45deg);-ms-transform: rotate(45deg);transform: rotate(45deg);}.closeicon:after{content: \'\';width: 2px;height: 21px;background-color: #ffffff;position: absolute;top: 50%;left: 50%;margin-left: -1px;margin-top: -10px;}.closeicon:before{content: \'\';width: 21px;height: 2px;background-color: #ffffff;position: absolute;top: 50%;left: 50%;margin-left: -10px;margin-top: -1px;}.talk-bubble {position: relative;background-color: #f1f1f1;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;padding: 30px;font-size: 16px;/*font-style: italic;*/ -webkit-border-radius: 25px;-moz-border-radius: 25px;border-radius: 25px;-webkit-box-shadow: 7px 7px 30px 0 rgba(0,0,0,0.3);box-shadow: 7px 7px 30px 0 rgba(0,0,0,0.3);}.border{/*border: 8px solid #666;*/}.round{/*border-radius: 30px;-webkit-border-radius: 30px;-moz-border-radius: 30px;*/}.tri-right.border.btm-left-in:before {display:none;content: \' \';position: absolute;width: 0;height: 0;left: 30px;right: auto;top: auto;bottom: -40px;border: 20px solid;border-color: transparent transparent transparent transparent;}.tri-right.btm-left-in:after{display:none;content: \' \';position: absolute;width: 0;height: 0;left: 38px;right: auto;top: auto;bottom: -20px;border: 12px solid;border-color: #f1f1f1 transparent transparent #f1f1f1;}.mediaplugintitle{font-weight: 700;text-align: center;padding: 0px 0px 25px 0px;font-size: 18px;color: #333333;}table.mediaguidtbl{text-align: left;border-collapse: collapse;}table.mediaguidtbl th{border-collapse: collapse;border: #cccccc 1px solid;text-align: left;font-size: 13px;padding: 5px 10px;background-color: #333333;color:#ffffff;vertical-align: middle;}table.mediaguidtbl td{border-collapse: collapse;border: #cccccc 1px solid;text-align: left;font-size: 13px;padding: 10px;background-color: #fafafa;vertical-align: top;}.ordernotebotom{margin-top: 50px;color: #333333;}.pointsdetaibot{margin:15px 0px 0px 20px;font-size: 12px;padding:0px;list-style-type: disc;}.pointsdetaibot li{padding: 2px 0px;color: #333333;position:relative;padding-left:20px;list-style-position: outside; padding-left: 0;}.pointsdetaibot li a{text-decoration: underline;color: #333333;}.publishanyways{margin-top: 30px;text-align: center;}.publishanyways button{border: #bb7500 2px solid;border-bottom: #bb7500 5px solid;background-color: #d38400;padding: 15px 50px;font-size: 14px;letter-spacing: 1px;font-weight: 700;color: #ffffff;text-transform: uppercase;-webkit-border-radius: 5px;-moz-border-radius: 5px;border-radius: 5px;cursor: pointer;outline: 0px;}.publishanyways button:focus{border-bottom: #bb7500 2px solid;}.lspinner { margin: 0px auto 0; width: 70px; text-align: center;}.lspinner > div { width: 12px; height: 12px; background-color: #333; border-radius: 100%; display: inline-block; -webkit-animation: sk-bouncedelay 1.1s infinite ease-in-out both; animation: sk-bouncedelay 1.1s infinite ease-in-out both;}.lspinner .bounce1 { -webkit-animation-delay: -0.32s; animation-delay: -0.32s;}.lspinner .bounce2 { -webkit-animation-delay: -0.16s; animation-delay: -0.16s;}@-webkit-keyframes sk-bouncedelay { 0%, 80%, 100% { -webkit-transform: scale(0) } 40% { -webkit-transform: scale(1.0) }}@keyframes sk-bouncedelay { 0%, 80%, 100% { -webkit-transform: scale(0); transform: scale(0); } 40% { -webkit-transform: scale(1.0); transform: scale(1.0); }}.loadingwait{font-style: normal;font-size: 11px;letter-spacing: 4px;text-align: center;padding-top: 10px;text-transform: uppercase;}.loadingwait small{font-size: 10px; text-transform: capitalize; letter-spacing: 2px; color: #888888}table.mediaguidtbl td span {margin-bottom:5px;display: inline-block;border: #e2e2e2 1px solid;background-color: white;padding: 5px 10px;margin-right: 8px; border-radius: 3px;} table.mediaguidtbl td ul{margin-top: 15px;padding:0px; margin:10px 0px 0px 0px;font-size: 14px;}  table.mediaguidtbl td ul li{position:relative; padding-left:20px;}table.mediaguidtbl td ul.circle{list-style-type: disc; margin-left: 20px;}table.mediaguidtbl td ul.circle li{list-style-position: outside; padding-left: 0;}table.mediaguidtbl td ul.square li:before{position:absolute;content:"";font-family:FontAwesome;content:"✔";left:0px;font-style:normal;}</style><div class="overlaybgplugin"><div class="scrollcontent"><div class="gradientmain"><div class="closeicon"></div><div class="mediaplugintitle">Media Guide-o-Matic Alert</div><div class="talk-bubble tri-right border round btm-left-in"><div class="talktext"><div id="MediaGuideOMatic_Loader" style="display: none;"><div class="lspinner"> <div class="bounce1"></div> <div class="bounce2"></div> <div class="bounce3"></div></div><div class="loadingwait">Please wait...<br><small>Checking and validating content</small></div></div><table class="mediaguidtbl" cellpadding="0" cellspacing="0" border="0" style="display: none;"><thead><tr><th width="40%">The following words/phrases appear in your story</th><th>Mindset Media Guide recommendation</th></tr></thead><tbody></tbody></table></div></div><div class="ordernotebotom">Other best practices for reporting on mental health:<ul class="pointsdetaibot"><li>Don’t reinforce stereotypes in headlines.</li><li>Strive to include quotes from those affected or others like them. For interview tips, see page 74 of the 2020 <a href="https://drive.google.com/file/d/1vkGMwtowoaj27scHrcZTRMBtEZgsrPYa/view" target="_blank">Mindset guide for reporting on mental health.</a></li><li>Be careful and specific about diagnoses.</li><li>Include professional comment / seek professional advice when needed.</li></ul></div><div class="publishanyways"><button id="media_guide_publish_anyway" onclick="proceed_anyway()">Proceed Anyway</button></div></div></div></div>');
	
	// When classing editor
	var t = false;
	jQuery(document).on('click', '#before_postClassic', function(){
	    jQuery('body').addClass('hiddenoverflow');
	    jQuery('body').addClass('publish-draft-post');
	    
	    if(jQuery('#content_ifr').length){
		    var form_data = {'content': jQuery('#content_ifr').contents().find('#tinymce').html()};
	    }else{
	        var form_data = jQuery('#post').serializeArray();
			form_data = jQuery.param(form_data);
	    }
		ajaxCall(form_data);
	});
	
	jQuery(document).on('click', '#before_post_draftClassic', function(){
	    jQuery('body').addClass('hiddenoverflow');
	    jQuery('body').addClass('save-as-draft-post');
	    
	    if(jQuery('#content_ifr').length){
		    var form_data = {'content': jQuery('#content_ifr').contents().find('#tinymce').html()};
	    }else{
	        var form_data = jQuery('#post').serializeArray();
			form_data = jQuery.param(form_data);
	    }
		ajaxCall(form_data);
	});
	
	jQuery(document).on('click', '.save-as-draft-post #media_guide_publish_anyway', function(){
		media_guide_validation_action = 'publish';
		
		// When classic editor
		jQuery('#post #save-post').click();
		
		// When new editor
		jQuery('.editor-post-publish-panel .editor-post-publish-panel__header-publish-button .editor-post-publish-button__button').click();
		jQuery('.edit-post-header .editor-post-publish-button__button:first').click();
		
		//jQuery(document).on('click', '.closeicon');
		jQuery('.closeicon').click();
	});

	jQuery(document).on('click', '#media_guide_publish_anyway', function(){
		media_guide_validation_action = 'publish';
		
		// When classic editor
		jQuery('#post #publish').click();
		
		// When new editor
		jQuery('.editor-post-publish-panel .editor-post-publish-panel__header-publish-button .editor-post-publish-button__button').click();
		jQuery('.edit-post-header .editor-post-publish-button__button:first').click();
		
		//jQuery(document).on('click', '.closeicon');
		jQuery('.closeicon').click();
	});
	
	// When new editor
	jQuery(document).on('click','#beforePostCheck', function(){ 
	    var form_data = jQuery('.is-root-container').length == 1 ? jQuery('.is-root-container').toArray()[0].innerText : jQuery('.edit-post-text-editor textarea').text();
	    ajaxCall({'content': form_data, 'flag': 'new'});
	});
	
	jQuery(document).on('click','#beforePostCheck2', function(){
	    
	    if(jQuery('.editor-post-publish-button__button').text() == "Update"){
	        var form_data = jQuery('.is-root-container').length == 1 ? jQuery('.is-root-container').toArray()[0].innerText : jQuery('.edit-post-text-editor textarea').text();
	        ajaxCall({'content': form_data, 'flag': 'new'});
	    } else {
	    
    	    jQuery('.edit-post-header__settings > button[aria-expanded="false"]').click();
    	    
    	    jQuery('.editor-post-publish-panel .editor-post-publish-panel__header-publish-button .editor-post-publish-button__button').before('<div id="beforePostCheck" class="components-button">Publish</div>');
    	    jQuery('.editor-post-publish-panel .editor-post-publish-panel__header-publish-button .editor-post-publish-button__button').parent().css('position', 'relative');
        
        	var getCurrentWidth = parseInt(jQuery('.editor-post-publish-panel .editor-post-publish-panel__header-publish-button .editor-post-publish-button__button').width());
        	var getCurrentHeight = parseInt(jQuery('.editor-post-publish-panel .editor-post-publish-panel__header-publish-button .editor-post-publish-button__button').height());
        	var getPublishBtnPosTop = parseInt(jQuery('.editor-post-publish-panel .editor-post-publish-panel__header-publish-button .editor-post-publish-button__button').position().top);
        	var getPublishBtnPosLeft = parseInt(jQuery('.editor-post-publish-panel .editor-post-publish-panel__header-publish-button .editor-post-publish-button__button').position().left);
        	jQuery('#beforePostCheck').css({
        		'opacity':'0',
        		'background-color':'red',
        		'position':'absolute',
        	});
	    }
	});
	
	jQuery(document).on('click','#beforeSaveCheck', function(){
	    if(jQuery('.editor-post-save-draft').length){
	        is_draft = true;
	        var form_data = jQuery('.is-root-container').length == 1 ? jQuery('.is-root-container').toArray()[0].innerText : jQuery('.edit-post-text-editor textarea').text();
	        ajaxCall({'content': form_data, 'flag': 'new'});
	    }
	    jQuery('#beforeSaveCheck').css('left',parseInt(jQuery('.edit-post-header__settings').position().left));
	});
	
	jQuery(document).on('click','.editor-post-switch-to-draft', function(){
	   switch2draft = setInterval(myTimer, 1000);
	});
});

var switch2draf;
function myTimer(){
    if(!jQuery('.editor-post-switch-to-draft').length){
        jQuery('#beforeSaveCheck').show();
	    jQuery('#beforeSaveCheck').css('left',parseInt(jQuery('.edit-post-header__settings').position().left)+15);
	    clearInterval(switch2draft);
    }
}

function ajaxCall(data){ 
    jQuery.ajax({
		url: 'https://karissagall.ca/media-guide/index.php',
		type: 'POST', 
		data: data, 
		dataType: 'JSON', 
		cache: false,
		success: function(response){ 
			jQuery('#publish').parent().find('span').removeClass('is-active');
			jQuery('#publish').removeClass('disabled');
			jQuery('#save-post').parent().find('span').removeClass('is-active');
			jQuery('#save-post').removeClass('disabled');
			if(response.status == 0){
				jQuery('#media-guide-popup').slideUp();
				jQuery('body').removeClass('hiddenoverflow');
				jQuery('.mediaguidtbl tbody').html('');
				media_guide_validation_action = 'publish';
				
				// When classic editor
				jQuery('#post #publish').click();
				jQuery('#post #save-post').click();
				
				// When new editor
				jQuery('.editor-post-publish-panel .editor-post-publish-panel__header-publish-button .editor-post-publish-button__button').click();
		        jQuery('.edit-post-header .editor-post-publish-button__button:first').click();
			}else{	
				jQuery('#media-guide-popup').slideDown();
				jQuery('#MediaGuideOMatic_Loader').show();
				jQuery('.mediaguidtbl').hide();
				jQuery('.mediaguidtbl tbody').html('');

				jQuery('#MediaGuideOMatic_Loader').hide();
				jQuery('.mediaguidtbl').show();
				jQuery('.mediaguidtbl tbody').html(response.html);								
			}
		}, 
		error: function(XMLHttpRequest, textStatus, errorThrown) { 
			jQuery('#publish').parent().find('span').removeClass('is-active');
			jQuery('#publish').removeClass('disabled');
			jQuery('#save-post').parent().find('span').removeClass('is-active');
			jQuery('#save-post').removeClass('disabled');
			media_guide_validation_action = 'error_while_connecting_server';
		}
	});
}

// When new editor
var attr = null;
var idName = null;

jQuery(window).on('load', function(){
    
    setTimeout(function(){
        if(jQuery('#post').length == "0"){
            attr = jQuery('.editor-post-publish-button__button').attr('aria-expanded');
            idName = (typeof attr === typeof undefined || attr === false) ? "beforePostCheck" : "beforePostCheck2";
            jQuery('.editor-post-publish-button__button').before('<div id="'+idName+'" class="components-button">Publish</div>');
        	var getCurrentWidth = parseInt(jQuery('.editor-post-publish-button__button').width());
        	var getCurrentHeight = parseInt(jQuery('.editor-post-publish-button__button').height());
        	var getPublishBtnPosTop = parseInt(jQuery('.editor-post-publish-button__button').position().top);
        	var getPublishBtnPosLeft = parseInt(jQuery('.editor-post-publish-button__button').position().left);
        	jQuery('#'+idName+'').css({
        		'opacity':'0',
        		'background-color':'red',
        		'position':'absolute',
        		'top':getPublishBtnPosTop+'px',
        		'left':getPublishBtnPosLeft+'px',
        	});
        	jQuery('.edit-post-header__settings').prepend('<div id="beforeSaveCheck" class="components-button">Save draft</div>');
        	
        	var draft_buttonwidth = jQuery('#beforeSaveCheck').width();
        	var draft_buttonwidth_pos = parseInt(jQuery('.edit-post-header__settings').position().left);
        	
        	jQuery('#beforeSaveCheck').css({
        		'opacity':'0',
        		'background-color':'red',
        		'position':'absolute',
        		'top':getPublishBtnPosTop+'px',
        		'left':draft_buttonwidth_pos+'px',
        	});
        	
        	if(jQuery('.editor-post-switch-to-draft').length){
        	    jQuery('#beforeSaveCheck').hide();
        	}else{
            	jQuery('#beforeSaveCheck').show();
        	}
        }else{
            jQuery('#publish').parent().css('position','relative');
            jQuery('#publish').before('<div class="button button-primary button-large" id="before_postClassic" style="position:absolute; top:0px; right:0px;opacity:0;">Publish</div>');
            jQuery('#save-post').parent().css('position','relative');
            jQuery('#save-post').before('<div class="button button-primary button-large" id="before_post_draftClassic" style="position:absolute; top:0px; left:0px;opacity:0;padding: 0 11px;">Save Draft</div>');
            
        }
    }, 1500);
    
    
});