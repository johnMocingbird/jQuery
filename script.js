
// JavaScript and jQuery Comparison

// 1. Changing Text Content
// JavaScript: 
document.getElementById('btn')
// jQuery:
 $('#btn')
// 2. Changing HTML Content
// jQuery:
 $('#container').html("<p>New HTML content</p>");
// JavaScript:
 document.getElementById('container').innerHTML = "<p>New HTML content</p>";

// 3. Adding a CSS Class
// jQuery:
$('#element').addClass('new-class');
// JavaScript:
document.getElementById('element').classList.add('new-class');

// 4. Removing a CSS Class
// jQuery:
$('#element').removeClass('old-class');
// JavaScript:
document.getElementById('element').classList.remove('old-class');

// 5. Toggling a CSS Class
// jQuery:
$('#element').toggleClass('active');
// JavaScript:
document.getElementById('element').classList.toggle('active');

// 6. Setting an Attribute
// jQuery:
$('#link').attr('href', 'https://www.example.com');
// JavaScript:
document.getElementById('link').setAttribute('href', 'https://www.example.com');

// 7. Getting an Attribute
// jQuery:
var href = $('#link').attr('href');
// JavaScript:
var href = document.getElementById('link').getAttribute('href');

// 8. Handling Click Events
// jQuery:
$('#btn').click(function() { alert('Button clicked!'); });
// JavaScript:
document.getElementById('btn').addEventListener('click', function() { alert('Button clicked!'); });

// 9. Hiding an Element
// jQuery:
$('#element').hide();
// JavaScript:
document.getElementById('element').style.display = 'none';

// 10. Showing an Element
// jQuery:
$('#element').show();
// JavaScript:
document.getElementById('element').style.display = 'block';

// 11. Fading Out an Element
// jQuery:
$('#element').fadeOut();
// JavaScript: 
 var el = document.getElementById('element');
 el.style.opacity = 1;
 (function fade() {
   if ((el.style.opacity -= .1) < 0) {
     el.style.display = "none";
   } else {
     requestAnimationFrame(fade);
   }
 })();

// 12. Making an AJAX GET Request
// jQuery:
$.get('https://api.example.com/data', function(data) { console.log(data); });
// JavaScript:
 fetch('https://api.example.com/data')
   .then(response => response.json())
   .then(data => console.log(data))
   .catch(error => console.error('Error:', error));
