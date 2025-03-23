import { ReduxProvider } from './redux/redux-provider';
import { RoutingConfiguration } from './routing/routing';

function App() {
  return (
    <div className="min-h-screen bg-base-300 text-base-content">
      <ReduxProvider>
        <RoutingConfiguration />
      </ReduxProvider>
    </div>
  );
}

export default App;
