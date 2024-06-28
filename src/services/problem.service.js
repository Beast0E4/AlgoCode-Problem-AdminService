const sanitizeMarkdownContent = require("../utils/markdownSanitizer");

class ProblemService {

    constructor (problemRespository) {
        this.problemRespository = problemRespository;
    }

    async createProblem(problemData) {
        try{
            problemData.description = sanitizeMarkdownContent(problemData.description);

            const problem = await this.problemRespository.createProblem(problemData);
            return problem;

        } catch (error) {
            throw error;
        }
    }

    async getProblems() {
        try {
            const problems = await this.problemRespository.getProblems();
            return problems;
        } catch (error) {
            throw error;
        }
    }

    async getProblem(id) {
        try {
            const problem = await this.problemRespository.getProblem(id);
            return problem;
        } catch (error) {
            throw error;
        }
    }

}

module.exports = ProblemService;