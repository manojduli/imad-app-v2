var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articleone={
   title:"article-one",
   heading:"article-one on cyber security",
   date:"March 3rd 2017",
   content:`
   
                <h1 id="title"> <i>Cyber security:</i></h1>
                <h5 id="section">
                    Computer security, also known as cybersecurity or IT security, is the protection of computer systems from the theft or damage to the hardware, software or the information on them, as well as from disruption or misdirection of the services they provide.<br/>
                        <br/>
                    It includes controlling physical access to the hardware, as well as protecting against harm that may come via network access, data and code injection, and due to malpractice by operators, whether intentional, accidental, or due to them being tricked into deviating from secure procedures.
                </h5>
       `
   
   
}; 

function createTemplate (data){
    
  var title = data.title;
  var heading =data.heading;
  var date =data.date;
  var content =data.content;


var htmlTemplate =`
        <!doctype html>
<html>
    <head>
        <title>${title}</title>
       	<meta name="viewport" content="width=device-width, initial-scale=1.0">
       	<link href="/ui/style.css" rel="stylesheet" />
    </head>
    <body  class="body">
     <div>
         <a href="/">HOME</a>
         
     </div> 
     <hr/>
     <div>
         ${heading}
     </div>
     <div>
        ${date}
     </div>
     <div>
     
        ${content}
     </div>   
        
        
    </body>
    
</html>

`;
return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/article-one', function(req,res){
 res.send(createTemplate(articleone));
});

app.get('/article-two', function(req,res){
 res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
});

app.get('/article-three', function(req,res){
 res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
});


app.get('/article-two', function(req, res){
    res.send('article two is served here');
});



app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
}); 


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
