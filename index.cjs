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
    console.log(`Result: ${ua.os.name} ${ua.os.version}, ${ua.browser.name} ${ua.browser.version}`)
  } catch (e) {
    console.error(`Fatal error: ${e}`);
  }
})();