import { Box, Button, Heading, HStack, Text } from "native-base";
import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import FormInput from "./FormControl";
import FormControlPass from "./FormControlPass";
import GoBack from "./GoBack";
import Icon from "react-native-vector-icons/FontAwesome";

export default function SignUp({ navigation }) {
  return (
    <ScrollView style={{ backgroundColor: "black" }}>
      <Box style={styles.container}>
        <GoBack navigation={navigation} />

        <Box backgroundColor="black" marginBottom={10}>
          <Heading color="white">Sign up</Heading>
          <Text color="white">Create an account to get started</Text>
        </Box>
      </Box>

      <Box>
        <Box
          paddingTop={10}
          style={[
            styles.container,
            { backgroundColor: "white", borderRadius: 20 },
          ]}
        >
          <FormInput label="Name" placeholder="Chamuditha Deshan" />
          <FormInput
            label="Email"
            placeholder="chamudithadeshan234@gmail.com"
          />
          <FormControlPass label="Password" placeholder="************" />
          <FormControlPass label="Repeat Password" placeholder="************" />

          <Button
            style={{
              backgroundColor: "black",
            }}
          >
            <Text bold fontSize="md" color="white">
              Countinue
            </Text>
          </Button>

          <Text textAlign="center" marginY={30}>
            or continue with
          </Text>

          <Box alignItems="center">
            <HStack space={5}>
              <Icon name="facebook" size={25} color="black" />
              <Icon name="google" size={25} color="black" />
              <Icon name="twitter" size={25} color="black" />
            </HStack>
          </Box>

          <Text textAlign="center" marginY={30} color="#767676">
            Already have an account?{" "}
            <Text textAlign="center" marginY={30} color="black">
              Log in
            </Text>
          </Text>
        </Box>
      </Box>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 15 },
});
