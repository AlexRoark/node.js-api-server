const MongoClient = require('mongodb').MongoClient;

var state = {
    db: null
}

exports.connect = (url, done) => {
    if (state.db) {
        return done();
    }

    MongoClient.connect(url,
        {
            useUnifiedTopology: true,
            useNewUrlParser: true
        },
        function (err, client) {
            if (err) {
                return done(err);
            }
            state.db = client.db('nodejs');
            done();
        })
}

exports.get = () => state.db;