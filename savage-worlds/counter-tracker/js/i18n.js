// List of available locales
const availableLocales = ['en', 'fr'];

// Default locale.
const defaultLanguage = 'en';

// Manually detect users' language, strip languages such as `en-GB` to just `en`.
let language = (window.navigator.userLanguage || window.navigator.language).substr(0, 2);

// If `?lang=` exists in URL params & is valid, then use that instead.
const urlParams = new URLSearchParams(window.location.search);
const langFromUrl = urlParams.get('lang');
if (langFromUrl && availableLocales.includes(langFromUrl)) {
  language = langFromUrl
}

// Set `pageLanguage` only if its available within our locales, otherwise default.
let pageLanguage = defaultLanguage;
if (availableLocales.includes(language)) {
  pageLanguage = language;
}

// Locale translations.
const locales = {

  // EN
  en: {
    "sw": {
      "terms-long": {
        "bennies": "bennies",
        "wounds": "wounds",
        "fatigue": "fatigue",
        "power-points": "power points", 
        "trait-rolls": "trait rolls",
        "pace": "pace",
      },
      "terms-short": {
        "modifier": "mod.",
      },
      "specific-strings": {
        "modifiers-fieldset-title": "modifiers due to wounds or fatigue",
        "extra-counter-1-fieldset-title": "extra counter 1",
        "extra-counter-2-fieldset-title": "extra counter 2",
        "extra-counter-3-fieldset-title": "extra counter 3",
        "header-title": "Counters",
        "save-link-feedback-message": "Link copied to clipboard. Remember to save it so you can find your counters the next time you play!",
        "reset-all-confirm-message": "Are you sure you want to reset all the counters?",
      },
    },
  },
    
  // FR
  fr: {
    "sw": {
      "terms-long": {
        "bennies": "jetons",
        "wounds": "blessures",
        "fatigue": "fatigue",
        "power-points": "points de pouvoirs", 
        "trait-rolls": "jets de trait",
        "pace": "allure",
      },
      "terms-short": {
        "modifier": "mod.",
      },
      "specific-strings": {
        "modifiers-fieldset-title": "modificateurs dûs aux blessures ou à la fatigue",
        "extra-counter-1-fieldset-title": "compteur additionnel 1",
        "extra-counter-2-fieldset-title": "compteur additionnel 2",
        "extra-counter-3-fieldset-title": "compteur additionnel 3",
        "header-title": "Compteurs",
        "save-link-feedback-message": "Lien copié dans le presse-papier. Pensez à le sauvegarder pour retrouver vos compteurs à la prochaine partie !",
        "reset-all-confirm-message": "Êtes-vous certain⸱e de vouloir réinitialiser tous les compteurs ?",
      },
    },
  },

};

// Get all page elements to be translated.
const elements = document.querySelectorAll('[data-i18n]');

// Get JSON object of translations.
const json = locales[pageLanguage];

// On each element, found the translation from JSON file & update.
elements.forEach((element, index) => {

  // Set the lang attribute for the translated element (to be used in CSS)
  element.setAttribute('lang', pageLanguage); // Addition to the original library

  const key = element.getAttribute('data-i18n');
  let text = key.split('.').reduce((obj, i) => (obj ? obj[i] : null), json);

  // Does this text have any variables? (eg {something})
  const variables = text.match(/{(.*?)}/g);
  if (variables) {

    // Iterate each variable in the text.
    variables.forEach((variable) => {

      // Filter all `data-*` attributes for this element to find the matching key.
      Object.entries(element.dataset).filter(([key, value]) => {
        if (`{${key}}` === variable) {
          try {
            // Attempt to run actual JavaScript code.
            text = text.replace(`${variable}`, new Function(`return (${value})`)());
          } catch (error) {
            // Probably just static text replacement.
            text = text.replace(`${variable}`, value);
          }
        }
      })
    });
  }

  // Regular text replacement for given locale.
  element.innerHTML = text;
});

// Set <html> tag lang attribute.
const htmlElement = document.querySelector('html');
htmlElement.setAttribute('lang', pageLanguage);
