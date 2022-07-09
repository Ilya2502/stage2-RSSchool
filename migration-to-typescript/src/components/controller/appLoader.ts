import Loader from './loader';
import { LoaderInterface } from '../../types/index';

class AppLoader extends Loader implements LoaderInterface {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: '3ac984ee93384db69d1aaf43bc860451', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
