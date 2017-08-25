const app = require('express')();
const parser = require('body-parser');
const cors = require('cors');
const session = require('express-session');
const pages = require('./pageHandler.js');

const PORT = 3000;

app.use(cors());
app.use(parser.json());

app.use(
  session({
    secret: 'fbi surveillance van 4',
  }),
);

// page routes
app.get('/', pages.rootHandler);
app.get('/index', pages.index);
app.get('/canvas/:id', pages.canvas);

// handle 404
app.use('*', pages.error);


app.listen(PORT, () => {
  console.log(`MindVue listening on port ${PORT}`);
});
