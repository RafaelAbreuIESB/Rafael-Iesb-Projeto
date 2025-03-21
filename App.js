import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { rotulo_input_meta, rotulo_btn_cadastro_meta, rotulo_lista_metas } from './mensagens';

export default function App() {
  return (
    <View style={styles.mainContainer}>
      <TextInput placeholder='rotulo_input_meta'></TextInput>
      <Button title='rotulo_btn_cadastro_meta'></Button>
      <Text>rotulo_lista_metas</Text>
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
