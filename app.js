const express = require('express');
const handlebars = require('express-handlebars');
const fs = require('fs');

const app = express();
const port = 3000;

app.set('view engine', 'hbs');
app.engine(
  'hbs',
  handlebars({
    layoutsDir: __dirname + '/views/layouts',
    extname: 'hbs',
    defaultLayout: 'index',
    partialsDir: __dirname + '/views/partials/',
  }),
);

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('main');
});

app.get('/:route', (req, res) => {
  const files = fs.readdirSync('./public/js/pieces');
  const pieces = files.map((file) => file.slice(0, -3))
  res.render('main', {
    scriptName: `${req.params.route}.js`,
    pieces
  });
});

app.get('*', (req, res) => {
  res.status(404).send('Not found');
});

app.listen(port, () => {
  console.log('Server running on port 3000');
});
