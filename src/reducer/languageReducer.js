const initialState = {
  language: 'en'
}


export default (state = initialState, action) => {
  switch (action.type) {
   case 'CHANGE_LANGUAGE':
    return {
     language: action.language
    }
   default:
    return state
  }
 }