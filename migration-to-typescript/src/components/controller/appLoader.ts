import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: '3ac984ee93384db69d1aaf43bc860451', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
