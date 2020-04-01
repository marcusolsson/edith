require(`@babel/register`)({
  presets: ["@babel/preset-env", "@babel/preset-react"],
})
module.exports = require(`./gatsby-node-es6.js`)
