const Express = require('express');
const app = Express();
const db = require('./db/database').createDatabase();

app.use(Express.json());
app.use(Express.urlencoded({ extended: true}));

require('./startup/db').init(db);
require('./startup/logger')(app);
require('./startup/routers')(app);
require('./startup/swagger')(app);

const port = process.env.PORT || 4000;
const server = app.listen(port, () => {
    console.log(`Listening on port ${port}...`);
});

process.on('SIGINT', () => {
    server.close(() => {
        console.log("Closing successfully connection to database.....");
        db.close();
        console.log("Server shutdown successfully.....");
    });
});