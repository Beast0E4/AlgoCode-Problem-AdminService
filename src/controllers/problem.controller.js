const BadRequest = require('../errors/badrequest.error')
const { ProblemService } = require('../services')
const { ProblemRepository } = require('../repositories');
const { StatusCodes } = require('http-status-codes');

const problemService = new ProblemService(new ProblemRepository());


function pingProblem(req, res){
    return res.json({message: "Problem Controller is up"});
}

async function addProblem(req, res, next) {
    try {
        console.log("Incoming req body", req.body);
        const newproblem = await problemService.createProblem(req.body);
        return res.status(StatusCodes.CREATED).json({
            success: true,
            message: "Successfully created a new problem",
            error: {},
            data: newproblem
        });
    } catch (error) {
        console.log('fuck', error);
        next(error);
    }
}

async function getProblems(req, res, next) {
    try {
        const problems = await problemService.getProblems();
        return res.status(StatusCodes.OK).json({
            success: true,
            message: "Successfully fetched all problems",
            error: {},
            data: problems
        });
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