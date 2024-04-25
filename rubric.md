# Grading Rubric

| Criteria                  | Pass |
| ------------------------- | ---- |
| Files well-organized?     | ✅    |
| 2.3 Includes report.html? | ✅    |
| 2.4 Uses media queries?   | ✅    |
| 2.5 At least five pages?  | ❗    |
| 2.6 Has header?           | ✅    |
| 2.7 Has navigation?       | ✅    |
| 2.8 Has images?           | ✅    |
| 2.10 Multiple fonts?      | ✅    |
| 2.11 Includes form?       | ✅    |
| 2.12 Has external links?      | ✅    |

## Other Notes:

* For each page, make sure you have examples of how it would be laid-out, not just blank pages or "insert cool search history here"
* Make sure your buttons have some sort of text!
* Avoid internal styles. Put any styles into a stylesheet

3.1
Your app must use at least one media query to implement its responsive design.
this media query might not appear in your own source code (if it's something your chosen design framework is handling)
3.2
You may (and are strongly encouraged) to augment the default style with your own CSS to create more pleasing aesthetics. (Bootstrap's color schemes are not exactly the most beautiful...)
3.3
Your site must use localStorage to store and retrieve updated data values between sessions. I.e. what is displayed as content should reflect these changes. Often these actions are called "CRUD" Create, Read, Update, and Delete
3.4
However you implement the CRUD actions, your implementation should contain forms that
make appropriate use of labels, buttons, and input groups. The forms should use a combination of input, select, checks, radios, and possibly other input types based on the data being entered.
form submissions should include appropriate event handlers to refresh the displayed data
3.5
One possible implementation of CRUD actions in the frontend could be to use a widget such as Bootstrap's modal, but it is not required that you do so. Rather it's required that you use a flow that reflects best practices from around the web. If you choose to use a modal you might:
have one modal that allows users to add new data values.
have one modal that allows users to edit existing data values.
have one modal that allows users to delete existing data values.
have forms within the The add and edit modals
form submissions within a modal should include appropriate event handlers to refresh the displayed data likely should also dismiss the modal.
3.6
Your site must provide a Blob to export the current data values as a new JSON file.
3.7
Your site should provide the user a means to clear their data (to start from a fresh beginning)
3.8
Each page and stylesheet of your site must validate without any warnings or errors using the Nu Validator and WAVE Web Accessibility Evaluator.