// jQuery code
$(document).ready(function() {
    // Add click event listener to the toggle-summary buttons
    $('.toggle-summary').click(function() {
        // Find the summary related to the clicked button
        var summary = $(this).siblings('.summary');
        
        // Toggle the visibility of the summary
        summary.toggle();
        
        // Change the text of the button based on summary visibility
        var buttonText = summary.is(':visible') ? 'Hide Summary' : 'Show Summary';
        $(this).text(buttonText);
    });
});
