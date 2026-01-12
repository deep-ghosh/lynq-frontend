// Shared exports - Used across both Landing and App sections

// Components
export { default as ErrorBoundary } from './components/ErrorBoundary';
export { LoadingFallback } from './components/Loading';
export { default as HealthIndicator } from './components/HealthIndicator';
export { default as HealthCheck } from './components/HealthCheck';
export { default as NavBar } from './components/NavBar';

// UI Components
export * from './components/ui/Button';

// Store
export { useWalletStore } from './store/walletStore';
export { useLoanStore } from './store/loanStore';
export { useMarketStore } from './store/marketStore';
export { useUIStore } from './store/uiStore';
export { useUserStore } from './store/userStore';

// Hooks
export { queryClient } from './hooks/useQuery';
export { useHealthCheck } from './hooks/useHealthCheck';

// Config
export { configureFCL } from './config/flow';
export { CONTRACT_ADDRESSES } from './config/contracts';
export * from './config/networks';
export * from './config/env';

// Services
export { contractService } from './services/contractService';
export { flashLoanService } from './services/flashLoanService';
export * from './services/blockchain';

// API
export * from './api/client';
