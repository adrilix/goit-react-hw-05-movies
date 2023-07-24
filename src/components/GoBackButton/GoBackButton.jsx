import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FaChevronLeft } from 'react-icons/fa';
import { ButtonBackStyled } from './GoBackButtonStyled';

const GoBackButton = (to) => {
        <Link to={to}>
            <ButtonBackStyled type='button'>
                <FaChevronLeft />
                <span>повернення назад</span>
                <FaChevronLeft />
            </ButtonBackStyled>
        </Link>
}

GoBackButton.propTypes = {
    to: PropTypes.object,
};

export default GoBackButton;