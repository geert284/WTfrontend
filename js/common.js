function loadTemplates() {
    let componentElements = document.querySelectorAll('[data-component]');
    componentElements.forEach(componentElement => {
        let componentName = componentElement.dataset.component;

        fetch('components/' + componentName + ".html")
            .then(response => response.text())
            .then(componentHtml => {
                componentElement.innerHTML = componentHtml;
            })

    })
}

document.addEventListener('DOMContentLoaded', (event) => {
    loadTemplates();
})

// Checks if submitted password meets criteria
function checkPassword(password) {
    if (password.length < 8) {
        return false;
    }
    if (!/[A-Z]/.test(password)) {
        return false;
    }
    if (!/\d/.test(password)) {
        return false;
    }
    if (!/[!@#$%^&*(),.?"_:{}|<>]/.test(password)) {
        return false;
    }
    return true;
}