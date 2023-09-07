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

// loadTemplates(); Dit werkt niet

document.addEventListener('DOMContentLoaded', (event) => {
    loadTemplates();
})
