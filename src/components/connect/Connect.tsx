import TextPressure from "@/reactbits/TextPressure/TextPressure";

function Connect() {
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
        textColor="#ffffff"
        strokeColor="#ff0000"
        minFontSize={36}
      />
    </div>
  );
}

export default Connect;
