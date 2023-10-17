// Loading urls from .yaml
const YAML = require('yaml')
const fs = require('fs')
const path = require('path')

const redirectsFile = fs.readFileSync(path.join(__dirname,'redirects.yml'), 'utf-8')
const redirects = YAML.parse(redirectsFile)

// console.log(redirectsFile)
console.log(redirects)

// Generating HTML for each url from template.html
const templateHTML = fs.readFileSync(path.join(__dirname,'template.html'), 'utf-8')

// console.log(Object.entries(redirects))
// Loop through all url redirects, and generate HTML pages
for(let [slug,url] of Object.entries(redirects)) {
    console.log('Generateing HTML Page for ',slug)

    const html = templateHTML.replaceAll('https://example.com',url)
    
    const folderPath = path.join(__dirname,'out',slug)
    fs.mkdirSync(folderPath, { recursive: true })

    // Creating index.html in each slug directory
    fs.writeFileSync(path.join(folderPath,'index.html'),html)
}