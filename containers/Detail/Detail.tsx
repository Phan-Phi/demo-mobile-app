import React from "react";
import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";

import { AntDesign } from "@expo/vector-icons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default function Detail({ navigation }) {
  return (
    <ScrollView>
      <View>
        <Text>Hello, Welcome Back!</Text>
        <Text>
          Water is life. Water is a basic human need. In various lines of life,
          humans need water.
        </Text>
        <TextInput placeholder="Abduldul@gmail.com" style={styles.input} />
        {/* <Icon name="md-bicycle" /> */}
        <AntDesign name="stepforward" size={50} color="black" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  input: {
    padding: 2,
    borderColor: "red",
    borderWidth: 1,
  },
});
