const robots = {
    input: require('./robots/input.js'),
    text: require('./robots/text.js'),
    state: require('./robots/state.js')
}

async function start() {
    robots.input()
    await robots.text()

    const content = robots.state.load('content.json')
    console.dir(content, { depth: null } )
}

start()
