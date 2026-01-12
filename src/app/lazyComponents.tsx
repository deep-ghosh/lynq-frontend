/**
 * Lazy-loaded component exports for code splitting
 */
import { lazy } from 'react';

// Dashboard components
export const LazyProfileDashboard = lazy(() => import('./components/dashboard/ProfileDashboard'));
export const LazyPersonalDetails = lazy(() => import('./components/dashboard/PersonalDetails'));
export const LazyTransaction = lazy(() => import('./components/dashboard/Transaction'));

// Loan components
export const LazyLoanRequestForm = lazy(() => import('./components/card/LoanRequestForm'));
export const LazyBigLoanCard = lazy(() => import('./components/card/BigLoanCard'));
export const LazySmallLoanCard = lazy(() => import('./components/card/SmallLoanCard'));
export const LazyLoanEligibilityMeter = lazy(() => import('./components/card/LoanEligibilityMeter'));

// Marketplace components
export const LazySummaryHeader = lazy(() => import('./components/marketplace/SummaryHeader'));
export const LazyFilters = lazy(() => import('./components/marketplace/Filters'));
export const LazyCoinCard = lazy(() => import('./components/marketplace/CoinCard'));
export const LazyAssetTable = lazy(() => import('./components/marketplace/AssetTable'));
export const LazyTradeInterface = lazy(() => import('./components/marketplace/TradeInterface'));
