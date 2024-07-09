

const handleNote = async (req, res, pgclient) => {
    pgclient = await pgclient

    var err = []
    var errstr;
    errstr = validateName(req.body.name)
    if(!errstr == ""){err.push(errstr)}

    errstr = validateEmail(req.body.email)
    if(!errstr == ""){err.push(errstr)}
    
    errstr = validateText(req.body.text)
    if(!errstr == ""){err.push(errstr)}
    
    if(err.length > 0) {
        res.status(400).send(err);
        return
    }

    const text = "INSERT into notes(name, email, body) VALUES($1, $2, $3);"
    const params = [req.body.name, req.body.email, req.body.text];
    let dbres = await pgclient.query(text, params);
    if(dbres.command != "INSERT") {res.status(500).send(["Internal Server Error"]);}
    else {res.status(200).send(["Thank you for the message!"]);}
};
//An empty string mean a parameter passed validation
function validateName(name) {
    if(name.length > 50) {
        return "The name must be 50 characters or less."
    }
    return ""
}

const emailRegex = /.+@.+\../
function validateEmail(email) {
    if(email.length > 50) {
        return "The body of your message must be 50 characters or less."
    }
    if(!emailRegex.test(email)){
        return "The email is not vaild."
    }


    return ""
}

function validateText(text) {
    if(text.length > 500) {
        return "The body of your message must be 500 characters or less."
    }
    return ""
}

module.exports = { handleNote }