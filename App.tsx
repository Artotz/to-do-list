import { StatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";
import Home from "./pages/Home/Home";

export default function App() {
  return (
    <ThemeProvider theme={{}}>
      <Home />
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
