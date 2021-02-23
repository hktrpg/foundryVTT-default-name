class defaultName {

    static keepAnEyeOut = function () {

        dialog.activateListeners(v => {
            console.log(v)
        })
        dialog.activateListeners.on(v => {
            console.log(v)
        })
        application.render.on(v => {
            console.log(v)
        })
    }

}

Hooks.once("ready", defaultName.keepAnEyeOut);