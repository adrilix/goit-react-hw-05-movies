import { FooterStyled, FooterTextStyled } from "./AppFooterStyled";


const AppFooter = () => {
    return (
        <FooterStyled>
            <FooterTextStyled>
                &copy; {new Date().getFullYear()} Kiniposhuk
            </FooterTextStyled>
        </FooterStyled>
    )
}

export default AppFooter;