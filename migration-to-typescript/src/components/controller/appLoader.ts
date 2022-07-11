import Loader from './loader';
import { LoaderInterface } from '../../types/index';

class AppLoader extends Loader implements LoaderInterface {
    constructor() {
        super('https://nodenews.herokuapp.com/', {
            apiKey: '6e7834e9cfdd41c485c61c0cf8015774', // ключ https://newsapi.org/ (first: 3ac984ee93384db69d1aaf43bc860451, second: 6e7834e9cfdd41c485c61c0cf8015774)
        });
    }
}

export default AppLoader;
