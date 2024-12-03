const express = require('express')
const apiMocker = require('connect-api-mocker')
const cors = require('cors')

const PORT = process.env.PORT || 3000
const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(apiMocker('/data', 'mocks/data'))
app.use(apiMocker('/geo', 'mocks/geo'))

app.listen(PORT, () => {
  console.log(`Server is running at port http://localhost:${PORT}`)
})
