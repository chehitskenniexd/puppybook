import { connect } from 'react-redux';
import SinglePuppy from './SinglePuppy';

const mapStateToProps = ({singlePuppy}) => ({
  singlePuppy
})

// const mapDispatchToProps

export default connect(
  mapStateToProps
)(SinglePuppy);
