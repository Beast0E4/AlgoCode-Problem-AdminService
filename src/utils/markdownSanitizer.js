const marked = require ('marked');
const sanitizeHtmlLibrary = require('sanitize-html');
const TurndownService = require('turndown');

function sanitizeMarkdownContent(markdownContent) {

    const turndownService = new TurndownService()

    const convertedHtml = marked.parse(markdownContent); //markdown to html

    const sanitizedHtml = sanitizeHtmlLibrary(convertedHtml, {
        allowedTags: sanitizeHtmlLibrary.defaults.allowedTags.concat(['img'])
    });
    const sanitizedMarkdown = turndownService.turndown(sanitizedHtml); // sanitized mardown to html
    return sanitizedMarkdown;

}

module.exports = sanitizeMarkdownContent;