import react, { useRef } from "react";
import { KeyboardAvoidingView, Platform } from "react-native";
import AuthButton from "../components/auth/AuthButton";
import AuthLayout from "../components/auth/AuthLayout";
import { TextInput } from "../components/auth/AuthShared";

export default function CreateAccount() {
  const lastNameRef = useRef();
  const usernameRef= useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  const onNext = (nextOne) => {
    nextOne?.current?.focus();
  }

  const onDone = () => {
    alert('Done!')
  }

  return (
    <AuthLayout>
      <KeyboardAvoidingView style={{width: "100%"}}
          behavior="padding" keyboardVerticalOffset={Platform.OS === 'ios' ? 50: 0}>
        <TextInput
          autoFocus
          placeholder="First Name"
          placeholderTextColor={"rgba(255, 255, 255, 0.6)"}
          returnKeyType="next"
          onSubmitEditing={() => onNext(lastNameRef)}
        />
        <TextInput
          ref={lastNameRef}
          placeholder="Last Name"
          placeholderTextColor={"rgba(255, 255, 255, 0.6)"}
          returnKeyType="next"
          onSubmitEditing={() => onNext(usernameRef)}
        />
        <TextInput
          ref={usernameRef}
          placeholder="UserName"
          placeholderTextColor={"rgba(255, 255, 255, 0.6)"}
          returnKeyType="next"
          onSubmitEditing={() => onNext(emailRef)}
        />
        <TextInput
          ref={emailRef}
          placeholder="Email"
          placeholderTextColor={"rgba(255, 255, 255, 0.6)"}
          keyboardType="email-address"
          returnKeyType="next"
          onSubmitEditing={() => onNext(passwordRef)}
        />
        <TextInput
          ref={passwordRef}
          placeholder="Password"
          placeholderTextColor={"rgba(255, 255, 255, 0.6)"}
          secureTextEntry
          returnKeyType="done"
          onSubmitEditing={onDone}
          lastOne={true}
        />
        <AuthButton text="Create Account" disabled={true} onPress={() => null} />
      </KeyboardAvoidingView>
    </AuthLayout>
  );
}
