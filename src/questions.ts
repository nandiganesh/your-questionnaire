export type QuestionType = 'multiple_choice' | 'short_text' | 'large_text' | 'two_option';

export interface Question {
  id: number;
  text: string;
  type: QuestionType;
  options?: string[];
  placeholder?: string;
  hasOtherOption?: boolean;
}

export const questions: Question[] = [
  {
    id: 1,
    text: "तुझा आवडता रंग कोणता? 🎨",
    type: "multiple_choice",
    options: ["गुलाबी", "निळा", "पांढरा", "काळा", "हिरवा", "इतर"],
  },
  {
    id: 2,
    text: "तुझा आवडता चित्रपट कोणता? 🎬",
    type: "short_text",
    placeholder: "मला सांग...",
  },
  {
    id: 3,
    text: "तुझं आवडतं गाणं कोणतं? 🎧",
    type: "short_text",
    placeholder: "असं कोणतंही गाणं जे तुझ्यासारखं वाटतं...",
  },
  {
    id: 4,
    text: "तुझं आवडतं फूल कोणतं? 🌱",
    type: "multiple_choice",
    options: ["गुलाब", "मोगरा", "सूर्यफूल", "लिली", "ट्यूलिप", "इतर"],
  },
  {
    id: 5,
    text: "तुझा आवडता पदार्थ कोणता? 🥟",
    type: "short_text",
    placeholder: "तुझा कम्फर्ट फूड...",
  },
  {
    id: 6,
    text: "कॉफी की चहा? 💭",
    type: "two_option",
    options: ["☕ कॉफी", "🍵 चहा"],
  },
  {
    id: 7,
    text: "सूर्योदय की सूर्यास्त? ⛅",
    type: "two_option",
    options: ["🌅 सूर्योदय", "🌇 सूर्यास्त"],
  },
  {
    id: 8,
    text: "समुद्रकिनारा की डोंगर? 🎒",
    type: "two_option",
    options: ["🏖️ समुद्रकिनारा", "🏔️ डोंगर"],
  },
  {
    id: 9,
    text: "मांजर की कुत्रा? 🐾",
    type: "two_option",
    options: ["🐱 मांजर", "🐶 कुत्रा"],
  },
  {
    id: 10,
    text: "गोड की तिखट? ✨",
    type: "two_option",
    options: ["🍫 गोड", "🌶️ तिखट"],
  },
  {
    id: 11,
    text: "मेसेज की कॉल? 📱",
    type: "two_option",
    options: ["💬 मेसेज", "📞 कॉल"],
  },
  {
    id: 12,
    text: "तुझं स्वप्न काय आहे? ☁️",
    type: "large_text",
    placeholder: "अशी एखादी गोष्ट सांग जी तुला खरोखरच हवी आहे...",
  },
  {
    id: 13,
    text: "तुझी सर्वात सुंदर आठवण कोणती? 🎞️",
    type: "large_text",
    placeholder: "अशी एक आठवण जी तुला कधीच विसरायची नाहीये...",
  },
  {
    id: 14,
    text: "जेव्हा तू पूर्णपणे एकटी असतेस, तेव्हा तुला कशामुळे हसू येतं? 🌙",
    type: "large_text",
    placeholder: "मला सांग...",
  },
  {
    id: 15,
    text: "आणि शेवटी... तुझ्या बांगडीची साईझ काय आहे? 👀",
    type: "short_text",
    placeholder: "तुझं उत्तर...",
  }
];
