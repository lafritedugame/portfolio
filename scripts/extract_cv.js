const fs = require('fs')
let pdfLib = require('pdf-parse')
const pdf = pdfLib && (pdfLib.default || pdfLib)

const pdfPath = './public/cv.pdf'
const outPath = './public/cv.txt'

if (!fs.existsSync(pdfPath)) {
  console.error('PDF not found at', pdfPath)
  process.exit(2)
}

const dataBuffer = fs.readFileSync(pdfPath)

pdf(dataBuffer).then(function (data) {
  const text = data.text || ''
  fs.writeFileSync(outPath, text, 'utf8')
  console.log('Extracted text written to', outPath)
}).catch(err => {
  console.error('Extraction error:', err)
  process.exit(1)
})
