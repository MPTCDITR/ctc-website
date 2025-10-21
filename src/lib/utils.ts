import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

function convertMonthToKhmer(monthName) {
  const monthMap = {
    January: 'មករា',
    February: 'កុម្ភៈ',
    March: 'មីនា',
    April: 'មេសា',
    May: 'មិថុនា',
    June: 'មិថុនា',
    July: 'កក្កដា',
    August: 'សីហា',
    September: 'កញ្ញា',
    October: 'តុលា',
    November: 'វិច្ឆិកា',
    December: 'ធ្នូ',
  };

  return monthMap[monthName] || monthName; // Return the Khmer name or the original if not found
}

export function convertNumberToKhmer(number) {
  const khmerDigits = ['០', '១', '២', '៣', '៤', '៥', '៦', '៧', '៨', '៩'];
  return number.toString().split('').map(digit => khmerDigits[parseInt(digit)]).join('');
}

export function formatDate(dateString: string, lang: string = 'en') {
  const date = new Date(dateString); 
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  if (lang === 'km') {
    const formattedDate = new Intl.DateTimeFormat('en', options).format(date);
    const [monthName, day, year] = formattedDate.split(' ');

    // Convert month to Khmer
    const khmerMonth = convertMonthToKhmer(monthName);
    
    // Convert day and year to Khmer digits
    const khmerDay = convertNumberToKhmer(day.replace(',', '')); // Remove comma from day
    const khmerYear = convertNumberToKhmer(year);

    return ` ${khmerDay} ${khmerMonth}, ${khmerYear}`;
  } else {
    return new Intl.DateTimeFormat('en-GB', options).format(date);
  }
}


export const formatDistanceToNow = (date: Date | number): string => {
  const now = new Date();
  const targetDate = new Date(date);
  const seconds = Math.floor((now.getTime() - targetDate.getTime()) / 1000);

  let interval = Math.floor(seconds / 31536000); // Years
  if (interval >= 1) {
    return interval === 1 ? '1 year ago' : `${interval} years ago`;
  }

  interval = Math.floor(seconds / 2592000); // Months
  if (interval >= 1) {
    return interval === 1 ? '1 month ago' : `${interval} months ago`;
  }

  interval = Math.floor(seconds / 86400); // Days
  if (interval >= 1) {
    return interval === 1 ? '1 day ago' : `${interval} days ago`;
  }

  interval = Math.floor(seconds / 3600); // Hours
  if (interval >= 1) {
    return interval === 1 ? '1 hour ago' : `${interval} hours ago`;
  }

  interval = Math.floor(seconds / 60); // Minutes
  if (interval >= 1) {
    return interval === 1 ? '1 minute ago' : `${interval} minutes ago`;
  }

  return seconds === 1 ? '1 second ago' : `${seconds} seconds ago`;
};
