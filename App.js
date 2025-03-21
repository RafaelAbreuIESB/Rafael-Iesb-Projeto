import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { rotulo_input_meta, rotulo_btn_cadastro, rotulo_lista_metas } from './mensagens';

export default function App() {
  return (
    <View style={styles.container}>
      <text>rotulo_input_meta</text>
      <text>rotulo_btn_cadastro</text>
      <text>rotulo_lista_metas</text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer:{
    padding: 30
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
