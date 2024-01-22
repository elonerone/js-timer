const dark_mode = document.querySelector(".navbaricons--left")
const change_color = document.querySelector(".navbar__icons--right")
drop_down = document.querySelector(".drop-down")
colors = document.querySelector(".colors")
const navbar = document.querySelector(".navbar")
navbar_buttons = document.querySelectorAll(".navbar-button")
let dark_mode_on = false
let color_is_shown = false
let original_navbar_color = getComputedStyle(navbar).getPropertyValue('background-color');
let original_button_color = getComputedStyle(navbar_buttons[0]).getPropertyValue('background-color');

dark_mode.addEventListener('click', () => {
    if (!dark_mode_on) {    
        navbar.style.backgroundColor = '#363636';
        navbar_buttons.forEach(child => {
            child.style.backgroundColor = '#595959'
        })
        document.getElementById("dark-mode-on").style.display = 'flex'
        document.getElementById("dark-mode-off").style.display = 'none'
        dark_mode_on = true
    }
    else {
        navbar.style.backgroundColor = original_navbar_color;
        navbar_buttons.forEach(child => {
            child.style.backgroundColor = original_button_color
        })
        document.getElementById("dark-mode-off").style.display = 'flex'
        document.getElementById("dark-mode-on").style.display = 'none'
        dark_mode_on = false
    }    
});

change_color.addEventListener('click', () => {
        drop_down.style.display = 'flex'
        document.getElementById("arrow").style.rotate = '180deg'
        color_is_shown = true
});

colors.addEventListener('click', element => {
    if (element.target.id == "red") {
        navbar.style.backgroundColor = '#b14343';
        original_navbar_color = '#b14343'

        navbar_buttons.forEach(child => {
            child.style.backgroundColor = '#9d1515'
        }) 
        original_button_color = '#9d1515'
    }
    else if (element.target.id == "blue") {
        navbar.style.backgroundColor = '#4071F4';
        original_navbar_color = '#4071F4'

        navbar_buttons.forEach(child => {
            child.style.backgroundColor = '#0C3CC2'
        })
        original_button_color = '#0C3CC2'
    }
    else if (element.target.id == "green") {
        navbar.style.backgroundColor = '#1ea920';
        original_navbar_color = '#1ea920'

        navbar_buttons.forEach(child => {
            child.style.backgroundColor = '#379038'
        })
        original_button_color = '#379038'
    }
    document.getElementById("arrow").style.rotate = '0deg'
    drop_down.style.display = 'none'
    color_is_shown = false
});
