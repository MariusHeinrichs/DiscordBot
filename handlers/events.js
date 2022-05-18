const { getFiles } = require("../util/functions")

// event handler which goes through all events once

// reload is a boolean which states if this is the first we load
// enables reloading if changes was made to the code without loading everything again
module.exports = (bot, reload) => {
    const {client} = bot

    let events = getFiles("./events/", ".js")

    if(events.length === 0){
        console.log("No events to load")
    }

    events.forEach((f, i) => {
        // delete old events if reload
        if (reload)
            delete require.cache[require.resolve(`../events/${f}`)]
        const event = require(`../events/${f}`)
        client.events.set(event.name, event)

        if (!reload)
            console.log(`${i+1}. ${f} loaded`)
    })

    if (!reload)
        initEvents(bot)
}

// remaining parameters go into args for certain discord messages
function triggerEventHandler(bot, event, ...args){
    const {client} = bot

    try {
        // if there are events run them
        if (client.events.has(event))
            client.events.get(event).run(bot, ...args)
        else   
            throw new Error(`Event ${event} does not exist`)
    }
    catch(err){
        console.error(err)
    }
}


function initEvents(bot) {
    const {client} = bot

    client.on("ready", () => {
        triggerEventHandler(bot, "ready")
    })

    client.on("messageCreate", (message) => {
        triggerEventHandler(bot, "messageCreate", message)
    })
}
