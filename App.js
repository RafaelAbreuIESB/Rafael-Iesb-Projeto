import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import {
  rotulo_input_meta,
  rotulo_btn_cadastro_meta,
  rotulo_lista_metas,
} from "./mensagens";
import { useState } from "react";
import { ScrollView } from "react-native";
export default function App() {
  const { inputMetaText, setInputMetaText } = useState('');
  const { metas, setMetas } = useState([]);
  function metaInputHandler(inputText){
    setInputMetaText(inputText)
  };
  function adicionarMetaHandler(){
    setMetas([...metas, inputMetaText]);
  }
  return (
    <View style={styles.mainContainer}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', flex: '1' }}>
        <View style={{ width: '65%' }}>
          <TextInput
            style={styles.inputText}
            placeholder={rotulo_input_meta}
          ></TextInput>
        </View>
        <View style={{ width: '30%' }}>
          <Button title={rotulo_btn_cadastro_meta}></Button>
        </View>
      </View>
      <View style={styles.metaContainer}>
        <Text>{rotulo_lista_metas}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    padding: 30,
    flex: 1,
    flexDirection: 'column'
  },
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  inputText: {
    borderColor: "#FF0000",
    borderWidth: 1,
  },
  metaContainer: {
    flex: 1,
    paddingTop: 60,
  }
});
