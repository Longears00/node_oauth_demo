
const express = require('express');
const authRoutes = require('./routes/auth-routes');
const app = express();
const passportSetup = require('./config/passport-setup');

app.use('/auth', authRoutes);

//set up view engine
app.set('view engine', 'ejs');

//create home route
app.get('/', (req, res)=> {
  res.render('home');
});

app.listen(3000, ()=> {
  console.log('app now listening for requests on port 3000');
});
