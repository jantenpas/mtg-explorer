import SetSelector from '../SetSelector/SetSelector';
import { html, render } from 'lit-html';

export default class App {

    renderSetSelector() {
        render(html`${SetSelector()}`, document.body);
    };

    renderPage() {
        return `${this.renderSetSelector()}`;
    }
}

const app = new App();

const $app = document.querySelector('#app');
$app.innerText = app.renderPage();