export const languages = {
  en: 'English',
  km: 'Khmer',
};

export type SupportedLanguage = keyof typeof languages;
export type Language = keyof typeof languages;

export const defaultLang = 'en';
export const showDefaultLang = true;


export const ui: Record<string, Record<string, string>> = {
  en: {
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.about.aboutus': 'About Us',
    'nav.about.mission': 'Mission & Vision',
    'nav.about.structure': 'C.T.C Structure',
    'nav.center.centermanagement':'Center Management',
    'nav.center.ourcenters':'Our Centers',
    'nav.center.ourservices':'Our Services',
    'nav.ourcenters':'Our Centers',
    'nav.contact': 'Contact',
    'nav.blog': 'Blog',
    'nav.news': 'News and Events',
    'footer.email': 'www.mptc.gov.kh',
    'footer.phonenumber': '1234',
    'footer.address': 'Building 13, Monivong Blvd, Sangkat Srah Chak, Khan Daun Penh Phnom Penh, Cambodia, 120210',
    'hero.title': 'Welcome to Our Blog',
    'hero.subtitle': 'Discover amazing stories and insights',
    'home.about': 'About Community Tech Center',
    'home.about.aboutus': 'About Us',
    'home.about.description': 'The Ministry of Post and Telecommunications, in collaboration with the Ministry of Education, Youth, and Sports, aims to enhance digital literacy in Cambodia through the establishment of 558 Community Technology Centers (C.T.C.s). The C.T.C.s are envisioned as hubs for digital knowledge and training, equipped with computer labs, training rooms, internet cafes, and postal offices. These centers, to be built in high schools across the country, are part of a broader initiative to foster a digital citizenry and workforce. By providing digital services and education, the Ministry hopes all high school students will have a base in digital science and technology by 2030.',
    'home.service': 'Operations of Community Technology Center',
    'home.service.description': 'C.T.C. offer four main functions for citizens and students in the community, like accesses to computers and the Internet, as well as training programming in digital skills and postal services.',
    'home.service.computerlab': 'Computer Lab',
    'home.service.computerlab.description': 'A space for teaching digital skills, both in person and online, and for hosting meetings.',
    'home.service.trainingroom': 'Traning Room',
    'home.service.trainingroom.description': 'A place for learning how to repair technology and for offering short courses on digital skills to local authorities and community members.',
    'home.service.postoffice': 'Post Office',
    'home.service.postoffice.description': 'Offers package services for sending and receiving items locally and internationally, along with other services for merchants, traders, and the community.',
    'home.service.publichall': 'Public Hall',
    'home.service.publichall.description': 'Provides access to computers and the Internet, allowing community members to find information on agriculture, business, and public services.',
    'home.center.description': 'The Ministry of Posts and Telecommunications, in collaboration with the Ministry of Education, Youth and Sports, plans to build and establish Community Technology Centers (C.T.C.) in 558 public high school campuses nationwide, of which 17 have now been established.',
    'about.title': 'About Us',
    'about.description': 'We are passionate about sharing knowledge and inspiring others through our writing.',
    'about.mission.title': 'Mission',
    'about.mission.description1': 'Provide digital technology skills training to promote digital literacy and digital transformation in schools and communities.',
    'about.mission.description2': 'Provides online public services, postal services, internet services and technology tools that serve to improve digital education and livelihoods of local people.',
    'about.vision.title': 'Vision',
    'about.vision.description': 'The vision of C.T.C. is to encourage people to take part in building a strong economy and digital society by teaching digital skills that can be used in everyday life in a responsible and effective way.',
    'about.structure': 'Structure Of CTC',
    'btn.learnmore':'Learn More →',
    'contact': 'Contact Information',
  },
  km: {
    'nav.home': 'ទំព័រដើម',
    'nav.about': 'អំពីពួកយើង',
    'nav.about.aboutus': 'អំពីសហគមន៍បច្ចេកវិទ្យា',
    'nav.about.mission': 'បេសកកម្ម & ចក្ខុវិស័យ',
    'nav.about.structure': 'រចនាសម្ព័ន្ធ ម.​ប.ស.',
    'nav.center.centermanagement': 'ការគ្រប់គ្រងមជ្ឈមណ្ឌល',
    'nav.center.ourcenters': 'អំពីមជ្ឈមណ្ឌលរបស់យើង',
    'nav.center.ourservices': 'អំពីសេវាកម្មរបស់យើង',
    'nav.ourcenters':'អំពីមជ្ឈមណ្ឌល',
    'nav.contact': 'ទំនាក់ទំនង',
    'nav.blog': 'ប្លុក',
    'nav.news': 'ព័ត៌មាន និង ព្រឹត្តិការណ៍',
    'hero.title': 'សូមស្វាគមន៍មកកាន់ប្លុករបស់យើង',
    'hero.subtitle': 'ស្វែងរករឿងរ៉ាវ និងគំនិតអស្ចារ្យ',
    'footer.email': 'www.mptc.gov.kh',
    'footer.phonenumber': '១២៣៤',
    'footer.address': 'អគារលេខ ១៣ មហាវិថីព្រះនរោត្តម រាជធានីភ្នំពេញ ព្រះរាជាណាចក្រកម្ពុជា ប្រអប់សំបុត្រលេខ ១២០១០',
    'home.about': 'អំពីមជ្ឈមណ្ឌលបច្ចេកវិទ្យាសហគមន៍',
    'home.about.aboutus': 'អំពីពួកយើង',
    'home.about.description': 'ក្រសួងប្រៃសណីយ៍ និងទូរគមនាគមន៍ សហការជាមួយក្រសួងអប់រំ យុវជន និងកីឡា មានគោលបំណងលើកកំពស់ចំណេះដឹងផ្នែកឌីជីថលនៅកម្ពុជា តាមរយៈការបង្កើតមជ្ឈមណ្ឌលបច្ចេកវិទ្យាសហគមន៍ (ម.ប.ស.) ចំនួន ៥៥៨។ ម.ប.ស. ត្រូវបានគេមើលឃើញថាជាមជ្ឈមណ្ឌលសម្រាប់ចំណេះដឹង និងការបណ្តុះបណ្តាលឌីជីថល ដែលបំពាក់ដោយបន្ទប់កុំព្យូទ័រ បន្ទប់បណ្តុះបណ្តាល ហាងកាហ្វេអ៊ីនធឺណិត និងការិយាល័យប្រៃសណីយ៍។ មជ្ឈមណ្ឌលទាំងនេះ ដែលត្រូវបានសាងសង់ឡើងនៅក្នុងវិទ្យាល័យទូទាំងប្រទេស  ដើម្បីលើកកម្ពស់ពលរដ្ឋឌីជីថល និងកម្លាំងការងារ។ តាមរយៈការផ្តល់សេវាឌីជីថល និងការអប់រំ ក្រសួងសង្ឃឹមថាសិស្សវិទ្យាល័យទាំងអស់នឹងមានមូលដ្ឋានលើវិទ្យាសាស្ត្រ និងបច្ចេកវិទ្យាឌីជីថលនៅឆ្នាំ 2030។',
    'home.service': 'ប្រតិបត្តិនៃមជ្ឈមណ្ឌលបច្ចេកវិទ្យាសហគមន៍',
    'home.service.description': 'ម. ប. ស. មានមុខងារសំខាន់ៗចំនួនបួន សម្រាប់ប្រជាពលរដ្ឋនិងសិស្សនៅសហគមន៍ចូលប្រើប្រាស់ កុំព្យូទ័រនិងអ៊ីនធឺណិត និងដូចជា សម្រាប់បណ្តុះបណ្តាលជំនាញបច្ចេកវិទ្យាឌីជីថលនឹងផ្តល់សេវាប្រៃសណីយ៍ជាដើម។',
    'home.service.computerlab': 'បន្ទប់កុំព្យូទ័រ',
    'home.service.computerlab.description': 'សម្រាប់បង្រៀនជំនាញបច្ចេកវិទ្យាឌីជីថលដោយផ្ទាល់ និងពីចម្ងាយ និងជាសាលប្រជុំ។',
    'home.service.trainingroom': 'បន្ទប់បណ្តុះបណ្តាល',
    'home.service.trainingroom.description': 'សម្រាប់បណ្តុះបណ្តាលជំនាញជួសជុលបរិក្ខារបច្ចេកវិទ្យា និងវគ្គខ្លីលើជំនាញបច្ចេកវិទ្យាឌីជីថល ដល់អាជ្ញាធរមូលដ្ឋាន និងប្រជាពលរដ្ឋក្នុងសហគមន៍។',
    'home.service.postoffice': 'ប៉ុស្តិ៍ប្រៃសណីយ៍',
    'home.service.postoffice.description': 'សម្រាប់ផ្តល់សេវាទទួល និងផ្ញើកញ្ចប់អីវ៉ាន់ក្នុង និងក្រៅប្រទេស ព្រមទាំងផ្តល់សេវាផ្សេងៗដល់ពាណិជ្ជករ អាជីវករ និងប្រជាពលរដ្ឋនៅ សហគមន៍។',
    'home.service.publichall': 'សាលសាធារណៈ',
    'home.service.publichall.description': 'សម្រាប់ប្រជាពលរដ្ឋនៅសហគមន៍អាចចូលប្រើប្រាស់កុំព្យូទ័រ និងអ៊ុនធឺណិត ដើម្បីស្វែងរកព័ត៌មានពាក់ព័ន្ធនឹងកសិកម្ម អាជីវកម្ម និងសេវាសាធារណៈអនឡាញ។',
    'home.center.description': 'ក្រសួងប្រៃសណីយ៍ និងទូរគមនាគមន៍ សហការជាមួយក្រសួងអប់រំ យុវជន និងកីឡា មានគម្រោងសាងសង់និងបង្កើតមជ្ឈមណ្ឌលបច្ចេកវិទ្យាសហគមន៍ (ម. ប. ស.) ក្នុងបរិវេណវិទ្យាល័យសាធារណៈនៅទូទាំងប្រទេស ចំនួន ៥៥៨ ដែលបច្ចុប្បន្នបានបង្កើតបាន ចំនួន ១៧។',
    'about.title': 'អំពីពួកយើង',
    'about.description': 'យើងមានចំណាប់អារម្មណ៍ក្នុងការចែករំលែកចំណេះដឹង និងបំផុសគំនិតដល់អ្នកដទៃតាមរយៈការសរសេររបស់យើង។',
    'about.mission.title': 'បេសកកម្ម',
    'about.mission.description1': 'ផ្តល់ការបណ្តុះបណ្តាលជំនាញបច្ចេកវិទ្យាឌីជីថល ដើម្បីជំរុញអក្ខរកម្មឌីជីថល និងបរិវត្តកម្មឌីជីថលនៅតាមសាលារៀន និងសហគមន៍ប្រកបដោយបរិយាបន្ន។',
    'about.mission.description2': 'ផ្តល់សេវាសាធារណៈអនឡាញ សេវាប្រៃសណីយ៍ សេវាអ៊ីនធឺណិត និងឧបករណ៍បច្ចេកវិទ្យាដែលបម្រើដល់ការលើកកម្ពស់ការអប់រំឌីជីថល និងជីវភាពប្រជាពលរដ្ឋនៅក្នុងមូលដ្ឋាន។',
    'about.vision.title': 'ចក្ខុវិស័យ',
    'about.vision.description': 'ចក្ខុវិស័យរបស់ ម.ប.ស. គឺលើកកម្ពស់ ការចូលរួមកសាងសេដ្ឋកិច្ច និងសង្គមឌីជីថលរបស់ប្រជាពលរដ្ឋក្នុងសហគមន៍ តាមរយៈការបណ្តះបណា្តល ជំនាញបេច្ចកវិទ្យាឌីជីថលសមា្រប់ប្រើបា្រស់ក្នុងជីវភាពរស់នៅប្រចាំថៃ្ងប្រកបដោយប្រសិទ្ធភាព និងការទទួលខុសតូ្រវខ្ពស់។',
    'about.structure': 'រចនាសម្ព័ន្ធ ម.​ប.ស',
    'btn.learnmore':'ស្វែងយល់បន្ថែម →',
    'contact': 'ព័ត៌មានទំនាក់ទំនង',
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