import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  Button,
} from "react-native";
import React, { useState } from "react";
import { Form, FormItem } from "react-native-form-component";
import NavigationBar from "../components/NavigationBar";
import { useKeyboard } from "@react-native-community/hooks";
import { ScrollView } from "react-native-gesture-handler";
import Ionicons from "@expo/vector-icons/Ionicons";
import DateTimePickerModal from "react-native-modal-datetime-picker";


const Profile = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const keyboard = useKeyboard();
  const [dateOfBirth, setDateOfBirth] = useState(new Date());
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);


    const handleConfirm = (selectedDate:Date) => {
      setDateOfBirth(selectedDate);
      setDatePickerVisibility(false);
    };

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeTaskWrapper}
      >
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
          }}
          keyboardShouldPersistTaps="handled"
        >
          <Form
            onButtonPress={() => console.warn("do something")}
            style={styles.form}
          >
            <View style={styles.personImage}>
              <Ionicons name="person-outline" size={100} color="black" />
            </View>

            <FormItem
              label="name"
              isRequired
              value={name}
              onChangeText={(name) => setName(name)}
            />

            <FormItem
              label="Surname"
              isRequired
              value={surname}
              onChangeText={(surname) => setSurname(email)}
            />

            <FormItem
              label="Email"
              isRequired
              value={email}
              onChangeText={(email) => setEmail(email)}
              asterik
            />
            <Button
              title="Date of Birth"
              onPress={() => setDatePickerVisibility(true)}
            />
            <DateTimePickerModal
              isVisible={isDatePickerVisible}
              mode="date"
              onConfirm={handleConfirm}
              onCancel={() => setDatePickerVisibility(false)}
            />
          </Form>
        </ScrollView>
      </KeyboardAvoidingView>

      {!keyboard.keyboardShown && <NavigationBar />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    top: 0,
  },
  writeTaskWrapper: {
    position: "absolute",
    width: "90%",
    paddingTop: 20,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  form: {
    paddingHorizontal: 20,
    width: "100%",
  },
  personImage: {
    width: "100%",
    alignItems: "center"
  }
});

export default Profile;
