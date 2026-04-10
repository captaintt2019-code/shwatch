export const locales = ["zh-CN", "zh-TW", "en"] as const;

export type Locale = (typeof locales)[number];

type LocaleContent = {
  htmlLang: string;
  metaTitle: string;
  metaDescription: string;
  brandName: string;
  openMenuLabel: string;
  closeMenuLabel: string;
  languageLabel: string;
  nav: {
    home: string;
    services: string;
    tips: string;
    booking: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    primaryCta: string;
    secondaryCta: string;
    addressLabel: string;
    address: string;
    visualKicker: string;
    visualTitle: string;
  };
  trust: Array<{
    title: string;
    text: string;
  }>;
  services: {
    eyebrow: string;
    title: string;
    description: string;
    items: Array<{
      title: string;
      text: string;
    }>;
  };
  booking: {
    eyebrow: string;
    title: string;
    description: string;
    notes: string[];
    fields: {
      name: string;
      phone: string;
      brand: string;
      model: string;
      issue: string;
      brandPlaceholder: string;
      namePlaceholder: string;
      phonePlaceholder: string;
      modelPlaceholder: string;
      issuePlaceholder: string;
    };
    submit: string;
    submitting: string;
    success: string;
    invalid: string;
    serverError: string;
    unconfiguredError: string;
  };
  tips: {
    eyebrow: string;
    title: string;
    description: string;
    readMore: string;
    articles: Array<{
      title: string;
      text: string;
    }>;
  };
  location: {
    eyebrow: string;
    title: string;
    description: string;
    addressLabel: string;
    address: string;
    hoursLabel: string;
    hours: string;
    phoneLabel: string;
    phone: string;
    amapButton: string;
    baiduButton: string;
    mapLoading: string;
    mapError: string;
    mapMissingKeyTitle: string;
    mapMissingKeyText: string;
  };
  footer: {
    address: string;
    hours: string;
    phone: string;
    copyright: string;
  };
};

export const localeLabels: Record<Locale, string> = {
  "zh-CN": "简",
  "zh-TW": "繁",
  en: "EN",
};

export const sharedBrands = [
  "劳力士",
  "欧米茄",
  "百达翡丽",
  "卡地亚",
  "万国",
  "积家",
  "爱彼",
  "江诗丹顿",
  "宝珀",
  "伯爵",
  "浪琴",
  "帝舵",
  "宇舶",
  "沛纳海",
  "宝玑",
  "朗格",
  "格拉苏蒂原创",
  "真力时",
  "萧邦",
  "理查米尔",
  "名士",
  "泰格豪雅",
  "百年灵",
  "芝柏",
  "雅典表",
  "法穆兰",
  "宝齐莱",
  "帕玛强尼",
  "雅克德罗",
  "昆仑",
  "豪利时",
  "雷达",
  "天梭",
  "美度",
  "汉米尔顿",
  "精工",
  "冠蓝狮",
  "万宝龙",
  "宝格丽",
  "罗杰杜彼",
  "柏莱士",
  "诺莫斯",
  "康斯登",
  "艾美",
  "亨利慕时",
  "其他",
] as const;

