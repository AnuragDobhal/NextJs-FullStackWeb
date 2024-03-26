"use client";
import { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import styles from "@/app/styles/search.module.css";

const SearchBar = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [relatedContent, setRelatedContent] = useState([]);

  useEffect(() => {

    const fetchRelatedContent = async () => {
      try {
        const response = await fetch(
          `RAPID_KEY="https://netflix54.p.rapidapi.com/search/?query==${searchQuery}`
        );
        if (response.ok) {
          const data = await response.json();
          setRelatedContent(data);
        } else {
          throw new Error("Failed to fetch related content");
        }
      } catch (error) {
        console.error("Error fetching related content:", error);
      }
    };

    if (searchQuery.trim() !== "") {
      fetchRelatedContent();
    } else {
      setRelatedContent([]);
    }
  }, [searchQuery]);

  const toggleSearch = () => { 
    setSearchOpen(!searchOpen);
  };

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div className={styles.searchContainer}>
      <div className={styles.searchIcon} onClick={toggleSearch}>
        <FaSearch />
      </div>
      <input
        type="text"
        className={`${styles.searchInput} ${
          searchOpen ? styles.searchOpen : ""
        }`}
        placeholder="Search..."
        value={searchQuery}
        onChange={handleInputChange}
      />
      {searchQuery.trim() !== "" && (
        <div className={styles.relatedContent}>
          {relatedContent.map((item) => (
            <div key={item.id} className={styles.relatedItem}>
              {item.title}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
