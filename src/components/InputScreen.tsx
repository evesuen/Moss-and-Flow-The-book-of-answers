import { useState } from "react";
import { Button } from "./ui/button";
import { AnimatedCardDeck } from "./AnimatedCardDeck";
import { imgOthersMagic, imgOthersCardTwo, imgArrowsSend } from "../imports/svg-1ei4v";
import "./InputScreen.css";
interface InputScreenProps {
	onQuestionSubmit: (question: string) => void;
}

const randomQuestions = [
	"这周我应该关注什么？",
	"我如何改善人际关系？",
	"我应该注意什么障碍？",
	"有什么机会正在向我走来？",
	"我如何更好地信任我的直觉？",
	"我现在需要学习什么课程？",
	"我应该放下什么？",
	"我如何找到生活的平衡？",
];

const todayQuestions = [
	"今天为我准备了什么？",
	"今天我应该拥抱什么能量？",
	"今天我需要听到什么信息？",
	"我如何充分利用今天？",
	"今天我应该注意什么？",
];

export function InputScreen({ onQuestionSubmit }: InputScreenProps) {
	const [inputValue, setInputValue] = useState("");

	const handleSubmit = () => {
		if (inputValue.trim()) {
			onQuestionSubmit(inputValue.trim());
		}
	};

	const handleKeyPress = (e: React.KeyboardEvent) => {
		if (e.key === "Enter" && !e.shiftKey) {
			e.preventDefault();
			handleSubmit();
		}
	};

	const insertRandomQuestion = () => {
		const randomQuestion = randomQuestions[Math.floor(Math.random() * randomQuestions.length)];
		setInputValue(randomQuestion);
	};

	const insertTodayQuestion = () => {
		const todayQuestion = todayQuestions[Math.floor(Math.random() * todayQuestions.length)];
		setInputValue(todayQuestion);
	};

	return (
		<div className='flex flex-col items-center gap-6 w-full max-w-4xl h-full justify-center'>
			{/* Card Deck */}
			<div className='relative scale-75'>
				<AnimatedCardDeck />
			</div>

			{/* Input Section */}
			<div className='custom-input bg-card border  rounded-[8px] p-4 w-full max-w-[600px]   shadow-[0px_1px_7.3px_2px_rgba(67,137,114,0.2)]  focus-within:border-[hsla(160,34%,30%,1)] transition-colors'>
				<div className='flex flex-col gap-2 '>
					<textarea
						value={inputValue}
						onChange={(e) => setInputValue(e.target.value)}
						onKeyPress={handleKeyPress}
						placeholder='您在想什么？'
						className="bg-transparent border-none outline-none resize-none h-[50px] placeholder:text-muted-foreground text-[16px] font-chinese font-normal font-chinese"
					/>

					<div className='flex items-center justify-between gap-2'>
						<div className='flex gap-2'>
							<button
								onClick={insertRandomQuestion}
								className='bg-[#336655] text-white hover:bg-[#2d5a49] transition-colors flex items-center gap-1 h-7 px-2 py-1 rounded-[4px]'>
								<img src={imgOthersMagic} className='w-3 h-3' alt='魔法图标' />
								<span className="text-[14px] font-chinese font-extrabold font-chinese">
									随机问题
								</span>
							</button>

							<button
								onClick={insertTodayQuestion}
								className='bg-[#336655] text-white hover:bg-[#2d5a49] transition-colors flex items-center gap-1 h-7 px-2 py-1 rounded-[4px]'>
								<img src={imgOthersCardTwo} className='w-3 h-3' alt='牌卡图标' />
								<span className="text-[14px] font-chinese font-extrabold font-chinese">
									今日牌卡
								</span>
							</button>
						</div>

						<button
							onClick={handleSubmit}
							disabled={!inputValue.trim()}
							className='text-[#336655] hover:text-[#2d5a49] disabled:opacity-50 transition-colors p-1'>
							<img src={imgArrowsSend} className='w-[18px] h-[18px]' alt='发送' />
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
