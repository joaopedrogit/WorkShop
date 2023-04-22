import { Text, View } from 'react-native';

export default function App() {
  return (
    <View style={{ backgroundColor: '#1F1E25', flex: 1 }}>
      <Text
        style={{
          color: '#FDFCFE',
          fontSize: 24,
          lineHeight: 28.13,
          fontWeight: '700',
        }}>
        Nome do Evento
      </Text>
      <Text
        style={{
          color: '#6B6B6B',
          fontFamily: 'Roboto',
          fontSize: 16,
          lineHeight: 18.75,
          fontWeight: '400',
        }}>
        Domingo, 22 de Abril de 2023.
      </Text>
    </View>
  );
}