import {
    browserHistory,
    createRouterState,
    HistoryAdapter,
    RouterStore,
} from 'mobx-state-router';
import { authStore } from '../stores/authStore';

const notFound = createRouterState('notFound');
const login = createRouterState('login');

// Routes are matched from top to bottom. Make sure they are sequenced
// in the order of priority. It is generally best to sort them by pattern,
// prioritizing specific patterns over generic patterns (patterns with
// one or more parameters). For example:
//     /items
//     /items/:id


// const checkUserSignedIn = async () => {
//         const authStore = new authStore(RouterStore.options);
//         if (!authStore.user) {
//             authStore.setSignInRedirect(login);
//             return login;
//         }    
// };

const routes = [

    {
        name: 'home',
        pattern : '/home',
        //beforeEnter : checkUserSignedIn,
    }, 

    {
        name: 'login',
        pattern: '/',
    },
    {
        name: 'notFound',
        pattern: '/not-found',
    },
    {
        name: 'paymentsList',
       // name : 'paymentsListUpdated',
        pattern: '/payments',
    }
];

export function initRouter() {
    const routerStore = new RouterStore(routes, notFound);

    // Observe history changes
    const historyAdapter = new HistoryAdapter(routerStore, browserHistory);
    historyAdapter.observeRouterStateChanges();

    return routerStore;
}