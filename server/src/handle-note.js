

const handleNote = async (req, res, pgclient) => {
    pgclient = await pgclient
    let dbres = await pgclient.query(
        "INSERT into pw(name, email, body) VALUES(\'"+req.body.name+"\', \'"+req.body.email+"\', \'"+req.body.body+"\');"
    );
    console.log(dbres);
};

module.exports = { handleNote }