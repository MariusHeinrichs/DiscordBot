const fs = require("fs")
const { getFiles } = require("../util/functions")

module.exports = (bot, reload) => {
    const {client} = bot

    let slashcommands = getFiles("./slashcommands/", ".js")

    if (slashcommands.length === 0)
        console.log("No slashCommands loaded")

    slashcommands.forEach(f => {
        if (reload) delete require.cache[require.resolve(`../slashcommands/${f}`)]
        const slashcmd = require(`../slashcommands/${f}`)
        client.slashcommands.set(slashcmd.name, slashcmd)
    })
    console.log(`Loaded ${client.slashcommands.size} slashCommands`)
}