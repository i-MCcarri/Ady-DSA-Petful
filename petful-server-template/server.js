const app = require('./modules/app/app')
const port = process.env.PORT

app.listen(port, () => {
  console.log(`[petful-server] Listening on ${ port }.`)
})
