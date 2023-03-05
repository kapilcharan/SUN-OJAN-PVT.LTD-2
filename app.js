const express = require("express");
const path=require("path");
const fs=require("fs");
const app = express();
const port = 80;

// EXPRESS SPECIFIC STUFF
app.use('/static',express.static('static'));// for serving static file
app.use(express.urlencoded());
//PUG SPECIFIC STUFF
app.set('view engine','pug');// set the template engine as pug
app.set('views',path.join(__dirname,'views'))// set the view directory

//ENDPOIN
app.get('/',(req,res)=>{
    // const con= "this is the best content ont the internet so far so use it wisely"
    // const params = {'title': 'pubg is the best game',"content": con}
    const params ={ }
    res.status(200).render('index.pug',params);
})


// START THE SERVER
app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
});