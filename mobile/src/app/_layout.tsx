// arquivo responsavel pela configuração das rotas do app

import { Stack } from "expo-router";
import { colors } from "../styles/colors";

import { Rubik_400Regular, Rubik_500Medium, Rubik_600SemiBold, Rubik_700Bold, useFonts } from '@expo-google-fonts/rubik';
import { Loading } from "../components/loading";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function Layout() {
  // as fontes são carregadas de forma assincrona precisamos validar que as fontes foram carregadas
  const [fontsLoaded] = useFonts({
    Rubik_600SemiBold, 
    Rubik_400Regular,
    Rubik_500Medium, 
    Rubik_700Bold
  })

  if(!fontsLoaded){ return <Loading /> }

  return(
    <GestureHandlerRootView style={{ flex: 1 }}>
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: colors.gray[100] },
      }}
    />
  </GestureHandlerRootView>
  ) 
}
