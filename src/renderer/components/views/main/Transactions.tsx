import { cn } from '@/lib/utils';
import React, { useState } from 'react';
import { ArrowUp, PurePlus, ArrowDown } from '../../images/Icons';
import { useTheme } from '@/renderer/context/theme-context';
import { useGlobalContext } from '@/renderer/context/global-context';
export const Transactions = () => {
	// const transactions = settings?.transactions || [];
	const transactions = [
		{
			type: 'Sent',
			amount: '100',
			address: '0x1234567890123456789012345678901234567890',
			date: '2021-01-01',
			confirmNumber: 18230,
			fee: '0.00000307',
			tranID: '23452345jk5234f242g4h2j4k235jk23jk2342g3kjk2342j3k23',
			block: '3262346'
		},
		{
			type: 'Received',
			amount: '100',
			address: '0x1234567890123456789012345678901234567890',
			date: '2021-01-01',
			confirmNumber: 18231,
			fee: '0.00000307',
			tranID: '23452345jk5234f242g4h2j4k235jk23jk2342g3kjk2342j3k23',
			block: '2345321'
		},
	];
	const [optionVisible, setOptionVisible] = useState(false);
	const [detailsOpens, setDetailsOpens] = useState<boolean[]>(
		transactions.map(() => false),
	);
	const { theme } = useTheme();
	const { settings, setSettings } = useGlobalContext();

	return (
		<div
			className={
				cn(
					`transition-transform duration-1000 ease-in-out transform w-full h-full p-10 flex flex-col`,
					theme === 'dark' ? 'text-gray-300' : 'text-black',
				) /*${isVisible ? 'ml-0' : '-ml-[100%]'}*/
			}
			// ref={ref}
		>
			<p className="text-2xl my-4">Transactions</p>
			{transactions.length === 0 ? (
				<>
					<span className="text-sm">No transaction history yet.</span>
				</>
			) : (
				<div
					className={cn(
						'border-t',
						theme === 'dark' ? ' border-gray-700' : ' border-gray-300',
					)}
				>
					{transactions.map((tran, index) => (
						<div
							className={cn(
								'w-full flex flex-col border-b',
								theme === 'dark' ? 'border-gray-700' : 'border-gray-300',
							)}
							key={`transaction-${index}`}
						>
							<div className={cn('flex w-full py-2 text-sm')}>
								<div className={cn('w-[7%] flex items-center justify-center')}>
									<div
										className={cn(
											'w-[10px] h-[10px] rounded-full',
											tran.type === 'Sent' ? 'bg-orange-500' : 'bg-green-500',
										)}
									></div>
								</div>
								<div className={cn('w-[33%]')}>
									<span>{tran.type}</span>
									<br />
									<span>{tran.amount} XMR</span>
								</div>
								<div className={cn('w-[35%]')}>
									<span>{tran.type === 'Sent' ? 'To' : 'In'}</span>
									<br />
									<span>
										{tran.address.slice(0, 8)}...{tran.address.slice(-8)}
									</span>
								</div>
								<div className={cn('w-[20%]')}>
									<span>Date</span>
									<br />
									<span>{tran.date}</span>
								</div>
								<div className={cn('w-[5%] flex items-center justify-center')}>
									<div
										className={cn(
											'cursor-pointer transition-transform duration-200',
											detailsOpens[index] && 'rotate-180',
										)}
										onClick={() =>
											setDetailsOpens([
												...detailsOpens.map((open, i) =>
													i === index ? !open : open,
												),
											])
										}
									>
										<ArrowDown />
									</div>
								</div>
							</div>
							{detailsOpens[index] && (
								<div className="flex flex-col gap-2">
									<div className={cn('flex w-full py-2 text-sm')}>
										<div className={cn('w-[40%] pl-[7%]')}>
											<span>Fee</span>
											<br />
											<span>{tran.fee} XMR</span>
										</div>
										<div className={cn('w-[35%]')}>
											<span>Confirmation</span>
											<br />
											<span>{tran.confirmNumber}</span>
										</div>
										<div className={cn('w-[25%]')}>
											<span>Date</span>
											<br />
											<span>{tran.date}</span>
										</div>
									</div>
									<div className={cn('pl-[7%]')}>
										<span>Description</span>
										<div className='flex items-center gap-2'>-<img src = "" alt = "description" /></div>
									</div>
									<div className={cn('pl-[7%]')}>
										<span>Transaction ID</span>
										<div>{tran.tranID}</div>
									</div>
									<div className={cn('pl-[7%]')}>
										<span>Transaction key1</span>
										<div>Click to reveal</div>
									</div>
									<div className={cn('pl-[7%]')}>
										<span>Blockheight</span>
										<div>{tran.block}</div>
									</div>
								</div>
							)}
						</div>
					))}
				</div>
			)}
			<div className="flex mt-12 gap-2 items-center">
				<span className="text-sm">Advanced options</span>
				<div
					className={cn(
						'cursor-pointer transition-transform duration-200',
						optionVisible && 'rotate-180',
					)}
					onClick={() => setOptionVisible(!optionVisible)}
				>
					<ArrowDown />
				</div>
			</div>
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
