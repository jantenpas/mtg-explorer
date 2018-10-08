import { html } from 'lit-html';
import './selector.css';

// Options is an array of Objects 
//of type [{class: String, value: String, children: String}]
const Selector = (options, onChange) => html`
    <select class="selector" @change=${onChange} >
      ${options.map(option => html`
        <option class="${option.class}" value="${option.value}">
            ${option.children}
        </option>`)
      }
    </select>`

export default Selector;
