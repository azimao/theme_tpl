/*
Template Name: Color Admin - Responsive Admin Dashboard Template build with Twitter Bootstrap 3.3.6
Version: 2.0.0
Author: Sean Ngu
Website: http://www.seantheme.com/color-admin-v2.0/admin/ajax/
*/

var handleSuperboxGallery = function() {
	"use strict";
	$('.superbox').SuperBox();
};


var Gallery = function () {
	"use strict";
    return {
        //main function
        init: function () {
            $.getScript('assets/plugins/superbox/js/superbox.js').done(function() {
                handleSuperboxGallery();
            });
        }
    };
}();