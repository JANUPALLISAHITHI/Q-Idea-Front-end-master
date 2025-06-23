// import React, { useState } from "react";
// import { useParams } from "react-router-dom";
// import "../styles/profile.css";
// import { FaPencilAlt, FaRegBookmark, FaBookmark } from "react-icons/fa";
// import { FiSettings, FiGrid, FiList } from "react-icons/fi";

// const EditProfile = ({ isOpen, onClose, user, setUser }) => {
//   const [formData, setFormData] = useState(user);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const imageUrl = URL.createObjectURL(file);
//       setFormData((prev) => ({ ...prev, profilePic: imageUrl }));
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setUser(formData);
//     onClose();
//   };

//   if (!isOpen) return null;

//   return (
//     <div className="edit-profile-overlay">
//       <div className="edit-profile-modal">
//         <div className="modal-header">
//           <h2>Edit Profile</h2>
//           <button onClick={onClose} className="close-btn">&times;</button>
//         </div>
//         <form onSubmit={handleSubmit}>
//           <div className="form-group">
//             <label>Profile Picture</label>
//             <div className="profile-pic-preview-container">
//               <img src={formData.profilePic} alt="Preview" className="profile-pic-preview" />
//               <label htmlFor="profileImg" className="change-photo-btn">
//                 <FaPencilAlt size={12} /> 
//                 <span>Change photo</span>
//               </label>
//               <input 
//                 id="profileImg" 
//                 type="file" 
//                 accept="image/*" 
//                 onChange={handleImageChange} 
//                 className="hidden-input" 
//               />
//             </div>
//           </div>
          
//           <div className="form-group">
//             <label>Full Name</label>
//             <input 
//               type="text" 
//               name="fullName" 
//               value={formData.fullName} 
//               onChange={handleChange} 
//               className="form-input"
//             />
//           </div>
          
//           <div className="form-group">
//             <label>Username</label>
//             <input 
//               type="text" 
//               name="username" 
//               value={formData.username} 
//               onChange={handleChange} 
//               className="form-input"
//             />
//           </div>
          
//           <div className="form-group">
//             <label>Bio</label>
//             <textarea 
//               name="bio" 
//               value={formData.bio} 
//               onChange={handleChange}
//               className="form-textarea"
//             ></textarea>
//           </div>
          
//           <div className="form-actions">
//             <button type="button" className="cancel-btn" onClick={onClose}>Cancel</button>
//             <button type="submit" className="save-btn">Save Changes</button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// const Profile = () => {
//   const { username } = useParams();
//   const [user, setUser] = useState({
//     fullName: "Shaik Bhasidh",
//     username,
//     bio: "Digital creator | Photography enthusiast | Sharing my journey through visuals and words",
//     profilePic: "https://randomuser.me/api/portraits/men/1.jpg",
//   });
//   const [isEditing, setIsEditing] = useState(false);
//   const [activeTab, setActiveTab] = useState("posts");
//   const [viewMode, setViewMode] = useState("grid");
//   const [savedPosts, setSavedPosts] = useState([]);
//   const isMyProfile = true;

//   // Sample posts data
//   const posts = [
//     { 
//       id: 1, 
//       title: "Exploring Nature", 
//       img: "https://picsum.photos/600/400?random=1", 
//       date: "Oct 15", 
//       likes: 124,
//       isSaved: false
//     },
//     { 
//       id: 2, 
//       title: "City Life Insights", 
//       img: "https://picsum.photos/600/400?random=2", 
//       date: "Sep 20", 
//       likes: 89,
//       isSaved: true
//     },
//     { 
//       id: 3, 
//       title: "Culinary Adventures", 
//       img: "https://picsum.photos/600/400?random=3", 
//       date: "Aug 30", 
//       likes: 156,
//       isSaved: false
//     },
//     { 
//       id: 4, 
//       title: "Historical Wonders", 
//       img: "https://picsum.photos/600/400?random=4", 
//       date: "Jul 12", 
//       likes: 201,
//       isSaved: true
//     },
//     { 
//       id: 5, 
//       title: "Artistic Inspirations", 
//       img: "https://picsum.photos/600/400?random=5", 
//       date: "Jun 25", 
//       likes: 78,
//       isSaved: false
//     },
//     { 
//       id: 6, 
//       title: "Tech Innovations", 
//       img: "https://picsum.photos/600/400?random=6", 
//       date: "May 18", 
//       likes: 312,
//       isSaved: true
//     },
//   ];

