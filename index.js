var isDefaultName = false;

Hooks.once("init", () => {
    game.settings.register("default_name", "isDefaultName", {
        name: 'is Default Name',
        hint: 'If checked, there will be a be default name by placeholder in box, otherwise will focus only.',
        scope: "world",
        config: true,
        default: false,
        type: Boolean
    });
    isDefaultName = game.settings.get("default_name", "isDefaultName");
});

Hooks.on("renderDialog", (dialog, $element) => {
    isDefaultName = game.settings.get("default_name", "isDefaultName");
    if ($element.find(`input[type=text]`)[0] && !$element.find(`input[type=text]`)[0].value) {
        if (isDefaultName) $element.find(`input[type=text]`)[0].value = $element.find(`input[type=text]`)[0].placeholder || 'New Item';
        $element.find(`input[type=text]`)[0].focus();
    }
});


Hooks.on("renderFolderConfig", (dialog, $element) => {
    isDefaultName = game.settings.get("default_name", "isDefaultName");
    if ($element.find(`input[type=text]`)[0] && !$element.find(`input[type=text]`)[0].value) {
        if (isDefaultName) $element.find(`input[type=text]`)[0].value = $element.find(`input[type=text]`)[0].placeholder || 'New Item';
        $element.find(`input[type=text]`)[0].focus();
    }
});



Hooks.on("preCreateScene", (dialog) => {
    if (!dialog.name) dialog.name = 'New';
});
Hooks.on("preCreateActor", (dialog) => {
    if (!dialog.name) dialog.name = 'New';
});
Hooks.on("preCreateItem", (dialog) => {
    if (!dialog.name) dialog.name = 'New';
});
Hooks.on("preCreateJournalEntry", (dialog) => {
    if (!dialog.name) dialog.name = 'New';
});
Hooks.on("preCreateRollTable", (dialog) => {
    if (!dialog.name) dialog.name = 'New';
});
Hooks.on("preCreateFolder", (dialog) => {
    if (!dialog.name) dialog.name = 'New';
});
Hooks.on("preCreatePlaylist", (dialog) => {
    if (!dialog.name) dialog.name = 'New';
});