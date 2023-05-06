import { IntlProvider, FormattedMessage, FormattedNumber } from "react-intl";
import "./App.css";
import { useState, useEffect } from "react";
const messages = {
  FR: {
    title: "Aujourd'hui, c'estle {ts, date, ::yyMMdd}",
    description: "vous avez 3 nouveaux messages",
  },

  EN: {
    title: "Today  is {ts, date, ::yyMMdd}",
    description: "you have 3 new messages",
  },
};

function App() {
  const isLocale = localStorage.getItem("locale");
  const defaultLocale = isLocale ? isLocale : navigator.language;
  const [locale, setlocale] = useState(defaultLocale);

  useEffect(() => {
    localStorage.setItem("locale", locale);
  }, [locale]);

  return (
    <div className="App">
      <IntlProvider
        messages={messages[locale]}
        locale={locale}
        defaultLocale="en"
      >
        <p>
          <FormattedMessage id="title" values={{ ts: Date.now() }} />
          <br />
          <br />
          <FormattedMessage id="description" />
          <hr></hr>
          <br />
          <br />
          <br />

          <button onClick={() => setlocale("FR")}>FR</button>
          <button onClick={() => setlocale("EN")}>EN</button>
        </p>
      </IntlProvider>
    </div>
  );
}

export default App;
