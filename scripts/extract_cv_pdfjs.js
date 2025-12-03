const fs = require('fs')
const pdfjsLib = require('pdfjs-dist/legacy/build/pdf.js')

const pdfPath = './public/cv.pdf'
const outPath = './public/cv.txt'

async function extract() {
  if (!fs.existsSync(pdfPath)) {
    console.error('PDF not found at', pdfPath)
    process.exit(2)
  }

  const data = new Uint8Array(fs.readFileSync(pdfPath))
  const loadingTask = pdfjsLib.getDocument({data})
  const doc = await loadingTask.promise
  let fullText = ''
  for (let i = 1; i <= doc.numPages; i++) {
    const page = await doc.getPage(i)
    const content = await page.getTextContent()
    const strings = content.items.map(item => item.str)
    fullText += strings.join(' ') + '\n\n'
  }

  fs.writeFileSync(outPath, fullText, 'utf8')
  console.log('Extracted text written to', outPath)
}

extract().catch(err => { console.error('Error:', err); process.exit(1) })
