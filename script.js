import $ from "https://cdn.skypack.dev/jquery@3.6.0";
import domJs from "https://cdn.skypack.dev/dom.js@0.2.0";
import * as bootstrap from "https://cdn.skypack.dev/bootstrap@5.1.3";
import fontAwesome from "https://cdn.skypack.dev/font-awesome@4.7.0";

/*! Fades out the whole page when clicking links */
$('a').click(function(e) {
e.preventDefault();
newLocation = this.href;
$('body').fadeOut('slow', newpage);
});
function newpage() {
window.location = newLocation;
}

$(document).ready(function(){

/*! Fades in whole page on load */
$('body').css('display', 'none');
$('body').fadeIn(500);

}); 
