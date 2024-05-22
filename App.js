import { SafeAreaView, Text, StyleSheet} from "react-native";
import Botao from "./src/components/botao";

export default props => {
  return (
    <SafeAreaView style={estilos.container}>
      <Botao />
    </SafeAreaView>
  )
}

const estilos = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: "#f5fcff",
    justifyContent: "center",
    alignItems: "center",
  }
});