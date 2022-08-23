import { QueryClient, QueryClientProvider } from 'react-query';
import './App.css';
import PokemonApp from './components/PokemonApp';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <PokemonApp />
    </QueryClientProvider>
  );
}

export default App;
