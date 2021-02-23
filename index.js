class defaultName {

    static keepAnEyeOut = function () {


    }

}
Hooks.on("renderDialog", (v) => {
    concole.log(v)
})

Hooks.once("ready", defaultName.keepAnEyeOut);