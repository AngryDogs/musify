const initialState = {
  test: null,
}


export default function test(state = initialState, response) {
  switch (response.type) {
    case 'CHANGE_TEST_STATE':
      return {...state, test: true};
    default:
      return {...state, test: false};
  }
}
