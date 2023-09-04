
function loadYamlFile(filename) {
    const fs = require('fs');           // npm install fs --save
    const jsYaml = require('js-yaml');    // npm install js-yaml --save
    const yamlText = fs.readFileSync(filename, 'utf8')
    return yaml.safeLoad(yamlText);
}

export default loadYamlFile