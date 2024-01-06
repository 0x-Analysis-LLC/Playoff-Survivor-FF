import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Function to determine the current playoff round
export function getCurrentRound(): string | null {
  const currentDate = new Date();
  // Example logic based on specific dates
  // Update these dates according to your playoff schedule
  const rounds = [
    { start: new Date('2024-01-01'), end: new Date('2024-01-09'), round: 'draft' },//Draft
    { start: new Date('2024-01-10'), end: new Date('2024-01-16'), round: 'wc' }, // Wildcard round
    { start: new Date('2024-01-17'), end: new Date('2024-01-23'), round: 'div' }, // Divisional round
    { start: new Date('2024-01-24'), end: new Date('2024-01-30'), round: 'conf' }, // Conference Championship
    { start: new Date('2024-01-31'), end: new Date('2024-02-13'), round: 'sb' } // Super Bowl
  ];

  for (const { start, end, round } of rounds) {
    if (currentDate >= start && currentDate <= end) {
      return round;
    }
  }

  return null; // Return null if no round matches
}
