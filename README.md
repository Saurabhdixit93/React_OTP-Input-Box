# OtpInput React Component

[![npm version](https://img.shields.io/npm/v/@saurabhdixit93/react-otp-field)](https://www.npmjs.com/package/@saurabhdixit93/react-otp-field)
[![npm downloads](https://img.shields.io/npm/dm/@saurabhdixit93/react-otp-field)](https://www.npmjs.com/package/@saurabhdixit93/react-otp-field)
[![GitHub license](https://img.shields.io/github/license/saurabhdixit93/React_OTP-Input-Box)](https://github.com/saurabhdixit93/React_OTP-Input-Box/blob/main/LICENSE)

A versatile React component for handling One-Time Password (OTP) input with seamless customization options.

## Installation

```bash
npm install react-otp-field
```

## Usage

```jsx
import OtpInput from "react-otp-field";

function App() {
  const defaultStyle = {
    border: "2px solid #ccc",
    borderRadius: "8px",
    margin: "10px",
    fontFamily: "Segoe UI",
    height: "50px",
    width: "50px",
    color: "#000",
    fontSize: "20px",
    fontWeight: "bold",
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
```

## Props

- **length** (required): The number of digits in the OTP.

- **onChange** (required): Callback function triggered when the OTP value changes.

- **defaultStyle**: An optional object to customize the style of each input element.

- **placeholder**: An optional string to set a placeholder character for each input.

- **darkModeType**: An optional Boolean type to set as darkmode or not.

- **isLableShow**: An optional Boolean type to show default lable as "Phone Or Email Otp Input"

## Customization

You can customize the appearance of the `OtpInput` component by providing a `defaultStyle` prop. This prop should be an object containing CSS properties for the input elements.

Example:

```jsx
const customStyle = {
  border: "2px solid blue",
  borderRadius: "10px",
  // Add more styling properties as needed
};

<OtpInput
  length={4}
  onChange={(otp) => console.log(otp)}
  defaultStyle={customStyle}
/>;
```

## Contributing

We welcome contributions! Please open issues for bug reports or feature requests, and feel free to submit pull requests.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