//   const toggleSavePost = (postId) => {
//     const post = posts.find(p => p.id === postId);
//     if (post.isSaved) {
//       setSavedPosts(savedPosts.filter(id => id !== postId));
//     } else {
//       setSavedPosts([...savedPosts, postId]);
//     }
//   };

//   return (
//     <div className="profile-container">
//       {/* Header Section */}
//       <div className="profile-header">
//         <div className="profile-avatar-container">
//           <img src={user.profilePic} alt="Profile" className="profile-avatar" />
//           {isMyProfile && (
//             <button 
//               onClick={() => setIsEditing(true)} 
//               className="edit-profile-btn"
//             >
//               <FaPencilAlt size={14} />
//             </button>
//           )}
//         </div>

//         <div className="profile-info">
//           <div className="profile-meta">
//             <h1 className="profile-name">{user.fullName}</h1>
//             {isMyProfile && (
//               <button className="settings-btn">
//                 <FiSettings size={18} />
//               </button>
//             )}
//           </div>
          
//           <p className="profile-username">@{user.username}</p>
          
//           <p className="profile-bio">{user.bio}</p>
          
//           <div className="profile-stats">
//             <div className="stat-item">
//               <span className="stat-count">247</span>
//               <span className="stat-label">Posts</span>
//             </div>
//             <div className="stat-item">
//               <span className="stat-count">12.8k</span>
//               <span className="stat-label">Followers</span>
//             </div>
//             <div className="stat-item">
//               <span className="stat-count">843</span>
//               <span className="stat-label">Following</span>
//             </div>
//           </div>
          
//           {!isMyProfile ? (
//             <div className="profile-actions">
//               <button className="follow-btn">Follow</button>
//               <button className="message-btn">Message</button>
//             </div>
//           ) : (
//             <button 
//               onClick={() => setIsEditing(true)} 
//               className="edit-profile-text-btn"
//             >
//               Edit Profile
//             </button>
//           )}
//         </div>
//       </div>

//       {/* Content Tabs */}
//       <div className="content-tabs">
//         <button 
//           className={`tab-btn ${activeTab === "posts" ? "active" : ""}`}
//           onClick={() => setActiveTab("posts")}
//         >
//           Posts
//         </button>
//         <button 
//           className={`tab-btn ${activeTab === "saved" ? "active" : ""}`}
//           onClick={() => setActiveTab("saved")}
//         >
//           Saved
//         </button>
//         <button 
//           className={`tab-btn ${activeTab === "tagged" ? "active" : ""}`}
//           onClick={() => setActiveTab("tagged")}
//         >
//           Tagged
//         </button>
//       </div>

//       {/* View Mode Toggle */}
//       <div className="view-mode-toggle">
//         <button 
//           className={`view-btn ${viewMode === "grid" ? "active" : ""}`}
//           onClick={() => setViewMode("grid")}
//         >
//           <FiGrid size={18} />
//         </button>
//         <button 
//           className={`view-btn ${viewMode === "list" ? "active" : ""}`}
//           onClick={() => setViewMode("list")}
//         >
//           <FiList size={18} />
//         </button>
//       </div>

//       {/* Content Area */}
//       <div className="profile-content">
//         {activeTab === "posts" && (
//           <div className={`posts-container ${viewMode}`}>
//             {posts.map(post => (
//               <div key={post.id} className="post-item">
//                 <img src={post.img} alt={post.title} className="post-image" />
//                 <div className="post-overlay">
//                   <div className="post-stats">
//                     <span className="post-likes">{post.likes} likes</span>
//                     <button 
//                       className="save-post-btn"
//                       onClick={() => toggleSavePost(post.id)}
//                     >
//                       {post.isSaved ? (
//                         <FaBookmark color="#fff" size={16} />
//                       ) : (
//                         <FaRegBookmark color="#fff" size={16} />
//                       )}
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}

