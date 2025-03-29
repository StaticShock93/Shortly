import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import './index.css';
import App from './Components/App/App.tsx';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

const queryClient = new QueryClient();

// Create a root and render the App component
createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<QueryClientProvider client={queryClient}>
			<App />
		</QueryClientProvider>
	</StrictMode>
);
