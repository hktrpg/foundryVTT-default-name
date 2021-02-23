class defaultName {

    static keepAnEyeOut = function () {


    }

}
Hooks.on("render", (v) => {
    concole.log(v)
})
Hooks.on("render", (v) => {
    concole.log(v)
})
Hooks.on("Application", (v) => {
    concole.log(v)
})

Hooks.on("render", (v) => {
    concole.log(v)
})
Hooks.once("ready", defaultName.keepAnEyeOut);