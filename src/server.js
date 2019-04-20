const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const session = require('express-session')
const dbConnection = require('../server/database') 
const MongoStore = require('connect-mongo')(session)
const passport = require('../server/passport');
const app = express()
const PORT = 8080
// Route requires
const user = require('../server/routes/user')
const htmlFile = require('../public/guest.html');

// MIDDLEWARE
app.use(morgan('dev'))
app.use(
	bodyParser.urlencoded({
		extended: false
	})
)
app.use(bodyParser.json())

// Sessions
app.use(
	session({
		secret: 'fraggle-rock', //pick a random string to make the hash that is generated secure
		store: new MongoStore({ mongooseConnection: dbConnection }),
		resave: false, //required
		saveUninitialized: false //required
	})
)

// Passport
app.use(passport.initialize())
app.use(passport.session()) // calls the deserializeUser

// Connect to the Mongo DB
mongoose.connect(
	process.env.MONGODB_URI || "mongodb://localhost/fridge"
  );


// Routes
app.use('/user', user)
 app.use('/guest', (req, res) =>
 {
 	console.log("test")
 	res.send("./public/Base/index.html")
 })

// Starting Server 
app.listen(PORT, () => {
	console.log(`App listening on PORT: ${PORT}`)
})