$(document).ready(function() {
	$("#breadCrumb").jBreadCrumb();

	set_sidebar_height();
	define_sidebar_toggle();
	set_affix_values();
	$(window).resize(function() {set_sidebar_height();});
	setup_faq();
});

function set_sidebar_height () {
	// Get the current height of the sidebar navigation element.
	var currentNavHeight = $('#sideNav').outerHeight(true);
	
	// Get the current height of the content element.
	var currertContentHeight;
	if ($(window).width() < 768)
		currentContentHeight = calc_content_size();
	else
		currentContentHeight = $('#content').outerHeight(true);

	// Determine whether the calculated sidebar height or the current navigation element
	// height is larger.
	var sideBarHeight = (currentContentHeight > currentNavHeight) ? currentContentHeight : currentNavHeight;
	
	// Set the height of the sidebar to the correct height.
	$('#sidebar').height(sideBarHeight);
}

/* 
	Calculates the size of the content area by calculating
	the distance between the header and the footer.
*/
function calc_content_size() {	
	var page = $(document).outerHeight(true);	
	var footer = $('footer').outerHeight(true);
	var header = $('header').outerHeight(true);
	return page - header - footer;
}

function showHeight( element, height ) {
	alert("The height for the " + element + " is " + height + "px.");
}

/*function adjust_sideNav () {
	var sideNav = 'ul.pf-sidenav > li:has(ul.nav)';
	assign_carets(sideNav + ' > a');
	//assign_dropdown_behavior(sideNav);
}

function assign_carets(target) {
	$(target).each(function() {
		var htmlString = $(this).html();
		$(this).html("<span class='caret'></span> " + htmlString);
	});
}

function assign_dropdown_behavior(target) {
	$(target).each(function() {
		$(this).click(function() {
			$(this).toggleClass('active');
		});
	});
}*/

function define_sidebar_toggle () {
	$('#ToggleSidebar').click(function() {
		$('.row-offcanvas').toggleClass('active');
	});
}

function set_affix_values () {
	if (!$('#sideNav').hasClass('NoAffix')) {
		$('#sideNav').affix({		
			offset: {
				top: 100, 
			}
		});
	}
	/*$('#ToggleSubNav').affix({
	offset: {
		top: 100
		, bottom: function () {
				return (this.bottom = $('footer').outerHeight(true))
			}
		}
	})*/
}

function setup_faq() {
	$('div.faq h3').each(function() {
		$(this).click(function() {
			$(this).next('p').slideToggle(function () {
			    duration: 'slow', 
			    queue: false,
					complete: function () {
						set_sidebar_height();
				}
			});
		});
	});
}