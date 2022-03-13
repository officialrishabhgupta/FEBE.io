const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
require("./src/db/conn");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.set('view engine', 'ejs');


const port = process.env.PORT || 3001;


const web = require("./src/routers/web");
const odirouter = require("./src/routers/odiroutes")
const fieldrouter = require("./src/routers/fieldroutes")
const batrouter = require("./src/routers/batroutes");

app.use('/', web);
app.use(odirouter);
app.use(fieldrouter);
app.use(batrouter);



app.listen(port,()=> {
    console.log(`connection is live at port no. ${port}`);
})