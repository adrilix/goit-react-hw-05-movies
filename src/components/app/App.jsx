
import {lazy, Suspense} from 'react';
import {Route, Routes, Navigate} from 'react-router-dom'
import { LoaderSpinner } from 'components/Loader/Loader';

const Layout = lazy(()=>
      import('../Layout/Layout')
); 

const HomePage = lazy(() =>
    import('../../Pages/HomePage')
    );

const MoviesPage = lazy(() =>
    import('../../Pages/MoviesPage')
    );

const MovieDetailsPage = lazy(() =>
    import('../../Pages/MovieDetailsPage')
    );

const Cast = lazy(() =>
    import('../Cast/Cast')
    );

const Reviews = lazy(() =>
    import('../Reviews/Reviews')
    );
export default function App ()  {
  return (
      <Suspense fallback={<LoaderSpinner />}>
        <Routes>
          <Route path='/' element = {<Layout />}>
            <Route index element = {<HomePage />} />
            <Route path='/movies' element = {<MoviesPage />} />
            <Route path='/movies/:moviesId' element = {<MovieDetailsPage />}>
              <Route path='/cast' element = {<Cast />} />
              <Route path='/reviews' element = {<Reviews />} />
            </Route>
            <Route path='*' element = {<Navigate to='/' replace />} />
          </Route>
        </Routes>
      </Suspense>
  )
}























// export class App extends Component {
//   state = {
//     images: [],
//     pageNumber: 1,
//     inputNameImages: "",
//     status: 'idle',    
//     showModal: false,
//     largeImage: '',    
//     total: 0,   
//   };

//   async componentDidUpdate(_, prevState) {
  
//     if (
//         prevState.inputNameImages !== this.state.inputNameImages ||
//         prevState.pageNumber !== this.state.pageNumber
//     ) {
//       getImagePixabay(this.state.pageNumber, this.state.inputNameImages)
//         .then(({ hits, total }) => {
//             if (total === 0) {
//                 return this.state({ status: 'rejected' });
//             }
//             return this.setState(prevState =>{
//                 return (
//                     {
//                         images: [...prevState.images, ...hits],
//                         status: 'resolved',
//                         total,
//                     }
//                 )
//             }
//             );
//         })
//         .catch(error => this.setState({ status: 'rejected' }));
// }

// }

//   handleSearchFormSubmit = inputNameImages => {
//       this.setState({inputNameImages, images: [], pageNumber: 1 });
//   };

//   openModal = img => {
//     this.setState({ showModal: true, largeImage: img });
// };
// closeModal = () => {
//     this.setState({ showModal: false });
// };
// loadMore = () => {
//     this.setState(prevState => ({ pageNumber: prevState.pageNumber + 1 }));
// };

//   render() {
//     return (
//       <DivStyled>
//         <Searchbar onSubmit = {this.handleSearchFormSubmit}></Searchbar>
//         <ImageGallery 
//         input = {this.state.inputNameImages} 
//         status = {this.state.status}
//         total = {this.state.total}
//         images = {this.state.images}
//         largeImage = {this.state.largeImage}
//         openModal = {this.openModal}
//         loadMore = {this.loadMore}
//         closeModal = {this.closeModal}
//         showModal = {this.state.showModal}

//         ></ImageGallery>
//       </DivStyled>
//     );
//   } 
// }

// export default App;