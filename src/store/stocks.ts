import {VuexModule, Module} from 'vuex-module-decorators';
import {StockI} from '../models/models';

@Module({namespaced: true})
class Stocks extends VuexModule {
    stocks: StockI[] = [{
        id: 1,
        name: 'BMW',
        price: 110
    },
    {
        id: 2,
        name: 'Google',
        price: 200
    },
    {
        id: 3,
        name: 'Apple',
        price: 250
    }, 
    {
    id: 4,
    name: 'Twitter',
    price: 8
    }];

    get getStocks(): StockI[] {
        return this.stocks;
    }
}

export default Stocks;