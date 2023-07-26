import PropTypes from 'prop-types';
import { MessageStyled } from './MessageStyled';


const Message = ({children}) => {
    return(<MessageStyled>{children}</MessageStyled>)
};

// Message.defaultProps = {
//     children: [],
// };

Message.propTypes = {
    children: PropTypes.node,
};

export default Message ;