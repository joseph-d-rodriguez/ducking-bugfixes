console.log('Loaded jrod-portfolio.js');

var rawHtml = document.getElementsByTagName('html')[0].innerHTML;
var encodedHtml = rawHtml
					.replace(/</g, '&lt;')
					.replace(/>/g, '&gt;')
					.replace(/"/g, '&quot;');
document.getElementById('htmlModalContent').innerHTML = encodedHtml;
