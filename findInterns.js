var mongo = require ('mongodb');

var MongoClient = require ('mongodb').MongoClient;

var url = "mongodb://localhost:27017/Eloagbawe";

function findDocuments() {
    // Find the first Document in the myMovies Collection
    var firstMovie = MongoClient.connect(url, {useUnifiedTopology: true},
        function(err, db){

            if (err) throw error;

            var mydb = db.db('Eloagbawe');
            var cursor = mydb.collection('myMovies').findOne({},
                function (err,res){

                    if (err) throw err;

                    console.log(res);
                    db.close();
                });
        });

    //Find all movies with a rating of 7 in the myMovies Collection
    var rating = MongoClient.connect(url, {useUnifiedTopology: true},
        function(err, db){
            if (err) throw error;

            var mydb = db.db('Eloagbawe');
            var cursor = mydb.collection('myMovies').find({rating:7});
            cursor.each(function(err, res){
                
                if (err) throw err;
                
                console.log(res);
                db.close();
            });
        });

    //Find only movie titles
    var movieTitles = MongoClient.connect(url, {useUnifiedTopology: true},
        function(err, db){
            
            if (err) throw error;
            
            var mydb = db.db('Eloagbawe');
            var title = mydb.collection('myMovies').find({},
                {projection: {_id: 0, movie:1}}).toArray(function (err,res){
                    
                    if (err) throw err;

                    console.log(res);
                    db.close();
                });
        });
}

//Calling the findDocuments function
findDocuments(), function(err,res){
    if (err) throw err;
};