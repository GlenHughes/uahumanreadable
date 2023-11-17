const prompts = require('prompts');
const UAParser = require('ua-parser-js');

(async () => {
  const response = await prompts({
    type: 'text',
    name: 'ua',
    message: 'Enter full user agent',
    validate: value => !!value
  });

  // console.log(response);
  try {
    const ua = UAParser(response.ua);
    const osName = ua.os.name === undefined ? 'Unknown' : ua.os.name;
    const osVersion = ua.os.version === undefined ? 'Unknown' : ua.os.version;
    const device = ua.device.type === undefined ? 'Desktop' : ua.device.type;
    const model = ua.device.model === undefined ? '' : ua.device.model;
    const vendor = ua.device.vendor === undefined ? '' : ua.device.vendor;
    const humanReadable = `Result: ${osName} ${osVersion}, ${ua.browser.name} ${ua.browser.version}, ${device} ${model} ${vendor}`
    // Log to terminal
    console.log(humanReadable)
  } catch (e) {
    console.error(`Fatal error: ${e}`);
  }
})();