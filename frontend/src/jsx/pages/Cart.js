import React from "react";
import { Dropdown, Nav, Tab } from "react-bootstrap";
export default function Cart() {
  return (
    <div>
      <div className="col-xl-12 col-lg-12 col-xxl-12 col-sm-12">
        <div className="card">
          <div className="card-header">
            <h4 className="card-title">Cart</h4>
          </div>
          <div className="card-body">
            <div className="table-responsive recentOrderTable">
              <table className="table verticle-middle table-responsive-md">
                <thead>
                  <tr>
                    <th scope="col">No.</th>
                    <th scope="col">User</th>
                    <th scope="col">Item</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Status</th>
                    <th scope="col">Total Amount</th>
                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>12</td>
                    <td>Mr. Bobby</td>
                    <td>Dr. Jackson</td>
                    <td>01 August 2020</td>
                    <td>
                      <span className="badge badge-rounded badge-primary">
                        Checkin
                      </span>
                    </td>
                    <td>$120</td>
                    <td>
                      <Dropdown className="dropdown custom-dropdown mb-0">
                        <Dropdown.Toggle
                          className="btn sharp btn-primary tp-btn i-false"
                          data-toggle="dropdown"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            width="18px"
                            height="18px"
                            viewBox="0 0 24 24"
                            version="1.1"
                          >
                            <g
                              stroke="none"
                              strokeWidth="1"
                              fill="none"
                              fillRule="evenodd"
                            >
                              <rect x="0" y="0" width="24" height="24" />
                              <circle fill="#000000" cx="12" cy="5" r="2" />
                              <circle fill="#000000" cx="12" cy="12" r="2" />
                              <circle fill="#000000" cx="12" cy="19" r="2" />
                            </g>
                          </svg>
                        </Dropdown.Toggle>
                        <Dropdown.Menu className="dropdown-menu dropdown-menu-right">
                          <Dropdown.Item className="dropdown-item">
                            Details
                          </Dropdown.Item>
                          <Dropdown.Item className="dropdown-item text-danger">
                            Cancel
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </td>
                  </tr>
                  <tr>
                    <td>10 </td>
                    <td>Mr. Dexter</td>
                    <td>Dr. Charles</td>
                    <td>31 July 2020</td>
                    <td>
                      <span className="badge badge-rounded badge-warning">
                        Panding
                      </span>
                    </td>
                    <td>$540</td>
                    <td>
                      <Dropdown className="dropdown custom-dropdown mb-0">
                        <Dropdown.Toggle
                          className="btn sharp btn-primary tp-btn i-false"
                          data-toggle="dropdown"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            width="18px"
                            height="18px"
                            viewBox="0 0 24 24"
                            version="1.1"
                          >
                            <g
                              stroke="none"
                              strokeWidth="1"
                              fill="none"
                              fillRule="evenodd"
                            >
                              <rect x="0" y="0" width="24" height="24" />
                              <circle fill="#000000" cx="12" cy="5" r="2" />
                              <circle fill="#000000" cx="12" cy="12" r="2" />
                              <circle fill="#000000" cx="12" cy="19" r="2" />
                            </g>
                          </svg>
                        </Dropdown.Toggle>
                        <Dropdown.Menu className="dropdown-menu dropdown-menu-right">
                          <Dropdown.Item className="dropdown-item">
                            Details
                          </Dropdown.Item>
                          <Dropdown.Item className="dropdown-item text-danger">
                            Cancel
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </td>
                  </tr>
                  <tr>
                    <td>03 </td>
                    <td>Mr. Nathan</td>
                    <td>Dr. Frederick</td>
                    <td>30 July 2020</td>
                    <td>
                      <span className="badge badge-rounded badge-danger">
                        Canceled
                      </span>
                    </td>
                    <td>$301</td>
                    <td>
                      <Dropdown className="dropdown custom-dropdown mb-0">
                        <Dropdown.Toggle
                          className="btn sharp btn-primary tp-btn i-false"
                          data-toggle="dropdown"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            width="18px"
                            height="18px"
                            viewBox="0 0 24 24"
                            version="1.1"
                          >
                            <g
                              stroke="none"
                              strokeWidth="1"
                              fill="none"
                              fillRule="evenodd"
                            >
                              <rect x="0" y="0" width="24" height="24" />
                              <circle fill="#000000" cx="12" cy="5" r="2" />
                              <circle fill="#000000" cx="12" cy="12" r="2" />
                              <circle fill="#000000" cx="12" cy="19" r="2" />
                            </g>
                          </svg>
                        </Dropdown.Toggle>
                        <Dropdown.Menu className="dropdown-menu dropdown-menu-right">
                          <Dropdown.Item className="dropdown-item">
                            Details
                          </Dropdown.Item>
                          <Dropdown.Item className="dropdown-item text-danger">
                            Cancel
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </td>
                  </tr>
                  <tr>
                    <td>05</td>
                    <td>Mr. Aurora</td>
                    <td>Dr. Roman</td>
                    <td>29 July 2020</td>
                    <td>
                      <span className="badge badge-rounded badge-success">
                        Checkin
                      </span>
                    </td>
                    <td>$099</td>
                    <td>
                      <Dropdown className="dropdown custom-dropdown mb-0">
                        <Dropdown.Toggle
                          className="btn sharp btn-primary tp-btn i-false"
                          data-toggle="dropdown"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            width="18px"
                            height="18px"
                            viewBox="0 0 24 24"
                            version="1.1"
                          >
                            <g
                              stroke="none"
                              strokeWidth="1"
                              fill="none"
                              fillRule="evenodd"
                            >
                              <rect x="0" y="0" width="24" height="24" />
                              <circle fill="#000000" cx="12" cy="5" r="2" />
                              <circle fill="#000000" cx="12" cy="12" r="2" />
                              <circle fill="#000000" cx="12" cy="19" r="2" />
                            </g>
                          </svg>
                        </Dropdown.Toggle>
                        <Dropdown.Menu className="dropdown-menu dropdown-menu-right">
                          <Dropdown.Item className="dropdown-item">
                            Details
                          </Dropdown.Item>
                          <Dropdown.Item className="dropdown-item text-danger">
                            Cancel
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </td>
                  </tr>
                  <tr>
                    <td>06</td>
                    <td>Mr. Matthew</td>
                    <td>Dr. Samantha</td>
                    <td>28 July 2020</td>
                    <td>
                      <span className="badge badge-rounded badge-success">
                        Checkin
                      </span>
                    </td>
                    <td>$520</td>
                    <td>
                      <Dropdown className="dropdown custom-dropdown mb-0">
                        <Dropdown.Toggle
                          className="btn sharp btn-primary tp-btn i-false"
                          data-toggle="dropdown"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            width="18px"
                            height="18px"
                            viewBox="0 0 24 24"
                            version="1.1"
                          >
                            <g
                              stroke="none"
                              strokeWidth="1"
                              fill="none"
                              fillRule="evenodd"
                            >
                              <rect x="0" y="0" width="24" height="24" />
                              <circle fill="#000000" cx="12" cy="5" r="2" />
                              <circle fill="#000000" cx="12" cy="12" r="2" />
                              <circle fill="#000000" cx="12" cy="19" r="2" />
                            </g>
                          </svg>
                        </Dropdown.Toggle>
                        <Dropdown.Menu className="dropdown-menu dropdown-menu-right">
                          <Dropdown.Item className="dropdown-item">
                            Details
                          </Dropdown.Item>
                          <Dropdown.Item className="dropdown-item text-danger">
                            Cancel
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
