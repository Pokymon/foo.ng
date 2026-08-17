'use client';

import type React from 'react';
import { motion } from 'motion/react';
import { cn } from '../../lib/utils';

type FallingPatternProps = React.ComponentProps<'div'> & {
	/** Primary color of the falling elements (default: 'var(--primary)') */
	color?: string;
	/** Background color (default: 'var(--background)') */
	backgroundColor?: string;
	/** Animation duration in seconds (stub for compatibility) */
	duration?: number;
	/** Blur intensity (stub for compatibility) */
	blurIntensity?: string;
	/** Pattern density - affects spacing (default: 1) */
	density?: number;
};

export function FallingPattern({
	color = '#33c07a',
	backgroundColor = '#ffffff',
	density = 1,
	className,
}: FallingPatternProps) {
	// High-fidelity Swiss blueprint grid pattern instead of raw CPU/GPU looping gradient background.
	// This has absolute zero active CPU impact, no scroll paint storms, and runs smoothly on all system specs.
	return (
		<motion.div 
			initial={{ opacity: 0 }}
			animate={{ opacity: 0.65 }}
			transition={{ duration: 0.8, ease: "easeOut" }}
			className={cn('relative h-full w-full overflow-hidden select-none pointer-events-none', className)} 
			style={{ backgroundColor }}
		>
			{/* High-contrast precision dot matrix */}
			<div 
				className="absolute inset-0 z-0"
				style={{
					backgroundImage: `radial-gradient(circle at 1px 1px, ${color} 1.5px, transparent 1.5px)`,
					backgroundSize: `${28 * density}px ${28 * density}px`,
					opacity: 0.35,
				}}
			/>
			
			{/* Absolute precise grid line layout layers */}
			<div 
				className="absolute inset-0 z-0"
				style={{
					backgroundImage: `
						linear-gradient(to right, ${color}0a 1px, transparent 1px),
						linear-gradient(to bottom, ${color}0a 1px, transparent 1px)
					`,
					backgroundSize: `${28 * density}px ${28 * density}px`,
				}}
			/>
			
			{/* Accent major divisions (double scale grid lines) */}
			<div 
				className="absolute inset-0 z-0"
				style={{
					backgroundImage: `
						linear-gradient(to right, ${color}12 1px, transparent 1px),
						linear-gradient(to bottom, ${color}12 1px, transparent 1px)
					`,
					backgroundSize: `${140 * density}px ${140 * density}px`,
				}}
			/>
		</motion.div>
	);
}

