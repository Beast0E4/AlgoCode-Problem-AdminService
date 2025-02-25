const express = require('express');
const { PORT } = require('./config/server.config');
const bodyParser = require('body-parser');
const apiRouter = require('./routes');
const BaseError = require('./errors/base.error');
const { errorHandler } = require('./utils');
const connectToDb = require('./config/db.config');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());


app.use('/api', apiRouter);

app.get('/ping', (req, res) =>{
    return res.json({message: "Problem service is alive"});
})

app.use(errorHandler);

app.listen(PORT, async () => {
    console.log(`Server started at Port: ${PORT}`);
    await connectToDb();
    console.log('Successfully connected to DB server');
});