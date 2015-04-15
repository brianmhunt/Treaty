/*HM_Loader.js
* by Peter Belesis. v4.3 020610
* Copyright (c) 2002 Peter Belesis. All Rights Reserved.
*/

function doSearch(search_term, search_page)
{
	document.forms['BannerForm'].action = search_page;
	document.forms['BannerForm'].submit();
//	search_term = escape(document.forms['BannerForm'].elements[10].value);
//	document.forms['BannerForm'].action = search_page + search_term;
//	document.forms['BannerForm'].submit();
}

	var total_menu_width = 0;
	var menu_text_style = "";
	var folder_array = new Array();
	var not_index = false;
	var banner_image = "";
	var search_page = "";
	var search_fields = "";
	var search_value = "";
	var search_term ="";
	var bgRollColour = "";
// set up english arrays	
	var menu_width_e = [0, 50, 59, 75, 60, 65, 110];
	var menu_text_e = ["", "THE&nbsp;WTO", "WTO&nbsp;NEWS", "TRADE&nbsp;TOPICS", "RESOURCES", "DOCUMENTS", "COMMUNITY/FORUMS"];
	var menu_link_e = ["", "/english/thewto_e/thewto_e.htm", "/english/news_e/news_e.htm", "/english/tratop_e/tratop_e.htm", "/english/res_e/res_e.htm", "/english/docs_e/docs_e.htm", "/english/forums_e/forums_e.htm"];
	var menu_texttip_e = ["", "About the institution. Read and download introductions to the WTO. Vacancies. Etc", "Find out what's been happening in the WTO", "Trade in goods, services, intellectual property. Disputes. Development. Environment. Regionalism. Government procurement. Etc.", "Analysis, statistics, publications, downloads, links, etc", "Find and download official documents", "Chat about WTO issues, participate in forums. Info for media and NGOs"];
	var topmenu_width_e = [0, 60, 84, 60, 65];
	var topmenu_text_e = ["", "search", "on this site", "register", "contact us"];
	var topmenu_link_e = ["", "/english/info_e/search_e.htm", "/english/info_e/site_e.htm", "/english/info_e/reg_e.htm", "/english/info_e/cont_e.htm"];
	var topmenu_texttip_e = ["", "Search the WTO site", "Guide to using this site - site map", "Register to receive info on updates by email", "How to contact the WTO"];
// set up french arrays	
//	var menu_width_f = [0, 45, 63, 78, 70, 73, 104];
	var menu_width_f = [0, 47, 71, 72, 76, 75, 72];
	var menu_text_f = ["", "L&rsquo;OMC", "NOUVELLES", "DOMAINES", "RESSOURCES", "DOCUMENTS", "ECHANGES"];
	var menu_link_f = ["", "/french/thewto_f/thewto_f.htm", "/french/news_f/news_f.htm", "/french/tratop_f/tratop_f.htm", "/french/res_f/res_f.htm", "/french/docs_f/docs_f.htm", "/french/forums_f/forums_f.htm"];
	var menu_texttip_f = ["", "Présentation de l&#146;institution, Lire et télécharger les textes de présentation de l&#146;OMC, Avis de vacance, etc", "Découvrir ce qui se passe à l&#146;OMC", "Commerce des marchandises (droits de douane, agriculture, antidumping, etc), Services, Propriété intellectuelle, Différends, Développement, Environnement, Régionalisme, Marchés publics, etc", "Analyses, statistiques, publications, fichiers à télécharger, liens, etc", "Chercher et télécharger des documents officiels", "Discuter des questions relatives à l&rsquo;OMC, participer à des forums. Infos pour la presse et les ONG"];
	var topmenu_width_f = [0, 80, 80, 96, 100];
	var topmenu_text_f = ["", "recherche", "sur ce site", "enregistrement", "contactez-nous"];
	var topmenu_link_f = ["", "/french/info_f/search_f.htm", "/french/info_f/site_f.htm", "/french/info_f/reg_f.htm", "/french/info_f/cont_f.htm"];
	var topmenu_texttip_f = ["", "Faire des recherches sur le site", "Guide d&#146;utilisation et plan du site", "Recevoir des infos sur les mises à jour par courrier électronique", "Comment contacter l&#146;OMC"];

