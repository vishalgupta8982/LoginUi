import {
  View,
  Text,
  Image,
  StatusBar,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";
import NewUser from "./NewUser";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Icon from "react-native-vector-icons/FontAwesome";
//import Icon from "react-native-ico-social-media";
export default function Login(props) {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar backgroundColor={"grey"} />
      <View
        style={{
          flex: 1 / 1.5,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          style={{ width: "100%", height: "100%" }}
          source={require("./loginimg.jpg")}
        />
      </View>
      <View style={{ flex: 1, backgroundColor: "#fff", padding: 20 }}>
        <View>
          <Text style={{ fontSize: 30, fontWeight: "600" }}>Login</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            marginTop: 20,
            borderBottomColor: "#ccc",
            borderBottomWidth: 1,
            paddingBottom: 8,
            marginBottom: 20,
          }}
        >
          <MaterialIcons
            name="alternate-email"
            keyboardType="email-address"
            size={20}
            color="#666"
            style={{ marginRight: 5, marginTop: 5 }}
          />
          <TextInput
            placeholder="Email-id"
            selectionColor={"black"}
            style={{ flex: 1, paddingVertical: 0 }}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            marginTop: 20,
            borderBottomColor: "#ccc",
            borderBottomWidth: 1,
            paddingBottom: 8,
            marginBottom: 20,
          }}
        >
          <Icon
            name="lock"
            size={20}
            color="#666"
            style={{ marginRight: 5, marginTop: 5 }}
          />
          <TextInput
            secureTextEntry={true}
            placeholder="Password"
            selectionColor={"black"}
            style={{ flex: 1, paddingVertical: 0 }}
          />
          <TouchableOpacity onPress={() => {}}>
            <Text style={{ color: "red", fontWeight: "700" }}>Forgot?</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            style={{
              backgroundColor: "#4af7a9",
              padding: 15,
              borderRadius: 10,
            }}
          >
            <Text
              style={{ textAlign: "center", fontSize: 25, fontWeight: "700" }}
            >
              Login
            </Text>
          </TouchableOpacity>
          <Text
            style={{
              textAlign: "center",
              color: "#666",
              marginTop: 30,
              fontWeight: "500",
            }}
          >
            or, login with..
          </Text>
          <View
            style={{
              marginTop: 10,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <TouchableOpacity
              onPress={() => {}}
              style={{
                borderColor: "#ddd",
                borderWidth: 2,
                borderRadius: 10,
                paddingHorizontal: 30,
                paddingVertical: 10,
              }}
            >
              <Image
                style={{ width: 20, height: 20 }}
                source={require("./google.png")}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {}}
              style={{
                borderColor: "#ddd",
                borderWidth: 2,
                borderRadius: 10,
                paddingHorizontal: 30,
                paddingVertical: 10,
              }}
            >
              <Image
                style={{ width: 25, height: 25 }}
                source={require("./whatsapp.png")}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {}}
              style={{
                borderColor: "#ddd",
                borderWidth: 2,
                borderRadius: 10,
                paddingHorizontal: 30,
                paddingVertical: 10,
              }}
            >
              <Image
                style={{ width: 25, height: 25 }}
                source={require("./twitter.png")}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginTop: 10,
          }}
        >
          <Text>New to the app?</Text>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("NewUser")}
          >
            <Text style={{ color: "#4af7a9", fontWeight: "700" }}>
              Register
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
