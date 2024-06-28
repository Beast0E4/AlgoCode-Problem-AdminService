const sanitizeMarkdownContent = require("../utils/markdownSanitizer");

class ProblemService {

    constructor (problemRespository) {
        this.problemRespository = problemRespository;
    }

    async createProblem(problemData) {
        try{
            console.log("Problem data: ", problemData);
            problemData.description = sanitizeMarkdownContent(problemData.description);

            const problem = await this.problemRespository.createProblem(problemData);
            console.log("Problem created: ", problem);

            return problem;

        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async getProblems() {
        try {
            const problems = await this.problemRespository.getProblems();
            return problems;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

}

module.exports = ProblemService;