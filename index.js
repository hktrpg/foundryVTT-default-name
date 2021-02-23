Hooks.on("renderDialog", (dialog, $element) => {
    $element.find(`input[type=text]`)[0].value = $element.find(`input[type=text]`)[0].placeholder || 'New Item';
    $element.find(`input[type=text]`)[0].focus();
});