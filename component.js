class helloWorld extends HTMLElement {
    connectedCallback() {
        const text = document.createTextNode("Hello World3");
        this.appendChild(text);
    }
}
customElements.define('hello-world', helloWorld);