import OtpInput from "./component/Input/OtpInput";

function App() {
  const defaultStyle = {
    border: "2px solid #ccc",
    borderRadius: "5px",
    margin: "10px",
    fontFamily: "Segoe UI",
    height: "30px",
    width: "30px",
    color: "#000",
    fontSize: "14px",
    fontWeight: "500",
  };

  return (
    <OtpInput
      length={4}
      onChange={(otp) => console.log(otp)}
      defaultStyle={defaultStyle}
      placeholder={"*"}
      isLableShow={true}
      darkModeType={true}
    />
  );
}

export default App;
