'use strict';

/*

Many thanks to Franklin Innocent F for this solution to disable back navigation: https://stackoverflow.com/a/59785993/

Limitations: the page must have fully loaded - run_at in manifest doesn't seem to have any effect

*/

const domains = `https?:\/\/docs\.google\.com\/.*
https?:\/\/canvas\.swansea\.ac\.uk\/courses\/[0-9]+\/grade.*
https?:\/\/*\.canvaslms.com\/.*`

const disable_domains = new RegExp(domains.split('\n').join('|'));
if (disable_domains.test(window.location.href)) {
	history.pushState(null, null, location.href);
	history.back();
	history.forward();
	window.onpopstate = function () { history.go(1); };
}
