import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import {
  rotulo_input_meta,
  rotulo_btn_cadastro_meta,
  rotulo_lista_metas,
} from "./mensagens";

export default function App() {
  return (
    <View style={styles.mainContainer}>
      <view style={{ width: 150 }}>
        <TextInput
          style={styles.inputText}
          placeholder={rotulo_input_meta}
        ></TextInput>
      </view>
      <view style={{ width: 150 }}>
        <Button title={rotulo_btn_cadastro_meta}></Button>
      </view>
      <view>
        <Text>{rotulo_lista_metas}</Text>
      </view>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    padding: 30,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  inputText: {
    borderColor: "#FF0000",
    borderWidth: 1.5,
  },
});