// set up spanish arrays	
	var menu_width_s = [0, 41, 51, 113, 56, 71, 102];
	var menu_text_s = ["", "LA&nbsp;OMC", "NOTICIAS", "TEMAS&nbsp;COMERCIALES", "RECURSOS", "DOCUMENTOS", "COMUNIDAD/FOROS"];
	var menu_link_s = ["", "/spanish/thewto_s/thewto_s.htm", "/spanish/news_s/news_s.htm", "/spanish/tratop_s/tratop_s.htm", "/spanish/res_s/res_s.htm", "/spanish/docs_s/docs_s.htm", "/spanish/forums_s/forums_s.htm"];
	var menu_texttip_s = ["", "Presentación de la OMC:  la institución. Consulta y descarga de los artículos de presentación de la OMC. Avisos de vacante. Etc.", "Hacer clic aquí para pasar a la página de noticias de la OMC", "Comercio de mercancías (aranceles, agricultura, textiles, antidumping, etc.), Servicios, Propiedad Intelectual,  Diferencias,  Desarrollo,  Medio Ambiente,  Regionalismo,  Contratación Pública, etc.", "Análisis, estadísticas, publicaciones, descarga de documentos, enlaces, etc.", "Búsqueda y descarga de documentos oficiales", "Charlas sobre cuestiones relativas a la OMC. Participación en foros. Servicios a los medios de comunicación y las ONG"];
	var topmenu_width_s = [0, 74, 94, 66, 100];
	var topmenu_text_s = ["", "b&uacute;squeda", "en este sitio", "registro", "para contactarnos"];
	var topmenu_link_s = ["", "/spanish/info_s/search_s.htm", "/spanish/info_s/site_s.htm", "/spanish/info_s/reg_s.htm", "/spanish/info_s/cont_s.htm"];
	var topmenu_texttip_s = ["", "B&uacute;squeda en el sitio Web de la OMC", "Guía para la utilización de este sitio, plano", "Registro para recibir por correo electrónico la información actualizada del sitio", "Cómo ponerse en contacto con la OMC"];
var wto_othermenu_arrays;
var wto_dotslash;
var not_defined;
var page_width = 670;

