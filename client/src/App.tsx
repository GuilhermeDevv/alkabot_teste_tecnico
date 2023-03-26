import RoutesPages from "./routes/routes";
import { Black, Light } from "./theme/theme";
import { ThemeProvider } from "styled-components";
import { useState } from "react";
import { ToggleTheme } from "./components/ToggleTheme/ToggleTheme";
function App() {
    const [themeCurrent, setThemeCurrent] = useState<boolean>(true);
    function toggleTheme() {
        setThemeCurrent((prev) => !prev);
    }

    return (
        <>
            <ThemeProvider theme={themeCurrent ? Black : Light}>
                <RoutesPages />
                <ToggleTheme themeCurrentFn={toggleTheme} />
            </ThemeProvider>
        </>
    );
}

export default App;
