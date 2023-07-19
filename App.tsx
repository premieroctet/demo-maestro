import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const login = (username: string, password: string) => {
  return username === 'admin' && password === 'admin';
};

export default function App() {
  const [success, setSuccess] = useState<boolean | undefined>();
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleLogin = () => {
    setSuccess(login(username, password));
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Username"
        onChangeText={setUsername}
        autoCapitalize="none"
        autoCorrect={false}
        testID="username-input"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        onChangeText={setPassword}
        onSubmitEditing={handleLogin}
        testID="password-input"
      />
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.6}
        onPress={handleLogin}
        testID="login-button"
      >
        <Text style={{ color: 'black' }}>Connexion</Text>
      </TouchableOpacity>
      {success !== undefined && (
        <Text style={{ color: success ? 'green' : 'red' }}>
          {success ? 'Connexion réussie' : 'Connexion échouée'}
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    paddingHorizontal: 20,
    gap: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: 'lightgray',
    borderRadius: 8,
    height: 44,
    paddingHorizontal: 16,
  },
  button: {
    backgroundColor: 'skyblue',
    height: 44,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