if (wto_dotslash === not_defined)
{
	wto_dotslash = "http://www.wto.org/";
}

	switch(wto_language)
	{
		case 'e':
		page_width = 670;
		menu_width = menu_width_e;
		menu_text = menu_text_e;
		menu_link = menu_link_e;
		menu_texttip = menu_texttip_e;
		topmenu_width = topmenu_width_e;
		topmenu_text = topmenu_text_e;
		topmenu_link = topmenu_link_e;
		topmenu_texttip = topmenu_texttip_e;
//		search_page = "http://www.wto.org/english/info_e/search_results_e.asp?SearchItem=";
		search_page = "http://search.wto.org/search";
		search_value = "Search";
        search_fields = "<input type=\"hidden\" name=\"site\" value=\"English_website\"/><input type=\"hidden\" name=\"client\" value=\"english_frontend\"/><input type=\"hidden\" name=\"proxystylesheet\" value=\"english_frontend\"/>";
		break;

		case 'f':
		page_width = 670;
		menu_width = menu_width_f;
		menu_text = menu_text_f;
		menu_link = menu_link_f;
		menu_texttip = menu_texttip_f;
		topmenu_width = topmenu_width_f;
		topmenu_text = topmenu_text_f;
		topmenu_link = topmenu_link_f;
		topmenu_texttip = topmenu_texttip_f;
	//	search_page = "http://www.wto.org/french/info_f/search_results_f.asp?SearchItem=";
		search_page = "http://search.wto.org/search";
		search_value = "Recherche";
        search_fields = "<input type=\"hidden\" name=\"site\" value=\"French_website\"/><input type=\"hidden\" name=\"client\" value=\"frontend_french\"/><input type=\"hidden\" name=\"proxystylesheet\" value=\"frontend_french\"/>";
		break;


		case 's':
		page_width = 670;
		menu_width = menu_width_s;
		menu_text = menu_text_s;
		menu_link = menu_link_s;
		menu_texttip = menu_texttip_s;
		topmenu_width = topmenu_width_s;
		topmenu_text = topmenu_text_s;
		topmenu_link = topmenu_link_s;
		topmenu_texttip = topmenu_texttip_s;
//		search_page = "http://www.wto.org/spanish/info_s/search_results_s.asp?SearchItem=";
		search_page = "http://search.wto.org/search";
		search_value = "Buscar";
        search_fields = "<input type=\"hidden\" name=\"site\" value=\"Spanish_website\"/><input type=\"hidden\" name=\"client\" value=\"spanish_frontend\"/><input type=\"hidden\" name=\"proxystylesheet\" value=\"spanish_frontend\"/>";
		break;
	}	
	var main_menu_width = 0;
	for (w = 0; w < menu_width.length; w++)
	{
		main_menu_width = main_menu_width + menu_width[w];
	}
	folder_array = this_page.split("/")

	for (var i = 0; i < folder_array.length; i++)
	{
		if ((folder_array[i] == "english") || (folder_array[i] == "french") || (folder_array[i] == "spanish"))
		{
			not_index = true;
			break
		}
	}
	if ((wto_menu_column != 0) || (wto_topmenu_column != 0))
	{
		not_index = true;
	}

	if (window.innerWidth > 0)
	{
		display_width = window.innerWidth;
	}
	else 
		display_width = document.body.clientWidth;

	if ((display_width > page_width) && (document.layers || document.all || document.getElementById))
	{
		menu_enabled = 1;
	}
	if ((check_if_opera == true) && (check_if_opera9 == false))
	{
		menu_enabled = 0;
	}
	if (not_index == true)
	{
		if (display_width < (525 + main_menu_width)) 
		{
			bgRollColour = "#E6E0D1";
		}
		else
		{
			bgRollColour = "";
		}
		if (((navigator.userAgent.indexOf("Firefox") != -1) && (navigator.userAgent.indexOf("Macintosh") == -1)) || (navigator.userAgent.indexOf("Netscape") != -1))
		{
			banner_image = wto_string + "/images/newsite/img_banner_brown_76px.jpg";
		}
		else if ((navigator.userAgent.indexOf("Opera") != -1) || ((navigator.userAgent.indexOf("Firefox") != -1) && (navigator.userAgent.indexOf("Macintosh") != -1)) || (navigator.userAgent.indexOf("Safari") != -1))
		{
			banner_image = wto_string + "/images/newsite/img_banner_brown_60px.jpg";
		}
		else
		{
			banner_image = wto_string + "/images/newsite/img_banner_brown.jpg";
		}
	}
	else
	{
		if (display_width < (525 + main_menu_width)) 
		{
			bgRollColour = "#18497B";
		}
		else
		{
			bgRollColour = "";
		}
		if (((navigator.userAgent.indexOf("Firefox") != -1) && (navigator.userAgent.indexOf("Macintosh") == -1)) || (navigator.userAgent.indexOf("Netscape") != -1))
		{
			banner_image = wto_string + "/images/newsite/img_banner_blue_76px.jpg";
		}
		else if ((navigator.userAgent.indexOf("Opera") != -1) || ((navigator.userAgent.indexOf("Firefox") != -1) && (navigator.userAgent.indexOf("Macintosh") != -1)) || (navigator.userAgent.indexOf("Safari") != -1))
		{
			banner_image = wto_string + "/images/newsite/img_banner_blue_60px.jpg";
		}
		else
		{
			banner_image = wto_string + "/images/newsite/img_banner_blue.jpg";
		}
	}


document.write("<div id=\"bannerpic\" style=\"position:absolute; top:0px; left:175px; visibility:visible; z-index:0\"><img src=\"" + banner_image +"\" align=\"left\" border=\"0\" /></div>");
	
// write top row of menu items on page
	document.writeln('<div id="bannertext" style="position:absolute; top:0px; left:175px; visibility:visible; z-index:2"><table width=\"' + (document.body.clientWidth - 175) + '\" background-color="' + bgRollColour + '" border="0"  cellspacing="0" cellpadding="' + cell_padding + '" onmouseover="changeto(event,' + "'#E5E5E5'" + ')" onmouseout="changeback(event, ' + "'" + bgRollColour + "'" + ')">');
