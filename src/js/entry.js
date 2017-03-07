// document.write("It works.");

// require("!style-loader!css-loader!../css/style.css");
// ^ from tutorial, "!style!css!" -> "!style-loder!css-loader!"

require("../css/style.css");
// ^ in terminal webpack src/js/entry.js bundle.js --module-bind 'css=style-loader!css-loader'
document.write(require("./content.js"));