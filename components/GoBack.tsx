import { Box, HStack, Text } from "native-base";
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";

export default function GoBack({ navigation }) {
  return (
    <HStack alignItems="center" space={2}>
      <Icon name="angle-double-left" size={18} color="black" />
      <Text
        fontSize="lg"
        bold
        onPress={() => {
          navigation.goBack();
        }}
      >
        Back
      </Text>
    </HStack>
  );
}
