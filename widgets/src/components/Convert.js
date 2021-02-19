import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Convert = ({ text, language }) => {
  const [translated, setTranslated] = useState('');
  useEffect(() => {}, [text]);
  useEffect(() => {
    const fetchTranslation = async () => {
      const res = await axios.post(
        'https://translation.googleapis.com/language/translate/v2',
        {},
        {
          params: {
            q: text,
            target: language.value,
            key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM',
          },
        },
      );
      setTranslated(res.data.data.translations[0].translatedText);
    };
    const timeId = setTimeout(() => {
      if (!text) return;
      fetchTranslation();
    }, 1000);
    return () => {
      clearTimeout(timeId);
    };
  }, [language, text]);

  return <h1>{translated}</h1>;
};

export default Convert;
