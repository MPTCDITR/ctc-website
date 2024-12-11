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
    'blog.title': 'Latest Posts',
    'blog.post1.title': 'Getting Started with Web Development',
    'blog.post1.description': 'Learn the basics of web development and start your journey.',
    'blog.post2.title': 'The Future of AI',
    'blog.post2.description': 'Exploring the latest trends in artificial intelligence.',
    'blog.post3.title': 'Productivity Tips',
    'blog.post3.description': 'Boost your productivity with these proven techniques.',
    'contact.title': 'Get in Touch',
    'contact.description': 'Have questions? We\'d love to hear from you.',
    'contact.form.name': 'Name',
    'contact.form.email': 'Email',
    'contact.form.message': 'Message',
    'contact.form.submit': 'Send Message',
  },
  km: {
    'nav.home': 'ទំព័រដើម',
    'nav.about': 'អំពីពួកយើង',
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
    'blog.title': 'ការបោះពុម្ពថ្មីៗ',
    'blog.post1.title': 'ចាប់ផ្តើមជាមួយការអភិវឌ្ឍន៍វេបសាយ',
    'blog.post1.description': 'សូមរៀនមូលដ្ឋាននៃការអភិវឌ្ឍន៍វេបសាយ និងចាប់ផ្តើមដំណើររបស់អ្នក។',
    'blog.post2.title': 'អនាគតនៃ IA',
    'blog.post2.description': 'ស្វែងរកនិន្នាការថ្មីៗនៅក្នុងបច្ចេកវិទ្យាបញ្ញាសិប្បនិម្មិត។',
    'blog.post3.title': 'គន្លឹះសម្រាប់ការផលិតភាព',
    'blog.post3.description': 'បង្កើនផលិតភាពរបស់អ្នកជាមួយនឹងបច្ចេកទេសដែលបានសាកល្បង។',
    'contact.title': 'ទំនាក់ទំនងមកយើង',
    'contact.description': 'តើអ្នកមានសំណួរអ្វីទេ? យើងចង់ឮពីអ្នក។',
    'contact.form.name': 'ឈ្មោះ',
    'contact.form.email': 'អ៊ីមែល',
    'contact.form.message': 'សារប្រាប់',
    'contact.form.submit': 'ផ្ញើសារ',
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