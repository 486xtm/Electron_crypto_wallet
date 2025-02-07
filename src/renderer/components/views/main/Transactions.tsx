import { cn } from '@/lib/utils';
import React, { useState } from 'react';
import { ArrowUp, PurePlus } from '../../images/Icons';
import { useTheme } from '@/renderer/context/theme-context';

export const Transactions = () => {
	const transactions = [];

	const [optionVisible, setOptionVisible] = useState(false);
	const { theme } = useTheme();

	return (
		<div
			className={
				cn(
					`transition-transform duration-1000 ease-in-out transform w-full h-full p-10 flex flex-col`,
					theme === 'dark' ? 'text-gray-200' : 'text-black',
				) /*${isVisible ? 'ml-0' : '-ml-[100%]'}*/
			}
			// ref={ref}
		>
			<p className="text-2xl my-4">Transactions</p>
			{transactions.length === 0 && (
				<>
					<span className="text-sm">No transaction history yet.</span>
					<div className="flex mt-12">
						<span className="text-sm">Advanced options</span>
						<div
							className={cn('cursor-pointer', !optionVisible && 'rotate-180')}
							onClick={() => setOptionVisible(!optionVisible)}
						>
							<ArrowUp />
						</div>
					</div>
				</>
			)}
			{optionVisible && (
				<>
					<div className="flex gap-3 mr-auto my-3">
						<div className="cursor-pointer rounded border border-gray-400 p-1 mr-auto">
							<PurePlus color={theme === 'dark' ? '#e5e7eb' : 'black'} />
						</div>
						<span className="text-sm">Human readable data format</span>
					</div>

					<div
						className={cn(
							'mr-auto flex gap-2 text-white text-xs px-3 py-2 font-bold rounded cursor-pointer transition-colors duration-200',
							'bg-orange-500 hover:bg-orange-600',
						)}
					>
						Export all history
					</div>
				</>
			)}
		</div>
	);
};
