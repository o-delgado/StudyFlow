import { useRouter } from "expo-router";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { auth } from "../lib/firebase";

export default function Index() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.replace("/home");
    } catch {
      alert("Error al iniciar sesión");
    }
  };

  const register = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      router.replace("/home");
    } catch {
      alert("Error al registrarse");
    }
  };

  const guest = () => {
    router.replace("/home");
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>StudyFlow</Text>
        <Text style={styles.subtitle}>Estudia de forma inteligente</Text>

        <TextInput
          placeholder="Correo"
          placeholderTextColor="#94A3B8"
          style={styles.input}
          autoCapitalize="none"
          onChangeText={setEmail}
        />

        <TextInput
          placeholder="Contraseña"
          placeholderTextColor="#94A3B8"
          style={styles.input}
          secureTextEntry
          onChangeText={setPassword}
        />

        <TouchableOpacity style={styles.primaryButton} onPress={login}>
          <Text style={styles.primaryText}>Iniciar sesión</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.secondaryButton} onPress={register}>
          <Text style={styles.secondaryText}>Registrarse</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={guest}>
          <Text style={styles.guestText}>Entrar como invitado</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0F172A",
    justifyContent: "center",
    padding: 24,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#E6F4FE",
    textAlign: "center",
    marginBottom: 8,
  },
  subtitle: {
    color: "#94A3B8",
    textAlign: "center",
    marginBottom: 32,
  },
  input: {
    backgroundColor: "#1E293B",
    color: "#FFFFFF",
    borderRadius: 10,
    padding: 14,
    marginBottom: 14,
  },
  primaryButton: {
    backgroundColor: "#38BDF8",
    padding: 14,
    borderRadius: 10,
    marginTop: 8,
  },
  primaryText: {
    textAlign: "center",
    fontWeight: "bold",
    color: "#0F172A",
  },
  secondaryButton: {
    borderColor: "#38BDF8",
    borderWidth: 1,
    padding: 14,
    borderRadius: 10,
    marginTop: 12,
  },
  secondaryText: {
    textAlign: "center",
    color: "#38BDF8",
    fontWeight: "bold",
  },
  guestText: {
    textAlign: "center",
    color: "#94A3B8",
    marginTop: 24,
  },
  card: {
    width: "100%",
    maxWidth: 420,
    alignSelf: "center",
    backgroundColor: "#020617",
    borderRadius: 16,
    padding: 24,
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowRadius: 20,
    elevation: 10,
  },
});