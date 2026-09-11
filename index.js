import Reveal from "reveal.js"
import Markdown from "reveal.js/plugin/markdown"
import Notes from "reveal.js/plugin/notes"
import revealStyles from "./node_modules/reveal.js/dist/reveal.css" with { type: "css"}
import revealThemeStyles from "./node_modules/reveal.js/dist/theme/black.css" with { type: "css"}
document.adoptedStyleSheets.push(revealStyles, revealThemeStyles);

Reveal.initialize({
    plugins: [Markdown, Notes],
    slideNumber: true
})