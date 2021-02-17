import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Search = () => {
  const [term, setTerm] = useState('React');
  const [results, setResults] = useState([]);
  const onInputChange = (e) => {
    setTerm(e.target.value);
  };
  useEffect(() => {
    const search = async () => {
      const res = await axios.get('https://en.wikipedia.org/w/api.php', {
        params: {
          action: 'query',
          list: 'search',
          origin: '*',
          format: 'json',
          srsearch: term,
        },
      });
      setResults(res.data.query.search);
    };
    if (!term) return;
    if (results.length) {
      const timeoutId = setTimeout(() => {
        search();
      }, 1000);
      return () => {
        clearTimeout(timeoutId);
      };
    } else {
      search();
    }
  }, [term]);

  const renderResults = results.map((result) => {
    return (
      <div className='item' key={result.pageid}>
        <div className='right floated content'>
          <a href={`https://en.wikipedia.org?curid=${result.pageid}`} className='ui button'>
            GO
          </a>
        </div>
        <div className='content'>
          <div className='header'>{result.title}</div>
          <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
        </div>
      </div>
    );
  });
  return (
    <div>
      <div className='ui form'>
        <div className='field'>
          <label htmlFor=''>Enter Search Term</label>
          <input value={term} onChange={onInputChange} type='text' className='input' />
        </div>
      </div>
      <div className='ui celled list'> {renderResults}</div>
    </div>
  );
};

export default Search;
