var models = require("../models");

exports.view = function(req, res) {
   models.Message
      .find()
      .sort('created')
      .exec(renderMessage);

   function renderMessage(err, messages) {
      if(err) {
         console.log(err);
         res.send(500);
      }
      var data = {data: messages};
      res.render("index", data);
   }
}
