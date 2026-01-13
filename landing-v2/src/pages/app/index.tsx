import { ArrowLeft } from 'lucide-react';
import { Header } from '@/components/shared/Header';
import { Footer } from '@/components/shared/Footer';
import { Button } from '@/components/shared/Buttons';

export default function AppPage() {
	return (
		<div className="bg-black text-white min-h-screen">
			<Header />
			<main className="pt-28 pb-16 px-6 max-w-4xl mx-auto text-center space-y-6">
				<p className="text-sm uppercase tracking-[0.2em] text-cyan-200/80">Live app</p>
				<h1 className="text-4xl font-bold">Lending app is coming online.</h1>
				<p className="text-gray-300 max-w-2xl mx-auto">
					We are finalizing audits and liquidity provisioning. In the meantime, finish the learning path and sandbox
					tasks so your reputation is ready when lending opens.
				</p>
				<div className="flex justify-center gap-3">
					<Button variant="secondary" onClick={() => (window.location.href = '/')}> 
						<ArrowLeft className="w-4 h-4" />
						Back to landing
					</Button>
					<Button onClick={() => (window.location.href = '/learning')}>Go to learning</Button>
				</div>
			</main>
			<Footer />
		</div>
	);
}
