class defaultName {

    static keepAnEyeOut = function () {


    }

}


Hooks.on("render", (v) => {
    concole.log(v)
})
Hooks.once("ready", defaultName.keepAnEyeOut);