import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';

type Category = 'all' | 'revitaliser' | 'retro' | 'custom' | 'restaurer';

interface Project {
  id: string;
  title: string;
  category: Category;
  before: string;
  after: string;
  description: string;
}

export function Gallery() {
  const { t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<Category>('all');

  const categories: { id: Category; label: string }[] = [
    { id: 'all', label: t('gallery.filter.all') },
    { id: 'revitaliser', label: t('gallery.filter.revitaliser') },
    { id: 'retro', label: t('gallery.filter.retro') },
    { id: 'custom', label: t('gallery.filter.custom') },
    { id: 'restaurer', label: t('gallery.filter.restaurer') },
  ];

  const projects: Project[] = [
    {
      id: '1',
      title: 'PC Gaming Complet - Nettoyage en Profondeur',
      category: 'revitaliser',
      before: 'https://images.pexels.com/photos/2582928/pexels-photo-2582928.jpeg',
      after: 'https://images.pexels.com/photos/2923034/pexels-photo-2923034.jpeg',
      description: 'Transformation complète avec nettoyage, nouvelle pâte thermique et optimisation du flux d\'air',
    },
    {
      id: '2',
      title: 'Game Boy Advance - Écran IPS',
      category: 'retro',
      before: 'https://images.pexels.com/photos/371924/pexels-photo-371924.jpeg',
      after: 'https://images.pexels.com/photos/1637438/pexels-photo-1637438.jpeg',
      description: 'Installation d\'un écran IPS rétroéclairé moderne et nouvelle coque translucide',
    },
    {
      id: '3',
      title: 'Sleeper PC - Boîtier Rétro',
      category: 'custom',
      before: 'https://images.pexels.com/photos/7233370/pexels-photo-7233370.jpeg',
      after: 'https://images.pexels.com/photos/2399840/pexels-photo-2399840.jpeg',
      description: 'PC gaming haute performance dans un boîtier beige classique des années 90',
    },
    {
      id: '4',
      title: 'Ordinateur Portable Restauré',
      category: 'restaurer',
      before: 'https://images.pexels.com/photos/1229861/pexels-photo-1229861.jpeg',
      after: 'https://images.pexels.com/photos/18105/pexels-photo.jpg',
      description: 'Remis à neuf et donné à un étudiant. SSD 256GB, 8GB RAM, Windows 11',
    },
    {
      id: '5',
      title: 'Setup Gaming RGB Personnalisé',
      category: 'custom',
      before: 'https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg',
      after: 'https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg',
      description: 'Build complet avec watercooling custom, câbles gainés et éclairage RGB synchronisé',
    },
    {
      id: '6',
      title: 'Console Rétro - Modification Complète',
      category: 'retro',
      before: 'https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg',
      after: 'https://images.pexels.com/photos/371924/pexels-photo-371924.jpeg',
      description: 'Modchip, nouveau lecteur optique et amélioration du refroidissement',
    },
  ];

  const filteredProjects = selectedCategory === 'all'
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  return (
    <div className="min-h-screen pt-20 md:pt-24">
      <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-gaming-50/30 dark:from-gray-900 dark:to-gaming-950/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              {t('gallery.title')}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              {t('gallery.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 bg-white dark:bg-gray-900 sticky top-16 md:top-20 z-40 border-b border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-2.5 rounded-lg font-medium transition-all duration-200 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-primary-600 to-primary-700 text-white shadow-lg'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="group relative bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-850 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={project.before}
                      alt={`${project.title} - Avant`}
                      className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
                    />
                    <img
                      src={project.after}
                      alt={`${project.title} - Après`}
                      className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    />
                    <div className="absolute top-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm">
                      Avant/Après
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 dark:text-gray-400 text-lg">
                Aucun projet dans cette catégorie pour le moment.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
