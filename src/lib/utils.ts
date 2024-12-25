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
  const date = new Date(dateString); // Parse the date string in YYYY-MM-DD format
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

    return `${khmerMonth} ${khmerDay}, ${khmerYear}`;
  } else {
    return new Intl.DateTimeFormat(lang, options).format(date);
  }
}