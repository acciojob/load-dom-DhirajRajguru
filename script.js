function onDOMLoad() {
            // Create a new text node with the message
            var textNode = document.createTextNode("DOM load success");

            // Append the text node to the body element
            document.body.appendChild(textNode);
        }

        // Add an event listener to run the function when the DOM is loaded
        document.addEventListener("DOMContentLoaded", onDOMLoad);