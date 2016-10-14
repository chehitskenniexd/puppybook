import { connect } from 'react-redux';
import AllPuppies from './AllPuppies';
import { receivePuppies } from './action-creators'

const hardcodedPuppies = [
  { id: 1, name: 'Cody' },
  { id: 2, name: 'Ben' },
  { id: 3, name: 'Bubba' }
];

// object destructuring: specifically taking this.state.allPuppies out of state; can simply call it allPuppies
const mapStateToProps = ({allPuppies}) => ({
  allPuppies
})

const mapDispatchToProps = dispatch => ({
  loadAllPuppies: () => dispatch(receivePuppies(hardcodedPuppies))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AllPuppies);
