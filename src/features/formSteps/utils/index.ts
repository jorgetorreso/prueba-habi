import { DefaultObjet, InfoInput, Input } from "../types";

export const getInputName = (inputs: Input[]) => {
  let newObjet: InfoInput = {};
  for (let index = 0; index < inputs.length; index++) {
    const input = inputs[index];
    newObjet[input.name] = input;
  }

  return newObjet;
};

export const showField = (input: Input, values: any) => {
  if (!input!.conditional) return true;

  const { conditional } = input;
  let show = true;
  Object.keys(values).forEach((key) => {
    if (conditional.hasOwnProperty(key)) {
      show = values[key] === conditional[key];
    }
  });

  return show;
};

export const getDefaultValues = (inputs: Input[]) => {
  let newObjet: DefaultObjet = {};
  for (let index = 0; index < inputs.length; index++) {
    const input = inputs[index];
    if (input?.defaultValue) newObjet[input.name] = input.defaultValue;
  }

  return newObjet;
};

export const isEmpty = (value: any) => {
  if (typeof value === "undefined") return true;
  if (value === null) return true;
  if (typeof value === "string" && value.trim().length === 0) return true;
  if (Array.isArray(value) && value.length === 0) return true;
  if (typeof value === "object" && Object.keys(value).length === 0) return true;

  // if none of that is true we return false
  return false;
};
