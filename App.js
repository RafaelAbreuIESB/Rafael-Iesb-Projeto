import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import {
  rotulo_input_meta,
  rotulo_btn_cadastro_meta,
  rotulo_lista_metas,
} from "./mensagens";
import { useState } from "react";
import { ScrollView } from "react-native";
import MetasList from "./components/MetasList";
import MetaInput from "./components/MetaInput";
export default function App() {
  const [metas, setMetas] = useState([]);
  function adicionarMetaHandler() {
    setMetas([...metas, inputMetaText]);
  }
  return (
    <View style={styles.mainContainer}>
      
      <View style={styles.metaContainer}>
        <MetasList array={metas} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    padding: 30,
    flex: 1,
    flexDirection: "column",
  },
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  metaContainer: {
    flex: 15,
  },
});
