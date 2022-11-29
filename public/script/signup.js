console.log('signup.js reporting for duty..');

const form = document.getElementById('signup-form');

const handleClick = (event) => {
    event.preventDefault();
    console.log('Submit button submitted!');
}

form.addEventListener("submit", handleClick);