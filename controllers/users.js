module.exports = {
	//define your controller here
    home: function(req, res, next){
        res.send('jyityt');
    },
    get: function(req, res, next) {
        res.render('register');
        // req.models.users.find({
        //     id: '1'
        // }, function(err, people) { //VIEW BY ID
        //     if (err) {
        //         res.json({
        //             status:false,
        //             message: err
        //         })
        //     } 
        //     else {
        //         res.render('users', {
        //             users: people,
        //             title: "EJS example",
        //             header: "Some users"
        //         });
        //     }
            
        // });
    },
    create: function(req, res, next) {
         
        var Users = req.models.users;
        var today = new Date();
        var users={
            "first_name":req.body.first_name,
            "last_name":req.body.last_name,
            "email":req.body.email,
            "password":req.body.password,
            "created": today,
            "modified": today
        }
   
        Users.find({ 'email': req.body.email }, function (err, user) {
            if (err) throw err;
            if (user.length > 0) {
                console.log('EMAIL already exists, email: ' );                                       
                res.json({
                    status: false,
                    data: 0,
                    message:'User already exists'
                })
            }
            else {
                console.log('user doesnt exist ' );  
                Users.create(users, function(err, data) {
                    if (err) throw err;                    
                    console.log(data);
                    data.save(function (err) {
                        console.log(err);
                        res.json({
                            status: true,
                            data: data,
                            message:'User registered successfully'
                        })
                    });
                
                });
            } 
        });
    }

}; 

