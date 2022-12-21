import React from "react";
import { Input, FormControl } from "native-base";
import Icon from "react-native-vector-icons/FontAwesome";

export default function FormControlPass({ label, placeholder }) {
  return (
    <FormControl isInvalid w="100%" marginBottom={23}>
      <FormControl.Label>{label}</FormControl.Label>
      <Input
        type="password"
        placeholder={placeholder}
        InputRightElement={
          <Icon
            name="eye"
            size={18}
            color="black"
            style={{ marginRight: 10 }}
          />
        }
      />
    </FormControl>
  );
}
