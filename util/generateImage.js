const Canvas = require("canvas")
const Discord = require('discord.js')

const background = "../images/everything-is-fine-dog.jpeg"

// background dimensions
const dim = {
    height: 675,
    width: 1200,
    margin: 50
}

// discord avatar dimensions
const av = {
    size: 256,
    x: 480,
    y: 170
}

// generates an image based on members discord Avatar and returns it as an discord MessageAttachment
const generateImage = async (member) => {
    let username = member.user.username
    let discrim = member.user.discriminator
    let avatarURL = member.user.displayAvatarURL({format: "png", dynamic: false, size:av.size})

    const canvas = Canvas.createCanvas(dim.width, dim.height)
    const ctx = canvas.getContext("2d")

    // load image as background
    const backimg = await Canvas.loadImage(background)
    ctx.drawImage(backimg, 0, 0)

    // draw a rectangle
    ctx.fillStyle = "rgba(0, 0, 0, 0.8)"
    ctx.fillRect(dim.margin, dim.margin, dim.width - 2 * dim.margin, dim.height - 2*dim.margin)

    // save context
    ctx.save()

    // load avatarImage as Canvas
    const avimg = await Canvas.loadImage(avatarURL)

    // draw Circle for Avatar
    ctx.beginPath()
    ctx.arc(av.x + av.size / 2, av.y + av.size / 2, av.size / 2, 0, Math.PI * 2, true)
    ctx.closePath()
    ctx.clip()

    // draw Avatar in clipped Frame
    ctx.drawImage(avimg, av.x, av.y)
    ctx.restore()


    // draw text
    ctx.fillStyle = "white"
    ctx.textAlign = "center"

    ctx.font = "50px Arial"
    ctx.fillText("Wilkommen", dim.width / 2, dim.margin + 50)

    ctx.font = "60px Arial"
    ctx.fillText(username + discrim, dim.width / 2, dim.height - dim.margin - 125)

    ctx.font = "40px Arial"
    ctx.fillText("auf dem Server", dim.width / 2, dim.height - dim.margin -50)

    // create a discord attachment with generated Image
    const attachment = new Discord.MessageAttachment(canvas.toBuffer(), "welcome.png")
    return attachment
}

module.exports = generateImage