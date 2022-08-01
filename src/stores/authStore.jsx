
import { action, configure, makeObservable, observable } from 'mobx';
import { createRouterState, RouterState } from 'mobx-state-router';

const defaultState = createRouterState('home');
const signin = createRouterState('login');


 configure({"useDefineForClassFields": true});

class AuthStore {
    // Where should we redirect after sign in
    user = null;
    signInRedirect = defaultState;

    constructor(rootStore) {
        makeObservable(this, {
            user : observable.ref,
            setUser: action,
            clearUser: action,
            setSignInRedirect: action,
        });
        this.rootStore = rootStore;
    }

    setUser = (user) => {
        this.user = user;
        this.rootStore.goToState(this.signInRedirect);
    };

    clearUser = () => {
        this.user = undefined;
    };

    setSignInRedirect = (routerState) => {
        this.signInRedirect = routerState;
    };

    signOut() {
        this.clearUser();
        this.rootStore.routerStore.goToState(signin);
    }
}

export default AuthStore;