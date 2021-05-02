const createClient = require('hafas-client')
const vbbProfile = require('hafas-client/p/vbb')
const router = require("express").Router()

router.get("/", (req, res) => {
    res.send("Hello from api/user");
});

router.get("/getlocation/:id", (req, res) => {
    const client = createClient(vbbProfile, 'my-awesome-program')
    const id = req.params.id
    client.locations(id, { results: 3 })
        .then(response => {

            console.log(res);
            res.json(response);
        })
        .catch(error => res.json(error))
})

router.get("/stopdepartures/:id", (req, res) => {
    const client = createClient(vbbProfile, "my-awesome-program");
    const id = req.params.id
    client
        .departures(id, { duration: 3 })
        .then(response => res.json(response))
        .catch(error => res.json(error))
})

module.exports = router;
