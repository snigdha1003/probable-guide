//twilio
const accountSid = 'AC10ed2215b85f5e56ed8bdba135eb7fe2';
const authToken = 'e402e3a4412fc66210a101850108ef56';
const client = require('twilio')(accountSid, authToken);



var express = require('express');
var router = express.Router();
var app = express();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});



/* GET home page. */
router.post('/cartTextForm', function(req, res) {
	let completeNumber = "whatsapp:+91"+req.body.phonenumber; 
	console.log(completeNumber);


	let bodyMessage = req.body.cartText + "\nUser's Number is - " + completeNumber;


        client.messages
	    .create({
		            body: bodyMessage,
		            from: 'whatsapp:+14155238886',
		            to:  vendorNumber
		        })
	    .then(message => console.log(message.sid));

       res.send("Your Order is placed. Enjoy!!!!\n\n\n" +req.body.cartText);

});

/* handle POST of Yurish */
router.post('/cartTextFormyurish', function(req, res) {
	let completeNumber = "whatsapp:+91"+req.body.yurishphonenumber; 
	console.log(completeNumber);
    
    
    let vendorNumber =  "whatsapp:+91"+req.body.vendorNumber; 
	console.log(vendorNumber);


	let bodyMessage = "\nPlease deliver the below order - " + req.body.cartTextyurish + "\nDelivery Details - " + "\nContact Name - " + req.body.yurishname + "\nMobile Number - " + completeNumber + "\nHostel Name - " + req.body.yurishaddress + "\nRoom Number - " + req.body.yurishroom;



        client.messages
	    .create({
		            body: bodyMessage,
		            from: 'whatsapp:+14155238886',
		            to: vendorNumber  
		        })
	    .then(message => console.log(message.sid));

          res.sendfile(__dirname + "/response.html");

});


/* handle POST of Sohana */
router.post('/cartTextFormsohana', function(req, res) {
	let completeNumber = "whatsapp:+91"+req.body.sohanaphonenumber; 
	console.log(completeNumber);
    
    
    let vendorNumber =  "whatsapp:+91"+req.body.vendorNumber; 
	console.log(vendorNumber);


	let bodyMessage = "\nPlease deliver the below order - " + req.body.cartTextsohana + "\nDelivery Details - " + "\nContact Name - " + req.body.sohananame + "\nMobile Number - " + completeNumber + "\nHostel Name - " + req.body.sohanaaddress + "\nRoom Number - " + req.body.sohanaroom;



        client.messages
	    .create({
		            body: bodyMessage,
		            from: 'whatsapp:+14155238886',
		            to: vendorNumber  
		        })
	    .then(message => console.log(message.sid));

          res.sendfile(__dirname + "/response.html");

});

/* handle POST of evergreen */
router.post('/cartTextFormevergreen', function(req, res) {
	let completeNumber = "whatsapp:+91"+req.body.evergreenphonenumber; 
	console.log(completeNumber);
    
    
    let vendorNumber =  "whatsapp:+91"+req.body.vendorNumber; 
	console.log(vendorNumber);


	let bodyMessage = "\nPlease deliver the below order - " + req.body.cartTextevergreen + "\nDelivery Details - " + "\nContact Name - " + req.body.evergreenname + "\nMobile Number - " + completeNumber + "\nHostel Name - " + req.body.evergreenaddress + "\nRoom Number - " + req.body.evergreenroom;



        client.messages
	    .create({
		            body: bodyMessage,
		            from: 'whatsapp:+14155238886',
		            to: vendorNumber  
		        })
	    .then(message => console.log(message.sid));

          res.sendfile(__dirname + "/response.html");

});



