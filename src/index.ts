/**
Copyright (c) 2021-present, Eaton

All rights reserved.

This code is licensed under the BSD-3 license found in the LICENSE file in the root directory of this source tree and at https://opensource.org/licenses/BSD-3-Clause.
**/
export { blueTheme as blue } from "./blueTheme";
export { blueDarkTheme as blueDark } from "./blueDarkTheme";
import { $DeepPartial } from "@callstack/react-theme-provider";

// This will still need to be added to an end-user project if they want to access these properties without typescript yelling at them.
declare global {
    // eslint-disable-next-line @typescript-eslint/no-namespace
    namespace ReactNativePaper {
        // eslint-disable-next-line @typescript-eslint/consistent-type-definitions
        interface ThemeColors {
            primaryPalette: {
                light: string;
                main: string;
                dark: string;
            };
            accentPalette: {
                light: string;
                main: string;
                dark: string;
            };
            errorPalette: {
                light: string;
                main: string;
                dark: string;
            };
            divider: string;
            textPalette: {
                primary: string;
                secondary: string;
                onPrimary: {
                    light: string;
                    main: string;
                    dark: string;
                };
                disabled: string;
            };
            actionPalette: {
                active: string;
                background: string;
                disabled: string;
                disabledBackground: string;
            };
            overrides: $DeepPartial<ThemeOverrides>;
        }
        // eslint-disable-next-line @typescript-eslint/consistent-type-definitions
        interface ThemeFonts {
            bold: ThemeFont;
        }
    }
}

export type ThemeOverrides = {
    avatar: {
        background: string;
    };

    bottomNavigation: {
        inactive: string;
    };
    button: {
        contained: {
            text: {
                disabled: string;
            };
        };
    };
    chip: {
        outlined: {
            background: string;
        };
        flat: {
            background: string;
        };
    };
    snackbar: {
        accent: string;
    };
    toggleButtonGroup: {
        checked: {
            background: string;
        };
    };
};