//	document.writeln('<form name="BannerForm" action="' + search_page + '" method="POST" onSubmit="doSearch(search_term, search_page);return false" ><INPUT TYPE="HIDDEN" NAME="submitted" VALUE="' + search_value + '" /><INPUT TYPE="HIDDEN" NAME="DocAuthorRestriction" VALUE="" /><INPUT TYPE="HIDDEN" NAME="FSRest" VALUE=" &lt; " />'); 
//    document.writeln('<INPUT TYPE="HIDDEN" NAME="FSRestVal" VALUE="any" /><INPUT TYPE="HIDDEN" NAME="FSRestOther" VALUE="" /><INPUT TYPE="HIDDEN" NAME="FMMod" VALUE="any" /><INPUT TYPE="HIDDEN" NAME="FMModDate" VALUE="" />'); 
//    document.writeln('<INPUT TYPE="HIDDEN" NAME="SortBy" VALUE="rank[d],filename" /><INPUT TYPE="HIDDEN" NAME="ColChoice" VALUE="1" /><INPUT TYPE="HIDDEN" NAME="Scope" VALUE="/" /><tr height="12">');
	document.writeln('<form name="BannerForm" action="' + search_page + '" method="GET">');
    document.writeln(search_fields);
    document.writeln('<input type="hidden" name="output" value="xml_no_dtd"/>');
    document.writeln('<input type="hidden" name="numgm" value="5"/>');
	document.writeln('<input type="hidden" name="proxyreload" value="1"/>');
	document.writeln('<input type="hidden" name="ie" value="ISO-8859-1"/>');
	document.writeln('<input type="hidden" name="oe" value="ISO-8859-1"/>');
	document.writeln('<tr height="12">');
//document.writeln('<td valign="top" colspan="' + ((menu_width.length * 2) - 1) + '" align="right" id="ignore"><a name="top"></a><input type="text" name="SearchString" size="15" maxlength="100" VALUE="" class="parasmalltext">');
	document.writeln('<td valign="top" colspan="' + ((menu_width.length * 2) - 1) + '" align="right" id="ignore"><a name="top"></a><input type="text" name="q" size="15" maxlength="100" VALUE="" class="parasmalltext">');
 	for (var h=1; h<topmenu_text.length; h++)
	{
		if (wto_topmenu_column == h)
			menu_text_style = "menubluetext";
		else 
			menu_text_style = "menuredtext";

// option if menu enabled
		if (menu_enabled == 1)
		{
			if (h==1)
			{
				document.writeln('<a href="" onClick="doSearch(search_term, search_page);return false" class="' + menu_text_style + '" onMouseOver="HM_f_PopUp(' + "'HM_Menu1" + h + "', event)" + '" onMouseOut="HM_f_PopDown(' + "'HM_Menu1" + h + "')" + '">' + topmenu_text[h] + '</a>');		
			}
			else if (h == 3)
			{
				document.writeln('<a href="' + check_xmedia(topmenu_link[h]) + '" class="' + menu_text_style + '" onMouseOver="HM_f_PopUp(' + "'HM_Menu1" + h + "', event)" + '" onMouseOut="HM_f_PopDown(' + "'HM_Menu1" + h + "')" + '">' + topmenu_text[h] + '</a>');	
			}
			else
			{
//			document.writeln('<a href="' + wto_string + topmenu_link[h] + '" class="' + menu_text_style + '" onMouseOver="HM_f_PopUp(' + "'HM_Menu1" + h + "', event)" + '" onMouseOut="HM_f_PopDown(' + "'HM_Menu1" + h + "')" + '">' + topmenu_text[h] + '</a>');
				document.writeln('<a href="' + get_link(topmenu_link[h]) + '" class="' + menu_text_style + '" onMouseOver="HM_f_PopUp(' + "'HM_Menu1" + h + "', event)" + '" onMouseOut="HM_f_PopDown(' + "'HM_Menu1" + h + "')" + '">' + topmenu_text[h] + '</a>');		
			}
		}
// option if not menu enabled
		else
		{
			document.writeln('<a href="' + get_link(topmenu_link[h]) + '" class="' + menu_text_style + '" title="' + topmenu_texttip[h] + '">' + topmenu_text[h] + '</a>');
		}
		
		if (h < (topmenu_width.length - 1))
		{
			document.writeln('<span class="wtoredtext"> &nbsp;&nbsp;&nbsp;</span>');
		}

	}
	document.writeln('</td></tr></form>');
	document.writeln('<tr height="14"><td id="ignore">&nbsp;</td>');

