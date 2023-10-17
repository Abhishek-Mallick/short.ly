// Loading urls from .yaml
const YAML = require('yaml')
const fs = require('fs')
const path = require('path')

const redirectsFile = fs.readFileSync(path.join(__dirname,'redirects.yml'), 'utf-8')

// Generating HTML for each url from template.html

