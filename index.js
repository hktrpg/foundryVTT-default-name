class defaultName {

    static keepAnEyeOut = function () {


    }

}
Hooks.on("renderDialog", (v) => {
    console.log(v)
    let data = v.data.content;
    v.data.content = null;
})

Hooks.once("ready", defaultName.keepAnEyeOut);