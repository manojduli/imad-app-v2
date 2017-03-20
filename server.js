var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var article={
    'article-one': {
        title:'article one | manoj duli',
        heading:'<h2 id="tags">article one on cyber security</h2>',
        date:'<h2 id="heads">March 10th 2017</h2>' ,
        content:`
                <h1 class="body"> <i>Cyber security:</i></h1>
                <h5 id="section">
                    Computer security, also known as cybersecurity or IT security, is the protection of computer systems from the theft or damage to the hardware, software or the information on them, as well as from disruption or misdirection of the services they provide.<br/>
                        <br/>
                    It includes controlling physical access to the hardware, as well as protecting against harm that may come via network access, data and code injection, and due to malpractice by operators, whether intentional, accidental, or due to them being tricked into deviating from secure procedures.
                </h5>`
        
                
                
    },
    'article-two': {
            title:'article two | manoj duli',
            heading:'<h2 id="tags">article two on cyber security</h2>',
            date:'<h2 id="heads">March 10th 2017</h2>' ,
            content:`
                <body >
                <h1 class="body"> <i>Advantages of Cyber security:</i></h1>
                   <h5>
                    <ul id="heads">
                      <li><h3>Protects networks and resources.</h3></li>
                       <li><h3>Protects  against data from theft.</h3></li>
                       <li><h3>Increase in cyber defense. </h3></li>
                       <li><h3>Increase in cyber speed. </h3></li>
                       <li><h3>Increases the security.</h3></li>
                       <li><h3>Protects systems and computers against virus worms and malware.</h3> </li>
                       <li><h3>Browse the safe web site.</h3></li>
                    </ul>
                    </h5>
                <h1 class="body"> <i>Dis Advantages of Cyber security:</i></h1>    
                <
                    <ul id="heads" >
                
                        <li><h3>Makes the system slower than before.</h3></li>
                        <li><h3>Need to keep updating the software in order to keep security up to date.</h3></li>
                        <li><h3>Firewalls will be difficult to configure correctly</h3></li>
                        <li><h3>Huge amount of loss in money for the banks, companies etc.</h3></li>
                
                    </ul >
                
                    
                </body>`
       },
    'article-three': {
            title:'article three | manoj duli',
            heading:'<h2 id="tags">article three on cyber security</h2>',
            date: '<h2 id="heads">March 15 th 2017</h2>',
            content:`
            <body >
            
               <h1  class="body"> <i>Cyber security:</i></h1>
                <h5 id="section">
                <ul id="heads" >
                    <li><h3>	For every second, 18 members are becoming a victims of cyber-crime.</h3></li>
                    <li><h3>	India ranks in the 5th position in cyber-crimes with 16.9%.</h3></li>
                    <li><h3>	Maharashtra and Uttar Pradesh ranks top in cyber-crimes.</h3></li>
                    <li><h3>	80,000 cyber-attacks has been done from 9th -12th December after note ban.</h3></li>
                    <li><h3>	1 million cyber security jobs in 2016.</h3></li>
                </ul>

                 </h5>
            </body>`
        
    
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
             <a href="/" id="heads">Home</a>
             <span style="display:inline-block; width: 100;"></span>
             <a href="/article-one" id="heads">ARTICLE ONE</a>
             <span style="display:inline-block; width: 100;"></span>
             <a href="/article-two" id="heads">ARTICLE TWO</a>
             <span style="display:inline-block; width: 100;"></span>
             <a href="/article-three" id="heads">ARTICLE THREE</a>
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