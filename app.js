const express = require('express');
const bodyParser=require('body-parser');
const date = require(__dirname+'/date.js');
const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

let items=[];
let workItems=[];

app.get('/',function(req,res){    
    let day = date.getDay();
    // res.render will look up files only in views folder
    res.render("list",{listTitle:day, NewListItems:items});
});

///////////////// WORK //////////////////

app.get("/work",function (req,res) {
    res.render("list",{listTitle:"Work List", NewListItems:workItems});    
});

app.post("/",function(req,res){
    let item = req.body.newTask;
    if(req.body.list==="Work"){
    console.log(req.body.newTask);
        workItems.push(item);
        res.redirect("/work");
    }
    else{ 
        items.push(item); 
        res.redirect("/");
    }
});


// app.post("/work",function(req,res){
//     let item = req.body.newItem;
//     workItems.push(item);
//     res.redirect("/work");
// });

app.listen(3000,function(){
    console.log("We're up now!");
});
