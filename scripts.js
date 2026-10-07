document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.faq-question').forEach((question) => {
        question.addEventListener('click', () => {
            const faqItem = question.parentElement;
            const faqAnswer = question.nextElementSibling;

            document.querySelectorAll('.faq-question').forEach((otherQuestion) => {
                if (otherQuestion !== question) {
                    otherQuestion.parentElement.classList.remove('active');
                    otherQuestion.nextElementSibling.style.maxHeight = null;
                }
            });

            faqItem.classList.toggle('active');
            faqAnswer.style.maxHeight = faqItem.classList.contains('active')
                ? `${faqAnswer.scrollHeight}px`
                : null;
        });
    });

    document.querySelectorAll('[data-scroll-target]').forEach((button) => {
        button.addEventListener('click', () => {
            const target = document.querySelector(button.dataset.scrollTarget);
            target?.scrollIntoView({ behavior: 'smooth' });
        });
    });
});
