import print from './print.js';
import delay from './delay.js';
import printObj from './text.js';
import './style.css';

async function run() {
  for (let i = 0, len = printObj.text.length; i < len; i++) {
    print(printObj.text.slice(0, i));
    await delay(printObj.duration);
  }
}
run();
