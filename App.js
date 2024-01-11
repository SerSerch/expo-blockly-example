import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { BlocklyEditor } from '@react-blockly/native';

export default function App() {
  const workspaceConfiguration = {
    grid: {
      spacing: 20,
      length: 3,
      colour: '#ccc',
      snap: true,
    },
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto"/>
      <BlocklyEditor
        style={{ background: '#fff' }}
        workspaceConfiguration={workspaceConfiguration}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
