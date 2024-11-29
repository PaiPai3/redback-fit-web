import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './routes/Root/Root.tsx';
import LoginPage from './routes/LoginPage/LoginPage.tsx';
import Dashboard from './routes/Dashboard/Dashboard.tsx';
import ReportPage from './routes/Report/ReportPage.tsx';
import HomePage from './routes/HomePage/HomePage.tsx';
import DataPredictions from './components/DashboardDataPredictions/DashboardDataPredictions.tsx';
import DashboardLanding from './components/DashboardLanding/DashboardLanding.tsx';
import ProfilePage from "./routes/ProfilePage/ProfilePage";
import Categories from './components/Categories/Categories.tsx';
import ReportPageContent from './components/Report/ReportPageContent.tsx';

const router = createBrowserRouter([
	{
		element: <Root />,
		errorElement: <Root />,
		children: [
			{
				path: '/',
				element: <HomePage />
			},
			{
				path: 'login',
				element: <LoginPage />
			},
			{
				path:'profile',
				element:<ProfilePage />
			},
			{
				path: 'dashboard',
				element: <Dashboard />,
				children: [
					{
						path: '',
						element: <DashboardLanding />,
					},
					{
						path: 'data-predictions',
						element: <DataPredictions />,
					},
					{
						path: 'categories',
						element: <Categories />,
					}
				]
			},
			{
				path: 'reports',
				element: <ReportPage />,
				children: [
					{
						path: '',
						element: <ReportPageContent />,
					},
					{
						path: 'data-predictions',
						element: <DataPredictions />,
					}
				]
			}
		],
	},
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>,
);
