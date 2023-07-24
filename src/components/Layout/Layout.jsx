import { Outlet } from "react-router-dom";
import Container from 'components/Container/Container';
import AppBar from 'components/AppBar/AppBar';
import AppFooter from 'components/AppFooter/AppFooter';

const Layout = () => {
    return (
        <>
            <AppBar />
            <Container>
                <Outlet />
            </Container>
        
            <AppFooter />
        </>
    );
};

export default Layout;
