import { useTheme } from "@/context/ThemeProvider";
import TextPressure from "@/reactbits/TextPressure/TextPressure";

function Connect() {
  const { theme } = useTheme();
  return (
    <div className="w-full px-4 mt-13">
      <TextPressure
        text="Let's  Connect"
        flex={true}
        alpha={false}
        stroke={false}
        width={true}
        weight={true}
        italic={true}
        textColor={theme === "dark" ? "#ffffff" : "#000000"}
        strokeColor="#ff0000"
        minFontSize={36}
      />
    </div>
  );
}

export default Connect;
