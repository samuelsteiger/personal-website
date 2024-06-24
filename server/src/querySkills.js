

const querySkills = async (req, res, pgclient) => {
    pgclient = await pgclient
    let dbres = await pgclient.query(
        "SELECT * from Skills;"
    );
    res.status(200).send(dbres.rows);
};

module.exports = { querySkills }