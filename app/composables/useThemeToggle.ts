import { useTheme } from "vuetify";

export function useThemeToggle() {
  const theme = useTheme();
  const preference = useCookie<"light" | "dark">("co60-theme", {
    default: () => "dark",
    watch: true,
  });

  const isDark = computed(() => theme.global.current.value.dark);

  function applyTheme(mode: "light" | "dark") {
    theme.change(mode);
    document.documentElement.setAttribute("data-theme", mode);
  }

  function toggle() {
    const next = isDark.value ? "light" : "dark";
    preference.value = next;
    applyTheme(next);
  }

  function init() {
    applyTheme(preference.value);
  }

  return { isDark, toggle, init };
}
