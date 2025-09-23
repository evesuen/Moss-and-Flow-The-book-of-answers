import { useState } from "react";
import { motion } from "motion/react";
import { Button } from "./ui/button";
import { AnimatedCardDeck } from "./AnimatedCardDeck";
import { imgOthersMagic, imgOthersCardTwo, imgArrowsSend } from "../imports/svg-1ei4v";
import "./InputScreen.css";

interface InputScreenProps {
	onQuestionSubmit: (question: string) => void;
}

const randomQuestions = [
	// 🌿 关系 (Relationships)
	"我和他/她的关系，正在走向哪里？",
	"我该不该继续坚持这段关系？",
	"在关系里，我忽略了什么？",
	"他/她真正想表达的是什么？",
	"我该如何处理不确定的关系？",
	"我们之间的连结，还会继续吗？",
	"怎样的关系，才算真正适合我？",
	"我和身边的人，最需要调整的是什么？",
	"这段关系想教会我什么？",
	"我在关系里最需要学习的是什么？",
  
	// 🌱 自我状态 (Self & Awareness)
	"我现在最需要听到的提醒是什么？",
	"此刻的我，真正渴望的是什么？",
	"我该如何面对自己的不安？",
	"我忽略了自己哪一部分？",
	"我该如何更好地爱自己？",
	"什么能让我感觉更平静？",
	"我现在需要坚持，还是需要放下？",
	"我该如何找到属于自己的节奏？",
	"我真正的力量藏在哪里？",
	"接下来，我最需要相信什么？",
  ];
  
  

  const todayQuestions = [
	"今日的关键讯息是什么？",
	"今天的幸运来自哪里？",
	"今天我该用什么态度去迎接生活？",
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
		<div className='flex flex-col items-center gap-6 w-full max-w-4xl h-full justify-start pt-4'>
			{/* Card Deck */}
			<div className='relative scale-75'>
				<AnimatedCardDeck />
			</div>

			{/* Input Section - 从底部向上进入 */}
			<motion.div 
				className='custom-input bg-card border rounded-[8px] p-4 w-full max-w-[600px] shadow-[0px_1px_7.3px_2px_rgba(67,137,114,0.2)] focus-within:border-[hsla(160,34%,30%,1)] transition-colors'
				initial={{ 
					y: 100,    // 从底部100px开始
					opacity: 0 // 初始透明
				}}
				animate={{ 
					y: 0,      // 移动到最终位置
					opacity: 1 // 完全不透明
				}}
				transition={{ 
					duration: 0.8,           // 动画持续时间
					ease: "easeIn",          // ease-in效果
					delay: 1.0               // 延迟1秒开始（等待卡牌动画完成）
				}}
			>
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
								className='bg-[#336655] text-white hover:bg-[#2d5a49] transition-colors flex items-center gap-2 h-7 px-2 py-1 rounded-[4px]'>
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
			</motion.div>
		</div>
	);
}