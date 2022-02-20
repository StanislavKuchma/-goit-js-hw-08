import throttle from 'lodash.throttle';

const STORAGE_KEY = "feedback-form-state";
const EMAIL_KEY = 'email';
const refs = {
    form: document.querySelector('.feedback-form'),
    textArea: document.querySelector('textarea'),
    email: document.querySelector('input'),
};
    
refs.form.addEventListener('submit', onFormSubmit);
refs.email.addEventListener('input', throttle(onEmailInput, 500));
refs.textArea.addEventListener('input', throttle(onTextAreaInput, 500));

populateTextarea();
function onFormSubmit(evt) {
    evt.preventDefault();

    const savedMessage = localStorage.getItem(STORAGE_KEY);
    const savedEmail = localStorage.getItem(EMAIL_KEY);

        if (!savedEmail) {
        refs.email.value = 'Введіть почту';
        return;
    }
        if (!savedMessage) {
        refs.textArea.value = 'Введіть повідомленя';
        return;
    }


    evt.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
    localStorage.removeItem(EMAIL_KEY);
 }
function onEmailInput(evt) {
    const userEmail = evt.target.value;
    localStorage.setItem(EMAIL_KEY, userEmail)
 }
function onTextAreaInput(evt) {
    const message = evt.target.value;
 
    localStorage.setItem(STORAGE_KEY, message);
}
function populateTextarea() {
    const savedMessage = localStorage.getItem(STORAGE_KEY);
    const savedEmail = localStorage.getItem(EMAIL_KEY);
    if (savedMessage) {
            refs.textArea.value = savedMessage;
    }
        if (savedEmail) {
            refs.email.value = savedEmail;
    }

}
