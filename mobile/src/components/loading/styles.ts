import { StyleSheet } from "react-native";
import { colors } from "@/src/styles/theme";


// objeto de config de estilos
export const s = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.gray[100]
  }
})