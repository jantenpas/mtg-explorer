import { html, render } from 'lit-html';

import { getMtgSets, getMtgCards } from '../../utils/mtgcaller';
import Selector from '../Selector/Selector';
import './setSelector.css';


const SetSelector = () => {

  const getCards = (evt) => {
    getMtgCards(evt.target.value)
      .then(resp => {
        const images = JSON.parse(resp).cards.map(card => html`<img src=${card.imageUrl} />`);
        render(html`${images}`, document.getElementById('cards'));
      })
      .catch(err => console.log("Error Calling getMtgCards", err));
  }

  return getMtgSets()
    .then(resp => {
      const sets = JSON.parse(resp)
        .sets
        .filter(set => { return set.type === 'expansion' })
        .sort((a, b) => {
          return a.name > b.name
        })
        .map(set => {
          return { class: 'set-entry', value: set.code, children: `${set.name}(${set.releaseDate})` }
        });

      sets.unshift({ class: 'set-entry', value: 'Choose a Set', children: 'Choose a Set' });

      return html`
        <div class="set-selector-container">${Selector(sets, getCards)}</div>
        <div id="cards" />`;
    })
    .catch(err => console.log(err))
};

export default SetSelector;