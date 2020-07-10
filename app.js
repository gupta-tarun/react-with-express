const express = require('express');
const session = require('express-session')
// const expressLayOuts = require('express-ejs-layouts')

const app = express();
const { PORT = 3000 } = process.env;
const middlewares = require('./middlewares')

app.use(session({
    name: 'sid',
    resave: false,
    saveUninitialized: false,
    secret: 'test',
    cookie: {
        maxAge: 1000*60
    }
}))

app.use('/', require('./routes/index'))
app.use('/users', require('./routes/users'))

app.use(express.static("public"));
app.use('/dist', express.static("dist"));

app.use('/app', middlewares.ensureLogin, express.static("app"));

app.listen(PORT, () => {
    console.log(`started server at http://localhost:${PORT}`)
});