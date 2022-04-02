# Broken React TO DO application based on context api

This application was intentionally broken, there are six critical issues that a candidate has to fix:

Started looking at my eslint warnings one by one
1. Fix an ability to display all tasks.
`` file: app.jsx ``
Add the dummy context to initial state, and pass setTodo(was also unused)

2. Fix a layout, checkboxes should be listed in a column.
`` file: todo-list.jsx `` 
Scss file was just missing the flex-direction

3. Fix an ability to add a new task.
``file: todo-form.jsx ``
I had to check size of curent todos  array (if is not 0) and update accordingly id and data

4. Fix an ability to toggle a task.
`` file: todo-list.jsx ``
Used a todos.map to found the task I need to toggle

5. Fix an ability to delete a task.
`` file: todo-list.jsx ``
Simple filter !== id does the trick here 

6. Fix an ability to count completed tasks.
`` file: todo-results.jsx ``
Context was misisng so I added it
Just had to grab the length of filtered array with criteria: checked value true 


## Available Scripts

Use `npm start` to run project.

## Feedback / Disclaimers
Fun exercise.Some of the packages are pretty old version.
Following the tasks in the listed order helped me a lot,they contained clues.
Intentionally code contains comments of my actions for the exercise purposes.
I used ternary operators as a personal preference this time.

