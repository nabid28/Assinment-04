1. getElementById, getElementsByClassName, and querySelector / querySelectorAll
getElementById returns a single element by its unique ID and is the fastest method. getElementsByClassName returns a live collection of all elements with that class, automatically updating if the DOM changes. querySelector and querySelectorAll are the most flexible, allowing you to use CSS selectors to find either the first match or a static list of all matches.

2. 
Create a new element using document.createElement('tagName') and set its content or attributes. Then, use parentNode.appendChild(newElement) or parentNode.prepend(newElement) to insert it into the webpage.


3. Event Bubbling
Event bubbling is a process where an event starts at the most specific element (the target) and then "bubbles up" through its ancestors in the DOM tree. For example, clicking a button also triggers click events on its parent div, then the body, and finally the document.

4. Event Delegation
Event delegation is a technique where you attach a single event listener to a parent element instead of multiple listeners to individual children. It is useful because it saves memory and automatically handles events for dynamically added child elements without needing to re-bind listeners.

5. preventDefault() vs stopPropagation()
preventDefault() stops the browser's default action (like a link opening or a form submitting), while stopPropagation() prevents the event from bubbling up the DOM tree to parent elements. They are often used together but control entirely different behaviors of the event lifecycle.
