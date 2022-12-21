import React from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  Pressable,
  ScrollView,
} from "react-native";

export default function Home({ navigation }) {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.text1}>Meet your animal needs here</Text>

        {/* <Button
      color="#FD9340"
      title="Get Started"
      onPress={() => {
        navigation.navigate("Detail");
      }}
    /> */}
        <View style={styles.div_flex}>
          <Image
            source={require("./Illustration.png")}
            style={{ width: "100%", height: 340 }}
          />
        </View>

        <Text style={styles.subTitle}>
          Get interesting promos here, register your account immediately so you
          can meet your animal needs.
        </Text>

        <View style={styles.div_flex}>
          <Pressable
            style={styles.button}
            onPress={() => {
              navigation.navigate("Detail");
            }}
          >
            <Text style={styles.text2}>Get Started</Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  view: {
    alignItems: "center",
    justifyContent: "center",
  },

  text1: {
    fontSize: 50,
    fontWeight: "600",
  },
  text2: {
    fontWeight: "700",
    color: "white",
  },
  subTitle: {
    marginTop: 20,
    fontWeight: "700",
    color: "#898989",
  },
  button: {
    borderRadius: 20,
    width: "50%",
    alignItems: "center",
    justifyContent: "center",
    padding: 25,

    backgroundColor: "#FD9340",
  },
  container: { padding: 20 },

  div_flex: {
    marginTop: 50,
    flexDirection: "row",
    justifyContent: "center",
  },
});