//         {/* {activeTab === "saved" && (
//           <div className="saved-posts">
//             {posts.filter(post => post.isSaved).length > 0 ? (
//               <div className={`posts-container ${viewMode}`}>
//                 {posts.filter(post => post.isSaved).map(post => (
//                   <div key={post.id} className="post-item">
//                     <img src={post.img} alt={post.title} className="post-image" />
//                     <div className="post-overlay">
//                       <div className="post-stats">
//                         <span className="post-likes">{post.likes} likes</span>
//                         <button 
//                           className="save-post-btn"
//                           onClick={() => toggleSavePost(post.id)}
//                         >
//                           <FaBookmark color="#fff" size={16} />
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             ) : (
//               <div className="empty-state">
//                 <FaRegBookmark size={48} className="empty-icon" />
//                 <h3>No Saved Posts</h3>
//                 <p>Save posts you want to revisit later</p>
//               </div>
//             )}
//           </div>
//         )} */}
//         {activeTab === "saved" && (
//           <div className="saved-posts">
//             {posts.filter(post => post.isSaved).length > 0 ? (
//               <div className={`posts-container ${viewMode}`}>
//                 {posts.filter(post => post.isSaved).map(post => (
//                   <div key={post.id} className="post-item" onClick={() => handleImageClick(post.img)}>
//                     <img src={post.img} alt={post.title} className="post-image" />
//                     <div className="post-overlay">
//                       <div className="post-stats">
//                         <span className="post-likes">{post.likes} likes</span>
//                         <button className="save-post-btn" onClick={(e) => { e.stopPropagation(); toggleSavePost(post.id); }}>
//                           <FaBookmark color="#fff" size={16} />
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             ) : (
//               <div className="empty-state">
//                 <FaRegBookmark size={48} className="empty-icon" />
//                 <h3>No Saved Posts</h3>
//                 <p>Save posts you want to revisit later</p>
//               </div>
//             )}
//           </div>
//         )}


//         {activeTab === "tagged" && (
//           <div className="tagged-posts">
//             <div className="empty-state">
//               <h3>No Tagged Posts</h3>
//               <p>When others tag you in posts, they'll appear here</p>
//             </div>
//           </div>
//         )}
//       </div>

//       <EditProfile 
//         isOpen={isEditing} 
//         onClose={() => setIsEditing(false)} 
//         user={user} 
//         setUser={setUser} 
//       />
//     </div>
//   );
// };

// export default Profile;





import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "../styles/profile.css";
import { FaPencilAlt, FaRegBookmark, FaBookmark } from "react-icons/fa";
import { FiSettings, FiGrid, FiList } from "react-icons/fi";

const EditProfile = ({ isOpen, onClose, user, setUser }) => {
  const [formData, setFormData] = useState(user);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setFormData((prev) => ({ ...prev, profilePic: imageUrl }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser(formData);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="edit-profile-overlay">
      <div className="edit-profile-modal">
        <div className="modal-header">
          <h2>Edit Profile</h2>
          <button onClick={onClose} className="close-btn">&times;</button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Profile Picture</label>
            <div className="profile-pic-preview-container">
              <img src={formData.profilePic} alt="Preview" className="profile-pic-preview" />
              <label htmlFor="profileImg" className="change-photo-btn">
                <FaPencilAlt size={12} />
                <span>Change photo</span>
              </label>
              <input
                id="profileImg"
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="hidden-input"
              />
            </div>
          </div>

          <div className="form-group">
            <label>Full Name</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label>Username</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label>Bio</label>
            <textarea
              name="bio"
              value={formData.bio}
              onChange={handleChange}
              className="form-textarea"
            ></textarea>
          </div>

          <div className="form-actions">
            <button type="button" className="cancel-btn" onClick={onClose}>Cancel</button>
            <button type="submit" className="save-btn">Save Changes</button>
          </div>
        </form>
      </div>
    </div>
  );
};

const Profile = () => {
  const { username } = useParams();
  const [user, setUser] = useState({
    fullName: "Shaik Bhasidh",
    username,
    bio: "Digital creator | Photography enthusiast | Sharing my journey through visuals and words",
    profilePic: "https://randomuser.me/api/portraits/men/1.jpg",
  });
  const [isEditing, setIsEditing] = useState(false);
  const [activeTab, setActiveTab] = useState("posts");
  const [viewMode, setViewMode] = useState("grid");
  const [savedPosts, setSavedPosts] = useState([]);
  const [modalImage, setModalImage] = useState(null);

  const isMyProfile = true;

  const posts = [
    { id: 1, title: "Exploring Nature", img: "https://picsum.photos/600/400?random=1", date: "Oct 15", likes: 124 },
    { id: 2, title: "City Life Insights", img: "https://picsum.photos/600/400?random=2", date: "Sep 20", likes: 89 },
    { id: 3, title: "Culinary Adventures", img: "https://picsum.photos/600/400?random=3", date: "Aug 30", likes: 156 },
    { id: 4, title: "Historical Wonders", img: "https://picsum.photos/600/400?random=4", date: "Jul 12", likes: 201 },
    { id: 5, title: "Artistic Inspirations", img: "https://picsum.photos/600/400?random=5", date: "Jun 25", likes: 78 },
    { id: 6, title: "Tech Innovations", img: "https://picsum.photos/600/400?random=6", date: "May 18", likes: 312 },
  ];

  const toggleSavePost = (postId) => {
    setSavedPosts((prev) =>
      prev.includes(postId) ? prev.filter((id) => id !== postId) : [...prev, postId]
    );
  };

  const handleImageClick = (imgUrl) => {
    setModalImage(imgUrl);
  };

  const closeModal = () => {
    setModalImage(null);
  };

  const renderPosts = (filteredPosts) => (
    <div className={`posts-container ${viewMode}`}>
      {filteredPosts.map((post) => (
        <div key={post.id} className="post-item" onClick={() => handleImageClick(post.img)}>
          <img src={post.img} alt={post.title} className="post-image" />
          <div className="post-overlay">
            <div className="post-stats">
              <span className="post-likes">{post.likes} likes</span>
              <button
                className="save-post-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  toggleSavePost(post.id);
                }}
              >
                {savedPosts.includes(post.id) ? (
                  <FaBookmark color="#fff" size={16} />
                ) : (
                  <FaRegBookmark color="#fff" size={16} />
                )}
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="profile-container">
      {/* Header Section */}
      <div className="profile-header">
        <div className="profile-avatar-container">
          <img src={user.profilePic} alt="Profile" className="profile-avatar" />
          {isMyProfile && (
            <button onClick={() => setIsEditing(true)} className="edit-profile-btn">
              <FaPencilAlt size={14} />
            </button>
          )}
        </div>

        <div className="profile-info">
          <div className="profile-meta">
            <h1 className="profile-name">{user.fullName}</h1>
            {isMyProfile && <button className="settings-btn"><FiSettings size={18} /></button>}
          </div>
          <p className="profile-username">@{user.username}</p>
          <p className="profile-bio">{user.bio}</p>

          <div className="profile-stats">
            <div className="stat-item"><span className="stat-count">247</span><span className="stat-label">Posts</span></div>
            <div className="stat-item"><span className="stat-count">12.8k</span><span className="stat-label">Followers</span></div>
            <div className="stat-item"><span className="stat-count">843</span><span className="stat-label">Following</span></div>
          </div>

          {isMyProfile ? (
            <button onClick={() => setIsEditing(true)} className="edit-profile-text-btn">Edit Profile</button>
          ) : (
            <div className="profile-actions">
              <button className="follow-btn">Follow</button>
              <button className="message-btn">Message</button>
            </div>
          )}
        </div>
      </div>

      {/* Content Tabs */}
      <div className="content-tabs">
        <button className={`tab-btn ${activeTab === "posts" ? "active" : ""}`} onClick={() => setActiveTab("posts")}>Posts</button>
        <button className={`tab-btn ${activeTab === "saved" ? "active" : ""}`} onClick={() => setActiveTab("saved")}>Saved</button>
        <button className={`tab-btn ${activeTab === "tagged" ? "active" : ""}`} onClick={() => setActiveTab("tagged")}>Tagged</button>
      </div>

      {/* View Mode */}
      <div className="view-mode-toggle">
        <button className={`view-btn ${viewMode === "grid" ? "active" : ""}`} onClick={() => setViewMode("grid")}><FiGrid size={18} /></button>
        <button className={`view-btn ${viewMode === "list" ? "active" : ""}`} onClick={() => setViewMode("list")}><FiList size={18} /></button>
      </div>

      {/* Main Content */}
      <div className="profile-content">
        {activeTab === "posts" && renderPosts(posts)}
        {activeTab === "saved" && (
          savedPosts.length > 0 ?
            renderPosts(posts.filter(p => savedPosts.includes(p.id))) :
            <div className="empty-state">
              <FaRegBookmark size={48} className="empty-icon" />
              <h3>No Saved Posts</h3>
              <p>Save posts you want to revisit later</p>
            </div>
        )}
        {activeTab === "tagged" && (
          <div className="empty-state">
            <h3>No Tagged Posts</h3>
            <p>When others tag you in posts, they'll appear here</p>
          </div>
        )}
      </div>

      {/* Image Modal */}
      {modalImage && (
        <div className="image-modal-overlay" onClick={closeModal}>
          <div className="image-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-modal-btn" onClick={closeModal}>&times;</button>
            <img src={modalImage} alt="Enlarged" className="modal-image" />
          </div>
        </div>
      )}

      <EditProfile isOpen={isEditing} onClose={() => setIsEditing(false)} user={user} setUser={setUser} />
    </div>
  );
};

export default Profile;