/* handle POST of butty */
router.post('/cartTextFormbutty', function(req, res) {
	let completeNumber = "whatsapp:+91"+req.body.buttyphonenumber; 
	console.log(completeNumber);
    
    
    let vendorNumber =  "whatsapp:+91"+req.body.vendorNumber; 
	console.log(vendorNumber);


	let bodyMessage = "\nPlease deliver the below order - " + req.body.cartTextbutty + "\nDelivery Details - " + "\nContact Name - " + req.body.buttyname + "\nMobile Number - " + completeNumber + "\nHostel Name - " + req.body.buttyaddress + "\nRoom Number - " + req.body.buttyroom;



        client.messages
	    .create({
		            body: bodyMessage,
		            from: 'whatsapp:+14155238886',
		            to: vendorNumber  
		        })
	    .then(message => console.log(message.sid));

          res.sendfile(__dirname + "/response.html");

});


/* handle POST of sunny */
router.post('/cartTextFormsunny', function(req, res) {
	let completeNumber = "whatsapp:+91"+req.body.sunnyphonenumber; 
	console.log(completeNumber);
    
    
    let vendorNumber =  "whatsapp:+91"+req.body.vendorNumber; 
	console.log(vendorNumber);


	let bodyMessage = "\nPlease deliver the below order - " + req.body.cartTextsunny + "\nDelivery Details - " + "\nContact Name - " + req.body.sunnyname + "\nMobile Number - " + completeNumber + "\nHostel Name - " + req.body.sunnyaddress + "\nRoom Number - " + req.body.sunnyroom;



        client.messages
	    .create({
		            body: bodyMessage,
		            from: 'whatsapp:+14155238886',
		            to: vendorNumber  
		        })
	    .then(message => console.log(message.sid));

          res.sendfile(__dirname + "/response.html");

});

/* handle POST of gplus */
router.post('/cartTextFormgplus', function(req, res) {
	let completeNumber = "whatsapp:+91"+req.body.gplusphonenumber; 
	console.log(completeNumber);
    
    
    let vendorNumber =  "whatsapp:+91"+req.body.vendorNumber; 
	console.log(vendorNumber);


	let bodyMessage = "\nPlease deliver the below order - " + req.body.cartTextgplus + "\nDelivery Details - " + "\nContact Name - " + req.body.gplusname + "\nMobile Number - " + completeNumber + "\nHostel Name - " + req.body.gplusaddress + "\nRoom Number - " + req.body.gplusroom;



        client.messages
	    .create({
		            body: bodyMessage,
		            from: 'whatsapp:+14155238886',
		            to: vendorNumber  
		        })
	    .then(message => console.log(message.sid));

          res.sendfile(__dirname + "/response.html");

});

/* handle POST of park */
router.post('/cartTextFormpark', function(req, res) {
	let completeNumber = "whatsapp:+91"+req.body.parkphonenumber; 
	console.log(completeNumber);
    
    
    let vendorNumber =  "whatsapp:+91"+req.body.vendorNumber; 
	console.log(vendorNumber);


	let bodyMessage = "\nPlease deliver the below order - " + req.body.cartTextpark + "\nDelivery Details - " + "\nContact Name - " + req.body.parkname + "\nMobile Number - " + completeNumber + "\nHostel Name - " + req.body.parkaddress + "\nRoom Number - " + req.body.parkroom;



        client.messages
	    .create({
		            body: bodyMessage,
		            from: 'whatsapp:+14155238886',
		            to: vendorNumber  
		        })
	    .then(message => console.log(message.sid));

          res.sendfile(__dirname + "/response.html");

});

/* handle POST of andhra */
router.post('/cartTextFormandhra', function(req, res) {
	let completeNumber = "whatsapp:+91"+req.body.andhraphonenumber; 
	console.log(completeNumber);
    
    
    let vendorNumber =  "whatsapp:+91"+req.body.vendorNumber; 
	console.log(vendorNumber);


	let bodyMessage = "\nPlease deliver the below order - " + req.body.cartTextandhra + "\nDelivery Details - " + "\nContact Name - " + req.body.andhraname + "\nMobile Number - " + completeNumber + "\nHostel Name - " + req.body.andhraaddress + "\nRoom Number - " + req.body.andhraroom;



        client.messages
	    .create({
		            body: bodyMessage,
		            from: 'whatsapp:+14155238886',
		            to: vendorNumber  
		        })
	    .then(message => console.log(message.sid));

          res.sendfile(__dirname + "/response.html");

});


