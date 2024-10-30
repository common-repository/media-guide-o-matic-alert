=== Media Guide-O-Matic Plugin ===
Contributors: karissagall, flewid
Donate link: 
Tags: Word, Replace
Requires at least: 3.3
Tested up to: 5.8
Stable tag: 2.0.5
License: GPLv2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html

The purpose of the plugin is to help journalists ensure their reporting does not contribute to stigma around mental illness. 

== Description ==

The Media Guide-o-Matic plugin works to automate media guides.


Similar to how spellcheck automatically checks for spelling mistakes, Media Guide-o-Matic automatically checks draft post content for words and phrases that go against the best practices outlined in existing media guides.

The plugin saves time for journalists who publish their work on WordPress and helps them improve their reporting.

Currently, the plugin works to automate one media guide: the Mindset Media Guide for reporting on mental health. It checks draft post content for words and phrases that Mindset identifies as contributors to stigma around mental illness.

For example, if you type the phrase “committed suicide” into WordPress with the plugin installed, when you hit either “Save Draft” or “Publish” the plugin sends your post content to our server where it is validated. In this example, the plugin would send back an alert that Mindset advises against using that phrase, because it implies illegality or moral failing. The alert also suggests alternative phrases.

Alerts and advice for words and phrases related to suicide, mental illness and violence, schizophrenia, review board hearings, addiction and more are included.

The plugin does NOT save your data. Web calls go out to 
“http://karissagall.ca/media-guide-o-matic-alert/index.php” where the administration interface is located for us to manage the words and phrases.

If there are no words or phrases in your draft post that go against the best practices outlined in the guide, the plugin does… nothing!

Media Guide-o-Matic is not a full replacement for media guides like Mindset, but it is a free tool that you can use to improve your reporting.

== Installation ==

1. Download the Zip File of the plugin to your local directory from the wordpress plugin site.

2. Connect to your Wordpress site via FTP or SCP

3. On the FTP / SCP site navigate to /wp-content/plugins 

4. Upload the folder "media-guide" to the /wp-content/plugins folder, so it looks like /wp-content/plugins/media-guide 

5. Now login to wordpress, and enable the wordpress 'media-guide' plugin. 

== Screenshots == 

1. View of the popup when you add a word that should be analyzed.

== Frequently asked questions ==

Q. Why does this connect to your server?

A. So we can compare your writing to our list of words and send back an appropriate response.

Q. What if there is a word missing? 

A. You can submit it to me and I'll add it to the list. Please email me here: KarissaGall@cmail.carleton.ca

== Changelog ==

12/31/2017 - Initial Release
01/02/2018 - Updated some CSS
01/14/2018 - Updated URL to pull from proper server
01/14/2018 - Updated stable tag and contributors
01/15/2018 - Added Screenshot, Plugin Banner and Plugin Icon
01/20/2018 - Updated description, updated plugin name, updated logo, updated FAQ 
04/05/2021 - Updated to support newer block editor and other minor edits. Updated README.
04/14/2021 - Updated versioning, and some additional updates. 
04/20/2021 - Updated screenshot.
04/27/2021 - Updated some validation methods
08/02/2021 - Updates to JQuery Validation Function
08/20/2021 - Updates to code for using block editor, and classic editor. Fixed popup and multi word checks.
