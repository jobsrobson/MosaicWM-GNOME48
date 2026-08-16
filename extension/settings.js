let _settings = null;

export function initSettings(extension) {
    _settings = extension.getSettings('org.gnome.shell.extensions.mosaicwm');
    return _settings;
}

export function clearSettings() {
    _settings = null;
}

export function getSettings() {
    return _settings;
}

export function getBottomReservedSpace() {
    return _settings?.get_int('bottom-reserved-space') ?? 80;
}

export function getShowPanelIndicator() {
    return _settings?.get_boolean('show-panel-indicator') ?? true;
}
