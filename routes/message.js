var models = require('../models');

exports.send = function(req, res) {
    console.log(req.body); // help you see what is inside of req.body
    var form = req.body;

    var newMessage = new models.Message({
      "email": req.body.email,
      "content": req.body.content,
      "created": Date.now()
   });
   newMessage.save(afterSubmit);

   function afterSubmit(err) {
      if(err) {
         console.log(err);
         res.send(500);
      }

      res.redirect('/');
   }
};
