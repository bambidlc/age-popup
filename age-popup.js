<script>
document.addEventListener('DOMContentLoaded', function() {
    // Wait until the page is fully loaded
    const interval = setInterval(function() {
        // Find the first button you want to trigger on (or you can target all buttons)
        const anyButton = document.querySelector('button.btn-primary, button.btn, button[type="submit"]');
        if (anyButton) {
            clearInterval(interval); // Stop once a button is found

            anyButton.addEventListener('click', function(event) {
                event.preventDefault(); // Pause button action

                var isOfAge = confirm("Are you 21 years or older? Click OK to confirm.");

                if (isOfAge) {
                    // If confirmed, allow the button action
                    anyButton.form.submit();
                } else {
                    alert("You must be 21 or older to continue.");
                }
            });
        }
    }, 300);
});
</script>
