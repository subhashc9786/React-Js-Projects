import { useEffect, useState } from 'react';
import Modal from 'react-modal';
import { useNavigate } from 'react-router-dom';

Modal.setAppElement('#root');

// eslint-disable-next-line react/prop-types
const EditProfile = ( ) => {
  const [name, setName] = useState('');
  const [profileImage, setProfileImage] = useState('');
  const navigate = useNavigate();

  const [modalIsOpen, setIsOpen] = useState(true)
console.log(" isOpen, onClose",);
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  // useEffect(()=>{
  //   if(Object.values(isOpen)){
  //     setIsOpen(isOpen)
  //   }
  // },[isOpen])

  const handleProfileImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setProfileImage(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/');
    // Handle profile update logic here
    
  };

  function closeModal() {
    
    setIsOpen(false);
    navigate('/');
  }

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      className="fixed inset-0 flex items-center justify-center z-50 outline-none"
      overlayClassName="fixed inset-0 bg-black bg-opacity-50"
    >
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md mx-auto">
        <h2 className="text-2xl font-bold mb-4">Edit Profile</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex items-center space-x-4">
            {profileImage ? (
              <img
                src={profileImage}
                alt="Profile"
                className="w-16 h-16 rounded-full object-cover"
              />
            ) : (
              <div className="w-16 h-16 rounded-full bg-gray-300 flex items-center justify-center">
                <span className="text-gray-500">No Image</span>
              </div>
            )}
            <input
              type="file"
              accept="image/*"
              onChange={handleProfileImageChange}
              className="border rounded p-2"
            />
          </div>
          <div>
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              value={name}
              onChange={handleNameChange}
              className="border rounded w-full p-2"
            />
          </div>
          <div className="flex justify-end space-x-4">
            <button
              type="button"
              onClick={closeModal}
              className="bg-gray-500 text-white py-2 px-4 rounded"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default EditProfile;
