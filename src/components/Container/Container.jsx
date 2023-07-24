import PropTypes from 'prop-types';
import { ContainerStyled } from './ContainerStyled';

const Container = ({children}) => {
    <ContainerStyled>{children}</ContainerStyled>
}

Container.defaultProps = {
    children : [],
};

Container.propTypes = {
    children : PropTypes.node,
};

export default Container;