export const initialState = {
    searchResult: null,
    currentTheme: 'sans-serif',
  };
  
  export const actionTypes = {
    SET_SEARCH_RESULT: 'SET_SEARCH_RESULT',
    SET_THEME: 'SET_THEME',
  };
  
  const reducer = (state, action) => {
    switch (action.type) {
      case actionTypes.SET_SEARCH_RESULT:
        return { ...state, searchResult: action.payload };
      case actionTypes.SET_THEME:
        document.body.style.fontFamily = action.payload;
        return { ...state, currentTheme: action.payload };
      default:
        return state;
    }
  };
  
  export default reducer;
  