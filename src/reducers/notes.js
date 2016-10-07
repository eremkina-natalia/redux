const initialState = JSON.parse(window.localStorage.getItem('notes')) || {}

const colors = ['#beecc2','#ecc0be','#e5beec',
'#b000d0', '#00d0b3', '#ede69b', '#fb00ff', '#0043ff', '#00ff37',
'#ffc800', '#ff0000'];

const note = (state, action) => {
  switch(action.type) {

    case 'ADD_NOTE':
      return {
        text: action.text,
        color: colors[Math.floor(Math.random()*10)],
        id: Date.now()
      }

    case 'DELETE_NOTE':
      return {
        id: action.id,
        text: action.text
      }

    default:
      return {
        state
      }
  }
}

const notes = (state = initialState, action) => {
  switch (action.type) {

    case 'ADD_NOTE':
      return [
        ...state,
        note(undefined, action)
      ]

    case 'DELETE_NOTE':
      return (
        state.filter(t =>
        t.id !== action.id
        )
      )

    default:
      return state
  }
}

export default notes
