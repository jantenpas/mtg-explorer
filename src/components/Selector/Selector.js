import { html, render } from 'lit-html';
import './selector.css';

import { getMtgSets } from '../../utils/mtgcaller';

const Selector = () => render(markup, document.body);

const setList = getMtgSets()
    .then(resp =>
        JSON.parse(resp)
            .sets
            .filter(set => { return set.releaseDate > "2015-07-13" })
            .map(set => html`<option value="${set.name}">${set.name}(${set.releaseDate})</option>`)
    )
    .catch(err => console.log(err));

const markup = html`
    <div class="what-up-yo">Let's start building Magic</div>
    <select id="set">
        <option value="">Choose a Set</option>
        ${setList}
    </select>
`

export default Selector;
