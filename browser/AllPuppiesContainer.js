import { connect } from 'react-redux';
import AllPuppies from './AllPuppies';
import { loadPuppiesFromServer } from './action-creators'

const hardcodedPuppies = [
  { id: 1, name: 'Cody' },
  { id: 2, name: 'Ben' },
  { id: 3, name: 'Bubba' }
];

// object destructuring: specifically taking this.state.allPuppies out of state; can simply call it allPuppies
const mapStateToProps = ({allPuppies}) => ({
  allPuppies
})

// loadPuppiesFromServer performs an asynchronous request, and thunk knows that it is async, so it won't block the rest of the page from loading while that request is being made
const mapDispatchToProps = dispatch => ({
  loadAllPuppies: () => dispatch(loadPuppiesFromServer())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AllPuppies);
