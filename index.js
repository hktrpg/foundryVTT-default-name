class defaultName {

    static keepAnEyeOut = function () {


        game.socket.on('template', (v) => {
            console.log('template', v)
        });

    }

}

Hooks.once("ready", defaultName.keepAnEyeOut);