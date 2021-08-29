export const darkTheme = {
    palette: {
        primary: {
            main: '#90caf9',
        },
        secondary: {
            main: '#FBBA72',
        },
        type: 'dark' as 'dark', // Switching the dark mode on is a single property value change.
    },
    overrides: {
        MuiAppBar: {
            colorSecondary: {
                color: '#ffffffb3',
                backgroundColor: '#616161e6',
            },
        },
        MuiButtonBase: {
            root: {
                '&:hover:active::after': {
                    // recreate a static ripple color
                    // use the currentColor to make it work both for outlined and contained buttons
                    // but to dim the background without dimming the text,
                    // put another element on top with a limited opacity
                    content: '""',
                    display: 'block',
                    width: '100%',
                    height: '100%',
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    backgroundColor: 'currentColor',
                    opacity: 0.3,
                    borderRadius: 'inherit',
                },
            },
        },
    },
    props: {
        MuiButtonBase: {
            // disable ripple for perf reasons
            disableRipple: true,
        },
    },
};

export const lightTheme = {
    palette: {
        primary: {
            main: '#115293',
        },
        secondary: {
            light: '#5f5fc4',
            main: '#283593',
            dark: '#001064',
            contrastText: '#fff',
        },
        background: {
            default: '#fcfcfe',
        },
        type: 'light' as 'light',
    },
    shape: {
        borderRadius: 10,
    },
    overrides: {
        RaMenuItemLink: {
            root: {
                borderLeft: '3px solid #fff',
            },
            active: {
                borderLeft: '3px solid #115293',
            },
        },
        MuiPaper: {
            elevation1: {
                // boxShadow: 'none',
                boxShadow: '0px 3px 3px -2px rgb(0 0 0 / 6%), 0px 3px 4px 0px rgb(0 0 0 / 4%), 0px 1px 8px 0px rgb(0 0 0 / 4%)',
            },
            root: {
                border: 'none',//'1px solid #e0e0e3',
                backgroundClip: 'padding-box',
            },
        },
        MuiButton: {
            contained: {
                backgroundColor: '#fff',
                color: '#115293',
                boxShadow: 'none',
            },
        },
        MuiButtonBase: {
            root: {
                '&:hover:active::after': {
                    // recreate a static ripple color
                    // use the currentColor to make it work both for outlined and contained buttons
                    // but to dim the background without dimming the text,
                    // put another element on top with a limited opacity
                    content: '""',
                    display: 'block',
                    width: '100%',
                    height: '100%',
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    backgroundColor: 'currentColor',
                    opacity: 0.3,
                    borderRadius: 'inherit',
                },
            },
        },
        MuiAppBar: {
            colorSecondary: {
                // color: '#808080',
                // backgroundColor: '#fff',
                border: 'none',
                boxShadow: '0px 5px 5px -3px rgb(0 0 0 / 6%), 0px 8px 10px 1px rgb(0 0 0 / 4%), 0px 3px 14px 2px rgb(0 0 0 / 4%)',
                // boxShadow: '0px 3px 3px -2px rgb(0 0 0 / 6%), 0px 3px 4px 0px rgb(0 0 0 / 4%), 0px 1px 8px 0px rgb(0 0 0 / 4%)',
                // backgroundImage: 'linear-gradient(rgba(34, 42, 69, 0.96), rgba(34, 42, 69, 0.96))',
                // backgroundRepeat: 'no-repeat',
                // backgroundPosition: 'center top',
                backgroundColor: 'rgb(86, 100, 210)',
                color: 'rgb(255, 255, 255)',
            },
        },
        MuiLinearProgress: {
            colorPrimary: {
                backgroundColor: '#f5f5f5',
            },
            barColorPrimary: {
                backgroundColor: '#d7d7d7',
            },
        },
        MuiFilledInput: {
            root: {
                backgroundColor: 'rgba(0, 0, 0, 0.04)',
                '&$disabled': {
                    backgroundColor: 'rgba(0, 0, 0, 0.04)',
                },
            },
        },
        MuiSnackbarContent: {
            root: {
                border: 'none',
            },
        },
        MuiFormControl: {
            fullWidth: {
                // width: 'calc(100% - 1rem)',
            }
        }
    },
    props: {
        MuiButtonBase: {
            // disable ripple for perf reasons
            disableRipple: true,
        },
    },
};
