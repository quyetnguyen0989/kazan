import { locale, dictionary } from "svelte-i18n";

import vi from "./vi";
import en from "./en";

// Define a locale dictionary
dictionary.set({
  vi: vi,
  en: en
});

locale.set("vi");
