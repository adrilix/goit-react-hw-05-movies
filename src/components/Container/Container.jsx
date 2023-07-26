import PropTypes from 'prop-types';
import { ContainerStyled } from './ContainerStyled';

const Container = ({children}) => {
   return <ContainerStyled>{children}</ContainerStyled>
}

Container.propTypes = {
    children : PropTypes.node,
};

export default Container;