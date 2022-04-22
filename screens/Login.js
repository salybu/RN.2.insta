import react from "react";
import { Text, View, TouchableOpacity } from "react-native";

export default function Login({ navigation }) {
  return (
    <View>
      <Text>Login</Text>
      <TouchableOpacity onPress={() => navigation.navigate("CreateAccount")}>
        <Text>Go to CreateAccount</Text>
      </TouchableOpacity>
    </View>
  );
}
