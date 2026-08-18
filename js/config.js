export const siteConfig = {
  identity: {
    brand: "$DayOne",
    name: "DayOne",
    tagline: "Still building."
  },
  token: {
    name: "$DayOne",
    address: "",
    tokenUrl: "",
    explorerUrl: ""
  },
  socials: [
    { id: "x", label: "X", url: "#", icon: "↗" },
    { id: "telegram", label: "Telegram", url: "#", icon: "↗" },
    { id: "instagram", label: "Instagram", url: "#", icon: "↗" }
  ],
  builders: [
    { id: "miner", name: "Miner", oneLiner: "Still digging.", asset: "assets/miner.webp" },
    { id: "bruno", name: "Bruno", oneLiner: "Still building.", asset: "assets/bruno.webp" },
    { id: "stakey", name: "Stakey", oneLiner: "Still standing.", asset: "assets/stakey.webp" }
  ],
  status: [
    { label: "WEBSITE", value: "LIVE" },
    { label: "TOKEN", value: "LIVE" },
    { label: "SOCIALS", value: "LIVE" }
  ],
  faq: [
    {
      question: "What is $DayOne?",
      answer: "$DayOne is a memecoin built around the idea of still building."
    },
    {
      question: "Is the project finished?",
      answer: "No. The identity is intentionally built around the work-in-progress state."
    },
    {
      question: "Where can I find the community?",
      answer: "Use the social links on this page when the official destinations are configured."
    },
    {
      question: "Where is the contract?",
      answer: "The official contract address will be supplied through the project configuration when ready."
    }
  ],
  buildLog: []
};
