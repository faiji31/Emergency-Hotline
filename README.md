1.What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Ans:
QuerySelector and QuerySelectorAll are return element that are non-live.
while getElementById and GetElementByClassName are return Live HTML collections and NodeList.


2.How do you create and insert a new element into the DOM?

Ans: Create a Element-> document.createElement("tagname")
Add Content or Attribute-> element.setAttribute
Insert it into the DOM -> appendChild()

3.What is Event Bubbling and how does it work?

Ans : Event Bubbling is a Browser Machanism where a DOM event that triggers on a child element first runs on that child, the on its parent and go until its root parent.

4.What is Event Delegation in JavaScript? Why is it useful?

Ans:Event delegation is a design pattern in JavaScript used to efficiently manage and handle events on multiple child elements by attaching a single event listener to a common ancestor element.

5.What is the difference between preventDefault() and stopPropagation() methods?

Ans:The preventDefault() method is use when we want to stop the browser from doing it’s normal behavior, like stoping a link from going to another page or prevent a form from submiting. On the other side, stopPropagation() is use to stop the event from bubbling up or capturing down in the DOM tree, so the event will not reach parent or ancestor elements. In simple word, preventDefault() stop the browser’s default action, while stopPropagation() stop the event from moving further in event flow.

