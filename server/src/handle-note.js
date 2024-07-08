

const handleNote = async (req, res, pgclient) => {
    pgclient = await pgclient
    const text = "INSERT into notes(name, email, body) VALUES($1, $2, $3);"
    const params = [req.body.name, req.body.email, req.body.text];
    let dbres = await pgclient.query(text, params);
};

module.exports = { handleNote }