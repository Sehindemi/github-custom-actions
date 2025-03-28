const core = require('actions/core')

try {
    const nameToGreet = core.getInput('who-yo-greet');
    console.log(`Hello', ${nameToGreet}!`)
    core.setOutput(`time`, new Date().toTimeString());

} catch (error) {
    core.setFailed(error.message);
  }
