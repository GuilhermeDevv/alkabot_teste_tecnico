import { useState } from "react";
import { FiSun, FiMoon } from "react-icons/fi";
import { Container, Content } from "./styles";

type Props = { themeCurrentFn: () => void };

export function ToggleTheme({ themeCurrentFn }: Props) {
    const [icon, setIcon] = useState<boolean>(false);
    return (
        <Container>
            <Content
                onClick={() => {
                    themeCurrentFn();
                    setIcon((prev) => !prev);
                }}
            >
                {icon ? <FiMoon size={30} /> : <FiSun size={30} />}
            </Content>
        </Container>
    );
}
