import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { EcologicalCounter } from '../components/EcologicalCounter';
import { motion } from 'framer-motion';

export function Home() {
  const { t } = useLanguage();

  const pillars = [
    {
      id: 'revitaliser',
      title: t('pillar.revitaliser.title'),
      subtitle: t('pillar.revitaliser.subtitle'),
      description: t('pillar.revitaliser.desc'),
      cta: t('pillar.revitaliser.cta'),
      link: '/services#revitaliser',
      gradient: 'from-primary-500 to-primary-700',
      icon: (
        <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      id: 'modifier',
      title: t('pillar.modifier.title'),
      subtitle: t('pillar.modifier.subtitle'),
      description: t('pillar.modifier.desc'),
      cta: t('pillar.modifier.cta'),
      link: '/services#modifier',
      gradient: 'from-gaming-500 to-gaming-700',
      icon: (
        <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
        </svg>
      ),
    },
    {
      id: 'restaurer',
      title: t('pillar.restaurer.title'),
      subtitle: t('pillar.restaurer.subtitle'),
      description: t('pillar.restaurer.desc'),
      cta: t('pillar.restaurer.cta'),
      link: '/mission',
      gradient: 'from-eco-500 to-eco-700',
      icon: (
        <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 via-blue-50/30 to-green-50/30 dark:from-gray-900 dark:via-blue-950/30 dark:to-green-950/30">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-5xl mx-auto"
          >
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              {t('hero.title')}
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto">
              {t('hero.subtitle')}
            </p>

            <div className="mb-12">
              <div className="inline-block">
                <EcologicalCounter />
                <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mt-2">
                  {t('hero.counter')}
                </p>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Link
                to="/contact"
                className="inline-block px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
              >
                {t('hero.cta')}
              </Link>
            </motion.div>
          </motion.div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-gray-400 dark:text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {pillars.map((pillar, index) => (
              <motion.div
                key={pillar.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="relative h-full bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-850 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${pillar.gradient} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    {pillar.icon}
                  </div>

                  <h2 className="font-display text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {pillar.title}
                  </h2>

                  <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-4">
                    {pillar.subtitle}
                  </p>

                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    {pillar.description}
                  </p>

                  <Link
                    to={pillar.link}
                    className="inline-flex items-center text-sm font-semibold text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 group-hover:translate-x-1 transition-transform duration-200"
                  >
                    {pillar.cta}
                    <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-gradient-to-br from-primary-50 via-gaming-50/30 to-eco-50/30 dark:from-gray-800 dark:via-gray-850 dark:to-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Prêt à transformer votre technologie?
            </h2>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8">
              Obtenez une soumission gratuite et découvrez comment nous pouvons vous aider.
            </p>
            <Link
              to="/contact"
              className="inline-block px-8 py-4 bg-gradient-to-r from-gray-900 to-gray-800 dark:from-white dark:to-gray-100 text-white dark:text-gray-900 font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
            >
              Contactez-nous
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
