import { Alert, Text, View } from "react-native";
import { api } from '@/src/services/api'
import { useEffect } from "react";



export default function Home(){
  async function fetchCategories() {
    try {
      const { data } = await api.get('/categories')
    } catch (error) {
      console.log(error)
      <Alert.alert('Categorias', 'Não foi possível carregas as categorias.')
    }
  }

  useEffect(() => {
    fetchCategories()
  }, [])

  return(
    <View style={{flex: 1}}>
      <Text>Home</Text>
    </View>
  )
}