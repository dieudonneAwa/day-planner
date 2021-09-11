// Configuration for enzyme
require('core-js/stable');
require('regenerator-runtime/runtime');

const Enzyme = require('enzyme');
const Adapter = require('@wojtekmaj/enzyme-adapter-react-17');

Enzyme.configure({ adapter: new Adapter() });
