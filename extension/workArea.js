// Copyright 2025-2026 Cleo Menezes Jr.
// SPDX-License-Identifier: GPL-2.0-or-later
//
// Mosaic-specific usable work area.
//
// Some docks, such as Dash to Dock in overlay/autohide configurations,
// do not reserve space in Mutter's native work area. Keep a small region
// free at the bottom so tiled windows do not cover the dock.

import { getBottomReservedSpace } from './settings.js';

export function getMosaicWorkArea(workspace, monitor) {
    if (!workspace)
        return null;

    const area = workspace.get_work_area_for_monitor(monitor);
    if (!area)
        return null;

    const bottomReservedSpace = getBottomReservedSpace();

    return {
        x: area.x,
        y: area.y,
        width: area.width,
        height: Math.max(1, area.height - bottomReservedSpace),
    };
}
