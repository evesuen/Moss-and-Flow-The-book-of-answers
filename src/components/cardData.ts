export interface CardMessage {
  chinese: string;
  english: string;
}

export interface CardType {
  id: number;
  name: string;
  image: string;
  messages: CardMessage[];
}

export interface DrawnCard {
  typeId: number;
  typeName: string;
  image: string;
  message: CardMessage;
}

// 10种卡牌类型，每种包含20个不同的语句
export const cardTypes: CardType[] = [
  {
    id: 1,
    name: "坚持与积累",
    image: "Card_V1.svg",
    messages: [
      { chinese: "苔藓不会急躁，却终能覆盖整片石壁。", english: "Moss never rushes, yet it eventually covers the whole stone wall." },
      { chinese: "小小的水滴，也能雕刻出深深的痕迹。", english: "Even the tiniest drops of water can carve deep marks." },
      { chinese: "别轻视缓慢的脚步，那正是力量的根基。", english: "Do not underestimate slow steps; they are the foundation of strength." },
      { chinese: "积累的过程也许寂静，但终会带来改变。", english: "Accumulation may be silent, but it always brings change." },
      { chinese: "像苔藓一样，保持湿润与耐心，你会成长。", english: "Like moss, stay nourished and patient, and you will grow." },
      { chinese: "每一步都算数，即使你自己未必察觉。", english: "Every step counts, even if you don't notice it yourself." },
      { chinese: "苔藓的绿意，来自长久的坚持。", english: "Moss's greenness comes from long-lasting persistence." },
      { chinese: "微小并不是无用，日子会为你见证。", english: "Small is not useless; time will bear witness." },
      { chinese: "细水长流，终会汇成江河。", english: "Trickles of water will eventually form rivers." },
      { chinese: "每一次努力，都像滴落的水珠，留下痕迹。", english: "Each effort is like a falling drop, leaving its mark." },
      { chinese: "你今天的坚持，是未来的绿意。", english: "Your persistence today becomes tomorrow's green." },
      { chinese: "小小的苔藓，也能让石头焕发生机。", english: "Even tiny moss can bring life to stone." },
      { chinese: "一点一滴的积累，是最可靠的力量。", english: "Bit by bit, accumulation is the most reliable strength." },
      { chinese: "岁月会替你证明，脚步没有白走。", english: "Time will prove that no step was in vain." },
      { chinese: "苔藓覆盖石壁的过程，几乎无人察觉，却真实发生。", english: "The growth of moss on stone goes unnoticed, yet it truly happens." },
      { chinese: "即使慢，也比停下更靠近目标。", english: "Even slowly, it brings you closer than standing still." },
      { chinese: "一片绿意，来自无数天的滋养。", english: "A patch of green comes from countless days of nurture." },
      { chinese: "苔藓不会炫耀，但它的存在令人安心。", english: "Moss never shows off, yet its presence brings comfort." },
      { chinese: "积累是无声的奇迹。", english: "Accumulation is a silent miracle." },
      { chinese: "你走得慢，但你正在走。", english: "You may walk slowly, but you are still moving forward." }
    ]
  },
  {
    id: 2,
    name: "突破与改变",
    image: "Card_V2.svg",
    messages: [
      { chinese: "石头挡住水流，但水总能找到出口。", english: "Stones block the stream, yet water always finds an outlet." },
      { chinese: "你看似受困，其实正要发现新的路径。", english: "You may seem trapped, but you are about to discover a new path." },
      { chinese: "改变不一定轰烈，也可以像水一样悄然渗透。", english: "Change doesn't need to be dramatic; it can seep quietly like water." },
      { chinese: "曲折的水道，造就了更多的风景。", english: "Winding rivers create richer scenery." },
      { chinese: "当旧路被堵塞，便是新方向的召唤。", english: "When the old road is blocked, it signals a new direction." },
      { chinese: "水能塑形，因为它愿意改变。", english: "Water shapes itself because it is willing to change." },
      { chinese: "你不必强行突破，也可以绕道而行。", english: "You don't have to force a breakthrough; you can flow around instead." },
      { chinese: "石头只是提醒你，该换个方式。", english: "The stone only reminds you: it's time to try another way." },
      { chinese: "水滴穿石，不是力量，而是坚持方向。", english: "A drop pierces stone not by force, but by persistent direction." },
      { chinese: "改变本身，就是答案。", english: "Change itself is the answer." },
      { chinese: "你并没有受困，只是还没发现出口。", english: "You are not trapped; you just haven't found the exit yet." },
      { chinese: "障碍存在，是为了让你看到别样的可能。", english: "Obstacles exist to show you new possibilities." },
      { chinese: "旧的河道终会干涸，新的河道会被开辟。", english: "Old riverbeds dry up; new ones are carved out." },
      { chinese: "拐弯并不是失败，而是另一种前行。", english: "Turning doesn't mean failure; it's just another way forward." },
      { chinese: "改变带来的不是失去，而是新的可能。", english: "Change doesn't mean loss; it means new possibilities." },
      { chinese: "水能因势而行，你也可以。", english: "Water flows with circumstances, and so can you." },
      { chinese: "被石头阻挡的水，往往奔向更宽的河道。", english: "Water blocked by stones often finds its way to wider rivers." },
      { chinese: "不要怕绕路，它可能更接近答案。", english: "Don't fear detours; they may lead you closer to the answer." },
      { chinese: "水流在撞击中找到力量，你也一样。", english: "Water gains strength in its collisions, and so do you." },
      { chinese: "改变你的角度，风景就不同。", english: "Change your angle, and the scenery changes too." }
    ]
  },
  {
    id: 3,
    name: "静心与觉察",
    image: "Card_V3.svg",
    messages: [
      { chinese: "当水静止时，才能映照出完整的天空。", english: "Only when the water is still can it reflect the whole sky." },
      { chinese: "答案常常藏在安静的时刻。", english: "Answers often hide in moments of quiet." },
      { chinese: "学会倾听，你会发现心底的回响。", english: "Learn to listen, and you will hear the echoes within." },
      { chinese: "混浊的水需要时间沉淀，心也是如此。", english: "Muddy water needs time to settle, and so does the heart." },
      { chinese: "暂停不是后退，而是让自己更清澈。", english: "Pause is not retreat; it is clarity returning." },
      { chinese: "安静能放大你忽视的细节。", english: "Silence amplifies the details you overlook." },
      { chinese: "你并不缺少答案，只是太吵听不见。", english: "You do not lack answers, only the quiet to hear them." },
      { chinese: "泉水在地下默默流淌，不急着出现。", english: "The spring flows underground silently, not rushing to surface." },
      { chinese: "有时候，什么都不做，就是答案。", english: "Sometimes, doing nothing is the answer." },
      { chinese: "安静下来，你会看见新的线索。", english: "Quiet yourself, and new clues will appear." },
      { chinese: "静水流深，你的内心也是如此。", english: "Still waters run deep, and so does your inner self." },
      { chinese: "喧嚣退去时，智慧才浮现。", english: "When noise fades, wisdom emerges." },
      { chinese: "当你安静，世界会为你说话。", english: "When you are quiet, the world speaks to you." },
      { chinese: "澄澈需要时间，不要催促自己。", english: "Clarity takes time; do not rush yourself." },
      { chinese: "在停顿中，你会找回节奏。", english: "In pauses, you rediscover rhythm." },
      { chinese: "每一次呼吸，都是一次回归。", english: "Every breath is a return." },
      { chinese: "水在夜里依然流淌，心也是。", english: "Water flows even at night, and so does the heart." },
      { chinese: "你不需要急着回应，先让心沉淀。", english: "You don't need to respond quickly; let your heart settle first." },
      { chinese: "当你放慢，灵感会靠近你。", english: "When you slow down, inspiration comes closer." },
      { chinese: "平静中，藏着你真正的力量。", english: "In stillness lies your true strength." }
    ]
  },
  {
    id: 4,
    name: "勇气与行动",
    image: "Card_V4.svg",
    messages: [
      { chinese: "泉水不会停滞，它总是奔向前方。", english: "The spring never stands still; it always flows forward." },
      { chinese: "不走出去，你永远不会知道溪流的尽头。", english: "If you never step out, you'll never know where the stream ends." },
      { chinese: "水即使跌落，也会汇聚成更壮阔的流。", english: "Even when water falls, it gathers into a greater flow." },
      { chinese: "勇敢迈出一步，就像水流跃下瀑布。", english: "Take a brave step, like water leaping off a waterfall." },
      { chinese: "行动本身，就是答案。", english: "Action itself is the answer." },
      { chinese: "水不会等风景准备好，它先流动。", english: "Water doesn't wait for the scenery to be ready; it flows first." },
      { chinese: "你不必准备完全，再出发。", english: "You don't need to be fully ready to set out." },
      { chinese: "勇气不是没有恐惧，而是仍然前行。", english: "Courage is not the absence of fear, but moving forward despite it." },
      { chinese: "水流从不问前方是什么，它只走。", english: "The stream never asks what lies ahead; it just goes." },
      { chinese: "犹豫无法带来力量，行动可以。", english: "Hesitation brings no strength, but action does." },
      { chinese: "你不需要巨大的步伐，只要迈出第一步。", english: "You don't need a giant leap, only the first step." },
      { chinese: "就像泉水流淌，你也在向前。", english: "Like the spring that flows, you too are moving forward." },
      { chinese: "等待不会改变局势，行动会。", english: "Waiting won't change the situation; action will." },
      { chinese: "水能冲破岩石，因为它不曾停下。", english: "Water breaks rocks because it never stops." },
      { chinese: "勇敢，就是选择继续流动。", english: "To be brave is to choose to keep flowing." },
      { chinese: "你能做到的，比你以为的更多。", english: "You are capable of more than you think." },
      { chinese: "不要怕跌落，跌落只是另一种前进。", english: "Do not fear the fall; it is just another way of moving forward." },
      { chinese: "行动的路上，自会遇见机会。", english: "On the road of action, opportunities will appear." },
      { chinese: "一步就够，剩下的水会帮你带走。", english: "One step is enough; the water will carry you the rest of the way." },
      { chinese: "勇气会在路上出现，而不是出发前。", english: "Courage appears along the journey, not before it begins." }
    ]
  },
  {
    id: 5,
    name: "希望与信任",
    image: "Card_V5.svg",
    messages: [
      { chinese: "苔藓在阴影中生长，光明终会到来。", english: "Moss grows in the shadows, but light will always arrive." },
      { chinese: "即使看不见，根也在暗处扎得更深。", english: "Even when unseen, roots grow deeper in the dark." },
      { chinese: "自然的秩序从不出错，你也可以信任过程。", english: "Nature's order never fails; you too can trust the process." },
      { chinese: "黑夜漫长，但泉水依然流淌。", english: "The night may be long, but the spring keeps flowing." },
      { chinese: "未来未必清晰，但它一直在等你。", english: "The future may not be clear, but it is always waiting for you." },
      { chinese: "水从不怀疑自己会抵达大海。", english: "Water never doubts that it will reach the sea." },
      { chinese: "苔藓相信阴影，也相信光。", english: "Moss trusts both the shade and the light." },
      { chinese: "你需要的，只是信任时间。", english: "All you need is to trust time." },
      { chinese: "希望不是虚无，它在悄悄生长。", english: "Hope is not empty; it grows quietly." },
      { chinese: "源头虽远，但水终会抵达。", english: "Though the source is far, the water will reach its destination." },
      { chinese: "你现在的付出，会在未来回应你。", english: "What you give now will echo back to you in the future." },
      { chinese: "大地不会抛弃任何一株草。", english: "The earth never abandons a single blade of grass." },
      { chinese: "每一个冬天，背后都准备着春天。", english: "Behind every winter, spring is preparing to arrive." },
      { chinese: "泉水的耐心，就是信任自己的节奏。", english: "The patience of a spring is its trust in its own rhythm." },
      { chinese: "希望不会喊叫，它静静地存在。", english: "Hope does not shout; it quietly exists." },
      { chinese: "相信自己，就像水相信它会找到出口。", english: "Believe in yourself, just as water believes it will find a way out." },
      { chinese: "一切都在发生，只是你未必看见。", english: "Everything is happening, even if you cannot see it." },
      { chinese: "信任不是盲目，而是内心的力量。", english: "Trust is not blind; it is the strength within." },
      { chinese: "光会来，不必追。", english: "Light will come; there is no need to chase it." },
      { chinese: "水总会找到大海，你也会。", english: "Water always finds the ocean, and so will you." }
    ]
  },
  {
    id: 6,
    name: "放下与释怀",
    image: "Card_V6.svg",
    messages: [
      { chinese: "水会带走沉淀，你也可以放下过去。", english: "Water carries away the sediment; you too can let go of the past." },
      { chinese: "苔藓覆盖旧伤口，大地依然新生。", english: "Moss covers old scars, and the earth still renews itself." },
      { chinese: "放手，并不是失去，而是让空间变得清爽。", english: "Letting go is not losing; it is making room for clarity." },
      { chinese: "流水不会停留在昨日的痕迹。", english: "The stream does not linger on yesterday's marks." },
      { chinese: "释怀，让你轻盈如风。", english: "Release makes you as light as the wind." },
      { chinese: "水滴从指缝滑落，因为它从不执着。", english: "Drops slip through fingers because they never cling." },
      { chinese: "放下不属于你的，才能拥抱属于你的。", english: "Only by releasing what is not yours can you embrace what is." },
      { chinese: "一片落叶，不会责怪风的离开。", english: "A fallen leaf does not blame the departing wind." },
      { chinese: "你无法带走所有，但可以选择轻盈。", english: "You cannot carry everything, but you can choose lightness." },
      { chinese: "放手，才有余地迎接新的河流。", english: "Letting go makes space for a new stream to flow in." },
      { chinese: "水流前进，不会回收昨日的波浪。", english: "The current moves on and never reclaims yesterday's waves." },
      { chinese: "不必抓住所有，手空了才能接住未来。", english: "You don't need to hold onto everything; empty hands catch the future." },
      { chinese: "就像苔藓遮盖旧石，你的心也会重生。", english: "Just as moss covers old stone, your heart will be reborn." },
      { chinese: "有些答案，不需要寻找，只需要放下。", english: "Some answers don't need to be found; they need to be released." },
      { chinese: "一滴水落下，才成为更大的海。", english: "Only when a drop falls can it become part of the greater sea." },
      { chinese: "放下过去的枝叶，新的芽才会生长。", english: "When old leaves are released, new buds can grow." },
      { chinese: "释怀不是忘记，而是不再被困住。", english: "Release is not forgetting; it is no longer being trapped." },
      { chinese: "水流不问它失去了多少，只管继续。", english: "The water does not ask how much it has lost; it just keeps going." },
      { chinese: "空白，也是一种答案。", english: "Emptiness is also an answer." },
      { chinese: "当你放开手，风会带你去新的地方。", english: "When you open your hand, the wind carries you somewhere new." }
    ]
  },
  {
    id: 7,
    name: "连结与关系",
    image: "Card_V7.svg",
    messages: [
      { chinese: "小溪汇聚成河，正因彼此相遇。", english: "Streams become rivers because they meet each other." },
      { chinese: "苔藓依附岩石，不是依赖，而是互补。", english: "Moss clings to stone not out of dependence, but as complement." },
      { chinese: "人与人之间，也需要彼此的滋养。", english: "People, too, need nourishment from one another." },
      { chinese: "水滴汇聚，才能闪耀出更大的波光。", english: "Only when droplets gather can bigger ripples shine." },
      { chinese: "温柔的连结，会像泉水一样润泽心田。", english: "Gentle connections refresh the heart like a spring." },
      { chinese: "没有一条溪流是孤独的，它总会遇见别的水。", english: "No stream is truly alone; it will always meet other waters." },
      { chinese: "关系并不是束缚，而是共同流动。", english: "Relationships are not chains but currents flowing together." },
      { chinese: "就像树根在地下交织，你的力量也来自他人。", english: "Like roots intertwining underground, your strength comes from others." },
      { chinese: "水滴与水滴相遇，就成了新的波浪。", english: "When drops meet, they form new waves." },
      { chinese: "真正的关系，是彼此成就。", english: "True relationships are about shaping each other." },
      { chinese: "一片叶子无法成林，但无数叶子能创造森林。", english: "A single leaf cannot make a forest, but many can." },
      { chinese: "你不是孤岛，你是群山中的一棵树。", english: "You are not an island; you are a tree among mountains." },
      { chinese: "当你伸出手，另一只手会回应你。", english: "When you reach out, another hand will respond." },
      { chinese: "连接像水，它会找到通道。", english: "Connection is like water; it finds its channels." },
      { chinese: "关系不是拥有，而是流动。", english: "Relationships are not possession, but flow." },
      { chinese: "就像风经过水面，总会留下涟漪。", english: "Like wind across water, every touch leaves ripples." },
      { chinese: "有时候，你就是别人心里的那片苔藓。", english: "Sometimes, you are the moss in someone else's heart." },
      { chinese: "关系最美的地方，在于相互映照。", english: "The beauty of relationships lies in reflection." },
      { chinese: "没有连结，水也无法成河。", english: "Without connection, water cannot become a river." },
      { chinese: "爱是最温柔的流动。", english: "Love is the gentlest current." }
    ]
  },
  {
    id: 8,
    name: "自我与成长",
    image: "Card_V8.svg",
    messages: [
      { chinese: "种子在土壤里沉睡，却在等待破土。", english: "A seed sleeps in the soil, yet waits to break through." },
      { chinese: "根扎得深，树才会高。", english: "The deeper the roots, the taller the tree." },
      { chinese: "成长并不显眼，但每一天都在发生。", english: "Growth is not always visible, but it happens every day." },
      { chinese: "泉水滋养自己，才有力量滋养他人。", english: "The spring nourishes itself before it nourishes others." },
      { chinese: "接纳现在的你，这是新的开始。", english: "Accept who you are now; it is the start of something new." },
      { chinese: "树不会急着长成森林，它先专注于枝叶。", english: "A tree does not rush to become a forest; it first tends to its branches and leaves." },
      { chinese: "成长的过程，常常安静而缓慢。", english: "The process of growth is often quiet and slow." },
      { chinese: "苔藓不需要掌声，它依然蔓延。", english: "Moss spreads without applause, yet it grows all the same." },
      { chinese: "你看不见的努力，正在塑造新的自己。", english: "The efforts you cannot see are shaping a new you." },
      { chinese: "每一条裂缝，都是成长的入口。", english: "Every crack is an entryway for growth." },
      { chinese: "成长不是放弃自己，而是成为自己。", english: "Growth is not giving up on yourself, but becoming yourself." },
      { chinese: "树年轮不会撒谎，你的经历也不会。", english: "Tree rings never lie, and neither do your experiences." },
      { chinese: "一滴水的路程，也在靠近大海。", english: "Even a drop of water is on its way to the ocean." },
      { chinese: "你走过的每一步，都会留下成长的印记。", english: "Every step you take leaves a mark of growth." },
      { chinese: "成长不需要喧哗，它是悄悄发生的奇迹。", english: "Growth does not need noise; it is a quiet miracle." },
      { chinese: "苔藓在石缝里成长，你也能在困境里茁壮。", english: "Moss grows in stone crevices; you too can thrive in hardship." },
      { chinese: "自我成长不是直线，而是曲折的河流。", english: "Self-growth is not a straight line but a winding river." },
      { chinese: "成长不在于速度，而在于扎实。", english: "Growth is not about speed, but about depth." },
      { chinese: "你每一次回望，都会看见不同的自己。", english: "Each time you look back, you will see a different self." },
      { chinese: "成长没有终点，只有新的开始。", english: "Growth has no end, only new beginnings." }
    ]
  },
  {
    id: 9,
    name: "困境与突破口",
    image: "Card_V9.svg",
    messages: [
      { chinese: "苔藓能在石缝中找到生机。", english: "Moss finds life even in stone cracks." },
      { chinese: "最暗的角落，也可能藏着清泉。", english: "Even the darkest corner may hide a spring." },
      { chinese: "困境不是牢笼，而是未来的契机。", english: "Struggles are not cages but chances for the future." },
      { chinese: "裂缝让光照进来。", english: "Cracks let the light in." },
      { chinese: "障碍是转折，也是转机。", english: "Obstacles are both detours and opportunities." },
      { chinese: "石头的重量，让水学会更灵活地流动。", english: "The weight of stone teaches water to flow more flexibly." },
      { chinese: "困境让你发现自己未曾用过的力量。", english: "Struggles help you discover strength you never knew you had." },
      { chinese: "苔藓并不惧怕阴影，它依然扩散。", english: "Moss does not fear the shadows; it spreads nonetheless." },
      { chinese: "每一次阻挡，都是重新塑形的机会。", english: "Every blockage is a chance to reshape." },
      { chinese: "水滴冲击石头，不是失败，而是坚持。", english: "A drop hitting stone is not failure, but persistence." },
      { chinese: "困境让你慢下来，但不会让你停下。", english: "Struggles may slow you down, but they cannot stop you." },
      { chinese: "裂口，就是新的起点。", english: "A crack is the start of something new." },
      { chinese: "石头不会永远阻挡水流。", english: "Stones cannot block the stream forever." },
      { chinese: "苔藓的绿意提醒你：困境里依然有生命。", english: "Moss's green reminds you: life still exists in struggle." },
      { chinese: "困境考验耐心，也孕育力量。", english: "Struggles test patience but nurture strength." },
      { chinese: "即使在黑暗里，水也在寻找出口。", english: "Even in darkness, water seeks an outlet." },
      { chinese: "你并没有被困住，只是还在突破的路上。", english: "You are not trapped; you are still breaking through." },
      { chinese: "每一条裂缝，都可能是光的入口。", english: "Every crack may be a doorway for light." },
      { chinese: "被困住的感觉，是突破的前奏。", english: "The feeling of being stuck is the prelude to breakthrough." },
      { chinese: "困境的尽头，就是你新的开始。", english: "At the end of struggle lies your new beginning." }
    ]
  },
  {
    id: 10,
    name: "未知与旅程",
    image: "Card_V10.svg",
    messages: [
      { chinese: "溪流终将汇入大海。", english: "The stream will eventually reach the sea." },
      { chinese: "你不需要立刻知道终点，只需走一步。", english: "You don't need to know the destination now; just take one step." },
      { chinese: "旅程的意义，在于沿途的风景。", english: "The meaning of the journey lies in the scenery along the way." },
      { chinese: "河流不问归途，它只管前行。", english: "The river does not ask where it ends; it simply flows on." },
      { chinese: "未知不是恐惧，而是邀请。", english: "The unknown is not fear, but an invitation." },
      { chinese: "星辰的方向，指引远方。", english: "The stars point the way to the distance." },
      { chinese: "你在走的路，正塑造着你。", english: "The path you walk is shaping you." },
      { chinese: "旅程本身，就是答案。", english: "The journey itself is the answer." },
      { chinese: "不必害怕迷路，迷路也是风景。", english: "Don't fear getting lost; being lost is also scenery." },
      { chinese: "未知让河流保持流动。", english: "The unknown keeps the river flowing." },
      { chinese: "远方并不遥远，它在你脚下延伸。", english: "The distance is not far; it extends beneath your feet." },
      { chinese: "每一步都可能是新的开始。", english: "Every step may be a new beginning." },
      { chinese: "旅程不会重复，它属于你自己。", english: "The journey never repeats; it belongs to you alone." },
      { chinese: "未知，是最温柔的考验。", english: "The unknown is the gentlest test." },
      { chinese: "水流弯曲，是为了遇见更多的可能。", english: "The river bends to meet more possibilities." },
      { chinese: "即使没有地图，你也能找到方向。", english: "Even without a map, you can find your way." },
      { chinese: "路途中的星光，会在你需要时出现。", english: "Starlight on the road appears when you need it most." },
      { chinese: "远方的意义，在于让你前行。", english: "The meaning of the distance is to keep you moving." },
      { chinese: "未知不会阻止你，而是推动你。", english: "The unknown does not stop you; it propels you forward." },
      { chinese: "每一段旅程，都会让你成为新的自己。", english: "Every journey transforms you into a new self." }
    ]
  }
];

// 抽牌逻辑：从10种卡牌类型中随机选择3种不同的类型，每种类型随机选择一个语句
export function drawThreeCards(): DrawnCard[] {
  // 随机选择3种不同的卡牌类型
  const shuffledTypes = [...cardTypes].sort(() => Math.random() - 0.5);
  const selectedTypes = shuffledTypes.slice(0, 3);
  
  // 为每种选中的类型随机选择一个语句
  return selectedTypes.map(type => {
    const randomMessageIndex = Math.floor(Math.random() * type.messages.length);
    return {
      typeId: type.id,
      typeName: type.name,
      image: type.image,
      message: type.messages[randomMessageIndex]
    };
  });
}
