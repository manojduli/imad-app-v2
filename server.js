var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var article={
    'article-one': {
        title:'article one | manoj duli',
        heading:'article one on cyber security',
        date:'March 5th 2017',
        content:`
                <h1 id="title"> <i>Cyber security:</i></h1>
                <h5 id="section">
                    Computer security, also known as cybersecurity or IT security, is the protection of computer systems from the theft or damage to the hardware, software or the information on them, as well as from disruption or misdirection of the services they provide.<br/>
                        <br/>
                    It includes controlling physical access to the hardware, as well as protecting against harm that may come via network access, data and code injection, and due to malpractice by operators, whether intentional, accidental, or due to them being tricked into deviating from secure procedures.
                </h5>`
        
                
                
    },
    'article-two': {
            title:'article two | manoj duli',
            heading:'article two on cyber security',
            date:'March 10th 2017 ',
            content:`
                <body background:url("https://www.google.co.in/imgres?imgurl=http%3A%2F%2Fwww.saugeentimes.com%2FPictures%2FBackground%2520Gradients%2FDeepBlue1.png&imgrefurl=http%3A%2F%2Fwww.dgtees.info%2Fbthingbcol-background.html&docid=Kkv_hZhbANZMQM&tbnid=zEHQiNnFnBFYHM%3A&vet=10ahUKEwjk8P6U3eDSAhUJNo8KHcPQCaQ4rAIQMwhiKF8wXw..i&w=1024&h=768&itg=1&bih=662&biw=1366&q=background%20image&ved=0ahUKEwjk8P6U3eDSAhUJNo8KHcPQCaQ4rAIQMwhiKF8wXw&iact=mrc&uact=8#h=768&imgrc=zEHQiNnFnBFYHM:&vet=10ahUKEwjk8P6U3eDSAhUJNo8KHcPQCaQ4rAIQMwhiKF8wXw..i&w=1024")>
                hai this is manoj duli
                </body>`
       },
    'article-three': {
            title:'article three | manoj duli',
            heading:'article three on cyber security',
            date:'March 15 th 2017',
            content:`
               <h1 id="title"> <i>Cyber security:</i></h1>
                <h5 id="section">
                    Computer security, also known as cybersecurity or IT security, is the protection of computer systems from the theft or damage to the hardware, software or the information on them, as well as from disruption or misdirection of the services they provide.<br/>
                 </h5>`
        
    
    }
};

function createTemplate(data){
    var title=data.title;
    var heading=data.heading;
    var date=data.date;
    var content=data.content;
    var htmlTemplate=`
    <html>
    <head>
        <title>
            ${title}
        </title>
        <meta name="viewport" content="width=device-width,initial-scale=1"/>
        <link href="/ui/style.css" rel="stylesheet" />
    </head>
    <body>
        <div class = "container">
         <div>
             <a href="/">Home</a>
             <span style="display:inline-block; width: 100;"></span>
             <a href="/article-one">ARTICLE ONE</a>
             <span style="display:inline-block; width: 100;"></span>
             <a href="/article-two">ARTICLE TWO</a>
             <span style="display:inline-block; width: 100;"></span>
             <a href="/article-three">ARTICLE THREE</a>
         </div>
         <h3>
            ${heading}
         </h3>
         <div>
            ${date}
         </div>
         <div>
            <p>
                ${content}  
            </p>
         </div>
        </div>
    </body>
    </html>
 `;
return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var counter = 0;
app.get('/counter',function(req,res){
    counter++;
    res.send(counter.toString());
});

app.get('/favicon.ico', function(req, res){
    res.sendFile(path.join(__dirname, 'ui', 'favicon.ico'));
});

var names = [];
app.get('/submit-name',function(req,res){
    //Get the namefrom the request
    var name = req.query.name;
    names.push(name);
    //JSON:Javascript Object Notation
    res.send(JSON.stringify(names));
});
app.get('/:articleName',function (req,res){
  var articleName=req.params.articleName;    
  res.send(createTemplate(article[articleName]));
});



app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});