/**
 * Created by tirli on 30-01-19.
 */
import { RootStoreModule } from './root-store.module';
import * as RootStoreState from './root-state';
import * as RootStoreSelectors from './selectors';
export { RootStoreState, RootStoreSelectors, RootStoreModule };
export * from '../clients/clients-store';
