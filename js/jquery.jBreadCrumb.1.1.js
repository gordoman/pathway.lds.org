(function(e){function o(){if(typeof jQuery.easing=="object"){s="easeOutQuad"}else{s="swing"}r=jQuery(n).find("li");jQuery(n).find("ul").wrap('<div style="overflow:hidden; position:relative;"><div>');jQuery(n).find("ul").width(5e3);if(r.length>0){jQuery(r[r.length-1]).addClass("last");jQuery(r[0]).addClass("first");if(r.length>t.minimumCompressionElements){u()}}}function u(){var n=jQuery(r[r.length-1]);if(jQuery(n).width()>t.maxFinalElementLength){if(t.beginingElementsToLeaveOpen>0){t.beginingElementsToLeaveOpen--}if(t.endElementsToLeaveOpen>0){t.endElementsToLeaveOpen--}}if(jQuery(n).width()<t.maxFinalElementLength&&jQuery(n).width()>t.minFinalElementLength){if(t.beginingElementsToLeaveOpen>0){t.beginingElementsToLeaveOpen--}}var i=r.length-1-t.endElementsToLeaveOpen;jQuery(r[r.length-1]).css({background:"none"});e(r).each(function(e,n){if(e>t.beginingElementsToLeaveOpen&&e<i){jQuery(n).find("a").wrap("<span></span>").width(jQuery(n).find("a").width()+10);jQuery(n).append(jQuery('<div class="'+t.overlayClass+'"></div>').css({display:"block"})).css({background:"none"});if(l()){c(jQuery(n).find("."+t.overlayClass).css({width:"20px",right:"-1px"}))}var r={id:e,width:jQuery(n).width(),listElement:jQuery(n).find("span"),isAnimating:false,element:jQuery(n).find("span")};jQuery(n).bind("mouseover",r,a).bind("mouseout",r,f);jQuery(n).find("a").unbind("mouseover",a).unbind("mouseout",f);n.autoInterval=setInterval(function(){clearInterval(n.autoInterval);jQuery(n).find("span").animate({width:t.previewWidth},t.timeInitialCollapse,t.easing)},150*(e-2))}})}function a(e){var n=e.data.id;var r=e.data.width;jQuery(e.data.element).stop();jQuery(e.data.element).animate({width:r},{duration:t.timeExpansionAnimation,easing:t.easing,queue:false});return false}function f(e){var n=e.data.id;jQuery(e.data.element).stop();jQuery(e.data.element).animate({width:t.previewWidth},{duration:t.timeCompressionAnimation,easing:t.easing,queue:false});return false}function l(){if(navigator.appVersion.indexOf("MSIE")!==-1){return isIE6}}function c(t){var n;if(jQuery(t).is("img")){n=jQuery(t).attr("src")}else{n=e(t).css("backgroundImage");n.match(/^url\(["']?(.*\.png)["']?\)$/i);n=RegExp.$1;}e(t).css({backgroundImage:"none",filter:"progid:DXImageTransform.Microsoft.AlphaImageLoader(enabled=true, sizingMethod=scale, src='"+n+"')"})}var t={};var n={};var r={};var i=[];var s;jQuery.fn.jBreadCrumb=function(r){t=e.extend({},e.fn.jBreadCrumb.defaults,r);return this.each(function(){n=e(this);o()})};jQuery.fn.jBreadCrumb.defaults={maxFinalElementLength:400,minFinalElementLength:200,minimumCompressionElements:4,endElementsToLeaveOpen:1,beginingElementsToLeaveOpen:1,timeExpansionAnimation:800,timeCompressionAnimation:500,timeInitialCollapse:600,easing:s,overlayClass:"chevronOverlay",previewWidth:5}})(jQuery)