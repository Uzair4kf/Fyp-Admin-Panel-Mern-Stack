import UploadImageContext from "./UploadImageContext";
import axios from "axios";

const UploadImageState = ({ children, setCloudImage }) => {
  return <UploadImageContext.Provider>{children}</UploadImageContext.Provider>;
};

export default UploadImageState;
