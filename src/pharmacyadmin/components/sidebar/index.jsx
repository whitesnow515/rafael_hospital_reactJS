import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Scrollbars } from "react-custom-scrollbars";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";

const SidebarNav = () => {
  const location = useLocation();
  const pathname = location.pathname;

  // let pathname = props.location && props.location.pathname;

  const [isSideMenu, setSideMenu] = useState("");
  // const [isSideMenuNew, setSideMenuNew] = useState("");

  const toggleSidebar = (value) => {
    setSideMenu(value);
  };

  // const toggleSidebarNew = (value) => {
  //   setSideMenuNew(value);
  // };
  // eslint-disable-next-line no-unused-vars
  const [isSidebarExpanded, setSidebarExpanded] = useState(false);
  const [isMouseOverSidebar, setMouseOverSidebar] = useState(false);

  useEffect(() => {
    if (isMouseOverSidebar && document.body.classList.contains("mini-sidebar")) {
      document.body.classList.add("expand-menu");
      return;
    }
    document.body.classList.remove("expand-menu");
  }, [isMouseOverSidebar]);

  const handleMouseEnter = () => {
    setMouseOverSidebar(true);
  };

  const handleMouseLeave = () => {
    setMouseOverSidebar(false);
  };
  return (
    <div
    className={`sidebar ${isSidebarExpanded ? "" : "hidden"}`}
    id="sidebar"
    onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}
  >
  <Scrollbars
  autoHide
  autoHideTimeout={1000}
  autoHideDuration={200}
  autoHeight
  autoHeightMin={0}
  autoHeightMax="95vh"
  thumbMinSize={30}
  universal={false}
  hideTracksWhenNotNeeded={true}
>
<div className="sidebar-inner slimscroll">
<div id="sidebar-menu" className="sidebar-menu">
            <ul>
              <li className="menu-title">
                <span>Main</span>
              </li>
              <li className={pathname === "/pharmacyadmin" ? "active" : ""}>
                <Link to="/pharmacyadmin">
                  <i className="fe fe-home" /> <span>Dashboard</span>
                </Link>
              </li>
              <li className="submenu">
                <Link
                  to="#"
                  className={isSideMenu == "Products" ? "subdrop" : ""}
                  onClick={() =>
                    toggleSidebar(isSideMenu == "Products" ? "" : "Products")
                  }
                >
                  <i className="fe fe-document"></i> <span> Products</span>{" "}
                  <span className="menu-arrow"></span>
                </Link>
                {isSideMenu == "Products" ? (
                  <ul
                    style={{
                      display: isSideMenu == "Products" ? "block" : "none",
                    }}
                  >
                    <li>
                      <Link
                        className={
                          pathname && pathname.includes("products")
                            ? "active"
                            : ""
                        }
                        to="/pharmacyadmin/products"
                      >
                        Products
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          pathname && pathname.includes("add-product")
                            ? "active"
                            : ""
                        }
                        to="/pharmacyadmin/add-product"
                      >
                        Add Product
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          pathname && pathname.includes("outstock")
                            ? "active"
                            : ""
                        }
                        to="/pharmacyadmin/outstock"
                      >
                        Out-Stock
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          pathname && pathname.includes("expired")
                            ? "active"
                            : ""
                        }
                        to="/pharmacyadmin/expired"
                      >
                        Expired
                      </Link>
                    </li>
                  </ul>
                ) : (
                  ""
                )}
              </li>
              <li
                className={
                  pathname && pathname.includes("categories") ? "active" : ""
                }
              >
                <Link to="/pharmacyadmin/categories">
                  <i className="fe fe-layout" /> <span>Categories</span>
                </Link>
              </li>
              <li className="submenu">
                <Link
                  to="#"
                  className={isSideMenu == "Purchase" ? "subdrop" : ""}
                  onClick={() =>
                    toggleSidebar(isSideMenu == "Purchase" ? "" : "Purchase")
                  }
                >
                  <i className="fe fe-star-o"></i> <span>Purchase</span>{" "}
                  <span className="menu-arrow"></span>
                </Link>
                <ul
                  style={{
                    display: isSideMenu == "Purchase" ? "block" : "none",
                  }}
                >
                  <li>
                    <Link
                      className={
                        pathname && pathname.includes("purchase")
                          ? "active"
                          : ""
                      }
                      to="/pharmacyadmin/purchase"
                    >
                      Purchase
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={
                        pathname && pathname.includes("add-purchase")
                          ? "active"
                          : ""
                      }
                      to="/pharmacyadmin/add-purchase"
                    >
                      Add Purchase
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={
                        pathname && pathname.includes("order") ? "active" : ""
                      }
                      to="/pharmacyadmin/order"
                    >
                      Order
                    </Link>
                  </li>
                </ul>
              </li>
              <li
                className={
                  pathname && pathname.includes("sales") ? "active" : ""
                }
              >
                <Link to="/pharmacyadmin/sales">
                  <i className="fe fe-activity" /> <span>Sales</span>
                </Link>
              </li>
              <li className="submenu">
                <Link
                  to="#"
                  className={isSideMenu == "Supplier" ? "subdrop" : ""}
                  onClick={() =>
                    toggleSidebar(isSideMenu == "Supplier" ? "" : "Supplier")
                  }
                >
                  <i className="fe fe-user"></i> <span>Supplier</span>{" "}
                  <span className="menu-arrow"></span>
                </Link>
                <ul
                  style={{
                    display: isSideMenu == "Supplier" ? "block" : "none",
                  }}
                >
                  <li>
                    <Link
                      className={
                        pathname && pathname.includes("supplier")
                          ? "active"
                          : ""
                      }
                      to="/pharmacyadmin/supplier"
                    >
                      Supplier
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={
                        pathname && pathname.includes("add-supplier")
                          ? "active"
                          : ""
                      }
                      to="/pharmacyadmin/add-supplier"
                    >
                      Add Supplier
                    </Link>
                  </li>
                </ul>
              </li>
              <li
                className={
                  pathname && pathname.includes("transactions-list")
                    ? "active"
                    : ""
                }
              >
                <Link to="/pharmacyadmin/transactions-list">
                  <i className="fe fe-table" /> <span>Transaction</span>
                </Link>
              </li>
              <li className="submenu">
                <Link
                  to="#"
                  className={isSideMenu == "Reports" ? "subdrop" : ""}
                  onClick={() =>
                    toggleSidebar(isSideMenu == "Reports" ? "" : "Reports")
                  }
                >
                  <i className="fe fe-document"></i> <span>Reports</span>{" "}
                  <span className="menu-arrow"></span>
                </Link>
                <ul
                  style={{
                    display: isSideMenu == "Reports" ? "block" : "none",
                  }}
                >
                  {/* <li><Link className={pathname && pathname.includes('invoice') ?"active" :""} to="/pharmacyadmin/reportinvoice">Invoice</Link></li> */}
                  <li>
                    <Link
                      className={
                        pathname && pathname.includes("invoice-report")
                          ? "active"
                          : ""
                      }
                      to="/pharmacyadmin/invoice-report"
                    >
                      Invoice Reports
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="menu-title">
                <span>Pages</span>
              </li>
              <li
                className={
                  pathname && pathname.includes("profile") ? "active" : ""
                }
              >
                <Link to="/pharmacyadmin/profile">
                  <i className="fe fe-user-plus" /> <span>Profile</span>
                </Link>
              </li>
              <li
                className={
                  pathname && pathname.includes("settings") ? "active" : ""
                }
              >
                <Link to="/pharmacyadmin/settings">
                  <i className="fe fe-vector" /> <span>Settings</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </Scrollbars>
    </div>
  );
};
export default SidebarNav;
