const sync = window.speechSynthesis;

const body = document.querySelector('body');
const form = document.querySelector('form');
const textInput = document.querySelector('#textArea');
const select = document.querySelector('#voice');
const rate = document.querySelector('#rate');
const rateValue = document.querySelector('#rateValue');
const pitch = document.querySelector('#pitch');
const pitchValue = document.querySelector('#pitchValue');

let voices = [];

const getVoices = () => {
  voices = sync.getVoices();

  voices.forEach(voice => {
    const option = document.createElement('option');

    option.textContent = voice.name + ` (${voice.lang})`;

    option.setAttribute('data-lang', voice.lang);
    option.setAttribute('data-name', voice.name);

    select.appendChild(option);
  });
}

getVoices();

if (sync.onvoiceschanged !== undefined) {
  sync.onvoiceschanged = getVoices;
}