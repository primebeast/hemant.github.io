

(function($) {

	var	$window = $(window),
		$body = $('body'),
		$nav = $('#nav');

	// Breakpoints.
		breakpoints({
			xlarge:  [ '1281px',  '1680px' ],
			large:   [ '981px',   '1280px' ],
			medium:  [ '737px',   '980px'  ],
			small:   [ null,      '736px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Scrolly.
		$('#nav a, .scrolly').scrolly({
			speed: 1000,
			offset: function() { return $nav.height(); }
		});

	// Function to show the thank you popup
	function showPopup() {
		document.getElementById('thankYouPopup').style.display = 'block';
	}

	// Function to close the thank you popup
	function closePopup() {
		document.getElementById('thankYouPopup').style.display = 'none';
	}

	// Function to handle form submission
	function handleSubmit(event) {
		event.preventDefault(); // Prevent the default form submission behavior

		// You can add additional form validation here if needed

		// Show the thank you popup
		showPopup();

		return false; // Prevent the form from submitting again
	}

	// Add an event listener to the form for form submission
	document.getElementById('contact').addEventListener('submit', handleSubmit);

})(jQuery);
