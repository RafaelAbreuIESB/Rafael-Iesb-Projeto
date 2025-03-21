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
      <View style={{ width: '60%', position:'absolute', left: 5, top: 30 }}>
        <TextInput
          style={styles.inputText}
          placeholder={rotulo_input_meta}
        ></TextInput>
      </View>
      <View style={{width: '40%', position:'absolute', right: 5, top: 30}}>
        <Button title={rotulo_btn_cadastro_meta}></Button>
      </View>
      <View style={{width: 150, position:'absolute', left: 5, top: 80}}>
        <Text>{rotulo_lista_metas}</Text>
      </View>
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
