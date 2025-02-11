export const carSideIds = {
    FRONT_PASSENGER_SIDE_ID: 'front_passenger_side',
    FRONT_DRIVER_SIDE_ID: 'front_driver_side',
    REAR_PASSENGER_SIDE_ID: 'rear_passenger_side',
    REAR_DRIVER_SIDE_ID: 'rear_driver_side',
}

export const carSideTitleMap = {
    front_passenger_side: 'Front Passenger Side',
    front_driver_side: 'Front Driver Side',
    rear_passenger_side: 'Rear Passenger Side',
    rear_driver_side: 'Rear Driver Side',
};

export const tyreLabelIds = {
    SELECT_ID: "select",
    NONE_ID: "none",
    SLIGHT_ID: "slight",
    SEVERE_ID: "severe",
    UNEVEN_ID: "uneven",
    DAMAGED_ID: "damaged"
}

export const tyreLabelValueMap = {
    "Select an issue": tyreLabelIds.SELECT_ID,
    "No issue": tyreLabelIds.NONE_ID,
    "Remaining tread between 3mm & 2mm is 50% and 80% worn": tyreLabelIds.SLIGHT_ID,
    "Remaining tread between 2mm & 1.6mm is 80% and 100% worn": tyreLabelIds.SEVERE_ID,
    "Uneven Wear": tyreLabelIds.UNEVEN_ID,
    "Damaged Tyre": tyreLabelIds.DAMAGED_ID
}

export const tyreDamageTitleMap = {
    "slight": "50%-80% worn",
    "severe": "80%-100% worn",
    "uneven": "Uneven tread",
    "damaged": "Damaged tyre"
}

export const colourModeIds = {
    AUTO_ID: 'auto',
    LIGHT_ID: 'light',
    DARK_ID: 'dark'
}

export const localStorageKeys = {
    COLOUR_MODE_KEY: 'colour_mode',
    MAIN_KEY: 'dsa-grouptyre'
}

export const essentialsTitlesIds = {
    HOMOLOGATION_ID: 'homologation_code',
    VALVE_TPMS_ID: 'valve_tpms',
    BALANCE_ALINGMENT_ID: 'balance_alignment',
    TREAD_DEPTH_ID: 'tread_depth',
    LOAD_SPEED_ID: 'load_speed',
    TYRE_SIZE_ID: 'tyre_size',
    CONTACT_PATCH_ID: 'contact_patch',
    VIDEO_ID: 'video'
}

export const essentialsTitlesMap = {
    [essentialsTitlesIds.HOMOLOGATION_ID]: 'Homologation Code',
    [essentialsTitlesIds.VALVE_TPMS_ID]: 'Valve/TPMS',
    [essentialsTitlesIds.BALANCE_ALINGMENT_ID]: 'Balance and Alignment',
    [essentialsTitlesIds.TREAD_DEPTH_ID]: 'Tread Depth',
    [essentialsTitlesIds.LOAD_SPEED_ID]: 'Load and Speed',
    [essentialsTitlesIds.TYRE_SIZE_ID]: 'Tyre Size',
    [essentialsTitlesIds.CONTACT_PATCH_ID]: 'Contact Patch'
}

export const essentialsTitlesColourMap = {
    [essentialsTitlesIds.HOMOLOGATION_ID]: 'bg-gauge-red',
    [essentialsTitlesIds.VALVE_TPMS_ID]: 'bg-essentials-purple',
    [essentialsTitlesIds.BALANCE_ALINGMENT_ID]: 'bg-essentials-blue',
    [essentialsTitlesIds.TREAD_DEPTH_ID]: 'bg-essentials-green',
    [essentialsTitlesIds.LOAD_SPEED_ID]: 'bg-essentials-yellow',
    [essentialsTitlesIds.TYRE_SIZE_ID]: 'bg-essentials-orange',
    [essentialsTitlesIds.CONTACT_PATCH_ID]: 'bg-essentials-navy'
}

export const dial = {
    MIN_DIAL_ROTATION: -25,
    MAX_DIAL_ROTATION: 215
}
