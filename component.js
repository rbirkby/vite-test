class helloWorld extends HTMLElement {
    async connectedCallback() {
        const response = await fetch('/api/message'); 
        const message = (await response.json()).message;
        const text = document.createTextNode(message);
        this.appendChild(text);
    }
}
customElements.define('hello-world', helloWorld);