/* handle POST of biriyani */
router.post('/cartTextFormbiriyani', function(req, res) {
	let completeNumber = "whatsapp:+91"+req.body.biriyaniphonenumber; 
	console.log(completeNumber);
    
    
    let vendorNumber =  "whatsapp:+91"+req.body.vendorNumber; 
	console.log(vendorNumber);


	let bodyMessage = "\nPlease deliver the below order - " + req.body.cartTextbiriyani + "\nDelivery Details - " + "\nContact Name - " + req.body.biriyaniname + "\nMobile Number - " + completeNumber + "\nHostel Name - " + req.body.biriyaniaddress + "\nRoom Number - " + req.body.biriyaniroom;



        client.messages
	    .create({
		            body: bodyMessage,
		            from: 'whatsapp:+14155238886',
		            to: vendorNumber  
		        })
	    .then(message => console.log(message.sid));

          res.sendfile(__dirname + "/response.html");

});
/* handle POST of chocomans */
router.post('/cartTextFormchocomans', function(req, res) {
	let completeNumber = "whatsapp:+91"+req.body.chocomansphonenumber; 
	console.log(completeNumber);
    
    
    let vendorNumber =  "whatsapp:+91"+req.body.vendorNumber; 
	console.log(vendorNumber);


	let bodyMessage = "\nPlease deliver the below order - " + req.body.cartTextchocomans + "\nDelivery Details - " + "\nContact Name - " + req.body.chocomansname + "\nMobile Number - " + completeNumber + "\nHostel Name - " + req.body.chocomansaddress + "\nRoom Number - " + req.body.chocomansroom;



        client.messages
	    .create({
		            body: bodyMessage,
		            from: 'whatsapp:+14155238886',
		            to: vendorNumber  
		        })
	    .then(message => console.log(message.sid));

          res.sendfile(__dirname + "/response.html");

});


/* handle POST of queen */
router.post('/cartTextFormqueen', function(req, res) {
	let completeNumber = "whatsapp:+91"+req.body.queenphonenumber; 
	console.log(completeNumber);
    
    
    let vendorNumber =  "whatsapp:+91"+req.body.vendorNumber; 
	console.log(vendorNumber);


	let bodyMessage = "\nPlease deliver the below order - " + req.body.cartTextqueen + "\nDelivery Details - " + "\nContact Name - " + req.body.queenname + "\nMobile Number - " + completeNumber + "\nHostel Name - " + req.body.queenaddress + "\nRoom Number - " + req.body.queenroom;



        client.messages
	    .create({
		            body: bodyMessage,
		            from: 'whatsapp:+14155238886',
		            to: vendorNumber  
		        })
	    .then(message => console.log(message.sid));

          res.sendfile(__dirname + "/response.html");

});


/* handle POST of happy */
router.post('/cartTextFormhappy', function(req, res) {
	let completeNumber = "whatsapp:+91"+req.body.happyphonenumber; 
	console.log(completeNumber);
    
    
    let vendorNumber =  "whatsapp:+91"+req.body.vendorNumber; 
	console.log(vendorNumber);


	let bodyMessage = "\nPlease deliver the below order - " + req.body.cartTexthappy + "\nDelivery Details - " + "\nContact Name - " + req.body.happyname + "\nMobile Number - " + completeNumber + "\nHostel Name - " + req.body.happyaddress + "\nRoom Number - " + req.body.happyroom;



        client.messages
	    .create({
		            body: bodyMessage,
		            from: 'whatsapp:+14155238886',
		            to: vendorNumber  
		        })
	    .then(message => console.log(message.sid));

          res.sendfile(__dirname + "/response.html");

});


module.exports = router;


