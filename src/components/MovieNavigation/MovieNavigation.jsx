import { useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom";
import PropTypes from 'prop-types';
import { FaChevronRight } from "react-icons/fa";
import { AdditionalTitleStyled, NavigationItemStyled } from "./MovieNavigationStyled";


const MovieNavigation = () => {
    const location = useLocation();

    return(
        <div>
            <AdditionalTitleStyled>Additional Information</AdditionalTitleStyled>
            <ul>
                <NavigationItemStyled>
                    <NavLink to='cast' state={{from:location.state?.from}}>
                        <FaChevronRight /> Cast
                    </NavLink>
                </NavigationItemStyled>
                <NavigationItemStyled>
                    <NavLink to='reviews' state={{from:location.state?.from}}>
                        <FaChevronRight /> Reviews
                    </NavLink>
                </NavigationItemStyled>
            </ul>
        </div>
    )
}

MovieNavigation.propTypes = {
    subLocation: PropTypes.object,
}

export default MovieNavigation;