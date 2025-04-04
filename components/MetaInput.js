import { StyleSheet, TextInput, Button } from "react-native";

function MetaInput(props) {
  const [inputMetaText, setInputMetaText] = useState("");
  function metaInputHandler(inputText) {
    setInputMetaText(inputText);
  }
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        flex: "1",
      }}
    >
      <View style={{ width: "65%" }}>
        <TextInput
          style={styles.inputText}
          placeholder={rotulo_input_meta}
          onChangeText={metaInputHandler}
        ></TextInput>
      </View>
      <View style={{ width: "30%" }}>
        <Button
          title={rotulo_btn_cadastro_meta}
          onPress={adicionarMetaHandler}
        ></Button>
      </View>
    </View>
  );
}

export default MetaInput;

const styles = StyleSheet.create({
  inputText: {
    borderColor: "#FF0000",
    borderWidth: 1,
  },
});
