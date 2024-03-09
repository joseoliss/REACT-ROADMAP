import './style.css'
import javascriptLogo from './javascript.svg'
import { setupCounter } from './counter.js'
import '@dile/dile-info-box/dile-info-box.js'

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <dile-info-box class="read-the-docs" showCloseButton>
      Click en el logo de Vite para aprender más
    </dile-info-box>
  </div>
`

setupCounter(document.querySelector('#counter'))
