import React, { useState, useRef, useEffect } from "react";
import "./OtpInput.css";
import PropTypes from "prop-types";

const OtpInput = (props) => {
  const {
    length,
    onChange,
    placeholder,
    defaultStyle,
    isLableShow,
    darkModeType,
  } = props;
  const [otp, setOtp] = useState(Array(length).fill(""));
  const inputRefs = useRef([]);

  const handleChange = (e, index) => {
    let value = e.target.value;
    // Ensure the value is a number
    const isDigit = /^\d+$/.test(value);

    // Ensure the value is a number
    value = value.replace(/\D/g, "");

    // Update the OTP array
    const newOtp = [...otp];
    newOtp[index] = value.slice(-1);
    setOtp(newOtp);

    if (
      value === "" &&
      e.nativeEvent.inputType === "deleteContentBackward" &&
      index > 0
    ) {
      // If the input is empty and backspace/delete was pressed, move focus to the previous input
      inputRefs.current[index - 1].focus();
    } else if (index < length - 1 && value !== "") {
      // move focus to the next input
      inputRefs.current[index + 1].focus();
    }
    // Apply red border if the entered value is not a digit
    const inputElement = inputRefs.current[index];
    if (!isDigit) {
      inputElement.style.border = "2px solid #e8000d ";
      inputElement.classList.add("shake-animation");
    } else {
      inputElement.style.border = "2px solid green";
      inputElement.classList.remove("shake-animation");
    }

    // Notify parent component about the change
    onChange(newOtp.join(""));
  };

  const mergedStyle = {
    ...defaultStyle,
  };

  useEffect(() => {
    inputRefs.current[0].focus();
  }, []);
  return (
    <div className="otp-input-wrapper-body">
      {isLableShow ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <text
            className={
              darkModeType ? "lable-text-input dark-text" : "lable-text-input"
            }
          >
            Phone Or Email Otp Input
          </text>
        </div>
      ) : (
        <></>
      )}
      <div
        className={
          darkModeType ? "otp-input-container dark-mode" : "otp-input-container"
        }
      >
        {otp.map((digit, index) => (
          <input
            key={index}
            type="text"
            maxLength="1"
            value={digit}
            placeholder={placeholder || "*"}
            onChange={(e) => handleChange(e, index)}
            ref={(ref) => (inputRefs.current[index] = ref)}
            style={mergedStyle}
          />
        ))}
      </div>
    </div>
  );
};

OtpInput.propTypes = {
  length: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  defaultStyle: PropTypes.object,
  placeholder: PropTypes.string,
  isLableShow: PropTypes.bool,
  darkModeType: PropTypes.bool,
};

export default OtpInput;
