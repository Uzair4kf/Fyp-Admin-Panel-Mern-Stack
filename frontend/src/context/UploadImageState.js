import UploadImageContext from "./UploadImageContext"

const UploadImageState = ({ children }) => {
    
  return <UploadImageContext.Provider value>{children}</UploadImageContext.Provider>;
};

export default UploadImageState;
