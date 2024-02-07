import React, { useState } from "react";

export const Box = ({
  label,
  amount,
  onAmountChange,
  currenciesList,
  onCurrencyChange,
  currVal,
}) => {
  return (
    <div className="box">
      <div className="left">
        <label htmlFor="1">{label}</label>
        <input
          type="Number"
          value={amount}
          onChange={(e) => {
            onAmountChange(Number(e.target.value));
          }}
        />
      </div>

      <div className="right">
        <label> Currency type</label>
        <select
          name="currency-sel"
          value={currVal}
          onChange={(e) => {
            onCurrencyChange(e.target.value);
          }}
        >
          {currenciesList.map((item, index) => {
            return <option key={index}>{item}</option>;
          })}
        </select>
      </div>
    </div>
  );
};
