const express = require('express');
const app = express();
const cors = require('cors');
require("./src/db/conn");



const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));

const batrouter = require("./src/routers/batroutes");
const fieldrouter = require("./src/routers/fieldroutes");
const odirouter = require("./src/routers/odiroutes");


app.use(batrouter);
app.use(fieldrouter);
app.use(odirouter);



app.listen(port,()=> {
    console.log(`connection is live at port no. ${port}`);
})