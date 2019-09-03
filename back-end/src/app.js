const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const bodyParser = require('body-parser');
const routes = require('./routes')

const app = express()

app.use(bodyParser.json())
app.use(cors())
app.use(morgan('combined'))

routes(app)

app.listen(8000, () => {
	console.log(`Server started on port 8000`);
});