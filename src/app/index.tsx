import { lazy } from 'react';

// App Pages - Lazy loaded for performance
export const DashboardPage = lazy(() => import('./pages/DashboardPage'));
export const Dashboard = lazy(() => import('./pages/Dashboard'));
export const LoansPage = lazy(() => import('./pages/LoansPage'));
export const Loans = lazy(() => import('./pages/Loans'));
export const FlashLoanPage = lazy(() => import('./pages/FlashLoanPage'));
export const FlashLoan = lazy(() => import('./pages/FlashLoan'));
export const MarketplacePage = lazy(() => import('./pages/MarketplacePage'));
export const Marketplace = lazy(() => import('./pages/Marketplace'));
export const CreateLoanPage = lazy(() => import('./pages/CreateLoanPage'));
export const MLInsightsPage = lazy(() => import('./pages/MLInsightsPage'));
export const ProtocolPage = lazy(() => import('./pages/ProtocolPage'));
export const RiskPage = lazy(() => import('./pages/RiskPage'));
export const GovernancePage = lazy(() => import('./pages/GovernancePage'));
export const SettingsPage = lazy(() => import('./pages/SettingsPage'));
