const marked = require ('marked');
const sanitizeHtmlLibrary = require('sanitize-html');
const TurndownService = require('turndown');

function sanitizeMarkdownContent(markdownContent) {

    const turndownService = new TurndownService()

    const convertedHtml = marked.parse(markdownContent); //markdown to html

    console.log("Converted html as: ", convertedHtml);

    const sanitizedHtml = sanitizeHtmlLibrary(convertedHtml, {
        allowedTags: sanitizeHtmlLibrary.defaults.allowedTags
    });

    console.log("Sanitized html as: ", sanitizedHtml);
    const sanitizedMarkdown = turndownService.turndown(sanitizedHtml); // sanitized mardown to html
    console.log("Sanitized Markdown as: ", sanitizedMarkdown);
    return sanitizedMarkdown;

}

module.exports = sanitizeMarkdownContent;