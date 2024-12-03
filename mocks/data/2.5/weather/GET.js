const { makeApiRequest } = require('../../../utils/utils')
const data = require('../../../data.json')

const mockSuccess = {
  statusCode: 200,
  data: data['cali'],
}

module.exports = (request, response) => {
  return makeApiRequest().then(() => {
    return response.status(mockSuccess.statusCode).json(mockSuccess.data)
  })
}
