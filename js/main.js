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

const speak = () => {
  body.style.background = 'url(img/wave.gif)';
  body.style.backgroundRepeat = 'repeat-x';
  body.style.backgroundSize = '100% 100%';

  const speakText = new SpeechSynthesisUtterance(textInput.value);

  speakText.onend = e => body.style.background = '#343a40';

  speakText.onerror = e => console.error(e);

  const selectedVoice = select.selectedOptions[0].getAttribute('data-name');

  voices.forEach(voice => {
    if (voice.name === selectedVoice) {
      speakText.voice = voice;
    }
  });

  speakText.rate = rate.value;
  speakText.pitch = pitch.value;

  sync.speak(speakText);
}

form.addEventListener('submit', e => {
  e.preventDefault();

  speak();
});

rate.addEventListener('change', e => rateValue.textContent = rate.value);
pitch.addEventListener('change', e => pitchValue.textContent = pitch.value);

select.addEventListener('change', e => speak());