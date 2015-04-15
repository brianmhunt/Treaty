//******************************************************************************************************************
// 
//******************************************************************************************************************

// initialise global variables
	var menu_width = new Array(7);
	var menu_text = new Array(7);
	var menu_link = new Array(7);
	var menu_texttip = new Array(7);
	var topmenu_width = new Array(5);
	var topmenu_text = new Array(5);
	var topmenu_link = new Array(5);
	var topmenu_texttip = new Array(5);

	var cell_padding = 1;
	var cell_border = 0;
	var netscape_pad = 0;
	var bar_width = 10;
	var menu_top = 43;
	var isOpera = /Opera/g;
	var isFirefox = /Firefox/g;
	var isOpera9 = /Opera\/9/g;
	var isNetscape = /Netscape/g;
	var isVersion4 = /Mozilla\/4/g;
	var isSafari = /Safari/g;
	var isMacintosh = /Macintosh/g;
	var menu_enabled = 0;
	var check_if_macintosh = isMacintosh.test(navigator.userAgent);
	var check_if_firefox = isFirefox.test(navigator.userAgent);
	var check_if_safari = isSafari.test(navigator.userAgent);
	var check_if_opera = isOpera.test(navigator.userAgent);
	var check_if_opera9 = isOpera9.test(navigator.userAgent);
	var check_if_netscape = isNetscape.test(navigator.appName);
	var check_if_version4 = isVersion4.test(navigator.userAgent);
	
// global variables for additional home page menus
var tradenegotiationsmenuXpos = 0;
var tradenegotiationsmenuYpos = 0;
var implementationmenuXpos = 0;
var implementationmenuYpos = 0;

// alert(navigator.userAgent + " version" + navigator.appVersion);
//Highlight Table Cells Script-- By Dynamic Drive
//For full source code and more DHTML scripts, visit http://www.dynamicdrive.com
//This credit MUST stay intact for use

var ns6=document.getElementById&&!document.all;
var ie=document.all;

function changeto(e,highlightcolor)
{
	source=ie? event.srcElement : e.target;
	if (source.tagName=="TR"||source.tagName=="TABLE")
		return;
	while(source.tagName!="TD"&&source.tagName!="HTML")
		source=ns6? source.parentNode : source.parentElement;
	if (source.style.backgroundColor!=highlightcolor&&source.id=="hasrollover")
	{
		source.style.backgroundColor=highlightcolor;

	}

}

function contains_ns6(master, slave) 
{ 
//check if slave is contained by master
//	while (slave.parentNode)
//		if ((slave = slave.parentNode) == master)
//			return true;
		return false;
}

function changeback(e,originalcolor)
{
	if (ie&&(event.fromElement.contains(event.toElement)||source.contains(event.toElement)||source.id!="hasrollover")||source.tagName=="TR"||source.tagName=="TABLE")
		return;
	else if (ns6&&(contains_ns6(source, e.relatedTarget)||source.id!="hasrollover"))
		return;
	if (ie&&event.toElement!=source||ns6&&e.relatedTarget!=source)
	{
		source.style.backgroundColor=originalcolor;
	}

}

// end of scripts for highlighting table cells from dynamic drive

// start of scripts for loading the banner menus


// function to return the path of a link depending on which server we are
function get_link(link_name)
{
	var link = wto_string + link_name;
	
	if (wto_dotslash == "") 
	{
		link = link_name.slice(1, link_name.length);
	}
	
	return link;
}
// go to journalist registration if in xmedia
function check_xmedia(link_name)
{
	var link = wto_string + link_name;
	var folder_array = new Array();
	folder_array = this_page.split("/")

	for (var i = 0; i < folder_array.length; i++)
	{
		if (folder_array[i] == "xmedia_e")
		{
			link = "/english/info_e/reg_e.htm";
			break;
		}
		else if (folder_array[i] == "xmedia_f")
		{
			link = "/french/info_f/reg_f.htm";
			break;
		}
		else if (folder_array[i] == "xmedia_s")
		{
			link = "/spanish/info_s/reg_s.htm";
			break;
		}
		else
		{
			if (wto_dotslash == "") 
			{
				link = link_name.slice(1, link_name.length);
			}
		}
	}
	return link;
}


// function to return the path of a link depending on which server we are
function small_text(link_name)
{
	var link = "<span class=\"parasmalltext\">" + link_name + "</span>";
	return link;
}


function load_wto_banner()
{
	document.writeln('<table width="100%" border="0"  cellspacing="0" cellpadding="' + cell_padding + '">');
	document.writeln('<tr height="12">');
	document.writeln('<td  valign="top"><a name="top"></a><p class="menudefaulttext">&nbsp;</p></td></tr><tr height="14"><td><p class="menudefaulttext">&nbsp;</p></td></tr></table>');

}


// function to calculate the left position of each of the second row of menus
function get_menu_left(menu_number)
{

	var window_width = 0;
	var cum_menu_width = 0;
	var menu_left = 0;
	var padding = 0;
	var netscape_constant = 0;

	if ((check_if_macintosh == false) && ((check_if_netscape == true) || (check_if_opera == true)))
	{
		netscape_constant = 18;
	}


	if ((check_if_netscape == true) && (check_if_version4 == true))
	{
		netscape_constant = 20;	
	}

	if (window.innerWidth > 0)
	{
		window_width = window.innerWidth;
	}
	else 
		window_width = document.body.clientWidth;

	padding = (cell_padding + cell_border) * 2; 

	for (var i=menu_number; i<menu_width.length; i++)
	{
		cum_menu_width = cum_menu_width + menu_width[i] + padding;
		if (i < (menu_width.length - 1))
		{
			cum_menu_width = cum_menu_width + bar_width + padding;
		}
	}

	menu_left  = window_width - cum_menu_width - netscape_constant;
	return menu_left;
}


// function to calculate the left position of each of the top row of menus
function get_topmenu_left(menu_number)
{

	var window_width = 0;
	var cum_menu_width = 0;
	var menu_left = 0;
	var padding = 0;
	var netscape_constant = 0;

	if (check_if_netscape == true)
	{ 
		netscape_constant = 1;	
	}


	if ((check_if_netscape == true) && (check_if_version4 == true))
	{
		netscape_constant = 20;	
	}

	if (window.innerWidth > 0)
		window_width = window.innerWidth;

	else 
		window_width = document.body.clientWidth;

	padding = (cell_padding + cell_border) * 2; 

	for (var i=menu_number; i<topmenu_width.length; i++)
	{
		cum_menu_width = cum_menu_width + topmenu_width[i] + padding;
		if (i < (topmenu_width.length - 1))
		{
			cum_menu_width = cum_menu_width + padding;
		}
	}

	menu_left  = window_width - cum_menu_width - netscape_constant;
	return menu_left;
}


