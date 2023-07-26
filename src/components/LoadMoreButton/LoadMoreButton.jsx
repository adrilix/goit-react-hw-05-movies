import PropTypes from 'prop-types';
// import { FaChevronRight } from 'react-icons/fa';
// import { LoadMoreButtonStyled } from './LoadMoreButtonStyled';


const LoadMoreButton = ({onClick}) => {
        <div>
                {/* <LoadMoreButtonStyled type='button' onClick={onClick} >
                        <FaChevronRight />
                        <span>Завантаж ще...</span>
                        <FaChevronRight />
                </LoadMoreButtonStyled> */}
                <button type='button' onClick={onClick}></button>
        
        </div>
};

LoadMoreButton.propTypes = {
        onClick : PropTypes.func.isRequired,
}

export default LoadMoreButton;