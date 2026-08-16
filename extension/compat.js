// Compatibility helpers for GNOME Shell / Mutter 48+.

export function isMaximized(window) {
    if (!window)
        return false;

    // Mutter 50+
    if (typeof window.is_maximized === 'function')
        return window.is_maximized();

    // Mutter 48 fallback.
    return Boolean(
        window.maximized_horizontally &&
        window.maximized_vertically
    );
}

export function isMaximizedOrFullscreen(window) {
    return isMaximized(window) || window.is_fullscreen();
}
