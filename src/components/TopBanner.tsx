export function TopBanner() {
  return (
    <div className="w-full sticky top-0">
      <div className="bg-[rgba(51,102,85,1)] h-8 flex items-center justify-center">
        <div className="flex items-center gap-[22px] px-8">
          <div className="w-[13px] h-[13px] relative">
            <svg viewBox="0 0 13 12" fill="none" className="w-full h-full">
              <path d="M11.8333 1H1V9.125H2.89583V10.4792L5.60417 9.125H11.8333V1Z" stroke="white" strokeWidth="1.08333" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M8.31258 3.43734V3.70817" stroke="white" strokeWidth="1.08333" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M4.52091 3.43734V3.70817" stroke="white" strokeWidth="1.08333" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M8.31258 5.87484C8.31258 5.87484 7.77091 6.95817 6.41675 6.95817C5.06258 6.95817 4.52091 5.87484 4.52091 5.87484" stroke="white" strokeWidth="1.08333" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <p className="text-white text-center w-[500px] text-[10px] font-chinese font-normal font-chinese px-[-100px] py-[0px] mx-[-2px] my-[0px]">
            塔罗牌正在聆听…输入您的问题，或让它们为您提问。
          </p>
        </div>
      </div>
    </div>
  );
}