
import { action, makeObservable, observable } from 'mobx';
import { createRouterState, RouterState } from 'mobx-state-router';
import { User } from '../models';
import { RootStore } from './RootStore';

const defaultState = createRouterState('home');
const signin = createRouterState('signin');


 

export class AuthStore {
    rootStore: RootStore;
    user: User;

    // Where should we redirect after sign in
    signInRedirect = defaultState;

    constructor(rootStore) {
        makeObservable(this, {
            user: observable.ref,
            signInRedirect: observable.ref,
            setUser: action,
            clearUser: action,
            setSignInRedirect: action,
        });
        this.rootStore = rootStore;
    }

    setUser = (user) => {
        this.user = user;
        this.rootStore.routerStore.goToState(this.signInRedirect);
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