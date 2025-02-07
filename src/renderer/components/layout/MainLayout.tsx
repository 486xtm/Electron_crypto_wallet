import React, { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import {
	CloseIcon,
	MaximizeIcon,
	MinimizeIcon,
	MoonIcon,
	LockIcon,
	LogOutIcon,
	ConnectIcon,
} from '../images/Icons';
import { __assets } from '@/main/paths';
import { PROTOCOL } from '@/config/config';
import { useTheme } from '@/renderer/context/theme-context';
import { cn } from '@/lib/utils';

interface AuthLayoutProps {
	children?: React.ReactNode;
}

const Clickable = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className="w-12 h-12 flex justify-center items-center cursor-pointer hover:bg-gray-200">
			{children}
		</div>
	);
};

export const MainLayout: React.FC<AuthLayoutProps> = ({ children }) => {
	const { theme } = useTheme();
	// const { pathname } = useLocation();
	// const items = ['account', 'send', 'receive', 'transactions', 'settings'];

	// const currentPage = items.find((item) => pathname.endsWith(item)) || items[0];
	const [currentPage, setCurrentPage] = useState('account');

	return (
		<>
			<div
				className={cn(
					'h-full w-full flex flex-col justify-stretch',
					theme === 'dark' ? 'bg-black' : 'bg-gray-100',
				)}
			>
				<div className="h-12 w-full flex justify-between border-b relative">
					<div className="flex">
						<Clickable>
							<LockIcon />
						</Clickable>
						<Clickable>
							<LogOutIcon />
						</Clickable>
						<Clickable>
							<ConnectIcon />
						</Clickable>
						<Clickable>
							<MoonIcon />
						</Clickable>
					</div>
					<div className="flex justify-center items-center absolute -z-10 w-full h-full font-bold text-lg">
						Administrator
					</div>
					<div className="flex-1 drag" />
					<div className="flex">
						<Clickable>
							<MinimizeIcon />
						</Clickable>
						<Clickable>
							<MaximizeIcon />
						</Clickable>
						<Clickable>
							<CloseIcon />
						</Clickable>
					</div>
				</div>
				<div className="flex flex-1">
					<div className="flex flex-col w-[300px] h-full shadow-md">
						<div className="p-5 rounded-xl">
							<img src={`${PROTOCOL}://card-background-white.png`} />
						</div>
						<div className="flex-1 cursor-pointer">
							<div
								className={cn(
									'pl-5',
									currentPage === 'account'
										? ' bg-gray-200'
										: 'hover:bg-[#efefef]',
								)}
							>
								<div
									className={cn(
										'py-3 px-2 border-b border-t text-sm font-bold',
										'text-gray-600 border-l-2 border-l-transparent',
										currentPage === 'account' && 'border-l-[#6E513C]',
									)}
									onClick={() => setCurrentPage('account')}
								>
									Account
								</div>
							</div>
							<div
								className={cn(
									'pl-5 relative z-10 bg-gray-100',
									currentPage === 'send'
										? ' bg-gray-200'
										: 'hover:bg-[#efefef]',
								)}
								onClick={() => setCurrentPage('send')}
							>
								<div
									className={cn(
										'py-3 px-2 border-b border-t text-sm font-bold border-l-2 border-l-transparent',
										'text-gray-600',
										currentPage === 'send' && 'border-l-[#6E513C]',
									)}
								>
									Send
								</div>
							</div>
							<div
								className={cn(
									'pl-5 -z-10 transition-all ease-in-out duration-100',
									currentPage === 'address'
										? ' bg-gray-200'
										: 'hover:bg-[#efefef]',
									currentPage === 'send' || currentPage === 'address'
										? '-mt-0'
										: '-mt-12',
								)}
								onClick={() => setCurrentPage('address')}
							>
								<div
									className={cn(
										'py-3 px-2 border-b border-t text-sm font-bold border-l-2 border-l-transparent',
										'text-gray-600 pl-5',
										currentPage === 'address' && 'border-l-[#6E513C]',
									)}
								>
									Address Book
								</div>
							</div>
							<div
								className={cn(
									'pl-5',
									currentPage === 'receive'
										? ' bg-gray-200'
										: 'hover:bg-[#efefef]',
								)}
								onClick={() => setCurrentPage('receive')}
							>
								<div
									className={cn(
										'py-3 px-2 border-b border-t text-sm font-bold',
										'text-gray-600 border-l-2 border-l-transparent',
										currentPage === 'receive' && 'border-l-[#6E513C]',
									)}
								>
									Receive
								</div>
							</div>
							<div
								className={cn(
									'pl-5',
									currentPage === 'transactions'
										? ' bg-gray-200'
										: 'hover:bg-[#efefef]',
								)}
								onClick={() => setCurrentPage('transactions')}
							>
								<div
									className={cn(
										'py-3 px-2 border-b border-t text-sm font-bold',
										'text-gray-600 border-l-2 border-l-transparent',
										currentPage === 'transactions' && 'border-l-[#6E513C]',
									)}
								>
									Transactions
								</div>
							</div>
							<div
								className={cn(
									'pl-5',
									currentPage === 'settings'
										? ' bg-gray-200'
										: 'hover:bg-[#efefef]',
								)}
								onClick={() => setCurrentPage('settings')}
							>
								<div
									className={cn(
										'py-3 px-2 border-b border-t text-sm font-bold',
										'text-gray-600 border-l-2 border-l-transparent',
										currentPage === 'settings' && 'border-l-[#6E513C]',
									)}
								>
									Settings
								</div>
							</div>
						</div>
						<div className="p-5">
							<img src={`${PROTOCOL}://sidebar-bottom.jpg`} />
						</div>
					</div>
					<div className="flex justify-center items-center flex-1">
						{children || <Outlet />}
					</div>
				</div>
			</div>
		</>
	);
};
