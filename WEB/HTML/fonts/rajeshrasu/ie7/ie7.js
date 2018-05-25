/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'rajeshrasu\'">' + entity + '</span>' + html;
	}
	var icons = {
		'rr-react': '&#xe917;',
		'rr-Magento': '&#xe91a;',
		'rr-Boostrap_logo': '&#xe91b;',
		'rr-placeholder': '&#xe900;',
		'rr-computer': '&#xe901;',
		'rr-teamwork': '&#xe902;',
		'rr-tick-inside-a-circle': '&#xe903;',
		'rr-application': '&#xe904;',
		'rr-dreamweaver': '&#xe905;',
		'rr-css': '&#xe906;',
		'rr-photoshop': '&#xe907;',
		'rr-illustrator': '&#xe908;',
		'rr-html': '&#xe909;',
		'rr-wordpress-logo-button': '&#xe90a;',
		'rr-cross-out': '&#xe90b;',
		'rr-instagram-logo': '&#xe90c;',
		'rr-twitter-logo-button': '&#xe90d;',
		'rr-facebook-logo-button': '&#xe90e;',
		'rr-google-plus-logo-button': '&#xe90f;',
		'rr-plus-symbol': '&#xe910;',
		'rr-phone': '&#xe911;',
		'rr-vector': '&#xe912;',
		'rr-seo': '&#xe913;',
		'rr-computer-graphic': '&#xe914;',
		'rr-smartphone': '&#xe915;',
		'rr-mail': '&#xe916;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/rr-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
