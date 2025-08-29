1- getElementById returns one element by ID. 
   getElementsByClassName returns all live collection of the class. 
   querySelector always returns selected class's first match. 
   querySelectorAll returns a static classList of all matches.
2- const div = document.createElement("div");
   div.textContent = "YoBro";
   document.body.appendChild(div);
3- Events go from the target element then up through its parents then up to document.

4- Event Delegation attaches one listner to a parent and use it to handle events on child elements.
   It is useful for some listeners.

5- preventDefault() stops default browser action.
   stopPropagation() stops event from bubbling to parent

