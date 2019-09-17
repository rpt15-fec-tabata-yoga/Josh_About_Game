const express = require('express');
const bodyParser = require('body-parser');
const {db, aboutGameFeatures} = require('../db/index.js');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/', express.static('public'));
app.use('/:gameId', express.static('public'));

app.get('/api/features/:gameId', function (req, res){
  console.log('made it'); //not logging
  aboutGameFeatures(req.params.gameId, (err, data) => {
    console.log()
    if(err){
      console.log(err)
    }else{
      res.send(JSON.stringify(data));
    }
  
  });
});

const port = 3003;
app.listen(port, () => {
  console.log(`App listening on ${port}`);
});
