import print from './print.js';
import delay from './delay.js';
import printObj from './text.js';
import './style.css';
import logo from './logo.png';

async function run() {
  for (let i = 0, len = printObj.text.length; i < len; i++) {
    print(printObj.text.slice(0, i));
    await delay(printObj.duration);
  }

  var img = document.createElement('img');
  img.src = logo;
  document.body.appendChild(img)
}

run();