// write second row of menu items on page
	for (var i=1; i<menu_width.length; i++)
	{
		if (wto_menu_column == i)
			menu_text_style = "menubelongstext";
		else
			menu_text_style = "menudefaulttext";
// option if menu enabled
		if (menu_enabled == 1)
		{			
			document.writeln('<td bgcolor="' + bgRollColour +'" width="' + menu_width[i] + '" align="center" id="hasrollover"><a href="' + get_link(menu_link[i]) + '" class="' + menu_text_style + '" onMouseOver="HM_f_PopUp(' + "'HM_Menu" + i + "', event)" + '" onMouseOut="HM_f_PopDown(' + "'HM_Menu" + i + "')" + '"><span class="' + menu_text_style + '">' + menu_text[i] + '</span></a></td>');

  		                if (i < (menu_width.length - 1))
			{
				document.writeln('<td bgcolor="' + bgRollColour +'" width="10" align="center" id="ignore"><span class="menudefaulttext">|</span></td>');
			}
		}
// option if not menu enabled
		else
		{
			document.writeln('<td bgcolor="' + bgRollColour +'" width="' + menu_width[i] + '"  valign="top" align="center"id="hasrollover"><a href="' + get_link(menu_link[i]) + '" class="' + menu_text_style + '" title="' + menu_texttip[i] + '">' + menu_text[i] + '</a></td>');

  		                if (i < (menu_width.length - 1))
			{
				document.writeln('<td bgcolor="' + bgRollColour +'" width="10" align="center"  valign="top" id="ignore"><span class="menudefaulttext">|</span></td>');
			}

		}
	}

	document.writeln('</tr>');
	document.writeln('</table></div>');

   HM_DOM = (document.getElementById) ? true : false;
   HM_NS4 = (document.layers) ? true : false;
    HM_IE = (document.all) ? true : false;
   HM_IE4 = HM_IE && !HM_DOM;
   HM_Mac = (navigator.appVersion.indexOf("Mac") != -1);
  HM_IE4M = HM_IE4 && HM_Mac;

HM_Opera = (navigator.userAgent.indexOf("Opera")!=-1);
HM_Konqueror = (navigator.userAgent.indexOf("Konqueror")!=-1);

HM_IsMenu = !HM_Opera && !HM_IE4M && (HM_DOM || HM_NS4 || HM_IE4 || HM_Konqueror);
// HM_IsMenu = (HM_DOM || HM_NS4 || (HM_IE4 && !HM_IE4M));

HM_BrowserString = HM_NS4 ? "NS4" : HM_DOM ? "DOM" : "IE4";

if(window.event + "" == "undefined") event = null;
function HM_f_PopUp(){return false};
function HM_f_PopDown(){return false};
popUp = HM_f_PopUp;
popDown = HM_f_PopDown;


HM_GL_MenuWidth          = 200;
HM_GL_FontFamily         = "Trebuchet MS, Verdana, Arial, Helvetica, sans serif";
HM_GL_FontSize           = 9;
HM_GL_FontBold           = true;
HM_GL_FontItalic         = false;
HM_GL_FontColor          = "#808080";
HM_GL_FontColorOver      = "#FFFFFF";
HM_GL_BGColor            = "#E5E5E5";
HM_GL_BGColorOver        = "#FF8040";
HM_GL_ItemPadding        = 3;

