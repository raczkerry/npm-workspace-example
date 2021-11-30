require('dotenv').config({ path: `${__dirname}/../../../config/development.env` })

import colors from 'colors'
import app from './app'
import { appEnv } from './env'

const server = app.listen(appEnv.PORT, () => {
  console.log(colors.yellow(colors.bold(`Server running in ${appEnv.NODE_ENV} mode on port ${appEnv.PORT}`)))
})
