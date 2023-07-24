import PropTypes from 'prop-types';
import { FaChevronRight } from 'react-icons/fa';
import { LoadMoreButtonStyled } from './LoadMoreButtonStyled';


const LoadMoreButton = ({onClick}) => {
        <div>
                <LoadMoreButtonStyled onClick={onClick} type='button'>
                        <FaChevronRight />
                        <span>Завантаж ще...</span>
                        <FaChevronRight />
                </LoadMoreButtonStyled>
        
        </div>
};

LoadMoreButton.propTypes = {
        onClick : PropTypes.func.isRequired,
}

export default LoadMoreButton;