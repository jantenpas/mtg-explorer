import { html } from 'lit-html';

import { getMtgSets } from '../../utils/mtgcaller';
import Selector from '../Selector/Selector';
import './setSelector.css'


const SetSelector = () => {

  return getMtgSets()
    .then(resp => {
      const sets = JSON.parse(resp)
        .sets
        .filter(set => { return set.releaseDate > "2015-07-13" })
        .sort((a, b) => {
          return a.releaseDate < b.releaseDate
        })
        .map(set => {
          return { class: 'set-entry', value: set.name, children: `${set.name}(${set.releaseDate})` }
        });

      sets.unshift({ class: 'set-entry', value: 'Choose a Set', children: 'Choose a Set' });

      return html`<div class="set-selector-container">${Selector(sets)}</div>`;
    })
    .catch(err => console.log(err))
};

export default SetSelector;