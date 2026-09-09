# FaqAccordion
A list of 5 questions; clicking one opens its answer.

<img width="743" height="422" alt="image" src="https://github.com/user-attachments/assets/bed08444-7b6f-421f-994b-12ea219d1d81" />


Notes:
- overflow: hidden makes sure the contents stay inside those rounded corners.
- JS: currentItem.classList.toggle("open");
  - toggle() means: If it isn't there, add it. If it is there, remove it.
  - classList.toggle("open") = “Turn the open class on or off.”
- CSS: The answer becomes visible.
  .faq-item.open .faq-answer {
    display: block;
  }
- const tells JavaScript: "This variable name will always refer to the same thing.”
  - Create a variable called 'questions' and keep it pointing to this collection of FAQ questions.
- querySelectorAll() finds all elements with the class .faq-question
- The forEach() -> Go through each question.
