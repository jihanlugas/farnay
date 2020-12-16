import '../../styles/globals.scss'
import App from 'next/app';
import store from '../redux/store';
import { Provider as StoreProvider } from 'react-redux';
import { library, config } from '@fortawesome/fontawesome-svg-core';
import {
    faArchive,
    faArrowsAlt,
    faBars,
    faBoxes,
    faBoxOpen,
    faCaretRight,
    faCashRegister,
    faCheckSquare,
    faChevronDown,
    faChevronRight,
    faCogs,
    faCookieBite,
    faDollarSign,
    faDrumstickBite,
    faMinusSquare,
    faPlus,
    faPlusSquare,
    faShoppingCart,
    faSignInAlt,
    faSort,
    faSortDown,
    faSortUp,
    faSpinner,
    faSquare,
    faStoreAlt,
    faTabletAlt,
    faTachometerAlt,
    faUsers,
    faVoteYea
} from '@fortawesome/free-solid-svg-icons';
import {
    faFileAlt,
} from '@fortawesome/free-regular-svg-icons';
library.add(
    faArchive,
    faArrowsAlt,
    faBars,
    faBoxes,
    faBoxOpen,
    faCaretRight,
    faCashRegister,
    faCheckSquare,
    faChevronDown,
    faChevronRight,
    faCogs,
    faCookieBite,
    faDollarSign,
    faDrumstickBite,
    faFileAlt,
    faMinusSquare,
    faPlus,
    faPlusSquare,
    faShoppingCart,
    faSignInAlt,
    faSort,
    faSortDown,
    faSortUp,
    faSpinner,
    faSquare,
    faStoreAlt,
    faTabletAlt,
    faTachometerAlt,
    faUsers,
    faVoteYea
);


const MyApp = ({ Component, pageProps }) => {
    return (
        <StoreProvider store={store}>
            <Component {...pageProps} />
        </StoreProvider>
    )
}

export default MyApp
