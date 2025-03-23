import { Provider } from 'react-redux';
import { appStore } from './app-store';

export const ReduxProvider = ({ children }) => {
  return <Provider store={appStore}>{children}</Provider>;
};
