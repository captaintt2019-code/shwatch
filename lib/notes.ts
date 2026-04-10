import { type Locale } from "@/lib/i18n";

export const noteSlugs = [
  "automatic-movement",
  "water-resistance",
  "service-interval",
  "strap-care",
  "magnetism",
  "crown-operation",
] as const;

export type NoteSlug = (typeof noteSlugs)[number];

export function isNoteSlug(value: string): value is NoteSlug {
  return noteSlugs.includes(value as NoteSlug);
}

type NoteArticle = {
  slug: NoteSlug;
  title: string;
  excerpt: string;
  imageSrc: string;
  imageAlt: string;
  intro: string;
  sections: { title: string; paragraphs: string[] }[];
  highlights: string[];
};

type NoteLibrary = {
  pageEyebrow: string;
  pageTitle: string;
  pageDescription: string;
  backHome: string;
  browseAll: string;
  keyPointsLabel: string;
  articles: NoteArticle[];
};

export const notesContent: Record<Locale, NoteLibrary> = {
  "zh-CN": {
    pageEyebrow: "Editorial Notes",
    pageTitle: "保养知识专栏",
    pageDescription: "围绕佩戴习惯、环境影响与保养周期，整理更适合高端腕表用户阅读的实用建议。",
    backHome: "返回首页",
    browseAll: "查看全部文章",
    keyPointsLabel: "重点速览",
    articles: [
      {
        slug: "automatic-movement",
        title: "自动机芯如何保持稳定走时",
        excerpt: "了解上链效率、佩戴频率与定期保养之间的关系，避免因长期静置影响机芯状态。",
        imageSrc: "/notes/automatic-movement.svg",
        imageAlt: "自动机械腕表机芯与摆陀示意图",
        intro: "自动机芯依靠摆陀运动持续补充动力。只要佩戴节奏、存放方式与保养频率匹配得当，大多数高端自动表都能维持较稳定的走时表现。",
        sections: [
          {
            title: "先看动力是否真的充足",
            paragraphs: [
              "很多人以为腕表误差变大就是机芯老化，其实更常见的原因是日常活动量不足，导致自动上链效率不够。长期久坐、单日佩戴时长过短，都会让动力储备处在偏低状态。",
              "如果同一只表在周末外出时走时稳定，工作日静置后误差明显增加，就需要先从佩戴习惯判断，而不是立刻认定要大修。",
            ],
          },
          {
            title: "静置、摆放和手动补链都很关键",
            paragraphs: [
              "晚上摘表后，尽量放在平稳、干燥、远离磁场的位置，减少长期受潮与受磁风险。对于带停秒功能的腕表，重新佩戴前补足几圈手动上链，往往能让机芯更快回到稳定工作区间。",
              "如果一周里有多天不佩戴，也可以根据型号考虑是否需要上链器，但前提是先确认品牌建议与机芯结构，不要盲目长期高速旋转。",
            ],
          },
          {
            title: "什么时候该做检测",
            paragraphs: [
              "当腕表出现动力明显下降、满链后仍频繁停走、日误差持续放大，或者上链手感变涩时，就建议到店做一次摆幅、偏振与走时检测。",
              "检测的目的不是马上拆洗，而是先判断问题来自润滑、受磁、动力不足还是零件磨损，再决定后续处理方案。",
            ],
          },
        ],
        highlights: [
          "活动量不足会直接影响自动上链效率。",
          "长时间静置前后，建议补充少量手动上链。",
          "出现持续性停走或误差放大时，先做检测再决定维修。",
        ],
      },
      {
        slug: "water-resistance",
        title: "防水等级并不等于长期涉水",
        excerpt: "解析日常洗手、淋雨、泳池环境与热水蒸汽对腕表密封结构的实际影响。",
        imageSrc: "/notes/water-resistance.svg",
        imageAlt: "腕表防水测试与水滴环境示意图",
        intro: "腕表上的防水标识更多代表实验条件下的压力等级，不等于任何场景都可以放心涉水。真正影响防水表现的，往往是密封件状态、温差和使用环境。",
        sections: [
          {
            title: "防水标识只能说明测试标准",
            paragraphs: [
              "30 米、50 米或 100 米这样的标识，通常是静态压力测试结果，并不是建议佩戴者直接按字面深度使用。洗澡、桑拿、温泉这类高温高湿环境，反而更容易加速胶圈老化。",
              "如果表冠没有旋紧、按把在潮湿状态下被误触，哪怕平时具备一定防水能力，也可能给水汽留下进入通道。",
            ],
          },
          {
            title: "泳池、海水与热蒸汽风险更高",
            paragraphs: [
              "泳池中的氯和海水中的盐分，都会对密封件、表壳缝隙和金属外观产生更强影响。即使短时间接触后没有立刻进水，也可能为后续老化埋下隐患。",
              "热蒸汽的问题更隐蔽。腕表从冷气环境进入高温热雾空间时，内部外部温差变化会加大密封系统压力，这也是很多用户忽视的高风险场景。",
            ],
          },
          {
            title: "如何把进水风险降到最低",
            paragraphs: [
              "每次涉水前先确认表冠与按把状态，日常佩戴中避免在水下调校时间或日期。若腕表已经多年未做保养，即使外观正常，也建议重新做一次防水测试。",
              "一旦镜面出现雾气、刻度边缘发灰，或者走时突然异常，应立即停止佩戴并尽快送检，越早处理越能降低机芯受损范围。",
            ],
          },
        ],
        highlights: [
          "防水等级不是所有涉水场景的通行证。",
          "泳池、海水和热蒸汽对密封结构更不友好。",
          "镜面起雾或疑似进水时，应第一时间停戴送检。",
        ],
      },
      {
        slug: "service-interval",
        title: "多久做一次全面保养更合适",
        excerpt: "从品牌建议、使用强度与环境差异出发，判断您的腕表是否进入保养周期。",
        imageSrc: "/notes/service-interval.svg",
        imageAlt: "腕表保养周期与工作台工具示意图",
        intro: "全面保养并不是固定几年一次的机械动作，而是需要结合品牌建议、佩戴强度、环境温湿度与腕表当前状态来判断。合适的周期，重点在于既不过度拆洗，也不拖到故障扩大。",
        sections: [
          {
            title: "先参考品牌，再结合实际佩戴强度",
            paragraphs: [
              "多数高端品牌会给出一个建议保养周期，但这只是基础参考。每天长时间佩戴、经常出入高温环境，或经常受到震动冲击的腕表，往往会比低频佩戴腕表更早进入保养窗口。",
              "如果同一只表只是偶尔出席场合时佩戴，实际润滑损耗与磨损节奏就会和日常通勤佩戴完全不同。",
            ],
          },
          {
            title: "这些征兆比年限更值得关注",
            paragraphs: [
              "除了年份，误差逐步放大、动力储备缩短、自动上链效率下降、日历跳转不够利落，都是进入保养周期的重要信号。",
              "外观磕碰后看似还能正常运行，也建议尽快做检测，因为轻微偏轴、摆轮状态变化或防水失效，往往不会在第一时间完全暴露。",
            ],
          },
          {
            title: "到店前可以准备什么信息",
            paragraphs: [
              "如果能提前提供品牌型号、上次保养时间、最近的异常表现和佩戴环境，维修顾问通常能更快判断问题优先级，并安排合适的检测流程。",
              "对于复杂功能腕表，先做检测再给出保养建议，比直接做统一拆洗更稳妥，也能避免不必要的工序。",
            ],
          },
        ],
        highlights: [
          "保养周期要结合品牌建议和真实使用强度判断。",
          "误差、动力和跳历表现，往往比单纯年份更有参考价值。",
          "到店前整理好佩戴与保养记录，能提升检测效率。",
        ],
      },
      {
        slug: "strap-care",
        title: "表带材质与日常护理要点",
        excerpt: "皮带、橡胶与金属链节各有养护方式，了解正确的清洁与存放方法延长使用寿命。",
        imageSrc: "/notes/strap-care.svg",
        imageAlt: "不同材质表带的清洁与护理示意图",
        intro: "表带是腕表与皮肤接触最频繁的部分，也是最容易被忽视的保养对象。不同材质的表带有截然不同的护理需求，选对方式才能延缓老化、维持外观。",
        sections: [
          {
            title: "皮质表带：避湿是第一原则",
            paragraphs: [
              "真皮表带遇水后容易变形、起皱，长期汗液浸润更会加速皮革内部纤维断裂。日常佩戴后建议用干布轻拭表带内侧，避免直接接触水源。",
              "存放时不要将皮带表叠放，也不要长期暴露在阳光直射或高温环境中。定期使用专用皮革护理剂，能有效延缓表面龟裂与褪色。",
            ],
          },
          {
            title: "橡胶与氟橡胶带：耐用但需定期清洁",
            paragraphs: [
              "橡胶表带耐水性好，但汗液与油脂积累会让表带逐渐变黏或变硬。建议每隔一段时间用清水与软布擦洗，避免使用酒精或有机溶剂，以免加速老化。",
              "氟橡胶（FKM）材质耐化学腐蚀性更强，但同样应避免接触防晒霜、香水等含化学成分的物质，防止表面变色。",
            ],
          },
          {
            title: "金属链节：清洁细节决定持久光泽",
            paragraphs: [
              "金属链节缝隙容易积累污垢与汗液，建议定期用软毛牙刷蘸取温水清洁，避免使用研磨性清洁剂破坏抛光面。",
              "调节链节长度后，多余的链节建议随表保存，避免遗失。若链节出现松动或卡扣异响，应尽快到店检查，防止表带意外脱落。",
            ],
          },
        ],
        highlights: [
          "皮质表带应避湿，存放时保持通风干燥。",
          "橡胶表带定期用清水清洁，避免化学溶剂。",
          "金属链节可用软毛刷定期清理缝隙污垢。",
        ],
      },
      {
        slug: "magnetism",
        title: "避免磁场对机械机芯的干扰",
        excerpt: "手机、音箱与磁扣包袋均可能影响走时精度，掌握避磁与消磁的实用方法。",
        imageSrc: "/notes/magnetism.svg",
        imageAlt: "磁场对机械机芯走时影响示意图",
        intro: "磁化是机械腕表走时异常中最容易被忽视的原因之一。受磁后腕表可能出现误差骤增，但外观完好，容易被误判为需要大修。了解磁场来源与处理方法，能有效减少不必要的维修支出。",
        sections: [
          {
            title: "生活中常见的磁场来源",
            paragraphs: [
              "智能手机、蓝牙音箱、磁吸式充电器、冰箱门封条、磁扣钱包与皮包，都是日常生活中常见的磁场来源。将腕表长期放置在这些物品旁边，累积效应可能逐渐影响摆轮和游丝的磁化状态。",
              "机场安检的传送带、医疗设备附近以及部分工业环境中的磁场强度更高，短暂经过通常影响有限，但频繁暴露则需注意。",
            ],
          },
          {
            title: "受磁后的典型表现",
            paragraphs: [
              "腕表受磁后最常见的表现是走时误差骤增，每天可能快几十秒甚至几分钟，但这种误差往往在到店检测前就已稳定，容易被误认为正常波动。",
              "将腕表靠近指南针时，如果指南针指针出现偏转，通常可以初步判断腕表存在磁化情况，建议尽快送检确认。",
            ],
          },
          {
            title: "消磁处理与日常防磁建议",
            paragraphs: [
              "消磁是一个简单、快速、无需拆解的操作，专业维修店通常能在几分钟内完成。消磁后如误差恢复正常，说明问题确实来自磁化，无需进行其他维修。",
              "日常防磁的核心是避免将腕表长期贴近强磁场来源。部分品牌提供抗磁芯设计，如有需要可在选购时优先考虑。",
            ],
          },
        ],
        highlights: [
          "手机、磁扣包等日用品均可能造成腕表磁化。",
          "走时误差骤增但外观正常，受磁是首要排查项。",
          "消磁操作简单快速，无需拆解机芯即可完成。",
        ],
      },
      {
        slug: "crown-operation",
        title: "表冠与按钮的正确操作习惯",
        excerpt: "拧紧与松开表冠的时机、调节日历的安全时段，细节操作直接影响机芯寿命。",
        imageSrc: "/notes/crown-operation.svg",
        imageAlt: "腕表表冠与按钮正确操作示意图",
        intro: "表冠和按钮是腕表与外界互动最频繁的机械接口，也是误操作风险最集中的位置。掌握正确的使用方式，不仅能保护内部结构，还能有效避免意外损伤。",
        sections: [
          {
            title: "旋入式表冠的使用要点",
            paragraphs: [
              "旋入式表冠（锁定式表冠）是防水结构的重要组成部分。每次调整时间或日期后，必须将表冠完全旋紧归位，否则防水性能将大幅降低。",
              "拔出表冠时应先逆时针旋转解锁，避免强行拉拽造成螺纹损伤。旋入时应感受到轻微阻力递增直到完全旋紧，中途不应有卡顿或异常感。",
            ],
          },
          {
            title: "日历调节的安全时间段",
            paragraphs: [
              "大多数机械腕表在晚上 9 点至凌晨 1 点之间，日历机构处于准备跳转的预备状态，此时调节日期会对齿轮和拨针轮产生额外压力，存在损伤风险。",
              "建议在下午 2 点至 4 点之间调节日历，此时机构处于最远离跳转点的位置，操作最为安全。如果腕表配有双历、年历等复杂功能，更应参考品牌手册中的专项说明。",
            ],
          },
          {
            title: "按把与计时功能的操作注意事项",
            paragraphs: [
              "计时码表的启停按钮应避免在水下或潮湿环境中按压，即使腕表具备一定防水性能，按把动作产生的瞬间通道也可能引入水汽。",
              "部分复杂功能的操作顺序有严格规定，例如万年历的日期修正需按特定步骤进行，错误操作可能导致机构卡死。建议操作前仔细阅读品牌说明书，必要时到店咨询。",
            ],
          },
        ],
        highlights: [
          "旋入式表冠每次使用后必须完全旋紧。",
          "调节日历应避开晚上 9 点至凌晨 1 点的危险时段。",
          "计时按把不应在潮湿环境中按压，防止水汽侵入。",
        ],
      },
    ],
  },
  "zh-TW": {
    pageEyebrow: "Editorial Notes",
    pageTitle: "保養知識專欄",
    pageDescription: "圍繞佩戴習慣、環境影響與保養週期，整理更適合高端腕錶用戶閱讀的實用建議。",
    backHome: "返回首頁",
    browseAll: "查看全部文章",
    keyPointsLabel: "重點速覽",
    articles: [
      {
        slug: "automatic-movement",
        title: "自動機芯如何保持穩定走時",
        excerpt: "了解上鏈效率、佩戴頻率與定期保養之間的關係，避免因長期靜置影響機芯狀態。",
        imageSrc: "/notes/automatic-movement.svg",
        imageAlt: "自動機械腕錶機芯與擺陀示意圖",
        intro: "自動機芯依靠擺陀運動持續補充動力。只要佩戴節奏、存放方式與保養頻率搭配得當，大多數高端自動錶都能維持較穩定的走時表現。",
        sections: [
          {
            title: "先確認動力是否真的足夠",
            paragraphs: [
              "很多人以為腕錶誤差變大就是機芯老化，其實更常見的原因是日常活動量不足，導致自動上鏈效率不夠。長時間久坐、單日佩戴時數過短，都會讓動力儲備處在偏低狀態。",
              "如果同一只錶在週末外出時走時穩定，工作日靜置後誤差明顯增加，就應先從佩戴習慣判斷，而不是立刻認定需要大修。",
            ],
          },
          {
            title: "靜置、擺放與手動補鏈都很重要",
            paragraphs: [
              "晚上摘錶後，盡量放在平穩、乾燥、遠離磁場的位置，減少長期受潮與受磁風險。對於帶停秒功能的腕錶，重新佩戴前補上幾圈手動上鏈，往往能讓機芯更快回到穩定工作區間。",
              "如果一週裡有多天不佩戴，也可依據型號評估是否需要上鏈器，但前提是先確認品牌建議與機芯結構，不要盲目長期高速旋轉。",
            ],
          },
          {
            title: "什麼時候該做檢測",
            paragraphs: [
              "當腕錶出現動力明顯下降、滿鏈後仍頻繁停走、日誤差持續放大，或上鏈手感變澀時，就建議到店做一次擺幅、偏振與走時檢測。",
              "檢測的目的不是立刻拆洗，而是先判斷問題來自潤滑、受磁、動力不足還是零件磨損，再決定後續處理方案。",
            ],
          },
        ],
        highlights: [
          "活動量不足會直接影響自動上鏈效率。",
          "長時間靜置前後，建議補充少量手動上鏈。",
          "出現持續性停走或誤差放大時，先做檢測再決定維修。",
        ],
      },
      {
        slug: "water-resistance",
        title: "防水等級並不等於長期涉水",
        excerpt: "解析日常洗手、淋雨、泳池環境與熱水蒸氣對腕錶密封結構的實際影響。",
        imageSrc: "/notes/water-resistance.svg",
        imageAlt: "腕錶防水測試與水滴環境示意圖",
        intro: "腕錶上的防水標示更多代表實驗條件下的壓力等級，不等於任何場景都可以放心涉水。真正影響防水表現的，往往是密封件狀態、溫差與使用環境。",
        sections: [
          {
            title: "防水標示只能說明測試標準",
            paragraphs: [
              "30 米、50 米或 100 米這類標示，通常是靜態壓力測試結果，並不是建議佩戴者直接按字面深度使用。洗澡、三溫暖、溫泉這類高溫高濕環境，反而更容易加速膠圈老化。",
              "如果錶冠沒有旋緊、按把在潮濕狀態下被誤觸，哪怕平時具備一定防水能力，也可能給水氣留下進入通道。",
            ],
          },
          {
            title: "泳池、海水與熱蒸汽風險更高",
            paragraphs: [
              "泳池中的氯和海水中的鹽分，都會對密封件、錶殼縫隙和金屬外觀產生更強影響。即使短時間接觸後沒有立刻進水，也可能為後續老化埋下隱患。",
              "熱蒸汽的問題更隱蔽。腕錶從冷氣環境進入高溫熱霧空間時，內外溫差變化會加大密封系統壓力，這也是很多用戶忽視的高風險場景。",
            ],
          },
          {
            title: "如何把進水風險降到最低",
            paragraphs: [
              "每次涉水前先確認錶冠與按把狀態，日常佩戴中避免在水下調校時間或日期。若腕錶已多年未做保養，即使外觀正常，也建議重新做一次防水測試。",
              "一旦鏡面出現霧氣、刻度邊緣發灰，或走時突然異常，應立即停止佩戴並盡快送檢，越早處理越能降低機芯受損範圍。",
            ],
          },
        ],
        highlights: [
          "防水等級不是所有涉水場景的通行證。",
          "泳池、海水和熱蒸汽對密封結構更不友善。",
          "鏡面起霧或疑似進水時，應第一時間停戴送檢。",
        ],
      },
      {
        slug: "service-interval",
        title: "多久做一次全面保養更合適",
        excerpt: "從品牌建議、使用強度與環境差異出發，判斷您的腕錶是否進入保養週期。",
        imageSrc: "/notes/service-interval.svg",
        imageAlt: "腕錶保養週期與工作台工具示意圖",
        intro: "全面保養並不是固定幾年一次的機械動作，而是需要結合品牌建議、佩戴強度、環境溫濕度與腕錶當前狀態來判斷。合適的週期，重點在於既不過度拆洗，也不拖到故障擴大。",
        sections: [
          {
            title: "先參考品牌，再結合實際佩戴強度",
            paragraphs: [
              "多數高端品牌會給出建議保養週期，但這只是基礎參考。每天長時間佩戴、經常出入高溫環境，或經常受到震動衝擊的腕錶，往往會比低頻佩戴腕錶更早進入保養窗口。",
              "如果同一只錶只是偶爾出席場合時佩戴，實際潤滑損耗與磨損節奏就會和日常通勤佩戴完全不同。",
            ],
          },
          {
            title: "這些徵兆比年限更值得關注",
            paragraphs: [
              "除了年份，誤差逐步放大、動力儲備縮短、自動上鏈效率下降、日曆跳轉不夠俐落，都是進入保養週期的重要訊號。",
              "外觀碰撞後看似仍能正常運行，也建議盡快做檢測，因為輕微偏軸、擺輪狀態變化或防水失效，往往不會在第一時間完全暴露。",
            ],
          },
          {
            title: "到店前可以準備什麼資訊",
            paragraphs: [
              "如果能提前提供品牌型號、上次保養時間、最近的異常表現和佩戴環境，維修顧問通常能更快判斷問題優先級，並安排合適的檢測流程。",
              "對於複雜功能腕錶，先做檢測再給出保養建議，比直接做統一拆洗更穩妥，也能避免不必要的工序。",
            ],
          },
        ],
        highlights: [
          "保養週期要結合品牌建議和真實使用強度判斷。",
          "誤差、動力和跳曆表現，往往比單純年份更有參考價值。",
          "到店前整理好佩戴與保養記錄，能提升檢測效率。",
        ],
      },
      {
        slug: "strap-care",
        title: "錶帶材質與日常護理要點",
        excerpt: "皮帶、橡膠與金屬鏈節各有養護方式，了解正確的清潔與存放方法延長使用壽命。",
        imageSrc: "/notes/strap-care.svg",
        imageAlt: "不同材質錶帶的清潔與護理示意圖",
        intro: "錶帶是腕錶與皮膚接觸最頻繁的部分，也是最容易被忽視的保養對象。不同材質的錶帶有截然不同的護理需求，選對方式才能延緩老化、維持外觀。",
        sections: [
          {
            title: "皮質錶帶：避濕是第一原則",
            paragraphs: [
              "真皮錶帶遇水後容易變形、起皺，長期汗液浸潤更會加速皮革內部纖維斷裂。日常佩戴後建議用乾布輕拭錶帶內側，避免直接接觸水源。",
              "存放時不要將皮帶錶疊放，也不要長期暴露在陽光直射或高溫環境中。定期使用專用皮革護理劑，能有效延緩表面龜裂與褪色。",
            ],
          },
          {
            title: "橡膠與氟橡膠帶：耐用但需定期清潔",
            paragraphs: [
              "橡膠錶帶耐水性好，但汗液與油脂積累會讓錶帶逐漸變黏或變硬。建議每隔一段時間用清水與軟布擦洗，避免使用酒精或有機溶劑，以免加速老化。",
              "氟橡膠（FKM）材質耐化學腐蝕性更強，但同樣應避免接觸防曬乳、香水等含化學成分的物質，防止表面變色。",
            ],
          },
          {
            title: "金屬鏈節：清潔細節決定持久光澤",
            paragraphs: [
              "金屬鏈節縫隙容易積累污垢與汗液，建議定期用軟毛牙刷蘸取溫水清潔，避免使用研磨性清潔劑破壞拋光面。",
              "調節鏈節長度後，多餘的鏈節建議隨錶保存，避免遺失。若鏈節出現鬆動或扣環異響，應盡快到店檢查，防止錶帶意外脫落。",
            ],
          },
        ],
        highlights: [
          "皮質錶帶應避濕，存放時保持通風乾燥。",
          "橡膠錶帶定期用清水清潔，避免化學溶劑。",
          "金屬鏈節可用軟毛刷定期清理縫隙污垢。",
        ],
      },
      {
        slug: "magnetism",
        title: "避免磁場對機械機芯的干擾",
        excerpt: "手機、音箱與磁扣包袋均可能影響走時精度，掌握避磁與消磁的實用方法。",
        imageSrc: "/notes/magnetism.svg",
        imageAlt: "磁場對機械機芯走時影響示意圖",
        intro: "磁化是機械腕錶走時異常中最容易被忽視的原因之一。受磁後腕錶可能出現誤差驟增，但外觀完好，容易被誤判為需要大修。了解磁場來源與處理方法，能有效減少不必要的維修支出。",
        sections: [
          {
            title: "生活中常見的磁場來源",
            paragraphs: [
              "智慧型手機、藍牙音箱、磁吸式充電器、冰箱門封條、磁扣錢包與皮包，都是日常生活中常見的磁場來源。將腕錶長期放置在這些物品旁邊，累積效應可能逐漸影響擺輪和游絲的磁化狀態。",
              "機場安檢的傳送帶、醫療設備附近以及部分工業環境中的磁場強度更高，短暫經過通常影響有限，但頻繁暴露則需注意。",
            ],
          },
          {
            title: "受磁後的典型表現",
            paragraphs: [
              "腕錶受磁後最常見的表現是走時誤差驟增，每天可能快幾十秒甚至幾分鐘，但這種誤差往往在到店檢測前就已穩定，容易被誤認為正常波動。",
              "將腕錶靠近指南針時，如果指針出現偏轉，通常可以初步判斷腕錶存在磁化情況，建議盡快送檢確認。",
            ],
          },
          {
            title: "消磁處理與日常防磁建議",
            paragraphs: [
              "消磁是一個簡單、快速、無需拆解的操作，專業維修店通常能在幾分鐘內完成。消磁後如誤差恢復正常，說明問題確實來自磁化，無需進行其他維修。",
              "日常防磁的核心是避免將腕錶長期貼近強磁場來源。部分品牌提供抗磁芯設計，如有需要可在選購時優先考慮。",
            ],
          },
        ],
        highlights: [
          "手機、磁扣包等日用品均可能造成腕錶磁化。",
          "走時誤差驟增但外觀正常，受磁是首要排查項。",
          "消磁操作簡單快速，無需拆解機芯即可完成。",
        ],
      },
      {
        slug: "crown-operation",
        title: "錶冠與按鈕的正確操作習慣",
        excerpt: "擰緊與鬆開錶冠的時機、調節日曆的安全時段，細節操作直接影響機芯壽命。",
        imageSrc: "/notes/crown-operation.svg",
        imageAlt: "腕錶錶冠與按鈕正確操作示意圖",
        intro: "錶冠和按鈕是腕錶與外界互動最頻繁的機械接口，也是誤操作風險最集中的位置。掌握正確的使用方式，不僅能保護內部結構，還能有效避免意外損傷。",
        sections: [
          {
            title: "旋入式錶冠的使用要點",
            paragraphs: [
              "旋入式錶冠（鎖定式錶冠）是防水結構的重要組成部分。每次調整時間或日曆後，必須將錶冠完全旋緊歸位，否則防水性能將大幅降低。",
              "拔出錶冠時應先逆時針旋轉解鎖，避免強行拉拽造成螺紋損傷。旋入時應感受到輕微阻力遞增直到完全旋緊，中途不應有卡頓或異常感。",
            ],
          },
          {
            title: "日曆調節的安全時間段",
            paragraphs: [
              "大多數機械腕錶在晚上 9 點至凌晨 1 點之間，日曆機構處於準備跳轉的預備狀態，此時調節日期會對齒輪和撥針輪產生額外壓力，存在損傷風險。",
              "建議在下午 2 點至 4 點之間調節日曆，此時機構處於最遠離跳轉點的位置，操作最為安全。如果腕錶配有雙曆、年曆等複雜功能，更應參考品牌手冊中的專項說明。",
            ],
          },
          {
            title: "按把與計時功能的操作注意事項",
            paragraphs: [
              "計時碼錶的啟停按鈕應避免在水下或潮濕環境中按壓，即使腕錶具備一定防水性能，按把動作產生的瞬間通道也可能引入水氣。",
              "部分複雜功能的操作順序有嚴格規定，例如萬年曆的日期修正需按特定步驟進行，錯誤操作可能導致機構卡死。建議操作前仔細閱讀品牌說明書，必要時到店諮詢。",
            ],
          },
        ],
        highlights: [
          "旋入式錶冠每次使用後必須完全旋緊。",
          "調節日曆應避開晚上 9 點至凌晨 1 點的危險時段。",
          "計時按把不應在潮濕環境中按壓，防止水氣侵入。",
        ],
      },
    ],
  },
  en: {
    pageEyebrow: "Editorial Notes",
    pageTitle: "Watch Care Journal",
    pageDescription: "Practical maintenance reading on wearing habits, environment, and service timing for luxury watch owners.",
    backHome: "Back to Home",
    browseAll: "Browse All Articles",
    keyPointsLabel: "Key Takeaways",
    articles: [
      {
        slug: "automatic-movement",
        title: "How to Keep an Automatic Movement Running Well",
        excerpt: "Understand how winding efficiency, wearing frequency, and service intervals affect movement stability.",
        imageSrc: "/notes/automatic-movement.svg",
        imageAlt: "Illustration of an automatic watch movement and rotor",
        intro: "An automatic movement relies on its rotor to replenish power during daily motion. When wearing rhythm, storage habits, and service timing stay aligned, a luxury automatic watch can usually maintain stable timekeeping.",
        sections: [
          {
            title: "Check whether the watch is fully powered first",
            paragraphs: [
              "A growing time deviation does not always mean internal wear. A more common cause is simply low winding efficiency from limited arm movement, short daily wear sessions, or frequent desk work.",
              "If the watch runs well on active days but performs worse after sitting still, the first question should be how it is worn, not whether it needs a full overhaul immediately.",
            ],
          },
          {
            title: "Storage, resting position, and manual winding matter",
            paragraphs: [
              "When you take the watch off, place it somewhere stable, dry, and away from magnetism. That reduces the risk of moisture and stray magnetic fields affecting the movement over time.",
              "Before wearing it again, a few turns of manual winding often help the movement return to a more stable operating range, especially after long periods of rest.",
            ],
          },
          {
            title: "Know when a diagnostic check is due",
            paragraphs: [
              "If power reserve drops sharply, the watch stops despite a full wind, or the deviation keeps growing, it is a good time to check amplitude, beat error, and magnetism.",
              "The goal of diagnostics is not to dismantle the watch by default. It is to identify whether the issue comes from lubrication, low power, magnetism, or component wear before choosing the right next step.",
            ],
          },
        ],
        highlights: [
          "Low daily activity can reduce automatic winding efficiency.",
          "A little manual winding helps after extended resting periods.",
          "Persistent stopping or growing deviation should be checked before repair decisions are made.",
        ],
      },
      {
        slug: "water-resistance",
        title: "Water Resistance Does Not Mean Unlimited Exposure",
        excerpt: "Learn how daily hand washing, rain, swimming pools, and steam affect seals and case integrity.",
        imageSrc: "/notes/water-resistance.svg",
        imageAlt: "Illustration of a watch under water resistance testing",
        intro: "A water-resistance rating mainly reflects controlled pressure tests. It does not mean every wet environment is safe for long-term use. Seal condition, temperature shifts, and actual wearing scenarios matter just as much.",
        sections: [
          {
            title: "The rating is only part of the story",
            paragraphs: [
              "Marks such as 30 m, 50 m, or 100 m are usually static pressure references rather than direct instructions for real-world depth use. Hot showers, saunas, and humid steam rooms often create a greater practical risk.",
              "If the crown is not fully secured or a pusher is pressed in damp conditions, moisture may still find a way inside even when the watch is technically rated for water resistance.",
            ],
          },
          {
            title: "Pools, salt water, and steam add extra stress",
            paragraphs: [
              "Chlorine and salt can accelerate wear around seals, joints, and exposed surfaces. Even short exposure without immediate leakage can contribute to longer-term deterioration.",
              "Steam is especially deceptive. Moving from cool air-conditioned environments into hot humid air increases thermal stress on the sealing system and is a very common hidden risk.",
            ],
          },
          {
            title: "How to reduce the chance of moisture ingress",
            paragraphs: [
              "Check the crown and pushers before any contact with water, and avoid adjusting the watch while it is wet. If the watch has not been serviced in years, a fresh water-resistance test is a smart precaution.",
              "If the crystal fogs up or timekeeping suddenly changes, stop wearing the watch and have it inspected quickly. Early action usually limits the scope of internal damage.",
            ],
          },
        ],
        highlights: [
          "A water-resistance rating is not a free pass for every wet activity.",
          "Pools, seawater, and steam are tougher on seals than many owners expect.",
          "Fog under the crystal is a clear sign to stop wearing and arrange an inspection.",
        ],
      },
      {
        slug: "service-interval",
        title: "When Is the Right Time for a Full Service",
        excerpt: "Use brand guidance, wear intensity, and environment to judge the right service cycle.",
        imageSrc: "/notes/service-interval.svg",
        imageAlt: "Illustration of a watch service schedule on a workbench",
        intro: "A full service should not be treated as a rigid calendar event. The best interval depends on brand guidance, wearing intensity, environment, and the actual condition of the watch.",
        sections: [
          {
            title: "Start with brand guidance, then adjust for real use",
            paragraphs: [
              "Most luxury brands offer a recommended service window, but that is only a baseline. Watches worn daily in warmer conditions or around vibration may reach the service window earlier than lightly worn pieces.",
              "A watch reserved for occasional events can age very differently from one used every day for commuting and travel.",
            ],
          },
          {
            title: "Performance changes matter more than the calendar alone",
            paragraphs: [
              "Increasing deviation, weaker power reserve, reduced self-winding efficiency, or sluggish calendar changes are often more useful indicators than the number of years since the last service.",
              "Even when a watch appears to keep running after an impact, hidden issues such as balance disturbance, slight misalignment, or lost water resistance can remain unseen until later.",
            ],
          },
          {
            title: "Prepare useful information before visiting the atelier",
            paragraphs: [
              "If you can share the model, last service date, current symptoms, and typical wearing environment, a technician can usually prioritize the right diagnostic path more efficiently.",
              "For complicated watches, inspection before recommending a full service is often the safer and more precise approach.",
            ],
          },
        ],
        highlights: [
          "The right service interval depends on both the brand and how the watch is actually worn.",
          "Timekeeping and power symptoms often signal the service window better than years alone.",
          "Bringing service history and wear details helps the workshop diagnose more efficiently.",
        ],
      },
      {
        slug: "strap-care",
        title: "Caring for Different Strap Materials",
        excerpt: "Leather, rubber, and metal bracelets each require different cleaning and storage methods to last longer.",
        imageSrc: "/notes/strap-care.svg",
        imageAlt: "Illustration of strap care and cleaning for different materials",
        intro: "The strap is the part of a watch in the most constant contact with skin, and also the most commonly neglected when it comes to maintenance. Different materials have very different care requirements.",
        sections: [
          {
            title: "Leather straps: keep them dry",
            paragraphs: [
              "Leather deforms and wrinkles when wet, and prolonged contact with sweat accelerates fibre breakdown from the inside. After wearing, wipe the inner surface with a dry cloth and avoid direct contact with water.",
              "When storing, do not stack leather-strap watches on top of each other or leave them in direct sunlight or high-heat environments. A dedicated leather conditioner applied periodically helps slow cracking and fading.",
            ],
          },
          {
            title: "Rubber and FKM straps: durable but not maintenance-free",
            paragraphs: [
              "Rubber straps handle water well, but sweat and skin oils accumulate over time, making the strap tacky or stiff. Rinse periodically with clean water and a soft cloth; avoid alcohol or organic solvents that accelerate ageing.",
              "FKM (fluoroelastomer) straps resist chemicals more effectively, but they should still be kept away from sunscreen and perfume, which can cause surface discolouration.",
            ],
          },
          {
            title: "Metal bracelets: detail cleaning preserves the finish",
            paragraphs: [
              "Links trap dirt and sweat in the gaps. A soft toothbrush with warm water works well for periodic cleaning; avoid abrasive cleaners that scratch polished surfaces.",
              "Keep spare links with the watch after a sizing adjustment to avoid losing them. If a link feels loose or a clasp rattles, have it checked at the service centre before the bracelet comes apart unexpectedly.",
            ],
          },
        ],
        highlights: [
          "Leather straps need to stay dry and be stored in a ventilated space.",
          "Clean rubber straps with water only — no solvents.",
          "A soft brush clears the gaps in metal links without damaging the finish.",
        ],
      },
      {
        slug: "magnetism",
        title: "Protecting Your Movement from Magnetic Fields",
        excerpt: "Smartphones, speakers, and magnetic bag closures can all affect accuracy — learn how to avoid and reverse magnetisation.",
        imageSrc: "/notes/magnetism.svg",
        imageAlt: "Illustration of magnetic field interference on a watch movement",
        intro: "Magnetisation is one of the most overlooked causes of timekeeping anomalies in mechanical watches. A magnetised movement can gain or lose significant time each day while still looking completely normal — making it easy to mistake for a problem that needs a full overhaul.",
        sections: [
          {
            title: "Common magnetic sources in daily life",
            paragraphs: [
              "Smartphones, Bluetooth speakers, magnetic charging cables, refrigerator door seals, and magnetic wallet or bag clasps are all sources of magnetic fields encountered in daily life. Leaving a watch near these items repeatedly can gradually affect the balance wheel and hairspring.",
              "Airport security conveyor belts, medical equipment, and certain industrial environments carry stronger fields. Brief exposure usually has minimal impact, but frequent proximity is worth avoiding.",
            ],
          },
          {
            title: "How magnetisation typically shows up",
            paragraphs: [
              "The most common sign is a sudden, consistent gain or loss — sometimes dozens of seconds or even several minutes per day. The deviation often stabilises before a visit to the service centre, which can make it look like normal variation.",
              "Holding the watch near a compass is a simple field test: if the needle deflects, the watch is likely magnetised and should be taken in for confirmation.",
            ],
          },
          {
            title: "Demagnetisation and everyday prevention",
            paragraphs: [
              "Demagnetisation is quick, non-invasive, and requires no disassembly. A professional service centre can complete it in minutes. If the deviation disappears afterwards, the diagnosis is confirmed and no further work is needed.",
              "The simplest prevention is to avoid storing the watch next to strong magnetic sources over time. Some brands offer anti-magnetic movement designs — worth considering if the wearer frequently encounters such environments.",
            ],
          },
        ],
        highlights: [
          "Everyday items like smartphones and magnetic clasps can magnetise a movement.",
          "A sudden consistent deviation with no visible damage is the classic sign of magnetisation.",
          "Demagnetisation is fast, non-invasive, and often all that is needed.",
        ],
      },
      {
        slug: "crown-operation",
        title: "Correct Habits for Crown and Pusher Operation",
        excerpt: "Knowing when to screw down the crown and which hours to avoid when setting the date protects your movement long-term.",
        imageSrc: "/notes/crown-operation.svg",
        imageAlt: "Illustration of correct crown and pusher operation on a watch",
        intro: "The crown and pushers are the mechanical interfaces a watch owner interacts with most. They are also the points where mishandling is most likely to cause damage. Learning the correct habits protects both the movement and the water-resistant sealing.",
        sections: [
          {
            title: "Screw-down crowns: always lock them back",
            paragraphs: [
              "A screw-down crown is a critical part of the water-resistant case construction. After any time or date adjustment, it must be screwed back down fully — leaving it out will significantly reduce water resistance.",
              "To pull the crown out, rotate counter-clockwise first to release the thread rather than pulling directly. When screwing it back in, you should feel a smooth, even increase in resistance ending in a firm lock — any grinding or catching is a sign to stop and inspect.",
            ],
          },
          {
            title: "The safe window for setting the date",
            paragraphs: [
              "On most mechanical watches, the calendar mechanism is in a transition state between approximately 9 pm and 1 am, pre-loading for the midnight jump. Advancing the date manually during this window puts undue stress on the driving wheels and can cause damage.",
              "The safest time to set the date is between 2 pm and 4 pm, when the mechanism is furthest from the jump point. Watches with more complex calendar functions — annual or perpetual calendars — often have specific correction sequences described in the brand manual.",
            ],
          },
          {
            title: "Chronograph and complication pushers",
            paragraphs: [
              "Chronograph pushers should not be operated underwater or while the case is wet. Even on a water-resistant watch, pressing a pusher creates a momentary gap that moisture can exploit.",
              "Complicated functions such as perpetual calendars often require specific correction sequences — incorrect steps can jam the mechanism. If in doubt, refer to the brand's instructions or consult the service centre before making any adjustments.",
            ],
          },
        ],
        highlights: [
          "Always screw the crown back down fully after use.",
          "Avoid setting the date between 9 pm and 1 am to protect the calendar mechanism.",
          "Never press chronograph pushers while the watch is wet.",
        ],
      },
    ],
  },
};

export function getNoteArticle(locale: Locale, slug: NoteSlug): NoteArticle | undefined {
  return notesContent[locale].articles.find((article) => article.slug === slug);
}
