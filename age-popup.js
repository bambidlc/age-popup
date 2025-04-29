document.addEventListener('DOMContentLoaded', function() {
    const interval = setInterval(function() {
        // Target the checkout "Confirm Order" button
        const confirmButton = document.querySelector('button.btn-primary[type="submit"]');

        if (confirmButton) {
            clearInterval(interval); // Button found, stop looking

            confirmButton.addEventListener('click', function(event) {
                event.preventDefault(); // Pause normal checkout

                // Basic popup for age confirmation
                var isOfAge = confirm("Are you 21 years or older? Click OK to confirm.");

                if (isOfAge) {
                    confirmButton.form.submit(); // Proceed to checkout
                } else {
                    alert("You must be 21 or older to complete this purchase.");
                }
            });
        }
    }, 300); // Check every 300 milliseconds
});
