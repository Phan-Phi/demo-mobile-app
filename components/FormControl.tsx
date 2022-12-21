import React from "react";
import { Input, FormControl } from "native-base";
import Icon from "react-native-vector-icons/FontAwesome";

export default function FormInput({ label, placeholder }) {
  console.log("🚀 ~ file: FormControl.tsx:5 ~ FormInput ~ label", label);
  return (
    <FormControl isInvalid w="100%" marginBottom={23}>
      <FormControl.Label>{label}</FormControl.Label>
      <Input placeholder={placeholder} />
    </FormControl>
  );
}
