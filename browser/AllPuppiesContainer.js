import { connect } from 'react-redux';
import AllPuppies from './AllPuppies';

// object destructuring: specifically taking this.state.allPuppies out of state; can simply call it allPuppies
const mapStateToProps = ( {allPuppies} ) => ({
  allPuppies
})

const mapDispatchToProps = () => {

}

export default connect(
  mapStateToProps
)(AllPuppies);
