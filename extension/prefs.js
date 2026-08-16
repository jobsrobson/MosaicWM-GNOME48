import Adw from 'gi://Adw';
import Gtk from 'gi://Gtk';

import { ExtensionPreferences } from 'resource:///org/gnome/Shell/Extensions/js/extensions/prefs.js';

export default class MosaicPreferences extends ExtensionPreferences {
    fillPreferencesWindow(window) {
        const settings = this.getSettings(
            'org.gnome.shell.extensions.mosaicwm'
        );

        const page = new Adw.PreferencesPage({
            title: 'General',
            icon_name: 'preferences-system-symbolic',
        });

        const group = new Adw.PreferencesGroup({
            title: 'Layout',
            description: 'Configure the usable area and panel integration.',
        });

        const bottomAdjustment = new Gtk.Adjustment({
            lower: 0,
            upper: 300,
            step_increment: 1,
            page_increment: 10,
            value: settings.get_int('bottom-reserved-space'),
        });

        const bottomRow = new Adw.SpinRow({
            title: 'Bottom reserved space',
            subtitle: 'Keep this many pixels free below tiled windows',
            adjustment: bottomAdjustment,
            digits: 0,
        });

        bottomAdjustment.connect('value-changed', adjustment => {
            settings.set_int(
                'bottom-reserved-space',
                Math.round(adjustment.get_value())
            );
        });

        const indicatorRow = new Adw.SwitchRow({
            title: 'Show panel indicator',
            subtitle: 'Show the Mosaic WM status icon in the top panel',
        });

        settings.bind(
            'show-panel-indicator',
            indicatorRow,
            'active',
            0
        );

        group.add(bottomRow);
        group.add(indicatorRow);
        page.add(group);
        window.add(page);
    }
}
