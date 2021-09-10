// Configuration for enzyme
require('core-js/stable');
require('regenerator-runtime/runtime');

const Enzyme = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');

Enzyme.configure({ adapter: new Adapter() });
