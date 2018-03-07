!function($){"use strict";function e(e){var a=$(e);"placeholder"===a.val()?a.addClass("placeholder"):a.removeClass("placeholder")}var a=$("body"),t=$("body"),n=$(t).find(".contact-button"),i=$(n).find(".contact-details");$(".sponsors-slider").owlCarousel({items:6}),$(n).on("click",function(e){$(this).find(i).toggle(),e.preventDefault()});var o=$(t).find(".share-button"),s=$(o).find(".contact-share");$(o).on("click",function(e){$(this).find(s).toggle(),e.preventDefault()});var l=$(t).find(".map-toggleButton"),r=$(t).find(".advanced-search"),p=$(t).find(".close");$(l).on("click",function(){$(this).toggleClass("active"),$(r).toggle()}),$(p).on("click",function(){$(l).removeClass("active"),$(r).hide()}),$(".slider-range-container").each(function(){if($.fn.slider){var e=$(this),a=e.find(".slider-range"),t=a.data("min")?a.data("min"):100,n=a.data("max")?a.data("max"):2e3,i=a.data("step")?a.data("step"):100,o=a.data("default-min")?a.data("default-min"):100,s=a.data("default-max")?a.data("default-max"):500,l=a.data("currency")?a.data("currency"):"$",r=e.find(".range-from"),p=e.find(".range-to");r.val(l+" "+o),p.val(l+" "+s),a.slider({range:!0,min:t,max:n,step:i,values:[o,s],slide:function(e,a){r.val(l+" "+a.values[0]),p.val(l+" "+a.values[1])}})}}),$(".custom-select").select2(),$(".map-listing-04").gmap3({map:{address:"POURRIERES, FRANCE",options:{zoom:17,mapTypeId:google.maps.MapTypeId.ROADMAP,mapTypeControl:!1,mapTypeControlOptions:{style:google.maps.MapTypeControlStyle.DROPDOWN_MENU},navigationControl:!0,scrollwheel:!1,streetViewControl:!0}}}),$("#map-top").gmap3({map:{address:"New York, USA",options:{zoom:17,mapTypeId:google.maps.MapTypeId.ROADMAP,mapTypeControl:!1,mapTypeControlOptions:{style:google.maps.MapTypeControlStyle.DROPDOWN_MENU},navigationControl:!1,scrollwheel:!1,streetViewControl:!1}},marker:{values:[{address:"St james St New York, USA",data:"Office 1",data:"<h3>Simple Builder</h3><ul><li><i class='fa fa-home'></i><span>21 Dedman Ct San Francisco CA 94124 United States</span>   </li></ul><ul><li><i class='fa fa-phone'></i><span>(01) 213 432 5432</span></li><li><i class='fa fa-envelope'></i><span><a href='#'>example@example.com</a> </span></li></ul>",options:{icon:"http://piotr.stare.pro/qf/img/marker.png"}},{address:"elk St New York, USA",data:"Office 2",data:"<h3>Simple Builder</h3><ul><li><i class='fa fa-home'></i><span>21 Dedman Ct San Francisco CA 94124 United States</span>   </li></ul><ul><li><i class='fa fa-phone'></i><span>(01) 213 432 5432</span></li><li><i class='fa fa-envelope'></i><span><a href='#'>example@example.com</a> </span></li></ul>",options:{icon:"http://piotr.stare.pro/qf/img/marker.png"}},{address:"Vesey ST New York, USA",data:"Office 3",data:"<h3>Simple Builder</h3><ul><li><i class='fa fa-home'></i><span>21 Dedman Ct San Francisco CA 94124 United States</span>   </li></ul><ul><li><i class='fa fa-phone'></i><span>(01) 213 432 5432</span></li><li><i class='fa fa-envelope'></i><span><a href='#'>example@example.com</a> </span></li></ul>",options:{icon:"http://piotr.stare.pro/qf/img/marker.png"}},{address:"park pl New York, USA",data:"Office 4",data:"<h3>Simple Builder</h3><ul><li><i class='fa fa-home'></i><span>21 Dedman Ct San Francisco CA 94124 United States</span>   </li></ul><ul><li><i class='fa fa-phone'></i><span>(01) 213 432 5432</span></li><li><i class='fa fa-envelope'></i><span><a href='#'>example@example.com</a> </span></li></ul>",options:{icon:"http://piotr.stare.pro/qf/img/marker.png"}},{address:"park row New York, USA",data:"Office 5",data:"<h3>Simple Builder</h3><ul><li><i class='fa fa-home'></i><span>21 Dedman Ct San Francisco CA 94124 United States</span>   </li></ul><ul><li><i class='fa fa-phone'></i><span>(01) 213 432 5432</span></li><li><i class='fa fa-envelope'></i><span><a href='#'>example@example.com</a> </span></li></ul>",options:{icon:"http://piotr.stare.pro/qf/img/marker.png"}}],options:{draggable:!1},events:{click:function(e,a,t){var n=$(this).gmap3("get"),i=$(this).gmap3({get:{name:"infowindow"}});i?(i.open(n,e),i.setContent(t.data)):$(this).gmap3({infowindow:{anchor:e,options:{content:t.data}}})}}}});var c={id:"subtle",options:{name:"Subtle Grayscale"},styles:[{featureType:"landscape",stylers:[{saturation:-100},{lightness:65},{visibility:"on"}]},{featureType:"poi",stylers:[{saturation:-100},{lightness:51},{visibility:"simplified"}]},{featureType:"road.highway",stylers:[{saturation:-100},{visibility:"simplified"}]},{featureType:"road.arterial",stylers:[{saturation:-100},{lightness:30},{visibility:"on"}]},{featureType:"road.local",stylers:[{saturation:-100},{lightness:40},{visibility:"on"}]},{featureType:"transit",stylers:[{saturation:-100},{visibility:"simplified"}]},{featureType:"administrative.province",stylers:[{visibility:"off"}]},{featureType:"water",elementType:"labels",stylers:[{visibility:"on"},{lightness:-25},{saturation:-100}]},{featureType:"water",elementType:"geometry",stylers:[{hue:"#ffff00"},{lightness:-25},{saturation:-97}]}]};$(".contact-map").gmap3({map:{address:"St james St New York, USA",options:{zoom:17,mapTypeId:"subtle",mapTypeControl:!1,mapTypeControlOptions:{mapTypeIds:["subtle"]},navigationControl:!1,scrollwheel:!1,draggable:!1,streetViewControl:!1,disableDefaultUI:!0}},styledmaptype:c,marker:{values:[{address:"St james St New York, USA",data:"<h3>Simple Builder</h3><ul><li><i class='fa fa-home'></i><span>21 Dedman Ct San Francisco CA 94124 United States</span>   </li></ul><ul><li><i class='fa fa-phone'></i><span>(01) 213 432 5432</span></li><li><i class='fa fa-envelope'></i><span><a href='#'>example@example.com</a> </span></li></ul>",options:{icon:"http://piotr.stare.pro/qf/img/marker.png"}}],options:{draggable:!1},events:{click:function(e,a,t){var n=$(this).gmap3("get"),i=$(this).gmap3({get:{name:"infowindow"}});i?(i.open(n,e),i.setContent(t.data)):$(this).gmap3({infowindow:{anchor:e,options:{content:t.data}}})}}}}),$("#single-company-map").gmap3({map:{address:"St james St New York, USA",options:{zoom:14,mapTypeId:"subtle",mapTypeControl:!1,mapTypeControlOptions:{mapTypeIds:["subtle"]},navigationControl:!1,scrollwheel:!1,draggable:!1,streetViewControl:!1,disableDefaultUI:!0}},styledmaptype:c}),$("#map-listing-05").gmap3({map:{address:"POURRIERES, FRANCE",options:{zoom:17,mapTypeId:google.maps.MapTypeId.ROADMAP,mapTypeControl:!1,mapTypeControlOptions:{style:google.maps.MapTypeControlStyle.DROPDOWN_MENU},navigationControl:!1,scrollwheel:!1,streetViewControl:!1}}}),$('a[href="#contact"]').on("shown.bs.tab",function(){$("#map-listing-04").gmap3({trigger:"resize"})}),$('a[href="#contact"]').on("shown.bs.tab",function(){$("#map-listing-05").gmap3({trigger:"resize"})});var d=[{lat:37.780823,lng:-122.4231,title:"Marker 1"},{lat:37.768068680454725,lng:-122.430739402771,title:"Marker 2"},{lat:37.7791272169824,lng:-122.4296236038208,title:"Marker 3"},{lat:37.770715,lng:-122.392631,title:"Marker 4"},{lat:37.78197638783258,lng:-122.45829105377197,title:"Marker 5"},{lat:37.769629187677,lng:-122.46798992156982,title:"Marker 6"}],u=!1;a.on("touchmove",function(){u=!0}),a.on("touchstart",function(){u=!1}),$(".has-bg-image").each(function(){var e=$(this),a=e.data("bg-image"),t=e.data("bg-color"),n=e.data("bg-opacity"),i=$("<div/>",{"class":"content"}),o=$("<div/>",{"class":"background"});n?(e.children().wrapAll(i),e.append(o),e.css({"background-image":"url("+a+")"}),o.css({"background-color":"#"+t,opacity:n})):e.css({"background-image":"url("+a+")","background-color":"#"+t})}),$.fn.superfish?$(".sf-menu").superfish():console.warn("not loaded -> superfish.min.js and hoverIntent.js"),$(".mobile-sidebar-toggle").on("click",function(){return a.toggleClass("mobile-sidebar-active"),!1}),$(".mobile-sidebar-open").on("click",function(){return a.addClass("mobile-sidebar-active"),!1}),$(".mobile-sidebar-close").on("click",function(){return a.removeClass("mobile-sidebar-active"),!1}),$.fn.uouTabs?$(".uou-tabs").uouTabs():console.warn("not loaded -> uou-tabs.js"),$.fn.uouAccordions?$(".uou-accordions").uouAccordions():console.warn("not loaded -> uou-accordions.js"),$(".alert").each(function(){var e=$(this);e.hasClass("alert-dismissible")&&e.children(".close").on("click",function(a){a.preventDefault(),e.remove()})}),$.fn.flexslider?$(".default-slider").flexslider({slideshowSpeed:1e4,animationSpeed:1e3,prevText:"",nextText:""}):console.warn("not loaded -> jquery.flexslider-min.js"),$.fn.rangeslider?$('input[type="range"]').rangeslider({polyfill:!1,onInit:function(){this.$range.wrap('<div class="uou-rangeslider"></div>').parent().append('<div class="tooltip">'+this.$element.data("unit-before")+"<span></span>"+this.$element.data("unit-after")+"</div>")},onSlide:function(e,a){var t=this.$range.parent().find(".tooltip span");t.html(a)}}):console.warn("not loaded -> rangeslider.min.js"),$("select").each(function(){e(this)}).change(function(){e(this)}),$(".uou-block-1a").each(function(){var e=$(this);e.find(".search").each(function(){var e=$(this);e.find(".toggle").on("click",function(a){a.preventDefault(),e.addClass("active"),setTimeout(function(){e.find(".search-input").focus()},100)}),e.find('input[type="text"]').on("blur",function(){e.removeClass("active")})}),e.find(".language").each(function(){var e=$(this);e.find(".toggle").on("click",function(a){a.preventDefault(),e.hasClass("active")?e.removeClass("active"):e.addClass("active")})})}),$(".uou-block-1b").each(function(){var e=$(this);e.find(".language").each(function(){var e=$(this);e.find(".toggle").on("click",function(a){a.preventDefault(),e.hasClass("active")?e.removeClass("active"):e.addClass("active")})})}),$(".uou-block-1e").each(function(){var e=$(this);e.find(".language").each(function(){var e=$(this);e.find(".toggle").on("click",function(a){a.preventDefault(),e.hasClass("active")?e.removeClass("active"):e.addClass("active")})})}),$(".uou-block-5b").each(function(){var e=$(this),a=e.find(".tabs > li");a.on("click",function(){var t=$(this),n=t.data("target");return t.hasClass("active")?void 0:(e.find("."+n).addClass("active").siblings("blockquote").removeClass("active"),a.removeClass("active"),t.addClass("active"),!1)})}),$(".uou-block-5c").each(function(){var e=$(this);$.fn.flexslider?e.find(".flexslider").flexslider({slideshowSpeed:1e4,animationSpeed:1e3,prevText:"",nextText:"",controlNav:!1,smoothHeight:!0}):console.warn("not loaded -> jquery.flexslider-min.js")}),$(".uou-block-7g").each(function(){var e=$(this),a=e.find(".badge"),t=e.data("badge-color");t&&a.css("background-color","#"+t)}),$(".uou-block-7h").each(function(){var e=$(this);$.fn.flexslider?e.find(".flexslider").flexslider({slideshowSpeed:1e4,animationSpeed:1e3,prevText:"",nextText:"",directionNav:!1,smoothHeight:!0}):console.warn("not loaded -> jquery.flexslider-min.js")}),$(".uou-block-11a").each(function(){var e=$(this);e.find(".main-nav").each(function(){var e=$(this).children("ul");e.find("li").each(function(){var e=$(this);e.children("ul").length>0&&(e.addClass("has-submenu"),e.append('<span class="arrow"></span>'))});var a=e.find(".has-submenu");a.children(".arrow").on("click",function(e){var a=$(this),t=a.parent("li");t.hasClass("active")?(t.removeClass("active"),t.children("ul").slideUp()):(t.addClass("active"),t.children("ul").slideDown())})})}),$(".uou-block-12a").each(function(){function e(){var e={scrollwheel:!1,zoom:14,center:new google.maps.LatLng(o,s)};n=new google.maps.Map(t[0],e);for(var a=0;a<d.length;a++){var i=d[a];new google.maps.Marker({position:new google.maps.LatLng(i.lat,i.lng),map:n,title:i.title})}}var a=$(this),t=a.find(".map-container .map"),n,i=t.data("height"),o=t.data("center-lat"),s=t.data("center-lng");t.css("height",i+"px"),google.maps.event.addDomListener(window,"load",e),google.maps.event.addDomListener(window,"resize",function(){var e=n.getCenter();google.maps.event.trigger(n,"resize"),n.setCenter(e)})}),$(".uou-block-12b").each(function(){function e(){var e={scrollwheel:!1,zoom:14,center:new google.maps.LatLng(o,s)};n=new google.maps.Map(t[0],e);for(var a=0;a<d.length;a++){var i=d[a];new google.maps.Marker({position:new google.maps.LatLng(i.lat,i.lng),map:n,title:i.title})}}var a=$(this),t=a.find(".map-container .map"),n,i=t.data("height"),o=t.data("center-lat"),s=t.data("center-lng");t.css("height",i+"px"),google.maps.event.addDomListener(window,"load",e),google.maps.event.addDomListener(window,"resize",function(){var e=n.getCenter();google.maps.event.trigger(n,"resize"),n.setCenter(e)})}),$(".uou-block-12c").each(function(){function e(){var e={scrollwheel:!1,zoom:14,center:new google.maps.LatLng(o,s)};n=new google.maps.Map(t[0],e);var a=new google.maps.Marker({position:new google.maps.LatLng(o,s),map:n,title:""})}var a=$(this),t=a.find(".map-container .map"),n,i=t.data("height"),o=t.data("center-lat"),s=t.data("center-lng");t.css("height",i+"px"),google.maps.event.addDomListener(window,"load",e),google.maps.event.addDomListener(window,"resize",function(){var e=n.getCenter();google.maps.event.trigger(n,"resize"),n.setCenter(e)})})}(jQuery);