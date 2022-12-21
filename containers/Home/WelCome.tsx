import { Box, Button, Heading, Text } from "native-base";
import React from "react";
import { ScrollView, View, StyleSheet } from "react-native";

export default function WelCome({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <Box>
        <Text fontSize="lg" style={{ textAlign: "right" }}>
          skip {">"}
        </Text>
      </Box>

      <Box alignSelf="center">
        <Heading textAlign="center">Welcome Tech world</Heading>
        <Text fontSize="lg">Please log in or sign in to countinue</Text>
      </Box>

      <Box>
        <Button
          style={{
            backgroundColor: "black",
          }}
          onPress={() => {
            navigation.navigate("SignUp");
          }}
          marginBottom="26"
        >
          <Text bold fontSize="md" color="white">
            Sign up
          </Text>
        </Button>

        <Button
          variant="outline"
          onPress={() => {
            navigation.navigate("SignUp");
          }}
          style={{ borderWidth: 2, borderColor: "black" }}
        >
          <Text bold fontSize="md">
            Log in
          </Text>
        </Button>
      </Box>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 15 },
  title: { textAlign: "center" },
});
