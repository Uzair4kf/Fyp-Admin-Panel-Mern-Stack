import React from "react";
const Editable = ({
  editFormData,
  handleEditFormChange,
  handleCancelClick,
}) => {
  return (
    <>
      <tr>
        <td></td>
        <td>
          <input
            type="text"
            required="required"
            placeholder="Enter a name ..."
            value={"bwjk"}
            onChange={handleEditFormChange}
          />
        </td>
        <td>
          <input
            type="text"
            required="required"
            placeholder="Enter a department ..."
            name="department"
            value={"jbcksfk"}
            onChange={handleEditFormChange}
          />
        </td>
        <td>
          <input
            type="text"
            required="required"
            placeholder="Enter a gender ..."
            name="gender"
            value={"fcjk"}
            onChange={handleEditFormChange}
          />
        </td>
        <td>
          <input
            type="text"
            required="required"
            placeholder="Enter a education"
            name="education"
            value={"cjnks"}
            onChange={handleEditFormChange}
          />
        </td>
        <td>
          <input
            type="text"
            required="required"
            placeholder="Enter a mobile"
            name="mobile"
            value={"jcsbk"}
            onChange={handleEditFormChange}
          />
        </td>
        <td>
          <input
            type="text"
            required="required"
            placeholder="Enter a email"
            name="email"
            onChange={handleEditFormChange}
          />
        </td>
        <td>
          <div className="d-flex">
            <button
              className="btn btn-warning btn-xs sharp me-1 shadow"
              type="submit"
            >
              <i className="las la-check-circle scale5"></i>
            </button>
            <button
              className="btn btn-danger btn-xs sharp shadow "
              type="button"
              onClick={handleCancelClick}
            >
              <i className="las la-times-circle scale5"></i>
            </button>
          </div>
        </td>
      </tr>
    </>
  );
};
export default Editable;
