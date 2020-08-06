import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

/*
i18next - used to setUp i18n
react-i18next - connect internationalization capabilities to react
*/
i18n
  // Helps load translation files from a server, with cra, the public folder is okay
  .use(Backend)
  // detect user language
  .use(LanguageDetector)
  // passes i18n down to react-i18next
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    debug: true,

    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
  });

export default i18n;
