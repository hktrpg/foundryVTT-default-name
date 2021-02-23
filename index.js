class defaultName {

    static keepAnEyeOut = function () {


    }

}
Hooks.on("renderDialog", (v) => {
    console.log(v)
})

Hooks.once("ready", defaultName.keepAnEyeOut);