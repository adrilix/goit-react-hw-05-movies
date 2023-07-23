
import {lazy, Suspense} from 'react';
import { DivStyled } from './AppStyled';
import {NavLink, Route, Routes, Navigate} from 'react-router-dom'
import { LoaderSpinner } from 'components/Loader/Loader';

// const Layout = lazy(()=>
//       import('../Layout/Layout')
// );
const HomePage = lazy(() =>
    import('../../Pages/HomePage')
    );

export default function App ()  {
  return (
    <DivStyled>
      <nav>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/movies'>'/movies'</NavLink>
          <NavLink to='/movies/:movieId'>'/movies/:movieId'</NavLink>
          <NavLink to='/movies/:movieId/cast'>'/movies/:movieId/cast'</NavLink>
          <NavLink to='/movies/:movieId/reviews'>'/movies/:movieId/reviews'</NavLink>
      </nav>
      <Routes>
          <Route path="/" element = {<HomePage />}/>
          <Route path='/movies' element = {<div>movies    find'</div>}/>
          <Route path='/movies/:movieId' element = {<div>MovieDetails</div>}/>
          <Route path='/movies/:movieId/cast' element = {<div>MovieDetails   cast'</div>}/>
          <Route path='/movies/:movieId/reviews' element = {<div>MovieDetails   Reviews</div>}/>
          <Route path='*' element = {<div>Home page</div>}/>

          <Route />
      </Routes>
    </DivStyled>
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