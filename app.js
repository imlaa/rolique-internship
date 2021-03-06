const express = require('express');
const fileUpload = require('express-fileupload');
require('dotenv').config();
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors');
const swaggerUI = require('swagger-ui-express');

const { _mongooseConnector } = require('./helpers/conector_DB');
const { config: { PORT }, serverRequestRateLimit, configureCors } = require('./configs');
const Sentry = require('./logger/sentry');
const { apiRouter } = require('./routes');
const cronRun = require('./cron-jobs');
const swaggerDoc = require('./docs/swagger.json');

const app = express();

_mongooseConnector();

app.use(cors({ origin: configureCors }));
app.use(Sentry.Handlers.errorHandler());
app.use(serverRequestRateLimit);
app.use(helmet());
app.use(morgan('dev'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(fileUpload({ useTempFiles: true }));
app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerDoc));
app.use('/', apiRouter);

// eslint-disable-next-line no-unused-vars
app.use('*', (err, req, res, next) => {
    Sentry.captureException(err);
    res
        .status(err.status || 500)
        .json({
            message: err.message || ''
        });
});

app.listen(5000, () => {
    console.log(`App has been started on port ${PORT}...`);
    cronRun();
});
