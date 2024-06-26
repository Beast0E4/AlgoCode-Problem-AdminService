function pingProblem(req, res){
    return res.json({message: "Problem Controller is up"});
}

function addProblem(req, res) {
    return res.status().json({
        message: "Not implemented"
    });
}

function getProblem(req, res) {
    return res.status().json({
        message: "Not implemented"
    });
}

function getProblems(req, res) {
    return res.status().json({
        message: "Not implemented"
    });
}

function deleteProblem(req, res) {
    return res.status().json({
        message: "Not implemented"
    });
}

function updateProblem(req, res) {
    return res.status().json({
        message: "Not implemented"
    });
}

module.exports = {
    addProblem,
    getProblem,
    getProblems,
    updateProblem,
    deleteProblem,
    pingProblem
}