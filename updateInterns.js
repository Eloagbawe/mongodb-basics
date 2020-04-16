var mongo = require ('mongodb');

var MongoClient = require ('mongodb').MongoClient;

var url = "mongodb://localhost:27017/Eloagbawe";

//Update the movie "The Banker"
function updateCollection(){
    var updateMoviesCollection = MongoClient.connect(url, {useUnifiedTopology:true},
        function(err, db){

            if (err) throw error;
            
            var mydb = db.db('Eloagbawe');

            var myquery = {movie: 'The Banker'};

            var newvalues = {$set: {movie: 'Jason Bourne', 
            year: '2016', rating: 8 }};

            var update = mydb.collection('myMovies').updateOne(myquery, newvalues, 
                function (err, res){

                    if (err) throw err;
                    
                    //Find the updated collection
                    var updatedCollection = 
                    mydb.collection('myMovies').find({}).toArray(function (err, res){
                        
                        if (err) throw err;
                        console.log(res);
                        
                        db.close();
                    });
                });
        });
}

//Calling the updateCollection function
updateCollection(), function(err,res){
    if (err) throw err;
};