export const siteContent: Record<Locale, LocaleContent> = {
  "zh-CN": {
    htmlLang: "zh-CN",
    metaTitle: "上海名表维修服务中心",
    metaDescription: "上海名表维修服务中心，提供专业认证技师维修、原装配件保障、名表保养与在线预约服务。",
    brandName: "上海名表维修服务中心",
    openMenuLabel: "打开导航菜单",
    closeMenuLabel: "关闭导航菜单",
    languageLabel: "语言切换",
    nav: {
      home: "首页",
      services: "维修服务",
      tips: "保养知识",
      booking: "在线预约",
    },
    hero: {
      eyebrow: "Professional Luxury Watch Service",
      title: "上海名表维修服务中心",
      subtitle:
        "专业认证技师提供高端腕表维修、保养与检测服务，专注劳力士、欧米茄、百达翡丽、卡地亚等名表品牌。",
      primaryCta: "在线留言",
      secondaryCta: "查看地址",
      addressLabel: "地址",
      address: "地址：上海黄浦区淮海中路850号",
      visualKicker: "Huaihai Middle Road Atelier",
      visualTitle: "精密检测 · 标准流程 · 安心交付",
    },
    trust: [
      {
        title: "专业认证技师",
        text: "资深维修顾问与标准化检测流程，确保每一步都可追踪。",
      },
      {
        title: "原装配件保证",
        text: "关键维修环节严选原装或同级标准配件，维持腕表性能与价值。",
      },
      {
        title: "一年维修保修",
        text: "维修完成后提供清晰质保说明，让每次送修更放心。",
      },
    ],
    services: {
      eyebrow: "Specialized Care",
      title: "高端腕表维修与保养服务",
      description:
        "从基础走时检测到机芯全面保养，我们以门店级接待体验与严谨工艺，服务上海本地高端腕表用户。",
      items: [
        {
          title: "机芯维修",
          text: "针对停走、误差过大、动力不足等问题进行精准检修与调校。",
        },
        {
          title: "外观翻新",
          text: "处理表壳划痕、表带磨损与细节修整，恢复整体质感。",
        },
        {
          title: "防水检测",
          text: "提供密封件检查、防水测试与日常佩戴风险建议。",
        },
      ],
    },
    booking: {
      eyebrow: "Book Consultation",
      title: "在线预约与故障咨询",
      description: "填写腕表信息后，我们会尽快与您联系，提供初步诊断建议与到店安排。",
      notes: [
        "支持常见高端品牌送修咨询",
        "可提前描述故障现象与走时情况",
        "提交后将有顾问尽快电话联系",
      ],
      fields: {
        name: "姓名",
        phone: "联系电话",
        brand: "腕表品牌",
        model: "腕表型号",
        issue: "故障描述",
        brandPlaceholder: "请选择品牌",
        namePlaceholder: "请输入姓名",
        phonePlaceholder: "请输入联系电话",
        modelPlaceholder: "例如：Submariner 126610LN",
        issuePlaceholder: "请描述故障现象、保养历史和您的需求。",
      },
      submit: "提交预约",
      submitting: "正在提交预约信息...",
      success: "预约信息已提交，我们会尽快与您联系。",
      invalid: "请完整填写必填信息，并确认联系电话格式正确。",
      serverError: "提交失败，请稍后重试或直接电话联系门店。",
      unconfiguredError: "门店邮件服务尚未完成配置，请先补充 SMTP 环境变量。",
    },
    tips: {
      eyebrow: "Editorial Notes",
      title: "腕表保养知识",
      description: "为佩戴者提供更实用的保养建议，帮助延长高端腕表的稳定性能与使用寿命。",
      readMore: "阅读全文",
      articles: [
        {
          title: "自动机芯如何保持稳定走时",
          text: "了解上链效率、佩戴频率与定期保养之间的关系，避免因长期静置影响机芯状态。",
        },
        {
          title: "防水等级并不等于长期涉水",
          text: "解析日常洗手、淋雨、泳池环境与热水蒸汽对腕表密封结构的实际影响。",
        },
        {
          title: "多久做一次全面保养更合适",
          text: "从品牌建议、使用强度与环境差异出发，判断您的腕表是否进入保养周期。",
        },
        {
          title: "表带材质与日常护理要点",
          text: "皮带、橡胶与金属链节各有养护方式，了解正确的清洁与存放方法延长使用寿命。",
        },
        {
          title: "避免磁场对机械机芯的干扰",
          text: "手机、音箱与磁扣包袋均可能影响走时精度，掌握避磁与消磁的实用方法。",
        },
        {
          title: "冠字与按钮的正确操作习惯",
          text: "拧紧与松开表冠的时机、调节日历的安全时段，细节操作直接影响机芯寿命。",
        },
      ],
    },
    location: {
      eyebrow: "Visit Our Atelier",
      title: "联系我们",
      description: "门店位于淮海中路核心地段，便于本地客户到店检测、咨询与取表。",
      addressLabel: "地址",
      address: "上海黄浦区淮海中路850号",
      hoursLabel: "营业时间",
      hours: "早上 9:00- 晚上9:00",
      phoneLabel: "联系电话",
      phone: "021-54039803",
      amapButton: "高德地图导航",
      baiduButton: "百度地图导航",
      mapLoading: "正在加载高德地图...",
      mapError: "地图加载失败，请使用下方按钮继续导航。",
      mapMissingKeyTitle: "等待接入高德地图 Key",
      mapMissingKeyText: "请在 `.env.local` 中配置 `NEXT_PUBLIC_AMAP_KEY` 与 `NEXT_PUBLIC_AMAP_SECURITY_CODE`。",
    },
    footer: {
      address: "上海黄浦区淮海中路850号",
      hours: "早上 9:00- 晚上9:00",
      phone: "联系电话：021-54039803",
      copyright: "© 2026 上海名表维修服务中心 版权所有",
    },
  },
  "zh-TW": {
    htmlLang: "zh-Hant",
    metaTitle: "上海名錶維修服務中心",
    metaDescription: "上海名錶維修服務中心，提供專業認證技師維修、原裝配件保障、名錶保養與線上預約服務。",
    brandName: "上海名錶維修服務中心",
    openMenuLabel: "打開導覽選單",
    closeMenuLabel: "關閉導覽選單",
    languageLabel: "語言切換",
    nav: {
      home: "首頁",
      services: "維修服務",
      tips: "保養知識",
      booking: "線上預約",
    },
    hero: {
      eyebrow: "Professional Luxury Watch Service",
      title: "上海名錶維修服務中心",
      subtitle:
        "專業認證技師提供高端腕錶維修、保養與檢測服務，專注勞力士、歐米茄、百達翡麗、卡地亞等名錶品牌。",
      primaryCta: "線上留言",
      secondaryCta: "查看地址",
      addressLabel: "地址",
      address: "地址：上海黃浦區淮海中路850號",
      visualKicker: "Huaihai Middle Road Atelier",
      visualTitle: "精密檢測 · 標準流程 · 安心交付",
    },
    trust: [
      {
        title: "專業認證技師",
        text: "資深維修顧問與標準化檢測流程，確保每一步都可追蹤。",
      },
      {
        title: "原裝配件保證",
        text: "關鍵維修環節嚴選原裝或同級標準配件，維持腕錶性能與價值。",
      },
      {
        title: "一年維修保固",
        text: "維修完成後提供清晰保固說明，讓每次送修更放心。",
      },
    ],
    services: {
      eyebrow: "Specialized Care",
      title: "高端腕錶維修與保養服務",
      description:
        "從基礎走時檢測到機芯全面保養，我們以門店級接待體驗與嚴謹工藝，服務上海本地高端腕錶用戶。",
      items: [
        {
          title: "機芯維修",
          text: "針對停走、誤差過大、動力不足等問題進行精準檢修與調校。",
        },
        {
          title: "外觀翻新",
          text: "處理錶殼刮痕、錶帶磨損與細節修整，恢復整體質感。",
        },
        {
          title: "防水檢測",
          text: "提供密封件檢查、防水測試與日常佩戴風險建議。",
        },
      ],
    },
    booking: {
      eyebrow: "Book Consultation",
      title: "線上預約與故障諮詢",
      description: "填寫腕錶資訊後，我們會盡快與您聯繫，提供初步診斷建議與到店安排。",
      notes: [
        "支援常見高端品牌送修諮詢",
        "可提前描述故障現象與走時情況",
        "提交後將有顧問盡快電話聯繫",
      ],
      fields: {
        name: "姓名",
        phone: "聯絡電話",
        brand: "腕錶品牌",
        model: "腕錶型號",
        issue: "故障描述",
        brandPlaceholder: "請選擇品牌",
        namePlaceholder: "請填寫姓名",
        phonePlaceholder: "請填寫聯絡電話",
        modelPlaceholder: "例如：Submariner 126610LN",
        issuePlaceholder: "請描述故障現象、保養歷史與您的需求。",
      },
      submit: "提交預約",
      submitting: "正在提交預約資訊...",
      success: "預約資訊已提交，我們會盡快與您聯繫。",
      invalid: "請完整填寫必填資訊，並確認聯絡電話格式正確。",
      serverError: "提交失敗，請稍後再試或直接來電聯繫門店。",
      unconfiguredError: "門店郵件服務尚未完成設定，請先補充 SMTP 環境變數。",
    },
    tips: {
      eyebrow: "Editorial Notes",
      title: "腕錶保養知識",
      description: "為佩戴者提供更實用的保養建議，幫助延長高端腕錶的穩定性能與使用壽命。",
      readMore: "閱讀更多",
      articles: [
        {
          title: "自動機芯如何保持穩定走時",
          text: "了解上鏈效率、佩戴頻率與定期保養之間的關係，避免因長期靜置影響機芯狀態。",
        },
        {
          title: "防水等級並不等於長期涉水",
          text: "解析日常洗手、淋雨、泳池環境與熱水蒸氣對腕錶密封結構的實際影響。",
        },
        {
          title: "多久做一次全面保養更合適",
          text: "從品牌建議、使用強度與環境差異出發，判斷您的腕錶是否進入保養週期。",
        },
        {
          title: "錶帶材質與日常護理要點",
          text: "皮帶、橡膠與金屬鏈節各有養護方式，了解正確的清潔與存放方法延長使用壽命。",
        },
        {
          title: "避免磁場對機械機芯的干擾",
          text: "手機、音箱與磁扣包袋均可能影響走時精度，掌握避磁與消磁的實用方法。",
        },
        {
          title: "錶冠與按鈕的正確操作習慣",
          text: "擰緊與鬆開錶冠的時機、調節日曆的安全時段，細節操作直接影響機芯壽命。",
        },
      ],
    },
    location: {
      eyebrow: "Visit Our Atelier",
      title: "聯絡我們",
      description: "門店位於淮海中路核心地段，便於本地客戶到店檢測、諮詢與取錶。",
      addressLabel: "地址",
      address: "上海黃浦區淮海中路850號",
      hoursLabel: "營業時間",
      hours: "早上 9:00- 晚上9:00",
      phoneLabel: "聯絡電話",
      phone: "021-54039803",
      amapButton: "高德地圖導航",
      baiduButton: "百度地圖導航",
      mapLoading: "正在載入高德地圖...",
      mapError: "地圖載入失敗，請使用下方按鈕繼續導航。",
      mapMissingKeyTitle: "等待接入高德地圖 Key",
      mapMissingKeyText: "請在 `.env.local` 中設定 `NEXT_PUBLIC_AMAP_KEY` 與 `NEXT_PUBLIC_AMAP_SECURITY_CODE`。",
    },
    footer: {
      address: "上海黃浦區淮海中路850號",
      hours: "早上 9:00- 晚上9:00",
      phone: "聯絡電話：021-54039803",
      copyright: "© 2026 上海名錶維修服務中心 版權所有",
    },
  },
  en: {
    htmlLang: "en",
    metaTitle: "Shanghai Watch Service Center",
    metaDescription:
      "Shanghai Watch Service Center provides certified luxury watch repair, genuine parts support, maintenance, and online booking.",
    brandName: "Shanghai Watch Service Center",
    openMenuLabel: "Open navigation menu",
    closeMenuLabel: "Close navigation menu",
    languageLabel: "Language",
    nav: {
      home: "Home",
      services: "Services",
      tips: "Maintenance Tips",
      booking: "Book Now",
    },
    hero: {
      eyebrow: "Professional Luxury Watch Service",
      title: "Shanghai Watch Service Center",
      subtitle:
        "Certified technicians provide luxury watch repair, maintenance, and diagnostics for Rolex, Omega, Patek Philippe, Cartier, and other prestigious brands.",
      primaryCta: "Leave a Message",
      secondaryCta: "View Location",
      addressLabel: "Address",
      address: "Address: No. 850 Huaihai Middle Road, Huangpu District, Shanghai",
      visualKicker: "Huaihai Middle Road Atelier",
      visualTitle: "Precision Diagnostics · Standardized Process · Trusted Delivery",
    },
    trust: [
      {
        title: "Certified Technicians",
        text: "Experienced specialists and a transparent inspection workflow for every stage of service.",
      },
      {
        title: "Original Parts Guaranteed",
        text: "Critical repairs use original or equivalent-grade components to protect value and performance.",
      },
      {
        title: "1-Year Repair Warranty",
        text: "Every completed repair includes clear warranty coverage for lasting peace of mind.",
      },
    ],
    services: {
      eyebrow: "Specialized Care",
      title: "Premium Watch Repair and Maintenance",
      description:
        "From timing diagnostics to full movement overhaul, we deliver a polished atelier experience for luxury watch owners in Shanghai.",
      items: [
        {
          title: "Movement Repair",
          text: "Precise servicing for stopped watches, excessive deviation, weak power reserve, and related issues.",
        },
        {
          title: "Exterior Refinishing",
          text: "Refinement for case scratches, bracelet wear, and cosmetic detail restoration.",
        },
        {
          title: "Water Resistance Testing",
          text: "Seal inspection, pressure testing, and daily wear recommendations for safer ownership.",
        },
      ],
    },
    booking: {
      eyebrow: "Book Consultation",
      title: "Appointment and Repair Inquiry",
      description:
        "Share your watch details and our team will contact you with an initial assessment and store-visit arrangement.",
      notes: [
        "Suitable for common luxury watch brands",
        "Describe the issue and timekeeping condition in advance",
        "A service advisor will follow up by phone shortly after submission",
      ],
      fields: {
        name: "Customer Name",
        phone: "Phone Number",
        brand: "Watch Brand",
        model: "Model Number",
        issue: "Description of the Issue",
        brandPlaceholder: "Select a brand",
        namePlaceholder: "Your name",
        phonePlaceholder: "Contact phone number",
        modelPlaceholder: "Example: Submariner 126610LN",
        issuePlaceholder: "Please describe the issue, service history, and urgency.",
      },
      submit: "Submit Booking",
      submitting: "Submitting your request...",
      success: "Your request has been submitted. Our team will contact you shortly.",
      invalid: "Please complete all required fields and confirm the phone number format.",
      serverError: "Submission failed. Please try again later or contact the atelier directly.",
      unconfiguredError: "Email delivery is not configured yet. Please add the SMTP environment variables first.",
    },
    tips: {
      eyebrow: "Editorial Notes",
      title: "Watch Maintenance Tips",
      description:
        "Useful care guidance for owners who want to preserve reliability, appearance, and long-term performance.",
      readMore: "Read More",
      articles: [
        {
          title: "How to Keep an Automatic Movement Running Well",
          text: "Understand how winding efficiency, wearing frequency, and service intervals affect movement stability.",
        },
        {
          title: "Water Resistance Does Not Mean Unlimited Exposure",
          text: "Learn how daily hand washing, rain, swimming pools, and steam affect seals and case integrity.",
        },
        {
          title: "When Is the Right Time for a Full Service",
          text: "Use brand guidance, wear intensity, and environment to judge the right service cycle.",
        },
        {
          title: "Caring for Different Strap Materials",
          text: "Leather, rubber, and metal bracelets each require different cleaning and storage methods to last longer.",
        },
        {
          title: "Protecting Your Movement from Magnetic Fields",
          text: "Smartphones, speakers, and magnetic bag closures can all affect accuracy — learn how to avoid and reverse magnetisation.",
        },
        {
          title: "Correct Habits for Crown and Pusher Operation",
          text: "Knowing when to screw down the crown and which hours to avoid when setting the date protects your movement long-term.",
        },
      ],
    },
    location: {
      eyebrow: "Visit Our Atelier",
      title: "Contact & Location",
      description:
        "Located on Huaihai Middle Road, our service center is convenient for diagnostics, consultation, and collection.",
      addressLabel: "Address",
      address: "No. 850 Huaihai Middle Road, Huangpu District, Shanghai",
      hoursLabel: "Business Hours",
      hours: "9:00 AM - 9:00 PM",
      phoneLabel: "Phone",
      phone: "021-54039803",
      amapButton: "Open in Amap",
      baiduButton: "Open in Baidu Map",
      mapLoading: "Loading Amap...",
      mapError: "Map failed to load. Please use the navigation buttons below.",
      mapMissingKeyTitle: "Amap key required",
      mapMissingKeyText: "Add `NEXT_PUBLIC_AMAP_KEY` and `NEXT_PUBLIC_AMAP_SECURITY_CODE` to `.env.local`.",
    },
    footer: {
      address: "No. 850 Huaihai Middle Road, Huangpu District, Shanghai",
      hours: "9:00 AM - 9:00 PM",
      phone: "Phone: 021-54039803",
      copyright: "© 2026 Shanghai Watch Service Center. All rights reserved.",
    },
  },
};

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}
