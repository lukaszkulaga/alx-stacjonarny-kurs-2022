import { v4 as uuidv4 } from 'uuid'; // biblioteka do treningu - randomowe generowanie id ( ciagu znaków)

import { sayHello, name } from './hello'
import calculate from './calculate';

sayHello();

console.log(name);
console.log(calculate(2,2));
console.log(uuidv4());