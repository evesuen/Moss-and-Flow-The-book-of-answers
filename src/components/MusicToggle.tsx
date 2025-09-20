import React, { useRef, useEffect } from "react";
import { imgIndicator, imgIndicator1, imgHandle } from "../imports/svg-g7mfo";
import AiQing from "../assets/audio/river-stream-moderate-flow-2-24370.mp3";

interface MusicToggleProps {
	enabled: boolean;
	onToggle: (enabled: boolean) => void;
}

function Indicator() {
	return (
		<div className='absolute h-3 left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] w-0' data-name='Indicator'>
			<div className='absolute bottom-0 left-0 right-[-2px] top-0'>
				<img className='block max-w-none size-full' src={imgIndicator} />
			</div>
		</div>
	);
}

function IndicatorOn({ isActive }: { isActive: boolean }) {
	return (
		<div
			className={`relative shrink-0 size-3 transition-opacity duration-300 ${
				isActive ? "opacity-100" : "opacity-0"
			}`}
			data-name='Indicator on'>
			<Indicator />
		</div>
	);
}

function Indicator1() {
	return (
		<div className='absolute left-1/2 size-3 top-1/2 translate-x-[-165%] translate-y-[-50%]' data-name='Indicator'>
			<img className='block max-w-none size-full' src={imgIndicator1} />
		</div>
	);
}

function IndicatorOff({ isActive }: { isActive: boolean }) {
	return (
		<div
			className={`relative shrink-0 size-3 transition-opacity duration-300 ${
				isActive ? "opacity-100" : "opacity-0"
			}`}
			data-name='Indicator off'>
			<Indicator1 />
		</div>
	);
}

function Background({ enabled }: { enabled: boolean }) {
	return (
		<div
			className={`absolute box-border content-stretch flex h-10 items-center justify-between left-0 overflow-clip pl-4 pr-0 py-0 rounded-[99px] top-0 w-20 transition-colors duration-300 ${
				enabled ? "bg-[#5fb095]" : "bg-[#e5e5e6]"
			}`}
			data-name='_Background'>
			<IndicatorOn isActive={enabled} />
			<IndicatorOff isActive={!enabled} />
			<div className='absolute inset-0 pointer-events-none shadow-[0px_1px_3px_0px_inset_rgba(0,0,0,0.2)]' />
		</div>
	);
}

function Handle({ enabled }: { enabled: boolean }) {
	return (
		<div
			className={`relative shrink-0 size-9 transition-transform duration-300 ${
				enabled ? "translate-x-[2.25rem]" : "translate-x-0" //如何开关打开就往右移2.75
			}`}
			data-name='_Handle'>
			<div className='absolute inset-[-2.78%_-19.44%_-66.67%_-19.44%]'>
				<img className='block max-w-none size-full' src={imgHandle} />
			</div>
		</div>
	);
}

export function MusicToggle({ enabled, onToggle }: MusicToggleProps) {
	const audioRef = useRef<HTMLAudioElement | null>(null);

	// 初始化 audio 对象
	useEffect(() => {
		if (!audioRef.current) {
			audioRef.current = new Audio(AiQing);
			audioRef.current.loop = true;
			audioRef.current.volume = 0.5; // 设置音量，避免太大声
			audioRef.current.preload = 'auto';
		}
	}, []);

	// 添加 useEffect 来处理 enabled 状态变化
	useEffect(() => {
		if (audioRef.current) {
			if (enabled) {
				audioRef.current.play().catch(error => {
					console.log('音乐播放失败:', error);
					// 浏览器可能阻止了自动播放
				});
			} else {
				audioRef.current.pause();
				audioRef.current.currentTime = 0;
			}
		}
	}, [enabled]);

	const handleClick = () => {
		onToggle(!enabled);
	};

	return (
		<button
			onClick={handleClick}
			onMouseEnter={() => {
				console.log("播放音效");
			}}
			className='relative w-20 h-10 cursor-pointer transition-all duration-300 hover:scale-105'
			data-name='Toggle - V1'>
			<div className='flex flex-row items-center relative size-full'>
				<div className='box-border content-stretch flex gap-2.5 items-center justify-start px-[5px] py-px relative size-full'>
					<Background enabled={enabled} />
					<Handle enabled={enabled} />
				</div>
			</div>
		</button>
	);
}
