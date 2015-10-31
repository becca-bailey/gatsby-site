var html = document.getElementById("html");
var htmlText = document.getElementByID("html_text");
htmlText.style.display = "none";

html.addEventListener("click", function() {
	htmlText.style.display = "block";
});