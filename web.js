var gzippo = require('gzippo');
var express = require('express');
var app = express();

app.use(express.logger('dev'));
app.use(gzippo.staticGzip("" + __dirname + "/dist"));
app.use(express.bodyParser());
app.post('/enquiry', function(req, res) {
  var enquiry = req.body.data;

  var sendgrid  = require('sendgrid')(process.env.SENDGRID_USERNAME, process.env.SENDGRID_PASSWORD);
  sendgrid.send({
    to:       process.env.NSU_EMAIL,
    from:     enquiry.email,
    subject:  'Enquiry from ' + enquiry.name + ', Phone: ' + enquiry.phone,
    text:     enquiry.query
  }, function(err, json) {
    if (err) {
      console.error(err);
      return err;
    }
    console.log(json);
    return json;
  });
});
app.listen(process.env.PORT || 5000);
