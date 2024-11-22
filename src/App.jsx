import "./App.css";
import { NextUIProvider } from "@nextui-org/system";
import { Timeline } from "./components/Timeline";

function App() {
  return (
    <NextUIProvider>
      <Timeline />
    </NextUIProvider>
  );
}

export default App;
