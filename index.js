Hooks.on("renderDialog", (dialog, $element) => {
    if ($element.find(`input[type=text]`)[0] && !$element.find(`input[type=text]`)[0].value) {
        $element.find(`input[type=text]`)[0].value = $element.find(`input[type=text]`)[0].placeholder || 'New Item';
        $element.find(`input[type=text]`)[0].focus();
    }
});

Hooks.on("renderFolderConfig", (dialog, $element) => {
    if ($element.find(`input[type=text]`)[0] && !$element.find(`input[type=text]`)[0].value) {
        $element.find(`input[type=text]`)[0].value = $element.find(`input[type=text]`)[0].placeholder || 'New Item';
        $element.find(`input[type=text]`)[0].focus();
    }
});
Hooks.on("renderApplication", (dialog, $element) => {
    if ($element.find(`div#module-management`) && $element.find(`input[type=text]`)[0]) {
        $element.find(`input[type=text]`)[0].focus();
        return;
    }
    if ($element.find(`input[type=text]`)[0] && !$element.find(`input[type=text]`)[0].value) {
        $element.find(`input[type=text]`)[0].value = $element.find(`input[type=text]`)[0].placeholder || 'New Item';
        $element.find(`input[type=text]`)[0].focus();
    }
});