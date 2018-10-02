import Selector from '../Selector/Selector.js'
export default class App {
    renderPage() {
        return `${Selector()}`;
    }
}

const app = new App();

const $app = document.querySelector('#app');
$app.innerText = app.renderPage();