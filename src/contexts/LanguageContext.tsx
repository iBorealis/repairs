import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'fr' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  fr: {
    'nav.home': 'Accueil',
    'nav.services': 'Nos Services',
    'nav.mission': 'Notre Mission',
    'nav.gallery': "L'Atelier",
    'nav.contact': 'Contact',

    'hero.title': 'Donnez une seconde vie à vos appareils électroniques',
    'hero.subtitle': 'Pour vous, pour la communauté, pour la planète.',
    'hero.cta': 'Obtenez une soumission gratuite',
    'hero.counter': 'appareils sauvés du dépotoir',

    'pillar.revitaliser.title': 'REVITALISER',
    'pillar.revitaliser.subtitle': 'Le Soin Spa Électronique',
    'pillar.revitaliser.desc': 'Transformez votre appareil lent en machine performante avec notre nettoyage en profondeur et nos mises à niveau.',
    'pillar.revitaliser.cta': 'En savoir plus',

    'pillar.modifier.title': 'MODIFIER',
    'pillar.modifier.subtitle': 'Le Labo de Performance',
    'pillar.modifier.desc': 'Des mods de consoles rétro aux PC gaming sur mesure, libérez le potentiel caché de votre technologie.',
    'pillar.modifier.cta': 'Découvrir',

    'pillar.restaurer.title': 'RESTAURER',
    'pillar.restaurer.subtitle': 'La Mission Sociale',
    'pillar.restaurer.desc': 'Donnez vos anciens appareils et aidez-nous à offrir la technologie aux enfants défavorisés. Recevez 15% de rabais!',
    'pillar.restaurer.cta': 'Faire un don',

    'services.title': 'Nos Services',
    'services.subtitle': 'Des solutions sur mesure pour tous vos besoins technologiques',

    'services.revitaliser.title': 'REVITALISER - Le Soin Spa Électronique',
    'services.revitaliser.subtitle': 'Votre PC n\'est pas vieux, il est juste fatigué',
    'services.revitaliser.diagnostic': 'Diagnostic Complet',
    'services.revitaliser.diagnostic.desc': 'Analyse approfondie de votre appareil avec recommandations détaillées',
    'services.revitaliser.remise': 'Remise à Neuf',
    'services.revitaliser.remise.desc': 'Nettoyage en profondeur, remplacement de pâte thermique, optimisation du flux d\'air',
    'services.revitaliser.boost': 'Boost de Performance',
    'services.revitaliser.boost.desc': 'Installation de SSD, augmentation RAM, mise à niveau carte graphique',
    'services.revitaliser.software': 'Optimisation Logicielle',
    'services.revitaliser.software.desc': 'Nettoyage de virus, réinstallation OS, optimisation démarrage',

    'services.modifier.title': 'MODIFIER - Le Labo de Performance',
    'services.modifier.subtitle': 'Libérez le potentiel caché de vos consoles',
    'services.modifier.retro': 'Modification Consoles Rétro',
    'services.modifier.retro.desc': 'Écrans IPS, changement de coques, modchips, ODEs pour Game Boy et plus',
    'services.modifier.modern': 'Modification Consoles Modernes',
    'services.modifier.modern.desc': 'Amélioration refroidissement, augmentation stockage pour PS5, Xbox, Switch',
    'services.modifier.custom': 'Assemblage PC Sur Mesure',
    'services.modifier.custom.desc': 'Du Sleeper PC rétro à la vitrine RGB, votre vision devient réalité',
    'services.modifier.aesthetic': 'Personnalisation Esthétique',
    'services.modifier.aesthetic.desc': 'Éclairage RGB, gainage câbles, watercooling personnalisé',

    'services.cta': 'Demander une soumission',

    'mission.title': 'Notre Mission',
    'mission.subtitle': 'Plus qu\'une entreprise, une mission sociale et écologique',
    'mission.program.title': 'Le Programme "Donnez au Suivant"',
    'mission.program.how': 'Comment ça fonctionne',
    'mission.program.step1': 'Vous donnez un appareil électronique (PC, console, composant)',
    'mission.program.step2': 'Nous le remettons à neuf avec expertise et passion',
    'mission.program.step3': 'Il est offert à un enfant défavorisé du Québec',
    'mission.program.step4': 'Vous recevez 15% de rabais sur nos services',
    'mission.impact.title': 'Notre Impact',
    'mission.impact.counter': 'Appareils Sauvés',
    'mission.impact.co2': 'kg de CO₂ évités',
    'mission.impact.children': 'Enfants Aidés',
    'mission.partners.title': 'Nos Partenaires',
    'mission.cta.donate': 'Faire un don d\'appareil',
    'mission.cta.partner': 'Devenir partenaire',

    'gallery.title': 'L\'Atelier',
    'gallery.subtitle': 'Voyez nos réalisations. Chaque projet est une histoire de transformation.',
    'gallery.filter.all': 'Tous les projets',
    'gallery.filter.revitaliser': 'Nettoyages Profonds',
    'gallery.filter.retro': 'Mods Consoles Rétro',
    'gallery.filter.custom': 'PC Sur Mesure',
    'gallery.filter.restaurer': 'Projets Donnés',

    'contact.title': 'Obtenez une Soumission Gratuite',
    'contact.subtitle': 'Parlez-nous de votre projet et nous vous répondrons rapidement',
    'contact.firstName': 'Prénom',
    'contact.lastName': 'Nom',
    'contact.email': 'Courriel',
    'contact.phone': 'Téléphone',
    'contact.deviceType': 'Type d\'appareil',
    'contact.deviceType.pc': 'Ordinateur (PC/Mac)',
    'contact.deviceType.laptop': 'Ordinateur portable',
    'contact.deviceType.console': 'Console de jeux',
    'contact.deviceType.component': 'Composant',
    'contact.deviceType.other': 'Autre',
    'contact.serviceType': 'Service désiré',
    'contact.serviceType.revitaliser': 'Revitaliser',
    'contact.serviceType.modifier': 'Modifier',
    'contact.description': 'Décrivez votre besoin',
    'contact.donation': 'Intéressé par le programme "Donnez au Suivant"?',
    'contact.submit': 'Envoyer la demande',
    'contact.success': 'Merci! Nous vous contacterons sous peu.',
    'contact.error': 'Erreur lors de l\'envoi. Réessayez ou contactez-nous directement.',

    'footer.tagline': 'Donnez une seconde vie à vos appareils',
    'footer.hours': 'Heures d\'ouverture',
    'footer.hours.weekdays': 'Lun-Ven: 9h-18h',
    'footer.hours.weekend': 'Sam: 10h-16h',
    'footer.contact': 'Contact',
    'footer.follow': 'Suivez-nous',
    'footer.rights': 'Tous droits réservés',
  },
  en: {
    'nav.home': 'Home',
    'nav.services': 'Our Services',
    'nav.mission': 'Our Mission',
    'nav.gallery': 'The Workshop',
    'nav.contact': 'Contact',

    'hero.title': 'Give your electronics a second life',
    'hero.subtitle': 'For you, for the community, for the planet.',
    'hero.cta': 'Get a free quote',
    'hero.counter': 'devices saved from landfill',

    'pillar.revitaliser.title': 'REVITALIZE',
    'pillar.revitaliser.subtitle': 'The Electronic Spa Treatment',
    'pillar.revitaliser.desc': 'Transform your slow device into a high-performance machine with our deep cleaning and upgrades.',
    'pillar.revitaliser.cta': 'Learn more',

    'pillar.modifier.title': 'MODIFY',
    'pillar.modifier.subtitle': 'The Performance Lab',
    'pillar.modifier.desc': 'From retro console mods to custom gaming PCs, unleash your technology\'s hidden potential.',
    'pillar.modifier.cta': 'Discover',

    'pillar.restaurer.title': 'RESTORE',
    'pillar.restaurer.subtitle': 'The Social Mission',
    'pillar.restaurer.desc': 'Donate your old devices and help us provide technology to underprivileged children. Get 15% off!',
    'pillar.restaurer.cta': 'Make a donation',

    'services.title': 'Our Services',
    'services.subtitle': 'Custom solutions for all your tech needs',

    'services.revitaliser.title': 'REVITALIZE - The Electronic Spa Treatment',
    'services.revitaliser.subtitle': 'Your PC isn\'t old, it\'s just tired',
    'services.revitaliser.diagnostic': 'Complete Diagnostic',
    'services.revitaliser.diagnostic.desc': 'In-depth analysis of your device with detailed recommendations',
    'services.revitaliser.remise': 'Complete Refresh',
    'services.revitaliser.remise.desc': 'Deep cleaning, thermal paste replacement, airflow optimization',
    'services.revitaliser.boost': 'Performance Boost',
    'services.revitaliser.boost.desc': 'SSD installation, RAM upgrade, graphics card upgrade',
    'services.revitaliser.software': 'Software Optimization',
    'services.revitaliser.software.desc': 'Virus removal, OS reinstallation, startup optimization',

    'services.modifier.title': 'MODIFY - The Performance Lab',
    'services.modifier.subtitle': 'Unleash your console\'s hidden potential',
    'services.modifier.retro': 'Retro Console Modification',
    'services.modifier.retro.desc': 'IPS screens, shell swaps, modchips, ODEs for Game Boy and more',
    'services.modifier.modern': 'Modern Console Modification',
    'services.modifier.modern.desc': 'Cooling improvements, storage upgrades for PS5, Xbox, Switch',
    'services.modifier.custom': 'Custom PC Build',
    'services.modifier.custom.desc': 'From retro Sleeper PCs to RGB showcases, your vision comes to life',
    'services.modifier.aesthetic': 'Aesthetic Customization',
    'services.modifier.aesthetic.desc': 'RGB lighting, custom cable sleeving, personalized watercooling',

    'services.cta': 'Request a quote',

    'mission.title': 'Our Mission',
    'mission.subtitle': 'More than a business, a social and ecological mission',
    'mission.program.title': 'The "Pay It Forward" Program',
    'mission.program.how': 'How it works',
    'mission.program.step1': 'You donate an electronic device (PC, console, component)',
    'mission.program.step2': 'We refurbish it with expertise and passion',
    'mission.program.step3': 'It\'s given to an underprivileged child in Quebec',
    'mission.program.step4': 'You receive 15% off our services',
    'mission.impact.title': 'Our Impact',
    'mission.impact.counter': 'Devices Saved',
    'mission.impact.co2': 'kg of CO₂ avoided',
    'mission.impact.children': 'Children Helped',
    'mission.partners.title': 'Our Partners',
    'mission.cta.donate': 'Donate a device',
    'mission.cta.partner': 'Become a partner',

    'gallery.title': 'The Workshop',
    'gallery.subtitle': 'See our work. Every project is a transformation story.',
    'gallery.filter.all': 'All projects',
    'gallery.filter.revitaliser': 'Deep Cleanings',
    'gallery.filter.retro': 'Retro Console Mods',
    'gallery.filter.custom': 'Custom PCs',
    'gallery.filter.restaurer': 'Donated Projects',

    'contact.title': 'Get a Free Quote',
    'contact.subtitle': 'Tell us about your project and we\'ll get back to you quickly',
    'contact.firstName': 'First Name',
    'contact.lastName': 'Last Name',
    'contact.email': 'Email',
    'contact.phone': 'Phone',
    'contact.deviceType': 'Device Type',
    'contact.deviceType.pc': 'Computer (PC/Mac)',
    'contact.deviceType.laptop': 'Laptop',
    'contact.deviceType.console': 'Gaming Console',
    'contact.deviceType.component': 'Component',
    'contact.deviceType.other': 'Other',
    'contact.serviceType': 'Desired Service',
    'contact.serviceType.revitaliser': 'Revitalize',
    'contact.serviceType.modifier': 'Modify',
    'contact.description': 'Describe your needs',
    'contact.donation': 'Interested in the "Pay It Forward" program?',
    'contact.submit': 'Send request',
    'contact.success': 'Thank you! We\'ll contact you shortly.',
    'contact.error': 'Error sending. Please try again or contact us directly.',

    'footer.tagline': 'Give your devices a second life',
    'footer.hours': 'Opening Hours',
    'footer.hours.weekdays': 'Mon-Fri: 9am-6pm',
    'footer.hours.weekend': 'Sat: 10am-4pm',
    'footer.contact': 'Contact',
    'footer.follow': 'Follow us',
    'footer.rights': 'All rights reserved',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    const stored = localStorage.getItem('language');
    return (stored === 'fr' || stored === 'en') ? stored : 'fr';
  });

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
}
