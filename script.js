// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Get all room checkboxes
    var roomCheckboxes = document.querySelectorAll('input[type="checkbox"]');
    
    // Add event listener to each checkbox
    roomCheckboxes.forEach(function(checkbox) {
        checkbox.addEventListener('change', function() {
            var roomID = checkbox.parentElement.parentElement.id;
            var availability = checkbox.checked ? 'Available' : 'Not Available';
            console.log(`Room ${roomID} is now ${availability}`);
            
            // Here you can add further logic to update the availability in a database or perform other actions
        });
    });
});
