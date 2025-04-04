import express from 'express'
import { static as serveStatic } from 'express'
import cors from 'cors'
import path, { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))

const app = express()
const PORT = 3000

app.use(cors())
app.use(serveStatic(join(__dirname, '../dist')))
app.use(express.json()) // ESSA LINHA É CRUCIAL PARA PARSEAR JSON
app.use(express.urlencoded({ extended: true }))

app.use(
  express.static(path.join(__dirname, '../dist'), {
    setHeaders: (res, filePath) => {
      if (filePath.endsWith('.css')) {
        res.setHeader('Content-Type', 'text/css')
      }
    },
  }),
)

app.get('/registration', (req, res) => {
  res.sendFile(join(__dirname, '../dist/index.html'))
})

app.post('/registration', (req, res) => {
  console.log('Received registration data:', req.body)
  const { name, email, doc_number, password, personType, phone } = req.body
  console.log('Received registration data:', req.body)
  if (!name || !email || !doc_number || !password || !personType || !phone) {
    return res.status(400).json({
      error: 'Todos os campos obrigatórios devem ser preenchidos',
    })
  }

  res.status(200).json({
    success: true,
    message: 'Cadastro realizado com sucesso!',
    data: req.body,
  })
})

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})
