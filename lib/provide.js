module.exports = function(req, res, next) {
  res.provide = function( resourceName , data ) {
    res.format({
      json: function() { res.send( data[ resourceName ] ); },
      html: function() {
        
        var resource = req.app.resources[ resourceName ];
        var collectors = [];

        if ( resource && resource.requires && resource.requires.length ) {
          resource.requires.forEach(function(r) {
            collectors.push(function(err, done) {
              req.app.resources[ r ].get( req , res , function() {
                done( null );
              });
            });
          });
        }

        console.log( collectors );

        async.waterfall( collectors , function(err, results) {
          res.render( resourceName , data );
        });
      }
    });
  }
  
  next();
}
