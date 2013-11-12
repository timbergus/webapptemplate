// Directives are functions we can attach to elements of our view to do something.

// Integer allows us to avoid non integer values entry into a text field in our view.
// Here every key down is checked and in case it is not an integer or special character
// false is returned and no character appears in the text field.

app.directive('integer', function()
{
    return function (scope, element/*, attrs*/)
    {
        element.bind('keydown', function(event)
        {
            if (!(event.keyCode >= 48 && event.keyCode <= 57) &&    // Integers from 0 to 9
                (event.keyCode !== 8) &&                            // Backspace
                (event.keyCode !== 9) &&                            // Horizontal tab
                (event.keyCode !== 37) &&                           // Percentage
                (event.keyCode !== 39) &&                           // Single quotes (')
                (event.keyCode !== 46))                             // Dot
            {
                event.preventDefault();

                return false;
            }
            else
            {
                return event;
            }
        });
    }
});