const { StatusCodes, BAD_REQUEST } = require('http-status-codes');
const NotImplemented = require('../errors/notimplemented.error');
const BadRequest = require('../errors/badrequest.error');

function pingProblem(req, res){
    return res.json({message: "Problem Controller is up"});
}

function addProblem(req, res, next) {
    try {
        throw new BadRequest('Problem Name', {missing: "Problem Name"});
    } catch (error) {
        next(error);
    }
}

function getProblem(req, res, next) {
    try {
        throw new BadRequest('Problem Name', {missing: "Problem Name"});
    } catch (error) {
        next(error);
    }
}

function getProblems(req, res, next) {
    try {
        throw new BadRequest('Problem Name', {missing: "Problem Name"});
    } catch (error) {
        next(error);
    }
}

function deleteProblem(req, res, next) {
    try {
        throw new BadRequest('Problem Name', {missing: "Problem Name"});
    } catch (error) {
        next(error);
    }
}

function updateProblem(req, res, next) {
    try {
        throw new BadRequest('Problem Name', {missing: "Problem Name"});
    } catch (error) {
        next(error);
    }
}

module.exports = {
    addProblem,
    getProblem,
    getProblems,
    updateProblem,
    deleteProblem,
    pingProblem
}