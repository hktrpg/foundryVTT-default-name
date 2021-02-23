class defaultName {

    static keepAnEyeOut = function () {

        Hooks.on(v => {
            concole.log(v)
        })
    }

}

Hooks.once("ready", defaultName.keepAnEyeOut);