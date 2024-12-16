export const languages = {
  en: 'English',
  km: 'Khmer',
};

export type SupportedLanguage = keyof typeof languages;
export type Language = keyof typeof languages;

export const defaultLang = 'en';
export const showDefaultLang = true;


export const ui = {
  en: {
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.about.aboutus': 'About Us',
    'nav.about.mission': 'Mission & Vision',
    'nav.about.structure': 'Structure C.T.C',
    'nav.ourcenters':'Our Centers',
    'nav.contact': 'Contact',
    'nav.blog': 'Blog',
    'nav.news': 'News and Events',
    'hero.title': 'Welcome to Our Blog',
    'hero.subtitle': 'Discover amazing stories and insights',
    'about.title': 'About Us',
    'about.description': 'We are passionate about sharing knowledge and inspiring others through our writing.',
    'about.mission.title': 'Our Mission',
    'about.mission.description': 'To create a platform where ideas flourish and knowledge is shared freely.',
    'about.vision.title': 'Our Vision',
    'about.vision.description': 'To build a global community of learners and thought leaders.',
    'btn.learnmore':'Learn More →'
  },
  km: {
    'nav.home': 'ទំព័រដើម',
    'nav.about': 'អំពីពួកយើង',
    'nav.about.aboutus': 'អំពីសហគមន៍បច្ចេកវិទ្យា',
    'nav.about.mission': 'បេសកកម្ម & ចក្ខុវិស័យ',
    'nav.about.structure': 'រចនាសម្ព័ន្ធ ម.​ប.ស',
    'nav.ourcenters':'អំពីមជ្ឈមណ្ឌល',
    'nav.contact': 'ទំនាក់ទំនង',
    'nav.blog': 'ប្លុក',
    'nav.news': 'ព័ត៌មាន និង ព្រឹត្តិការណ៍',
    'hero.title': 'សូមស្វាគមន៍មកកាន់ប្លុករបស់យើង',
    'hero.subtitle': 'ស្វែងរករឿងរ៉ាវ និងគំនិតអស្ចារ្យ',
    'about.title': 'អំពីពួកយើង',
    'about.description': 'យើងមានចំណាប់អារម្មណ៍ក្នុងការចែករំលែកចំណេះដឹង និងបំផុសគំនិតដល់អ្នកដទៃតាមរយៈការសរសេររបស់យើង។',
    'about.mission.title': 'បេសកកម្មរបស់យើង',
    'about.mission.description': 'បង្កើតវេទិកាដែលគំនិតអាចរីកចម្រើន និងចំណេះដឹងអាចចែករំលែកបានយ៉ាងសេរី។',
    'about.vision.title': 'ទស្សនៈរបស់យើង',
    'about.vision.description': 'សាងសង់សហគមន៍អន្តរជាតិនៃអ្នករៀន និងមេដឹកនាំគំនិត។',
    'btn.learnmore':'ស្វែងយល់បន្ថែម →'
}
} as const;



export const routes = {
  en: {
    'news': 'news',
    'contact':'contact'
  },
  km: {
    'news': 'news',
    'contact':'contact'
  },
}