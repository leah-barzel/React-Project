import { observable, makeObservable, action } from 'mobx';

class AppStore {
    isLogin = false;

    constructor() {
        makeObservable(this, {
            isLogin: observable,
            setIsLogin: action,
        })
    }

    setIsLogin = (val) => {
        this.isLogin = val;
    }

}

export default new AppStore();//יצירת מופע יחיד שאליו תמיד נפנה