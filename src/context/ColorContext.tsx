import { createContext, useContext, useState } from "react";

type ColorScheme = "red" | "blue";

const ColorContext = createContext<{
    colorScheme: ColorScheme;
    setColorScheme: (scheme: ColorScheme) => void;
} | null>(null);

export const ColorProvider = ({children}: {children: React.ReactNode}) => {
    const [colorScheme, setColorScheme] = useState<ColorScheme>("red");

    return (
        <ColorContext.Provider value={{ colorScheme, setColorScheme }}>
            {children}
        </ColorContext.Provider>
    );
}

export const useColor = () => {
    const ctx = useContext(ColorContext);
    if (!ctx) throw new Error("useColor must be used inside a ColorProvider");
    return ctx;
}