// Loading urls from .yaml
const YAML = require('yaml')
const fs = require('fs')
const path = require('path')

const redirectsFile = fs.readFileSync(path.join(__dirname,'redirects.yml'), 'utf-8')
const redirects = YAML.parse(redirectsFile)

console.log(redirectsFile)
console.log(redirects)

// Generating HTML for each url from template.html
const templateHTML = fs.readFileSync(path.join(__dirname,'template.html '), 'utf-8')