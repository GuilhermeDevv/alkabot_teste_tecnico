import { DefaultTheme } from "styled-components";

declare module "styled-components" {
    export interface DefaultTheme {
        colors: {
            background: string;
            backgroundSecondary: string;
            backgroundSelected: string;
            backgroundButton: string;
            backgroundButtonSecondary: string;
            backgroundIcon: string;
            textColor: string;
            textColorSecondary: string;
            helper: string;
        };
    }
}

export const Black: DefaultTheme = {
    colors: {
        background: "#120b20",
        backgroundSecondary: "#18102c",
        backgroundSelected: "#2b1c50",
        backgroundButton: "#fdf08e",
        backgroundButtonSecondary: "#48287e",
        textColor: "#c2b9d7",
        textColorSecondary: "#ffffff",
        backgroundIcon: "#030100",
        helper: "#c1b8d4",
    },
};
export const Light: DefaultTheme = {
    colors: {
        background: "#f8f5fb",
        backgroundSecondary: "#ffffff",
        backgroundSelected: "#ede9f3",
        backgroundButton: "#412382",
        backgroundButtonSecondary: "#7b3aec",
        textColor: "#000",
        textColorSecondary: "#494949",
        backgroundIcon: "transparent",
        helper: "#4a2e98",
    },
};
