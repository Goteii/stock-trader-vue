import { VuexModule, Module} from 'vuex-module-decorators';

@Module({namespaced: true})
class Portfolio extends VuexModule {
    funds = 10000;

    get getFunds(): number {
        return this.funds;
    }
}

export default Portfolio;