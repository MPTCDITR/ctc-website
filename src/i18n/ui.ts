export const languages = {
  en: "English",
  km: "Khmer",
};

export type SupportedLanguage = keyof typeof languages;
export type Language = keyof typeof languages;

export const defaultLang = "en";
export const showDefaultLang = true;

export const ui: Record<string, Record<string, string>> = {
  en: {
    communitytechcenter: "Community Tech Center",
    "nav.home": "Home",
    "nav.about": "About",
    "nav.about.aboutus": "About C.T.C.",
    "nav.about.mission": "Mission & Vision",
    "nav.about.structure": "C.T.C. Structure",
    "nav.center.ourlocations": "Our Locations",
    "nav.center.ourctc": "Our C.T.C. ",
    "nav.center.ourfunctionalities": "Our Functionalities",
    "nav.ourcenters": "Our Centers",
    "nav.contact": "Contact",
    "nav.blog": "Blog",
    "nav.news": "Media Hub",
    "nav.news-event": "News & Events",
    "nav.news-media": "Videos & Media",
    "nav.ctc": "Member",

    "footer.email": "www.mptc.gov.kh",
    "footer.phoneNumber": "1234",
    "footer.address":
      "Building 13, Monivong Blvd, Sangkat Srah Chak, Khan Daun Penh Phnom Penh, Cambodia, 120210",
    "footer.quicklink": "Quick Links",
    "footer.otherlink": "Other Links",
    "footer.mptc": "Ministry Of Post And Telecommunications",
    "footer.moeys": "Ministry of Education, Youth and Sports",
    "hero.title": "Welcome to Our Blog",
    "hero.subtitle": "Discover amazing stories and insights",
    "home.hero.ctc.description":
      "Empowering communities through technology and innovation",
    "home.about": "About Community Tech Center",
    "home.about.aboutus": "About Us",
    "home.about.description":
      "The Ministry of Post and Telecommunications, in collaboration with the Ministry of Education, Youth, and Sports, aims to enhance digital literacy in Cambodia through the establishment of 558 Community Tech Centers (C.T.C.s). The C.T.C.s are envisioned as hubs for digital knowledge and training, equipped with computer labs, training rooms, internet cafes, and postal offices. These centers, to be built in high schools across the country, are part of a broader initiative to foster a digital citizenry and workforce. By providing digital services and education, the Ministry hopes all high school students will have a base in digital science and technology by 2030.",
    "home.viewallvideo": "View All Video",
    "home.service": "Operations of Community Tech Center",
    "home.service.description":
      "C.T.C. offer four main functions for citizens and students in the community, like accesses to computers and the Internet, as well as training programming in digital skills and postal services.",
    "home.service.computerlab": "Computer Lab",
    "home.service.computerlab.description":
      "A space for teaching digital skills, both in person and online, and for hosting meetings.",
    "home.service.trainingroom": "Training Room",
    "home.service.trainingroom.description":
      "A place for learning how to repair technology and for offering short courses on digital skills to local authorities and community members.",
    "home.service.postoffice": "Post Office",
    "home.service.postoffice.description":
      "Offers package services for sending and receiving items locally and internationally, along with other services for merchants, traders, and the community.",
    "home.service.publichall": "Public Hall",
    "home.service.publichall.description":
      "Provides access to computers and the Internet, allowing community members to find information on agriculture, business, and public services.",
    "home.center.description":
      "The Ministry of Posts and Telecommunications, in collaboration with the Ministry of Education, Youth and Sports, plans to build and establish Community Tech Centers (C.T.C.) in 558 public high school campuses nationwide, of which 21 have now been established.",
    "home.center.viewalllocations": "View All Locations",
    "home.latest.newsandevents": "Latest News and Events",
    "home.latest.newsandevents.description":
      "Stay updated with the latest happenings at Community Tech Center. From new course offerings to community events, there's always something exciting on the horizon.",
    "home.loadmorenews": "Load More News",
    "home.viewallnews": "View All News",
    "about.title": "About Us",
    "about.description":
      "We are passionate about sharing knowledge and inspiring others through our writing.",
    "about.mission.title": "Mission",
    "about.mission.description1":
      "Provide digital technology skills training to promote digital literacy and digital transformation in schools and communities.",
    "about.mission.description2":
      "Provides online public services, postal services, internet services and technology tools that serve to improve digital education and livelihoods of local people.",
    "about.vision.title": "Vision",
    "about.vision.description":
      "The vision of C.T.C. is to encourage people to take part in building a strong economy and digital society by teaching digital skills that can be used in everyday life in a responsible and effective way.",
    "about.structure": "Structure Of CTC",
    "about.structure.description":
      "In order to achieve the vision and mission, C.T.C. established and operated in public high schools with a national board, management committee and operational staff",
    "about.structure.description2":
      "The C.T.C. National Broad overseeing all the C.T.C. and are responsible for the implementation of strategies, ensuring transparency, managing resources, developing and collaborating with relevant parties to enhance partnerships, monitoring and approving work plans and budgets, and tracking implementation. The board also prepares progress reports for the Royal Government of Cambodia and fulfills important responsibilities.",
    "about.structure.ctcnational.board": "C.T.C. National Board",
    "about.structure.ctcnational.board.description":
      "The C.T.C. National Broad is led by the Minister of Post and Telecommunications, and composed of representatives from the Ministry of Education, Sport and Youth, the Ministry of Post and telecommunications, and Chief of the Secretariat.",
    "about.ctc.title": "About the Community Tech Center",
    "about.ctc.paragraph1":
      "The seventh mandate of the National Assembly has been and is highly attentive to the digital economic and social transformation as a whole through the issuance of the “Phase 1 Rectangular Strategy.” Specifically, the government has prioritized five key areas: “People, Roads, Water, Electricity, and Technology” as the foundation and important means to achieve Cambodia’s vision for 2050. The addition of “Technology,” especially “Digital Technology,” as a new key priority confirms that the government considers digital technology as a new catalyst of significant importance, potential, and innovation in driving economic and social productivity growth, as well as administrative efficiency. It also serves as a guiding policy framework for directing and promoting the implementation of the “Digital Economy and Society Policy Framework for Cambodia 2021-2035,” which is a guiding roadmap for the development and operation of digital transformation in Cambodia, and the “Digital Government Policy of Cambodia 2022-2035,” aimed at fully implementing digital government transformation.",
    "about.ctc.paragraph2":
      "In the effort to promote the building of digital human resources to implement the Digital Economy and Society Policy Framework for Cambodia 2021-2035 and the Digital Government Policy of Cambodia 2022-2035, particularly the participation in implementing the Phase 1 Rectangular Strategy, which has identified technology, especially digital technology, as the fifth key priority, the Ministry of Posts and Telecommunications (MPTC) has established a project to build Community Tech Centers at public schools to fulfill the mission of initiating digital transformation for education, which will contribute to the development of digital human resources and the digital future of Cambodia. This project reflects the long-term vision of MPTC, focusing on the development of human resources in digital technology skills at the secondary education level. The Community Tech Center (CTC) will become a center for training related to digital technology skills and providing postal services to citizens in the community, especially to students and the general public living in the area, with the aim of promoting digital human resource training, enhancing digital literacy, and reducing the digital divide in a supportive and innovative community.",
    "about.ctc.paragraph3":
      "The Community Tech Center, abbreviated as “CTC,” has been initiated by the Ministry of Posts and Telecommunications (MPTC) in collaboration with the Ministry of Education, Youth, and Sports (MoEYS) to provide training in digital skills, enhance digital literacy, and reduce the digital divide in the community in a supportive and innovative environment. The CTC has four main functions: (1) a Computer Lab for teaching digital technology skills both in-person and remotely, and serving as a meeting room; (2) a Training Room for training in technology equipment repair skills and short courses on digital technology skills for local authorities and citizens in the community; (3) a Post Office for providing services to receive and send packages domestically and internationally, as well as offering various services to traders, entrepreneurs, and citizens in the community; and (4) a Public Hall for community citizens to access computers and the internet to seek information related to agriculture, business, and online public services, among others.",
    "about.ctc.paragraph4":
      "With the official launch of the CTC, starting from the public school in Takeo province, MPTC plans to expand the operational scope of CTCs to public schools in other provinces of the Kingdom of Cambodia.",
    "about.ctc.paragraph5":
      "In recent years, digital technology in Cambodia has seen rapid and remarkable growth. However, Cambodias readiness to seize the digital sector faces many challenges that require active participation from relevant stakeholders, especially the need for knowledgeable human resources and sufficient digital skills. The CTC plays a crucial role in transforming Cambodian citizens into digital citizens by promoting the adoption of digital technology for daily living, characterized by efficiency and high accountability. In this spirit, the preparation of an operational policy book for the CTC is an essential task that cannot be overlooked to ensure that the functions of the CTC can effectively respond to the training and emerging needs of students and citizens in the community.",
    "center.computerlab.description1":
      "The computer lab is a place for digital technology skills training and online teaching for public high school students, as well as a meeting room and online teacher training hall.",
    "center.computerlab.description2":
      "The computer room is equipped with computer, TV, high speed internet and some technological equipment as needed.",
    "center.trainingroom.description1":
      "The training room is a place for digital skills training for local authorities and people in the community who wish to use the technology for various purposes.",
    "center.trainingroom.description2":
      "The training room are equipped with computer and high speed internet as well as some technological equipment as needed.",
    "center.publichall.description1":
      "Public halls provide internet access to people in the community who can access to find information related to agriculture, business and other information related to the specific needs of the people in each community.",
    "center.publichall.description2":
      "Public halls are equipped with computers and high-speed internet, as well as some technological equipment as needed.",
    "center.postoffice.description1":
      "Post Office is a place to receive and send packages and provide other services to merchants, traders and local people. It is also a place to provide telephone repair services, supply of telecommunication equipment and equip digital equipments such as printers, photocopiers and cameras.",
    "center.functionality.description":
      "The Community Tech Center has four main functions: (1) a Computer Lab for teaching digital technology skills in person and remotely and as a meeting room; (2) a Training Room for training in technology equipment repair skills and short courses on digital technology skills to local authorities and community residents; (3) a Post Office for providing services to receive and send packages domestically and internationally as well as providing other services to traders, businessmen and residents in the community; and (4) a Public Hall for community residents to access computers and the Internet to find information related to agriculture, business, and online public services.",
    "our.ctc.title": "Community Tech Center Locations",
    "our.ctc.description":
      "The official and first launch of the C.T.C. starting with public high schools in Takeo Province, is planned to expand the scope of C.T.C. operations to public high schools in other provinces of the Kingdom of Cambodia.",
    "our.ctc.allinfo.title": "Search for Centers Information",
    "our.ctc.allinfo.description":
      "Overview of our tech centers across Cambodia, including learning program, operation details, and center-specific information.",
    "ctc.management.title": "Community Tech Center Management and Operation",
    "ctc.management.description":
      " Overview information of our technology centers, with providing detailed insights into the management structures, the roles and responsibilities of operational staff, as well as specific contact information of operational member, and community information.",
    "ctc.teaminfo.title": "Title and Position ",
    "ctc.teaminfo.name": "Name",
    "ctc.teaminfo.role": " Role",
    "ctc.teaminfo.phoneNumber": "Phone Number",
    "ctc.teaminfo.email": "Email",
    "btn.learnmore": "Learn More →",
    "btn.next": "Next",
    "btn.previous": "Previous",
    "ctc.centerinfo.title": "Center Information",
    "ctc.centerinfo.contact": "Contact Information",
    "ctc.centerinfo.viewmap": "View on Google Maps",
    "ctc.centerinfo.facilities": "Facilities",
    contact: "Contact Information",
    "blog.readmore": "Read More",
    "blog.list.description":
      "Find updates on the latest happenings, initiatives, and activities within the center and the highlights upcoming workshops, training sessions, community gatherings, and technology-related events aimed at fostering engagement and learning among community members.",
    "videos.list.description":
      "Enjoy our Community Tech Centers (C.T.C) videos! Through engaging tutorials and media content, we highlight the innovative programs available at our C.T.C.s in high schools nationwide. Join us in fostering digital literacy and skills among students, preparing them for the digital age.",
  },
  km: {
    communitytechcenter: "មជ្ឈមណ្ឌលបច្ចេកវិទ្យាសហគមន៍",
    "nav.home": "ទំព័រដើម",
    "nav.about": "ទិន្នន័យសង្ខេប",
    "nav.about.aboutus": "អំពី ម.ប.ស",
    "nav.about.mission": "បេសកកម្ម & ចក្ខុវិស័យ",
    "nav.about.structure": "រចនាសម្ព័ន្ធ ម.ប.ស",
    "nav.center.centermanagement": "ការគ្រប់គ្រងមជ្ឈមណ្ឌល",
    "nav.center.ourcenters": "អំពីមជ្ឈមណ្ឌលរបស់យើង",
    "nav.center.ourservices": "អំពីមុខងាររបស់យើង",
    "nav.center.ourlocations": "ទីតាំងមជ្ឈមណ្ឌលរបស់យើង",
    "nav.center.ourctc": "មជ្ឈមណ្ឌលរបស់យើង",
    "nav.center.ourfunctionalities": "មុខងាររបស់យើង",
    "nav.ourcenters": "អំពីមជ្ឈមណ្ឌល",
    "nav.contact": "ទំនាក់ទំនង",
    "nav.blog": "ប្លុក",
    "nav.news": "ព័ត៌មាន",
    "nav.news-event": "អត្ថបទព័ត៌មាន និង ព្រឹត្តិការណ៍",
    "nav.news-media": "វីដេអូ និង ការផ្សព្វផ្សាយ",
    "nav.ctc": "សមាជិក",

    "hero.title": "សូមស្វាគមន៍មកកាន់ប្លុករបស់យើង",
    "hero.subtitle": "ស្វែងរករឿងរ៉ាវ និងគំនិតអស្ចារ្យ",
    "footer.quicklink": "បញ្ជាប់រហ័ស",
    "footer.otherlink": "តំណភ្ជាប់ផ្សេងទៀត",
    "footer.mptc": "ក្រសួងប្រៃសណីយ៍និងទូរគមនាគមន៍",
    "footer.moeys": "ក្រសួងអប់រំ យុវជន និងកីឡា",
    "footer.email": "www.mptc.gov.kh",
    "footer.phoneNumber": "១២៣៤",
    "footer.address":
      "អគារលេខ ១៣ មហាវិថីព្រះនរោត្តម រាជធានីភ្នំពេញ ព្រះរាជាណាចក្រកម្ពុជា ប្រអប់សំបុត្រលេខ ១២០១០",
    "home.hero.ctc.description":
      "ពង្រឹងសហគមន៍តាមរយៈបច្ចេកវិទ្យា និងការច្នៃប្រឌិត",
    "home.about": "អំពីមជ្ឈមណ្ឌលបច្ចេកវិទ្យាសហគមន៍",
    "home.about.aboutus": "អំពីពួកយើង",
    "home.about.description":
      "ក្រសួងប្រៃសណីយ៍ និងទូរគមនាគមន៍ សហការជាមួយក្រសួងអប់រំ យុវជន និងកីឡា មានគោលបំណងលើកកំពស់ចំណេះដឹងផ្នែកឌីជីថលនៅកម្ពុជា តាមរយៈការបង្កើតមជ្ឈមណ្ឌលបច្ចេកវិទ្យាសហគមន៍ (ម.ប.ស.) ចំនួន ៥៥៨   កន្លែង។ ម.ប.ស. ត្រូវបានគេមើលឃើញថាជាមជ្ឈមណ្ឌលសម្រាប់ចំណេះដឹង និងការបណ្តុះបណ្តាលឌីជីថល ដែលបំពាក់ដោយបន្ទប់កុំព្យូទ័រ បន្ទប់បណ្តុះបណ្តាល ហាងកាហ្វេអ៊ីនធឺណិត និងការិយាល័យប្រៃសណីយ៍។ មជ្ឈមណ្ឌលទាំងនេះ ដែលត្រូវបានសាងសង់ឡើងនៅក្នុងវិទ្យាល័យទូទាំងប្រទេស ដើម្បីលើកកម្ពស់ពលរដ្ឋឌីជីថល និងកម្លាំងការងារ។ តាមរយៈការផ្តល់សេវាឌីជីថល និងការអប់រំ ក្រសួងសង្ឃឹមថាសិស្សវិទ្យាល័យទាំងអស់នឹងមានមូលដ្ឋានលើវិទ្យាសាស្ត្រ និងបច្ចេកវិទ្យាឌីជីថលនៅឆ្នាំ ២០៣០។",
    "home.viewallvideo": "មើលវីដេអូទាំងអស់",
    "home.service": "ប្រតិបត្តិនៃមជ្ឈមណ្ឌលបច្ចេកវិទ្យាសហគមន៍",
    "home.service.description":
      "ម.ប.ស. មានមុខងារសំខាន់ៗចំនួនបួន សម្រាប់ប្រជាពលរដ្ឋ និងសិស្សនៅសហគមន៍ចូលប្រើប្រាស់ កុំព្យូទ័រនិង អ៊ីនធឺណិត និងសម្រាប់បណ្តុះបណ្តាលជំនាញបច្ចេកវិទ្យាឌីជីថល  និងផ្តល់សេវាប្រៃសណីយ៍ជាដើម។",
    "home.service.computerlab": "បន្ទប់កុំព្យូទ័រ",
    "home.service.computerlab.description":
      "សម្រាប់បង្រៀនជំនាញបច្ចេកវិទ្យាឌីជីថលដោយផ្ទាល់ និងពីចម្ងាយ និងជាសាលប្រជុំ។",
    "home.service.trainingroom": "បន្ទប់បណ្តុះបណ្តាល",
    "home.service.trainingroom.description":
      "សម្រាប់បណ្តុះបណ្តាលជំនាញជួសជុលបរិក្ខារបច្ចេកវិទ្យា និងវគ្គខ្លីលើជំនាញបច្ចេកវិទ្យាឌីជីថល ដល់អាជ្ញាធរមូលដ្ឋាន និងប្រជាពលរដ្ឋក្នុងសហគមន៍។",
    "home.service.postoffice": "ប៉ុស្តិ៍ប្រៃសណីយ៍",
    "home.service.postoffice.description":
      "សម្រាប់ផ្តល់សេវាទទួល និងផ្ញើកញ្ចប់អីវ៉ាន់ក្នុង និងក្រៅប្រទេស ព្រមទាំងផ្តល់សេវាផ្សេងៗដល់ពាណិជ្ជករ អាជីវករ និងប្រជាពលរដ្ឋនៅសហគមន៍។",
    "home.service.publichall": "សាលសាធារណៈ",
    "home.service.publichall.description":
      "សម្រាប់ប្រជាពលរដ្ឋនៅសហគមន៍អាចចូលប្រើប្រាស់កុំព្យូទ័រ និងអ៊ីនធឺណិត ដើម្បីស្វែងរកព័ត៌មានពាក់ព័ន្ធនឹងកសិកម្ម អាជីវកម្ម និងសេវាសាធារណៈអនឡាញ។",
    "home.center.description":
      "ក្រសួងប្រៃសណីយ៍ និងទូរគមនាគមន៍ សហការជាមួយក្រសួងអប់រំ យុវជន និងកីឡា មានគម្រោងសាងសង់ និងបង្កើតមជ្ឈមណ្ឌលបច្ចេកវិទ្យាសហគមន៍ (ម.ប.ស.) ក្នុងបរិវេណវិទ្យាល័យសាធារណៈនៅទូទាំងប្រទេស ចំនួន ៥៥៨កន្លែង ដែលបច្ចុប្បន្នបានបង្កើតបាន ចំនួន ២១កន្លែង។",
    "home.center.viewalllocations": "មើលទីតាំងទាំងអស់",
    "home.latest.newsandevents": "ព័ត៌មាន និង ព្រឹត្តិការណ៍ថ្មីៗ",
    "home.latest.newsandevents.description":
      "បន្តធ្វើបច្ចុប្បន្នភាពជាមួយនឹងព័ត៌មានចុងក្រោយបំផុតនៅ ម.ប.ស. ពីការផ្តល់ជូនវគ្គសិក្សាថ្មីដល់ព្រឹត្តិការណ៍សហគមន៍។",
    "home.loadmorenews": "ផ្ទុកព័ត៌មានបន្ថែម",
    "home.viewallnews": "មើលព័ត៌មានទាំងអស់",
    "about.title": "អំពីពួកយើង",
    "about.description":
      "យើងមានចំណាប់អារម្មណ៍ក្នុងការចែករំលែកចំណេះដឹង និងបំផុសគំនិតដល់អ្នកដទៃតាមរយៈការសរសេររបស់យើង។",
    "about.mission.title": "បេសកកម្ម",
    "about.mission.description1":
      "ផ្តល់ការបណ្តុះបណ្តាលជំនាញបច្ចេកវិទ្យាឌីជីថល ដើម្បីជំរុញអក្ខរកម្មឌីជីថល និងបរិវត្តកម្មឌីជីថលនៅតាមសាលារៀន និងសហគមន៍ប្រកបដោយបរិយាបន្ន។",
    "about.mission.description2":
      "ផ្តល់សេវាសាធារណៈអនឡាញ សេវាប្រៃសណីយ៍ សេវាអ៊ីនធឺណិត និងឧបករណ៍បច្ចេកវិទ្យាដែលបម្រើដល់ការលើកកម្ពស់ការអប់រំឌីជីថល និងជីវភាពប្រជាពលរដ្ឋនៅក្នុងមូលដ្ឋាន។",
    "about.vision.title": "ចក្ខុវិស័យ",
    "about.vision.description":
      "	ចក្ខុវិស័យរបស់ ម.ប.ស. គឺលើកកម្ពស់ការចូលរួមកសាងសេដ្ឋកិច្ច និងសង្គមឌីជីថលរបស់ប្រជាពលរដ្ឋក្នុងសហគមន៍ តាមរយៈការបណ្តុះបណ្តាលជំនាញបច្ចេកវិទ្យាឌីជីថលសម្រាប់ប្រើប្រាស់ក្នុងជីវភាពរស់នៅប្រចាំថ្ងៃប្រកបដោយប្រសិទ្ធភាព និងការទទួលខុសត្រូវខ្ពស់។",
    "about.structure": "រចនាសម្ព័ន្ធ ម.ប.ស.",
    "about.structure.description":
      "ដើម្បីសម្រេចបាននូវចក្ខុវិស័យ និងបេសកកម្ម ម.ប.ស. ត្រូវបានបង្កើត និងដាក់ឱ្យដំណើរការនៅតាមវិទ្យាល័យសាធារណៈ ដោយមានក្រុមប្រឹក្សាភិបាលថ្នាក់ជាតិ គណៈគ្រប់គ្រង និងបុគ្គលិកប្រតិបត្តិ។",
    "about.structure.description2":
      "ក្រុមប្រឹក្សាជាតិ  ម.ប.ស. ត្រួតពិនិត្យ ម.ប.ស. ទាំងអស់  និងទទួលខុសត្រូវលើការអនុវត្តយុទ្ធសាស្ត្រ ធានាតម្លាភាព គ្រប់គ្រងធនធាន ការអភិវឌ្ឍន៍ និងសហការជាមួយភាគីពាក់ព័ន្ធ ដើម្បីលើកកម្ពស់ភាពជាដៃគូ ពិនិត្យ និងអនុម័តផែនការការងារ និងថវិកា និងតាមដានការអនុវត្ត។ ក្រុមប្រឹក្សាភិបាលក៏រៀបចំរបាយការណ៍វឌ្ឍនភាពសម្រាប់រាជរដ្ឋាភិបាលកម្ពុជា និងបំពេញភារកិច្ចសំខាន់ៗផងដែរ។",
    "about.structure.ctcnational.board": "ក្រុមប្រឹក្សាជាតិ ម.ប.ស.",
    "about.structure.ctcnational.board.description":
      "ក្រុមប្រឹក្សាជាតិ ម.ប.ស. ដឹកនាំដោយរដ្ឋមន្ត្រីក្រសួងប្រៃសណីយ៍ និងទូរគមនាគមន៍ និងមានតំណាងមកពីក្រសួងអប់រំ កីឡា និងយុវជន ក្រសួងប្រៃសណីយ៍ និងទូរគមនាគមន៍ និងប្រធានលេខាធិការដ្ឋាន។",
    "about.ctc.title": "អំពីមជ្ឈមណ្ឌលបច្ចេកវិទ្យាសហគមន៍",
    "about.ctc.paragraph1":
      "រាជរដ្ឋាភិបាលនីតិកាលទី៧ នៃរដ្ឋសភា បាននិងកំពុងយកចិត្តទុកដាក់ខ្ពស់លើការធ្វើបរិវត្តកម្មឌីជីថលសេដ្ឋកិច្ច និងសង្គមទាំងមូល តាមរយៈការដាក់ចេញនូវ “យុទ្ធសាស្ត្របញ្ចកោណ ដំណាក់កាលទី១”។ ជាក់ស្តែង រាជរដ្ឋាភិបាល បានកំណត់យកអាទិភាពគន្លឹះ ៥ គឺ “មនុស្ស ផ្លូវ ទឹក ភ្លើង និងបច្ចេកវិទ្យា” ជាគ្រឹះនិងមធ្យោបាយដ៏សំខាន់ដើម្បី សម្រេចបានចក្ខុវិស័យកម្ពុជា ឆ្នាំ២០៥០។ ការបន្ថែម “បច្ចេកវិទ្យា” ជាពិសេស “បច្ចេកវិទ្យាឌីជីថល” ជាអាទិភាពគន្លឹះ ថ្មីនេះហើយ ដែលសបញ្ជាក់ថារាជរដ្ឋាភិបាលចាត់ទុកបច្ចេកវិទ្យាឌីជីថលជាកាតាលីករថ្មីដ៏មានសារៈសំខាន់ មាន សក្តានុភាពនិងកាលានុវត្តភាព ក្នុងការជំរុញកំណើនផលិតភាពសេដ្ឋកិច្ចនិងសង្គម ក៏ដូចជាប្រសិទ្ធភាពរដ្ឋបាលនិង ជាមាគ៌ានយោបាយរួមសម្រាប់តម្រង់ទិសនិងជំរុញការអនុវត្ត “ក្របខណ្ឌគោលនយោបាយសេដ្ឋកិច្ច និងសង្គមឌីជីថល កម្ពុជា ២០២១-២០៣៥” ដែលជាមគ្គុទេសក៍តម្រង់ទិសសម្រាប់ការអភិវឌ្ឍ និងដំណើរការនៃបរិវត្តកម្មឌីជីថលនៅកម្ពុជា និង “គោលនយោបាយរដ្ឋាភិបាលឌីជីថលកម្ពុជា ២០២២-២០៣៥” សំដៅធ្វើបរិវត្តកម្មរដ្ឋាភិបាលឌីជីថល ពេញលេញ។",
    "about.ctc.paragraph2":
      "ក្នុងកិច្ចខិតខំជំរុញការកសាងមូលធនមនុស្សឌីជីថល ដើម្បីអនុវត្តក្របខណ្ឌគោលនយោបាយសេដ្ឋកិច្ច និងសង្គមឌីជីថលកម្ពុជា ២០២១-២០៣៥ គោលនយោបាយរដ្ឋាភិបាលឌីជីថលកម្ពុជា ២០២២-២០៣៥ ជាពិសេស គឺការចូលរួមអនុវត្តក្របខណ្ឌយុទ្ធសាស្ត្របញ្ចកោណដំណាក់កាលទី១ ដែលបានកំណត់យកបច្ចេកវិទ្យា ជាពិសេស បច្ចេកវិទ្យាឌីជីថលជាអាទិភាពគន្លឹះទី៥ និងគោលនយោបាយ សេដ្ឋកិច្ច សង្គម និងរដ្ឋាភិបាលឌីជីថលកម្ពុជា ឱ្យមាន ប្រសិទ្ធភាព ក្រសួងប្រៃសណីយ៍និងទូរគមនាគមន៍ (ក.ប.ទ.) បានបង្កើតគម្រោងការកសាងមជ្ឈមណ្ឌលបច្ចេកវិទ្យា សហគមន៍នៅតាមវិទ្យាល័យសាធារណៈ ដើម្បីបំពេញបេសកកម្មលើគំនិតផ្តួចផ្តើមបរិវត្តកម្មឌីជីថលបម្រើដល់ការអប់រំ ដែលនឹងរួមចំណែកដល់ការអភិវឌ្ឍមូលធនមនុស្សឌីជីថល និងអនាគតឌីជីថលកម្ពុជា។ គម្រោងនេះ គឺជាការឆ្លុះបញ្ចាំង ពីចក្ខុវិស័យវែងឆ្ងាយរបស់ ក.ប.ទ. ដោយផ្តោតលើផែនការអភិវឌ្ឍមូលធនមនុស្សលើមុខជំនាញបច្ចេកវិទ្យាឌីជីថល ក្នុងកម្រិតមធ្យមសិក្សា ហើយ មជ្ឈមណ្ឌលបច្ចេកវិទ្យាសហគមន៍ (ម.ប.ស.) ដែលសរសេរជាភាសាអង់គ្លេស Community Tech Center (CTC) នឹងក្លាយជាមជ្ឈមណ្ឌលផ្តល់ការបណ្តុះបណ្តាលពាក់ព័ន្ធនឹងជំនាញបច្ចេកវិទ្យា ឌីជីថល និងផ្តល់សេវាប្រៃសណីយ៍ដល់ប្រជាពលរដ្ឋក្នុងសហគមន៍ ជាពិសេសដល់សិស្សានុសិស្ស និងសាធារណជន រស់នៅក្នុងមូលដ្ឋាន ក្នុងគោលបំណងជំរុញការបណ្តុះបណ្តាលធនធានមនុស្សឌីជីថល លើកកម្ពស់អក្ខរកម្មឌីជីថល និងកាត់បន្ថយគម្លាតឌីជីថលនៅក្នុងសហគមន៍ប្រកបដោយបរិយាបន្ន និងនវានុវត្តន៍។",
    "about.ctc.paragraph3":
      "មជ្ឈមណ្ឌលបច្ចេកវិទ្យាសហគមន៍ សរសេរកាត់ថា “ម.ប.ស.” ត្រូវបានផ្តួចផ្តើមកសាងឡើងដោយក្រសួង ប្រៃសណីយ៍និងទូរគមនាគមន៍ (ក.ប.ទ.) ដោយមានកិច្ចសហការជាមួយក្រសួងអប់រំ យុវជន និងកីឡា (ក.អ.យ.ក.) ដើម្បីផ្តល់ការបណ្តុះបណ្តាលជំនាញឌីជីថល លើកកម្ពស់អក្ខរកម្មឌីជីថល និងកាត់បន្ថយគម្លាតឌីជីថលនៅក្នុងសហគមន៍ ប្រកបដោយបរិយាបន្ន និងនវានុវត្តន៍។ ម.ប.ស. មានមុខងារចម្បងចំនួន ៤ គឺ (១) បន្ទប់កុំព្យូទ័រ (Computer Lab) សម្រាប់បង្រៀនជំនាញបច្ចេកវិទ្យាឌីជីថលដោយផ្ទាល់ និងពីចម្ងាយ និងជាសាលប្រជុំ (២) បន្ទប់បណ្តុះបណ្តាល (Training Room) សម្រាប់បណ្តុះបណ្តាលជំនាញជួសជុលបរិក្ខារបច្ចេកវិទ្យា និងវគ្គខ្លីលើជំនាញបច្ចេកវិទ្យាឌីជីថល ដល់អាជ្ញាធរមូលដ្ឋាន និងប្រជាពលរដ្ឋក្នុងសហគមន៍ (៣) ប៉ុស្តិ៍ប្រៃសណីយ៍ (Post Office) សម្រាប់ផ្តល់សេវាទទួល និងផ្ញើកញ្ចប់អីវ៉ាន់ក្នុង និងក្រៅប្រទេស ព្រមទាំងផ្តល់សេវាផ្សេងៗដល់ពាណិជ្ជករ អាជីវករ និងប្រជាពលរដ្ឋនៅ សហគមន៍ និង (៤) សាលសាធារណៈ (Public Hall) សម្រាប់ប្រជាពលរដ្ឋនៅសហគមន៍អាចចូលប្រើប្រាស់កុំព្យូទ័រ និងអ៊ុនធឺណិត ដើម្បីស្វែងរកព័ត៌មានពាក់ព័ន្ធនឹងកសិកម្ម អាជីវកម្ម និងសេវាសាធារណៈអនឡាញជាដើម។",
    "about.ctc.paragraph4":
      "ស្របពេលនឹងការចាប់ផ្តើមដាក់ឱ្យដំណើរការ ម.ប.ស. ជាផ្លូវការ និងដំបូងគេបង្អស់ ដែលចាប់ផ្តើមពីវិទ្យាល័យ សាធារណៈក្នុងខេត្តតាកែវ ក.ប.ទ. គ្រោងនឹងពង្រីកវិសាលភាពប្រតិបត្តិការ ម.ប.ស. នៅវិទ្យាល័យសាធារណៈក្នុងខេត្ត ដទៃទៀតនៃព្រះរាជាណាចក្រកម្ពុជា។",
    "about.ctc.paragraph5":
      "ក្នុងរយៈពេលប៉ុន្មានឆ្នាំចុងក្រោយនេះ បច្ចេកវិទ្យាឌីជីថលនៅកម្ពុជាមានការរីកចម្រើនឆាប់រហ័សគួរឱ្យកត់ សម្គាល់។ ទោះជាយ៉ាងនេះក្តី ការត្រៀមខ្លួនរបស់កម្ពុជាក្នុងការចាប់យកវិស័យឌីជីថលនៅមានបញ្ហាច្រើន ដែល ទាមទារឱ្យមានការចូលរួមយ៉ាងសកម្មពីតួអង្គពាក់ព័ន្ធ ជាពិសេសត្រូវមានធនធានមនុស្សប្រកបដោយចំណេះដឹង មូលដ្ឋាន និងជំនាញឌីជីថលគ្រប់គ្រាន់។ ម.ប.ស. មានតួនាទីសំខាន់ក្នុងការប្រែក្លាយប្រជាពលរដ្ឋកម្ពុជា ឱ្យទៅជា ពលរដ្ឋឌីជីថលតាមរយៈការជំរុញការចាប់យកបច្ចេកវិទ្យាឌីជីថលមកប្រើប្រាស់ សម្រាប់ជីវិតរស់នៅប្រចាំថ្ងៃ ប្រកប ដោយប្រសិទ្ធភាព និងការទទួលខុសត្រូវខ្ពស់។ ក្នុងស្មារតីនេះការរៀបចំសៀវភៅគោលការណ៍ប្រតិបត្តិសម្រាប់ ម.ប.ស. គឺជាកិច្ចការដ៏មានសារៈសំខាន់ មិនអាចខ្វះបាន ដើម្បីធានាថាមុខងារ ម.ប.ស. អាចឆ្លើយតបប្រកបដោយប្រសិទ្ធភាពនិងស័ក្តិសិទ្ធិភាពក្នុងការ បណ្តុះបណ្តាល និងតម្រូវការថ្មីៗរបស់សិស្ស និងប្រជាពលរដ្ឋនៅសហគមន៍។",
    "center.computerlab.description1":
      "បន្ទប់កុំព្យូទ័រជាកន្លែងសម្រាប់បណ្តុះបណ្តាល ជំនាញផ្នែកបច្ចេកវិទ្យាឌីជីថល និងបង្រៀនតាមប្រព័ន្ធអនឡាញដល់សិស្សវិទ្យាល័យសាធារណៈ ក៏ដូចជាសាលប្រជុំ និងសាលបណ្តុះបណ្តាលគ្រូបង្រៀនតាមប្រព័ន្ធអនឡាញ។",
    "center.computerlab.description2":
      "បន្ទប់កុំព្យូទ័រត្រូវបំពាក់កុំព្យូទ័រ ទូរទស្សន៍ ប្រព័ន្ធអ៊ីនធឺណិតល្បឿនលឿន និងសម្ភារៈបរិក្ខាបច្ចេកវិទ្យាមួយចំនួន តាមតម្រូវការចាំបាច់។",
    "center.trainingroom.description1":
      "បន្ទប់បណ្តុះបណ្តាលជាកន្លែងសម្រាប់បណ្តុះបណ្តាលជំនាញឌីជីថលដល់អាជ្ញាធរមូលដ្ឋាន និងប្រជាពលរដ្ឋក្នុងសហគមន៍ ដែលមានបំណងចង់ប្រើប្រាស់ប្រព័ន្ធបច្ចេកវិទ្យា ក្នុងគោលដៅផ្សេងៗ។",
    "center.trainingroom.description2":
      "បន្ទប់បណ្តុះបណ្តាលត្រូវបំពាក់កុំព្យូទ័រ និងប្រព័ន្ធអ៊ីនធឺណិតល្បឿនលឿន ព្រមទាំងសម្ភារៈបរិក្ខា បច្ចេកវិទ្យាមួយចំនួន តាមតម្រូវការចាំបាច់។",
    "center.publichall.description1":
      "សាលសាធារណៈជាកន្លែងផ្តល់សេវាអ៊ីនធឺណិតជូនប្រជាជននៅតាមសហគមន៍ ដែលអាចចូលប្រើប្រាស់ ដើម្បីស្វែងរកព័ត៌មានពាក់ព័ន្ធនឹងកសិកម្ម អាជីវកម្ម និងព័ត៌មានផ្សេងទៀតពាក់ព័ន្ធនឹងតម្រូវការជាក់ស្តែងរបស់ប្រជាពលរដ្ឋនៅតាមសហគមន៍នីមួយៗ។",
    "center.publichall.description2":
      "សាលសាធារណៈត្រូវបំពាក់កុំព្យូទ័រ និងប្រព័ន្ធអ៊ីនធឺណិតល្បឿនលឿន ព្រមទាំងសម្ភារៈបរិក្ខាបច្ចេកវិទ្យាមួយចំនួន តាមតម្រូវការចាំបាច់។",
    "center.postoffice.description1":
      "ប៉ុស្តិ៍ប្រៃសណីយ៍ជាកន្លែងសម្រាប់ផ្តល់សេវាទទួល និងផ្ញើកញ្ចប់ឥវ៉ាន់ ព្រមទាំងផ្តល់សេវាផ្សេងៗដល់ពាណិជ្ជករ អាជីវករ និងប្រជាពលរដ្ឋនៅមូលដ្ឋាន និងជាកន្លែងសម្រាប់ផ្តល់សេវាជួសជុលទូរសព្ទការផ្គត់ផ្គង់ឧបករណ៍ទូរគមនាគមន៍ និងការបំពាក់សម្ភារៈបរិក្ខាឌីជីថល ដូចជា ម៉ាស៊ីនព្រីន ម៉ាស៊ីនហ្វូតូកូពី និងកាមេរ៉ាថតរូប ជាអាទិ៍។",
    "center.functionality.description":
      "មជ្ឈមណ្ឌលបច្ចេកវិទ្យាសហគមន៍មានមុខងារចម្បងចំនួន ៤ គឺ (១) បន្ទប់កុំព្យូទ័រ (Computer Lab) សម្រាប់បង្រៀនជំនាញបច្ចេកវិទ្យាឌីជីថលដោយផ្ទាល់ និងពីចម្ងាយ និងជាសាលប្រជុំ (២) បន្ទប់បណ្តុះបណ្តាល (Training Room) សម្រាប់បណ្តុះបណ្តាលជំនាញជួសជុលបរិក្ខារបច្ចេកវិទ្យា និងវគ្គខ្លីលើជំនាញបច្ចេកវិទ្យាឌីជីថល ដល់អាជ្ញាធរមូលដ្ឋាន និងប្រជាពលរដ្ឋក្នុងសហគមន៍ (៣) ប៉ុស្តិ៍ប្រៃសណីយ៍ (Post Office) សម្រាប់ផ្តល់សេវាទទួល និងផ្ញើកញ្ចប់អីវ៉ាន់ក្នុង និងក្រៅប្រទេស ព្រមទាំងផ្តល់សេវាផ្សេងៗដល់ពាណិជ្ជករ អាជីវករ និងប្រជាពលរដ្ឋនៅ សហគមន៍ និង (៤) សាលសាធារណៈ (Public Hall) សម្រាប់ប្រជាពលរដ្ឋនៅសហគមន៍អាចចូលប្រើប្រាស់កុំព្យូទ័រ និងអ៊ុនធឺណិត ដើម្បីស្វែងរកព័ត៌មានពាក់ព័ន្ធនឹងកសិកម្ម អាជីវកម្ម និងសេវាសាធារណៈអនឡាញជាដើម។",
    "our.ctc.title": "អំពីទីតាំងនៃសហគមន៍មជ្ឈមណ្ឌលបច្ចេកវិទ្យា",
    "our.ctc.description":
      "ការចាប់ផ្តើមដាក់ឱ្យដំណើរការ ម.ប.ស. ជាផ្លូវការ និងដំបូងគេបង្អស់ ដែលចាប់ផ្តើមពីវិទ្យាល័យ សាធារណៈក្នុងខេត្តតាកែវ ក.ប.ទ. គ្រោងនឹងពង្រីកវិសាលភាពប្រតិបត្តិការ ម.ប.ស. នៅវិទ្យាល័យសាធារណៈក្នុងខេត្ត ដទៃទៀតនៃព្រះរាជាណាចក្រកម្ពុជា",
    "our.ctc.allinfo.title": "ស្វែងរកព័ត៌មានអំពីមជ្ឈមណ្ឌល",
    "our.ctc.allinfo.description":
      "កិច្ចសង្ខេបអំពីមជ្ឈមណ្ឌលបច្ចេកវិទ្យារបស់យើងនៅទូទាំងប្រទេសកម្ពុជា រួមទាំងកម្មវិធីសិក្សា ព័ត៌មានលម្អិតអំពីប្រតិបត្តិការ និងព័ត៌មានជាក់លាក់នៃមជ្ឈមណ្ឌល។",
    "ctc.management.title":
      "ការគ្រប់គ្រង និងប្រតិបត្តិការមជ្ឈមណ្ឌលបច្ចេកវិទ្យាសហគមន៍",
    "ctc.management.description":
      "ស្វែងយល់អំពីព័ត៌មានទូទៅនៃមជ្ឈមណ្ឌលបច្ចេកវិទ្យារបស់យើង ជាមួយនឹងការផ្តល់នូវការយល់ដឹងលម្អិតអំពីរចនាសម្ព័ន្ធគ្រប់គ្រង តួនាទី និងការទទួលខុសត្រូវរបស់បុគ្គលិកប្រតិបត្តិការ ក៏ដូចជាព័ត៌មានទំនាក់ទំនងជាក់លាក់របស់សមាជិកប្រតិបត្តិ និងព័ត៌មានសហគមន៍។",
    "ctc.teaminfo.title": "តួនាទី និងភារកិច្ច",
    "ctc.teaminfo.name": "គោត្តនាម នាម",
    "ctc.teaminfo.role": "តួនាទី",
    "ctc.teaminfo.phoneNumber": "លេខទូរស័ព្ទ",
    "ctc.teaminfo.email": "អ៊ីម៉ែល",
    "btn.learnmore": "ស្វែងយល់បន្ថែម →",
    "btn.next": "ទំព័របន្ទាប់",
    "btn.previous": "ទំព័រមុន",
    "ctc.centerinfo.title": "ព័ត៌មានមជ្ឈមណ្ឌល",
    "ctc.centerinfo.contact": "ព័ត៌មានទំនាក់ទំនង",
    "ctc.centerinfo.viewmap": "មើលលើផែនទី",
    "ctc.centerinfo.facilities": "គ្រឿងបរិក្ខារ",
    contact: "ព័ត៌មានទំនាក់ទំនង",
    "blog.readmore": "អានបន្ថែម",
    "blog.list.description":
      "សូមស្វែងរកព័ត៌មានអាប់ដេតអំពីព្រឹត្តិការណ៍ថ្មីៗ ការប្រមូលផ្តុំ និងសកម្មភាពនៅក្នុងមជ្ឈមណ្ឌល និងការបង្ហាញពីវគ្គសិក្សាដែលនឹងមកដល់ សម័យបណ្តុះបណ្តាល ការប្រជុំសហគមន៍ និងព្រឹត្តិការណ៍ដែលពាក់ព័ន្ធនឹងបច្ចេកវិទ្យា ដែលមានគោលបំណងដើម្បីលើកកម្ពស់ការចូលរួម និងការរៀននៅក្នុងចំណោមសមាជិកសហគមន៍។",
    "videos.list.description":
      "សូមរីករាយជាមួយវីដេអូរបស់មជ្ឈមណ្ឌលបច្ចេកវិទ្យាសហគមន៍ (C.T.C) របស់យើង! តាមរយៈមេរៀនដែលបានដាក់បញ្ចូល និងខ្លឹមសារប្រព័ន្ធផ្សព្វផ្សាយ បានគូសបញ្ជាក់ពីកម្មវិធីប្រកបដោយភាពច្នៃប្រឌិតដែលមាននៅ C.T.C.s របស់យើងនៅតាមវិទ្យាល័យទូទាំងប្រទេស។ ចូលរួមជាមួយយើងក្នុងការលើកកម្ពស់ចំណេះដឹង និងជំនាញឌីជីថលក្នុងចំណោមសិស្ស ដោយរៀបចំពួកគេសម្រាប់យុគសម័យឌីជីថល។",
  },
} as const;

export const routes = {
  en: {
    news: "news",
    contact: "contact",
  },
  km: {
    news: "news",
    contact: "contact",
  },
};
