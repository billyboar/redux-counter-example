//initial number will be zero
const initialState = 0;

//this is our main reducer function
export default function Counter(state = initialState, action) {
	switch ( action.type ) {
		//when addition action is fired we will return a value of our state plus one
		case 'addition':
			console.log('add button clicked', state + 1);
			return state + 1;
		case 'substraction':
			console.log('substract button clicked', state - 1);
			return state - 1;
		//we must return state as it is, if some other unknown action is fired
		default:
			return state;
	}
}
