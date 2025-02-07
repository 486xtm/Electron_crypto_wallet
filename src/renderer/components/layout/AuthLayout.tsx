import React from 'react';
import { Outlet } from 'react-router-dom';
import {
	CloseIcon,
	MaximizeIcon,
	MinimizeIcon,
	MoonIcon,
} from '../images/Icons';
import { __assets } from '@/main/paths';
import { PROTOCOL } from '@/config/config';
import { cn } from '@/lib/utils';
import { useTheme } from '@/renderer/context/theme-context';
import { useGlobalContext } from '@/renderer/context/global-context';

interface AuthLayoutProps {
	children?: React.ReactNode;
}

const Clickable = ({
	children,
	theme = 'light',
	handleClick,
}: {
	children: React.ReactNode;
	theme?: string;
	handleClick?: () => void;
}) => {
	return (
		<div
			className={cn(
				'w-12 h-full flex justify-center items-center cursor-pointer',
				theme === 'light' ? 'hover:bg-gray-200' : 'hover:bg-[#262626]',
			)}
			onClick={() => {
				if (handleClick) handleClick();
			}}
		>
			{children}
		</div>
	);
};

export const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
	const { theme, setTheme } = useTheme();

	const { settings, setSettings } = useGlobalContext();

	return (
		<>
			<div
				className={cn(
					'h-full w-full flex flex-col justify-stretch',
					theme === 'dark' ? 'bg-[#181818]' : 'bg-gray-100',
				)}
			>
				<div
					className={cn(
						'h-13 w-full flex justify-between border-b relative',
						theme === 'light' ? 'border-b-gray-200' : 'border-b-[#2f2f2f]',
					)}
				>
					<div
						className="flex z-10"
						onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
					>
						<Clickable theme={theme}>
							<MoonIcon theme={theme} />
						</Clickable>
					</div>
					<div className="flex justify-center items-center absolute w-full h-full">
						{theme === 'light' && (
							<img
								className="mx-auto"
								src={`${PROTOCOL}://themes/white/titlebarLogo.png`}
								alt="logo"
							/>
						)}
						{theme === 'dark' && (
							<img
								className="mx-auto"
								src={`${PROTOCOL}://logo-dark.png`}
								alt="logo"
							/>
						)}
					</div>
					<div className="flex-1 drag" />
					<div className="flex z-10">
						<Clickable
							theme={theme}
							handleClick={() => window.electron.minimize()}
						>
							<MinimizeIcon />
						</Clickable>
						<Clickable
							theme={theme}
							handleClick={() => window.electron.maximize()}
						>
							<MaximizeIcon />
						</Clickable>
						<Clickable
							theme={theme}
							handleClick={() => window.electron.close()}
						>
							<CloseIcon />
						</Clickable>
					</div>
				</div>
				<div
					className={cn(
						'flex justify-center items-center flex-1',
						theme === 'light' ? 'bg-white' : 'bg-black',
					)}
				>
					{children || <Outlet />}
				</div>
			</div>
		</>
	);
};
