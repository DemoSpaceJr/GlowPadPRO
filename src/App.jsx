import { useGamepad } from "./hooks/useGamepad";
import PS4Controller from "./components/PS4Controller";

export default function App() {
  const pads = useGamepad();
  const pad = pads[0];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-6">
      <h1 className="text-3xl font-bold">PS4 / PS5 Gamepad Viewer</h1>
      <PS4Controller pad={pad} />
    </div>
  );
}
