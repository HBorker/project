// The currently selected menu (its classList property)
let selected_element = null;

// Called when a hamburger icon is clicked, passed the element clicked
function toggle_menu(element) {
    // Is this already selected?
    if (element.parentNode.classList.contains("nav--active")) {
        // If so, deselect it
        element.parentNode.classList.remove("nav--active");

        selected_element = null;
    } else {
        // If it's not selected, deselect the selected one, if any
        if (selected_element) {
            selected_element.remove("nav--active");
        }

        selected_element = element.parentNode.classList;
        selected_element.add("nav--active");
    }
}
