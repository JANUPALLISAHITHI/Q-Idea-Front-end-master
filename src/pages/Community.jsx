


import React, { useState } from 'react';
import styles from '../styles/community.module.css';

const Community = () => {
  const [showForm, setShowForm] = useState(false);
  const [groupName, setGroupName] = useState('');
  const [onlyAdminCanAddMembers, setOnlyAdminCanAddMembers] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const communities = [
    { id: 1, name: "James Bond 007", category: "Action Gamers", members: "768k" },
    { id: 2, name: "Halo Fans", category: "Action Gamers", members: "1.2k" },
    { id: 3, name: "Shopping", category: "Travel Buffs", members: "42k" },
    { id: 4, name: "Travel Buffs", category: "Travel Buffs", members: "100k" },
    { id: 5, name: "Designers", category: "Creative", members: "85k" },
    { id: 6, name: "Gaming Pros", category: "Esports", members: "58k" },
    { id: 7, name: "TCS Developers", category: "IT", members: "120k" },
    { id: 8, name: "Microsoft Engineers", category: "Non-IT", members: "99k" },
    { id: 9, name: "QIdea Developers", category: "Product Company", members: "5k" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const newGroup = {
      groupName,
      onlyAdminCanAddMembers,
      permissions: {
        chat: true,
        files: true,
        images: true,
        videos: true,
        calls: true,
      },
    };
    console.log('Group Created:', newGroup);
    setGroupName('');
    setOnlyAdminCanAddMembers(false);
    setShowForm(false);
  };

  const filteredCommunities = communities.filter((community) =>
    community.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    community.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Explore Communities</h2>

      <div className={styles.topSection}>
        <div className={styles.searchContainer}>
          <input
            type="text"
            placeholder="Search by name, company, coder, gamer etc..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <span className={styles.searchIcon}>🔍</span>
        </div>
        <button className={styles.createButton} onClick={() => setShowForm(!showForm)}>
          + Create Group
        </button>
      </div>

      {showForm && (
        <form onSubmit={handleSubmit} className={styles.formContainer}>
          <h3>Create Group</h3>
          <label>Enter Group Name:</label>
          <input
            type="text"
            value={groupName}
            onChange={(e) => setGroupName(e.target.value)}
            required
          />
          <div className={styles.checkboxContainer}>
            <input
              type="checkbox"
              checked={onlyAdminCanAddMembers}
              onChange={() => setOnlyAdminCanAddMembers(!onlyAdminCanAddMembers)}
            />
            <label>Only Admin Can Add Members</label>
          </div>
          <button type="submit" className={styles.submitBtn}>Create</button>
        </form>
      )}

      <div className={styles.communityList}>
        {filteredCommunities.map((community) => (
          <div key={community.id} className={styles.communityCard}>
            <div className={styles.avatar}>
              {community.name.charAt(0)}
            </div>
            <div className={styles.communityInfo}>
              <h3>{community.name}</h3>
              <p>{community.category}</p>
              <p>{community.members} Members</p>
            </div>
            <button className={styles.joinButton}>Join</button>
          </div>
        ))}
        {filteredCommunities.length === 0 && <p className={styles.noResults}>No results found.</p>}
      </div>
    </div>
  );
};

export default Community;
