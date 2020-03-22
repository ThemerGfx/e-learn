const express = require('express')
const { MongoClient, ObjectID } = require('mongodb')
const bodyParser = require('body-parser')
const assert = require('assert')
const cors = require('cors')

const app = express()
app.use(cors())
app.use(bodyParser.json())

////////// MONGO DRIVER
const mongo_url = 'mongodb://localhost:27017'
const dataBase = "e_learning"

MongoClient.connect(mongo_url, (err, client) => {
    assert.equal(err, null, 'database connection failed')
    const db = client.db(dataBase)

    ////// ADD STUDENT
    app.post('/addone', (req, res) => {
        const formationToAdd = {
            nameF: req.body.nameF,
            defF: req.body.defF,
            categF: req.body.categF,
            nameFormatF: req.body.nameFormatF,
            priceF: req.body.priceF,
            created: req.body.created,
            title1: req.body.title1,
            def1: req.body.def1,
            // vd1: req.body.vd1,
            // fl1: req.body.fl1,
            title2: req.body.title2,
            def2: req.body.def2,
            // vd2: req.body.vd2,
            // fl2: req.body.fl2,
            title3: req.body.title3,
            def3: req.body.def3,
            // vd3: req.body.vd3,
            // fl3: req.body.fl3,
        }
        db.collection('formations').insertOne(formationToAdd, (err, data) => {
            if (err) res.send('cannot add formation')
            else res.send('formation added')
        })
    })
    ////// GET ALL STUDENTS
    app.get('/getall', (req, res) => {
        db.collection('formations').find().toArray((err, data) => {
            if (err) res.send('cannot fetch formations')
            else res.send(data)
        })
    })
    ////// GET ONE STUDENT
    app.get('/getone/:id', (req, res) => {
        let searchedFormationId = ObjectID(req.params.id)
        db.collection('formations').findOne({_id: searchedFormationId}, (err, data) => {
            if (err) res.send('cannot fetch formation')
            else res.send(data)
        })
    })
    ////// MODIFY STUDENT
    app.put('/modifyone/:id', (req, res) => {
        let IdModify = ObjectID(req.params.id)
        const formationToModify = {
            nameF: req.body.nameF,
            defF: req.body.defF,
            categF: req.body.categF,
            nameFormatF: req.body.nameFormatF,
            priceF: req.body.priceF,
            created: req.body.created,
            title1: req.body.title1,
            def1: req.body.def1,
            // vd1: req.body.vd1,
            // fl1: req.body.fl1,
            title2: req.body.title2,
            def2: req.body.def2,
            // vd2: req.body.vd2,
            // fl2: req.body.fl2,
            title3: req.body.title3,
            def3: req.body.def3,
            // vd3: req.body.vd3,
            // fl3: req.body.fl3,
        }
        db.collection('formations').findOneAndUpdate(
            {_id: IdModify},
            {
                $set: {
                    ...formationToModify
                }
            },
            (err, data) => {
                if (err) res.send('cannot modify formation')
                else res.send('formation was modified')
            }
        )
    })
    ////// DELETE ONE STUDENT
    app.delete('/deleteone/:id', (req, res) => {
        let formationToRemove = ObjectID(req.params.id)
        db.collection('formations').findOneAndDelete(
            {_id: formationToRemove},
            (err, data) => {
                if (err) res.send('cannot delete formation')
                else res.send('formation was deleted')
            }
        )
    })
})

app.listen(5000, (err) => {
    if (err) console.log("server error")
    else console.log("server is running on port 5000")
})