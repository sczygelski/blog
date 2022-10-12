const path = require('path')
const express = require('express')
const session = require('express-session')
const exphbs = require('express-handlebars')

const app = express()
const PORT = process.env.PORT || 3001

const sequelize = require()
const sequelizeStore = require('connect-seession-seuelize')(session.Store)

app.use(session(sess))

app.engine('handlebars', hbs.engine)
app.set('view engine', 'handlebars')

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static(path.join(_dirname, 'public')))

sequelize.sync({ force:false}).then(() => {
    app.listen(PORT, () => console.log('Now listening'))
})