HM_GL_BorderWidth        = 1;
HM_GL_BorderColor        = "#808080";
HM_GL_BorderStyle        = "solid";
HM_GL_SeparatorSize      = 1;
//HM_GL_SeparatorSize      = 0;
HM_GL_SeparatorColor     = "#808080";
HM_GL_ImageSrc = wto_string + "/images/wtomenus/HM_More_grey_right.gif";
HM_GL_ImageSrcLeft = wto_string + "/images/wtomenus/HM_More_black_left.gif";
HM_GL_ImageSrcOver = wto_string + "/images/wtomenus/HM_More_white_right.gif";
HM_GL_ImageSrcLeftOver = wto_string + "/images/wtomenus/HM_More_black_left.gif";

HM_GL_ImageSize          = 10;
HM_GL_ImageHorizSpace    = 2;
HM_GL_ImageVertSpace     = 3;

HM_GL_KeepHilite         = false;
HM_GL_ClickStart         = false;
HM_GL_ClickKill          = 0;
HM_GL_ChildOverlap       = 5;
HM_GL_ChildOffset        = 5;
HM_GL_ChildPerCentOver   = null;
HM_GL_TopSecondsVisible  = .3;
HM_GL_ChildSecondsVisible = .3;
HM_GL_StatusDisplayBuild = 0;
HM_GL_StatusDisplayLink  = 1;
HM_GL_UponDisplay        = null;
HM_GL_UponHide           = null;

HM_GL_RightToLeft      = true;
//HM_GL_CreateTopOnly      = HM_NS4 ? true : false;
HM_GL_CreateTopOnly      = true;

HM_GL_ShowLinkCursor     = true;

HM_GL_ScrollEnabled = true;
HM_GL_ScrollBarHeight = 14;
HM_GL_ScrollBarColor = "lightgrey";
HM_GL_ScrollImgSrcTop = wto_string + "/images/wtomenus/HM_More_black_top.gif";
HM_GL_ScrollImgSrcBot = wto_string + "/images/wtomenus/HM_More_black_bot.gif";
HM_GL_ScrollImgWidth = 9;
HM_GL_ScrollImgHeight = 5;
HM_GL_ScrollBothBars = false;



//4.3
HM_GL_HoverTimeTop  = 100;
HM_GL_HoverTimeTree = 100;

// the following function is included to illustrate the improved JS expression handling of
// the left_position and top_position parameters introduced in 4.0.9
// and modified in 4.1.3 to account for IE6 standards-compliance mode
// you may delete if you have no use for it

//function HM_f_CenterMenu(topmenuid) {
//    var MinimumPixelLeft = 0;
//    var TheMenu = HM_DOM ? document.getElementById(topmenuid) : window[topmenuid];
//    var TheMenuWidth = HM_DOM ? parseInt(TheMenu.style.width) : HM_IE4 ? TheMenu.style.pixelWidth : TheMenu.clip.width;
//    var TheWindowWidth = HM_IE ? (HM_DOM ? HM_Canvas.clientWidth : document.body.clientWidth) : window.innerWidth;
//    return Math.max(parseInt((TheWindowWidth-TheMenuWidth) / 2),MinimumPixelLeft);
//}


if(HM_IsMenu) {
    document.write("<SCRIPT LANGUAGE=\"JavaScript1.2\" SRC=\"" + wto_dotslash + "library/wtomenus/HM_Arrays_" + wto_language + ".js\" TYPE=\"text/javascript\"><\/SCRIPT>");

	if (wto_othermenu_arrays !== not_defined)
	{
		if (wto_othermenu_arrays.length >= 1)
		{
			for (var i = 0; i < wto_othermenu_arrays.length; i++)	
		{
    			document.write("<SCRIPT LANGUAGE=\"JavaScript1.2\" SRC=\"" + wto_dotslash + wto_othermenu_arrays[i] + wto_language + ".js\" TYPE=\"text/javascript\"><\/SCRIPT>");
		}
	}
} 
    document.write("<SCRIPT LANGUAGE=\"JavaScript1.2\" SRC=\"" + wto_dotslash + "library/wtomenus/HM_Script" + HM_BrowserString + ".js\" TYPE=\"text/javascript\"><\/SCRIPT>");


}
//alert("hi2");


//end

