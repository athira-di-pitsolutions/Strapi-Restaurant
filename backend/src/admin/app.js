import favicon from './extensions/favicons/favicon-32x32.png';
import logo from './extensions/favicons/android-chrome-192x192.png'

const config = {
  auth: {
    logo
  },
  head: {
    favicon: favicon,
  },
  menu: {
    logo,
  },
  tutorials: false,
  translations: {
    en: {
      "app.components.LeftMenu.navbrand.title": "Strapi Restaurant",
      "app.components.LeftMenu.navbrand.workplace": "Administration",
      "Auth.form.welcome.title": "Welcome to Strapi Restaurant",
      "Auth.form.welcome.subtitle": "Login to your account",
      "Settings.profile.form.section.experience.interfaceLanguageHelp": "Preference changes will apply only to you.",
    }
  }
};

const bootstrap = (app) => {
  console.log(app);
};

export default {
  config,
  bootstrap,
};
