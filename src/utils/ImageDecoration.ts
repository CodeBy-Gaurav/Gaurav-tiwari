export interface DecorationInfo {
  name: string;
  image: string;
  tooltip: string;
}

export function getDailyDecoration(): DecorationInfo {
  const day = new Date().getDay(); // 0 is Sunday
  switch (day) {
    case 0:
      return { name: 'Soul Leaving Body', image: '/images/profile/pfp-latest.jpg', tooltip: 'Sunday Vibe' };
    case 1:
    case 3:
      return { name: 'Cyber Katana', image: '/images/profile/pfp-latest.jpg', tooltip: 'Focus Mode' };
    case 2:
    case 4:
      return { name: 'Candlelight Dark', image: '/images/profile/pfp-latest.jpg', tooltip: 'Deep Work' };
    case 5:
      return { name: 'Shy', image: '/images/profile/pfp-latest.jpg', tooltip: 'Weekend Approaching' };
    case 6:
    default:
      return { name: 'Blossom Burst', image: '/images/profile/pfp-latest.jpg', tooltip: 'Weekend Creation' };
  }
}
