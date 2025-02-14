import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useUser } from "../hooks/useUser";

const Photos = () => {
  const { state } = useUser();
  const [currentPage, setCurrentPage] = useState(1);
  const photosPerPage = 10;

  if (!state.selectedUser) {
    return <p>Please select a user from the <Link to="/">Home page.</Link></p>;
  }

  // Calculate the indexes of photos to display
  const indexOfLastPhoto = currentPage * photosPerPage;
  const indexOfFirstPhoto = indexOfLastPhoto - photosPerPage;
  const currentPhotos = state.photos.slice(indexOfFirstPhoto, indexOfLastPhoto);

  // Calculate total pages
  const totalPages = Math.ceil(state.photos.length / photosPerPage);

  // Handle page change
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <Link to="/">Back to Home</Link>
      <h1>Photos from {state.selectedUser.name}</h1>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))", gap: "10px" }}>
        {currentPhotos.length > 0 ? (
          currentPhotos.map((photo) => (
            <div key={photo.id}>
              <img src={photo.url} alt={photo.title} style={{ width: "100%" }} />
              <p>{photo.title}</p>
            </div>
          ))
        ) : (
          <p>No photos found.</p>
        )}
      </div>

      <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
        {/* Previous Page Button */}
        <button 
          onClick={() => handlePageChange(currentPage - 1)} 
          disabled={currentPage === 1} 
          style={{ marginRight: "10px" }}>
          Previous
        </button>

        {/* Page Numbers */}
        {[...Array(totalPages)].map((_, index) => (
          <button 
            key={index} 
            onClick={() => handlePageChange(index + 1)} 
            disabled={currentPage === index + 1}
            style={{ marginRight: "5px" }}>
            {index + 1}
          </button>
        ))}

        {/* Next Page Button */}
        <button 
          onClick={() => handlePageChange(currentPage + 1)} 
          disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Photos;
