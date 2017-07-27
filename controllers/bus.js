var Buz = function () {};

Buz.prototype.log = function () {
  console.log('buz!');
};

Buz.prototype.get =  function(req, res, next) {
        var Users = req.models.users;
        Users.find(function(err, data) {
           
            if (err) {
                res.json({
                    status:false,
                    message:'there are some error with query'
                })
            }else{
                  res.json({
                    status:true,
                    data:data,
                    message:'user registered sucessfully'
                })
            }

        });
};

module.exports = new Buz();


