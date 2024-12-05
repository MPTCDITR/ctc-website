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
    'nav.contact': 'Contact',
    'nav.blog': 'Blog',
    'nav.news': 'News',
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
    'nav.home': 'Inicio',
    'nav.about': 'Sobre Nosotros',
    'nav.contact': 'Contacto',
    'nav.blog': 'Blog',
    'nav.news': 'News',
    'hero.title': 'Bienvenido a Nuestro Blog',
    'hero.subtitle': 'Descubre historias e ideas increíbles',
    'about.title': 'Sobre Nosotros',
    'about.description': 'Nos apasiona compartir conocimiento e inspirar a otros a través de nuestra escritura.',
    'about.mission.title': 'Nuestra Misión',
    'about.mission.description': 'Crear una plataforma donde las ideas florezcan y el conocimiento se comparta libremente.',
    'about.vision.title': 'Nuestra Visión',
    'about.vision.description': 'Construir una comunidad global de aprendices y líderes de pensamiento.',
    'blog.title': 'Últimas Publicaciones',
    'blog.post1.title': 'Comenzando con Desarrollo Web',
    'blog.post1.description': 'Aprende los fundamentos del desarrollo web y comienza tu viaje.',
    'blog.post2.title': 'El Futuro de la IA',
    'blog.post2.description': 'Explorando las últimas tendencias en inteligencia artificial.',
    'blog.post3.title': 'Consejos de Productividad',
    'blog.post3.description': 'Aumenta tu productividad con estas técnicas probadas.',
    'contact.title': 'Contáctanos',
    'contact.description': '¿Tienes preguntas? Nos encantaría escucharte.',
    'contact.form.name': 'Nombre',
    'contact.form.email': 'Correo',
    'contact.form.message': 'Mensaje',
    'contact.form.submit': 'Enviar Mensaje',
  },
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