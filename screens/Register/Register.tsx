import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";

export default function Register() {
  return (
    <ScrollView style={styles.container}>
      <View>
        <Text style={styles.title}>Hi, Welcome Back! 👋</Text>
      </View>

      <View style={{ marginBottom: 60, marginTop: 25 }}>
        <View style={{ marginBottom: 20 }}>
          <Text style={styles.labeInput}>Email</Text>
          <View style={styles.sectionStyle}>
            <TextInput
              style={{ flex: 1 }}
              placeholder="example@gmail.com"
              underlineColorAndroid="transparent"
            />
          </View>
        </View>

        <View>
          <Text style={styles.labeInput}>Password</Text>
          <View style={styles.sectionStyle}>
            <Text>
              <Icon name="eye" size={18} color="black" />
            </Text>
            <TextInput
              style={{ flex: 1 }}
              placeholder="Enter Your Password"
              underlineColorAndroid="transparent"
            />
          </View>
        </View>

        <View
          style={{
            paddingVertical: 20,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View>
            <Text>
              <Text style={{ fontWeight: "600" }}>Remember Me</Text>
            </Text>
          </View>
          <View>
            <Text style={{ color: "#E86969" }}>Forgot Password?</Text>
          </View>
        </View>

        <TouchableOpacity style={styles.containedbutton}>
          <Text style={styles.textButtonContained}>Login</Text>
        </TouchableOpacity>
      </View>

      <View>
        <Text
          style={{
            fontSize: 18,
            fontWeight: "400",
            textAlign: "center",
            marginBottom: 33,
          }}
        >
          Or With
        </Text>

        <TouchableOpacity
          style={[styles.containedbutton, { marginBottom: 21 }]}
        >
          <Text style={styles.textButtonContained}>Login with Facebook</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.outlinedbutton}>
          <Text style={styles.textButtonOutlined}>Login with Google</Text>
        </TouchableOpacity>

        <Text style={[styles.text, { marginVertical: 40 }]}>
          Don't have an account? Sign Up
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  flex: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    paddingVertical: 20,
    paddingHorizontal: 40,
    backgroundColor: "white",
  },

  title: {
    textAlign: "center",
    fontSize: 24,
    fontWeight: "700",
  },
  text: { fontSize: 16, fontWeight: "600", textAlign: "center" },

  textButtonContained: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
  textButtonOutlined: {
    color: "rgba(0, 0, 0, 0.6)",
    fontSize: 16,
    fontWeight: "600",
  },

  containedbutton: {
    alignItems: "center",
    paddingVertical: 10,

    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#0E64D2",

    backgroundColor: "#0E64D2",
  },
  outlinedbutton: {
    alignItems: "center",
    paddingVertical: 10,

    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#0E64D2",
  },

  labeInput: {
    marginBottom: 10,
  },
  sectionStyle: {
    paddingHorizontal: 10,
    flexDirection: "row-reverse",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    borderWidth: 0.5,
    borderColor: "rgba(0, 0, 0, 0.4)",
    height: 50,
    borderRadius: 10,
  },
  imageStyle: {
    padding: 10,
    margin: 5,
    height: 25,
    width: 25,
    resizeMode: "stretch",
  },
});
