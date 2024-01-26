
import React, { useReducer, useEffect } from 'react';
import './App.scss';
import axios from 'axios';
import SearchBar from './components/SearchBar';
import ResultDisplay from './components/ResultDisplay';
import ThemeSwitch from './components/ThemeSwitch';
import reducer, { initialState, actionTypes } from './reducer';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { searchResult, currentTheme } = state;

  useEffect(() => {
    // Load initial theme based on user's system preferences
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    dispatch({ type: actionTypes.SET_THEME, payload: prefersDarkMode ? 'dark-theme' : 'light-theme' });
  }, []);

  const handleSearch = async (searchTerm) => {
    try {
      const response = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchTerm}`);
      const data = response.data;

      if (data.length > 0) {
        dispatch({ type: actionTypes.SET_SEARCH_RESULT, payload: data[0] });
      } else {
        dispatch({ type: actionTypes.SET_SEARCH_RESULT, payload: null });
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      dispatch({ type: actionTypes.SET_SEARCH_RESULT, payload: null });
    }
  };

  const handleThemeChange = (theme) => {
    dispatch({ type: actionTypes.SET_THEME, payload: theme });
  };

  return (
    <div className={`App ${currentTheme}`}>
      <header>
        <h1>Dictionary Web App</h1>
      </header>
      <main>
        <SearchBar onSearch={handleSearch} />
        <ResultDisplay result={searchResult} />
      </main>
      <ThemeSwitch onThemeChange={handleThemeChange} />
    </div>
  );
}

export default App;

