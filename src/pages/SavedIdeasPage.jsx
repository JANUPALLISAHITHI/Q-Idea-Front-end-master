// import React, { useEffect, useState } from 'react';
// import styles from '../styles/SavedIdeasPage.module.css';
// import { FaHeart } from 'react-icons/fa';

// const API_URL = 'https://api.example.com/saved-ideas'; // Replace with your real API

// const SavedIdeasPage = () => {
//   const [ideas, setIdeas] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchIdeas = async () => {
//       try {
//         const response = await fetch(API_URL);
//         if (!response.ok) throw new Error('Failed to fetch saved ideas');
//         const data = await response.json();
//         setIdeas(data);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchIdeas();
//   }, []);

//   if (loading) return <div className={styles.message}>Loading saved ideas...</div>;
//   if (error) return <div className={styles.messageError}>Error: {error}</div>;

//   return (
//     <div className={styles.wrapper}>
//       <h1 className={styles.heading}>Saved Ideas</h1>
//       <div className={styles.grid}>
//         {ideas.map((idea) => (
//           <div key={idea.id} className={styles.card}>
//             <div className={styles.imageWrapper}>
//               <img
//                 src={idea.imageUrl}
//                 alt={idea.title || 'Saved Idea'}
//                 className={styles.image}
//               />
//               <div className={styles.iconOverlay}>
//                 <FaHeart className={styles.heartIcon} />
//               </div>
//             </div>
//             <div className={styles.title}>{idea.title}</div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default SavedIdeasPage;
import React, { useEffect, useState } from 'react';
import { FaHeart, FaRegHeart, FaSearch, FaEllipsisV } from 'react-icons/fa';
import styles from '../styles/SavedIdeasPage.module.css';

const SavedIdeasPage = () => {
  const [ideas, setIdeas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [favorites, setFavorites] = useState(new Set());

  // Mock data - replace with actual API call
  useEffect(() => {
    const fetchIdeas = async () => {
      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 800));
        
        const mockData = [
          {
            id: 1,
            title: 'Minimalist Dashboard',
            imageUrl: 'https://source.unsplash.com/random/300x200?design',
            category: 'UI Design'
          },
          {
            id: 2,
            title: 'Dark Mode Concept',
            imageUrl: 'https://source.unsplash.com/random/300x200?dark',
            category: 'UI Design'
          },
          {
            id: 3,
            title: 'Mobile App Wireframe',
            imageUrl: 'https://source.unsplash.com/random/300x200?mobile',
            category: 'Wireframing'
          },
          {
            id: 4,
            title: 'Brand Color Palette',
            imageUrl: 'https://source.unsplash.com/random/300x200?colors',
            category: 'Branding'
          },
          {
            id: 5,
            title: 'Typography System',
            imageUrl: 'https://source.unsplash.com/random/300x200?typography',
            category: 'Typography'
          },
          {
            id: 6,
            title: 'Illustration Style',
            imageUrl: 'https://source.unsplash.com/random/300x200?illustration',
            category: 'Illustration'
          }
        ];
        
        setIdeas(mockData);
      } catch (err) {
        setError('Failed to load ideas. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchIdeas();
  }, []);

  const toggleFavorite = (id) => {
    const newFavorites = new Set(favorites);
    if (newFavorites.has(id)) {
      newFavorites.delete(id);
    } else {
      newFavorites.add(id);
    }
    setFavorites(newFavorites);
  };

  const filteredIdeas = ideas.filter(idea =>
    idea.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    idea.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (loading) {
    return (
      <div className={styles.loadingContainer}>
        <div className={styles.spinner}></div>
        <p>Loading your creative ideas...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.errorContainer}>
        <p>{error}</p>
        <button 
          className={styles.retryButton}
          onClick={() => window.location.reload()}
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Saved Ideas</h1>
        <div className={styles.searchBar}>
          <FaSearch className={styles.searchIcon} />
          <input
            type="text"
            placeholder="Search by title or category..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </header>

      <main className={styles.mainContent}>
        {filteredIdeas.length > 0 ? (
          <div className={styles.grid}>
            {filteredIdeas.map((idea) => (
              <div key={idea.id} className={styles.card}>
                <div className={styles.cardImage}>
                  <img src={idea.imageUrl} alt={idea.title} />
                  <div className={styles.cardActions}>
                    <button 
                      className={styles.favoriteButton}
                      onClick={() => toggleFavorite(idea.id)}
                      aria-label={favorites.has(idea.id) ? "Remove from favorites" : "Add to favorites"}
                    >
                      {favorites.has(idea.id) ? (
                        <FaHeart className={styles.heartFilled} />
                      ) : (
                        <FaRegHeart className={styles.heartOutline} />
                      )}
                    </button>
                    <button className={styles.menuButton}>
                      <FaEllipsisV />
                    </button>
                  </div>
                </div>
                <div className={styles.cardBody}>
                  <h3>{idea.title}</h3>
                  <span className={styles.categoryTag}>{idea.category}</span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className={styles.emptyState}>
            <p>No ideas found matching your search.</p>
          </div>
        )}
      </main>
    </div>
  );
};

export default SavedIdeasPage;