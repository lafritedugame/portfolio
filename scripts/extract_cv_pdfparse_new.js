const fs = require('fs')
const pdf = require('pdf-parse')

const pdfPath = './public/cv.pdf'
const outPath = './public/cv.txt'

if (!fs.existsSync(pdfPath)) {
  console.error('PDF not found at', pdfPath)
  process.exit(2)
}

const dataBuffer = fs.readFileSync(pdfPath)

async function run() {
  const parser = new pdf.PDFParse({ data: dataBuffer })
  try {
    const result = await parser.getText()
    const text = result.text || result || ''
    fs.writeFileSync(outPath, text, 'utf8')
    console.log('Extracted text written to', outPath)
  } catch (err) {
    console.error('Extraction error:', err)
    process.exit(1)
  }
}

run()
