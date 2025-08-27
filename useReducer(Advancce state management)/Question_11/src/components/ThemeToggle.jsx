import { useTheme } from "../context/ThemeContext";

export default function ThemeToggle() {
  const { dark, toggleTheme } = useTheme();
  return (
    <button onClick={toggleTheme}>
      {dark ? "Light Mode" : "Dark Mode"}
    </button>
  );
}
