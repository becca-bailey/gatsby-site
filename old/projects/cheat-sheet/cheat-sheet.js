var htmlText = document.getElementById('html_text');
var htmlIcon = document.getElementById('html_icon');
var cssText = document.getElementById('css_text');
var cssIcon = document.getElementById('css_icon');
var jsText = document.getElementById('javascript_text');
var jsIcon = document.getElementById('javascript_icon');
var rubyText = document.getElementById('ruby_text');
var rubyIcon = document.getElementById('ruby_icon');

htmlText.style.display = 'none';
cssText.style.display = 'none';
jsText.style.display = 'none';
rubyText.style.display = 'none';


htmlIcon.addEventListener('click', function() {
	if (htmlText.style.display == 'none') {
		htmlText.style.display = 'block';
	}
	else {
		htmlText.style.display = 'none';
	}
});

cssIcon.addEventListener('click', function() {
	if (cssText.style.display == 'none') {
		cssText.style.display = 'block';
	}
	else {
		cssText.style.display = 'none';
	}
});

jsIcon.addEventListener('click', function() {
	if (jsText.style.display == 'none') {
		jsText.style.display = 'block';
	}
	else {
		jsText.style.display = 'none';
	}
});

rubyIcon.addEventListener('click', function() {
	if (rubyText.style.display == 'none') {
		rubyText.style.display = 'block';
	}
	else {
		rubyText.style.display = 'none';
	}
});


