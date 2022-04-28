import react, { useRef } from "react";
import AuthButton from "../components/auth/AuthButton";
import AuthLayout from "../components/auth/AuthLayout";
import { TextInput } from "../components/auth/AuthShared";

export default function Login() {
  const passwordRef = useRef();
  const onNext = (nextOne) => {
    nextOne?.current?.focus();
  }
  return (
    <AuthLayout>
      <TextInput
        placeholder="UserName"
        placeholderTextColor={"rgba(255, 255, 255, 0.6)"}
        returnKeyType="next"
        onSubmitEditing={() => onNext(passwordRef)}
      />
      <TextInput
        ref={passwordRef}
        placeholder="Password"
        placeholderTextColor={"rgba(255, 255, 255, 0.6)"}
        secureTextEntry
        returnKeyType="done"
        lastOne={true}
      />
      <AuthButton text="Log In" disabled={true} onPress={() => null}/>
    </AuthLayout>
  );
}
