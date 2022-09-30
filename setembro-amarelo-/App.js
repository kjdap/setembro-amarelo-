import { StyleSheet, Text, TextInput, View, Image,
TouchableOpacity, Alert } from 'react-native';
import cartilha from './componente/Cartilha'

export default function App() {
  return (
    <View style={styles.container}>
      <cartilha/> Transtornos mentais: você sabia que praticamente todas as pessoas que cometeram suicídio apresentavam pelo menos um transtorno psiquiátrico? Pessoas com depressão, transtorno bipolar, trantornos relacionados ao uso de drogas lícitas ou ilícitas(álcool, maconha, crack e cocaína, por exemplo), esquizofrenia e transtorno de personalidade fazem parte do grupo de risco. Dessa forma, a identificação e o tratamento dos trastornos mentais pelo médico psiquiatra estão entre os principais fatores de proteção na prevenção do suicídio.
      <Image style={styles.container.logo} source={require('./assets/sa2.jpg')} />
      <Text style={styles.container.logo.paragrafo2}>
      2.Histórico pessoal: Tentativa prévia é o principal fator de risco para o suicídio. Indivíduos que já tentaram o suicídio tem de cinco a seis vezes mais chances de tentar novamente.
       </Text>
      <Text style={styles.container.logo.paragrafo2.paragrafo3}>
      3.Ideação suicida: Comentários que demonstrem desespero, desesperança e desamparo podem ser manifestação de uma ideação suicida. Atenção a expressões como "eu desejaria não ter nascido", "caso não nos encontremos de novo", "eu preferia estar morto" - são sinais de alerta.
       </Text>
      <Text style={styles.container.logo.paragrafo2.paragrafo3.paragrafo4}>
      {}4.Fatores estressores crônicos e recentes: Eventos estressores significativos, como separação conjugal, migração ou perda de uma pessoa próxima, além daqueles que levem a prejuízo econômico e social, como falência e perda do emprego, estão associados ao surgimento de pensamentos suicidas.
      </Text>
  </View>
  )
}

const styles = StyleSheet.create({
container: {
flex: 2,
backgroundColor: "white",
alignItems: "center",
justifyContent: "center",
fontSize: "20px",
fontWeight: "bold",
padding: "20px",
letterSpacing: "3px",

logo: {
width: 250,
height: 250,

paragrafo2: {
 flex: 1,
 fontSize: "20",
 justifyContent: "center",
 

paragrafo3: {
flex: 1,
fontSize: "20",
justifyContent: "center",

paragrafo4: {
flex: 1,
fontSize: "20",
justifyContent: "center",
}

}

}
}

},
});