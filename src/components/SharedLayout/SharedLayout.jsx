import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Container from 'components/Container/Container';
import AppBar from 'components/AppBar/AppBar';
import AppFooter from 'components/AppFooter/AppFooter';
import { LoaderSpinner } from 'components/Loader/Loader';

const SharedLayout = () => {
    return (
        <>
            <AppBar />
            <Container>
                <Suspense fallback={<LoaderSpinner />}>
                    <Outlet />
                </Suspense>
            </Container>

            <AppFooter />
        </>
    );
};

export default SharedLayout;
