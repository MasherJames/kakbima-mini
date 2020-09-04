import React from "react";
import IntlTelInput from "react-intl-tel-input";
import { handleFocus, handleBlur, geoIpLookUp } from "../../Utils";
import Select from "react-select";
import "./index.css";

const InputField = ({
  type,
  size,
  name,
  labelText,
  value,
  onChange,
  normal = false,
  select = false,
  phone = false,
}) => {
  return (
    <div
      className={`input-container ${
        size === "full" ? "full-input-container" : "half-input-container"
      } ${select ? "select-input" : ""}`}
    >
      {phone && (
        <>
          <label htmlFor={name}>{labelText}</label>
          <IntlTelInput
            inputClassName="input"
            fieldName={name}
            fieldId={name}
            defaultCountry="auto"
            geoIpLookup={geoIpLookUp}
            nationalMode={false}
            autoHideDialCode={false}
            onPhoneNumberChange={onChange}
          />
        </>
      )}

      {select && (
        <Select
          placeholder="Select benefit ..."
          name={name}
          isMulti
          value={value}
          onChange={onChange}
          options={[
            { label: "Third Party", isClaimed: false, value: 1 },
            { label: "Another Party", isClaimed: false, value: 2 },
          ]}
        />
      )}

      {normal && (
        <>
          {" "}
          <label className="input-labels" htmlFor={name}>
            {labelText}
          </label>
          <input
            className="input"
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            id={name}
            onFocus={(e) => {
              handleFocus(e);
            }}
            onBlur={(e) => {
              handleBlur(e);
            }}
          />
        </>
      )}
    </div>
  );
};

export default InputField;
