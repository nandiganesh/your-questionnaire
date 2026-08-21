export type QuestionType = 'multiple_choice' | 'short_text' | 'large_text' | 'two_option';

export interface BilingualText {
  en: string;
  mr: string;
}

export interface Question {
  id: number;
  text: BilingualText;
  type: QuestionType;
  options?: BilingualText[];
  placeholder?: string;
}

export const questions: Question[] = [
  {
    id: 1,
    text: { en: "What’s your favourite colour? 🎨", mr: "तुझा आवडता रंग कोणता? 🎨" },
    type: "multiple_choice",
    options: [
      { en: "Pink", mr: "गुलाबी" },
      { en: "Blue", mr: "निळा" },
      { en: "White", mr: "पांढरा" },
      { en: "Black", mr: "काळा" },
      { en: "Green", mr: "हिरवा" },
      { en: "Other", mr: "इतर" }
    ],
  },
  {
    id: 2,
    text: { en: "What’s your favourite movie? 🎬", mr: "तुझा आवडता चित्रपट कोणता? 🎬" },
    type: "short_text",
    placeholder: "मला सांग... / Tell me...",
  },
  {
    id: 3,
    text: { en: "What’s your favourite song? 🎧", mr: "तुझं आवडतं गाणं कोणतं? 🎧" },
    type: "short_text",
    placeholder: "जे गाणं तुझ्यासारखं वाटतं... / Any song that feels like you...",
  },
  {
    id: 4,
    text: { en: "What’s your favourite flower? 🌱", mr: "तुझं आवडतं फूल कोणतं? 🌱" },
    type: "multiple_choice",
    options: [
      { en: "Rose", mr: "गुलाब" },
      { en: "Jasmine", mr: "मोगरा" },
      { en: "Sunflower", mr: "सूर्यफूल" },
      { en: "Lily", mr: "लिली" },
      { en: "Tulip", mr: "ट्यूलिप" },
      { en: "Other", mr: "इतर" }
    ],
  },
  {
    id: 5,
    text: { en: "What’s your favourite food? 🥟", mr: "तुझा आवडता पदार्थ कोणता? 🥟" },
    type: "short_text",
    placeholder: "तुझा कम्फर्ट फूड... / Your comfort food...",
  },
  {
    id: 6,
    text: { en: "Coffee or Tea? 💭", mr: "कॉफी की चहा? 💭" },
    type: "two_option",
    options: [
      { en: "☕ Coffee", mr: "☕ कॉफी" },
      { en: "🍵 Tea", mr: "🍵 चहा" }
    ],
  },
  {
    id: 7,
    text: { en: "Sunrise or Sunset? ⛅", mr: "सूर्योदय की सूर्यास्त? ⛅" },
    type: "two_option",
    options: [
      { en: "🌅 Sunrise", mr: "🌅 सूर्योदय" },
      { en: "🌇 Sunset", mr: "🌇 सूर्यास्त" }
    ],
  },
  {
    id: 8,
    text: { en: "Beach or Mountains? 🎒", mr: "समुद्रकिनारा की डोंगर? 🎒" },
    type: "two_option",
    options: [
      { en: "🏖️ Beach", mr: "🏖️ समुद्रकिनारा" },
      { en: "🏔️ Mountains", mr: "🏔️ डोंगर" }
    ],
  },
  {
    id: 9,
    text: { en: "Cats or Dogs? 🐾", mr: "मांजर की कुत्रा? 🐾" },
    type: "two_option",
    options: [
      { en: "🐱 Cats", mr: "🐱 मांजर" },
      { en: "🐶 Dogs", mr: "🐶 कुत्रा" }
    ],
  },
  {
    id: 10,
    text: { en: "Sweet or Spicy? ✨", mr: "गोड की तिखट? ✨" },
    type: "two_option",
    options: [
      { en: "🍫 Sweet", mr: "🍫 गोड" },
      { en: "🌶️ Spicy", mr: "🌶️ तिखट" }
    ],
  },
  {
    id: 11,
    text: { en: "Texting or Calls? 📱", mr: "मेसेज की कॉल? 📱" },
    type: "two_option",
    options: [
      { en: "💬 Texting", mr: "💬 मेसेज" },
      { en: "📞 Calls", mr: "📞 कॉल" }
    ],
  },
  {
    id: 12,
    text: { en: "What’s your dream? ☁️", mr: "तुझं स्वप्न काय आहे? ☁️" },
    type: "large_text",
    placeholder: "तुला खरोखरच जे हवं आहे... / Tell me something you really want...",
  },
  {
    id: 13,
    text: { en: "What’s your best memory? 🎞️", mr: "तुझी सर्वात सुंदर आठवण कोणती? 🎞️" },
    type: "large_text",
    placeholder: "जी आठवण तुला विसरायची नाहीये... / A memory you never want to forget...",
  },
  {
    id: 14,
    text: { en: "What makes you smile when you're completely alone? 🌙", mr: "जेव्हा तू पूर्णपणे एकटी असतेस, तेव्हा तुला कशामुळे हसू येतं? 🌙" },
    type: "large_text",
    placeholder: "मला सांग... / Tell me...",
  },
  {
    id: 15,
    text: { en: "One last thing... what’s your bangle size? 👀", mr: "आणि शेवटी... तुझ्या बांगडीची साईझ काय आहे? 👀" },
    type: "short_text",
    placeholder: "तुझं उत्तर... / Your answer...",
  }
];
