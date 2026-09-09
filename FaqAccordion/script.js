// This variable name will always refer to the same thing.
const questions = document.querySelectorAll(".faq-question");
/* 
    Create a variable called 'questions' and keep it pointing 
    to this collection of FAQ questions.
*/

// Go through each question.
questions.forEach(function (question) {
    // When a question is clicked, run the code.
    question.addEventListener("click", function () {

        // Find the FAQ box that contains the clicked question.
        const currentItem = question.parentElement;

        // Close all other questions
        document.querySelectorAll(".faq-item").forEach(function (item) {
            if (item !== currentItem) {
                item.classList.remove("open");
            }
        });

        // Open/close the clicked question
        currentItem.classList.toggle("open");
    });
});
