import React from 'react';
import { Link } from 'react-router-dom'

const SideBar = () => {
  return(
      <aside className="main-sidebar">
        {/* sidebar: style can be found in sidebar.less */}
        <section className="sidebar">
          {/* Sidebar user panel */}
          <div className="user-panel">
            <div className="pull-left image">
              <img src="assets/dist/img/user2-160x160.jpg" className="img-circle" alt="User Image" />
            </div>
            <div className="pull-left info">
              <p>Alexander Pierce</p>
              <a href="#"><i className="fa fa-circle text-success" /> Online</a>
            </div>
          </div>
          {/* search form */}
          <form action="#" method="get" className="sidebar-form">
            <div className="input-group">
              <input type="text" name="q" className="form-control" placeholder="Search..." />
              <span className="input-group-btn">
                <button type="submit" name="search" id="search-btn" className="btn btn-flat"><i className="fa fa-search" />
                </button>
              </span>
            </div>
          </form>
          {/* /.search form */}
          {/* sidebar menu: : style can be found in sidebar.less */}
          <ul className="sidebar-menu" data-widget="tree">
            <li className="header">MAIN NAVIGATION</li>
            <li className="active treeview">
              <a href="#">
                <i className="fa fa-dashboard" /> <span>Dashboard</span>
                <span className="pull-right-container">
                  <i className="fa fa-angle-left pull-right" />
                </span>
              </a>
              <ul className="treeview-menu">
                <li className="active"><Link to="/dashboardv1"><i className="fa fa-circle-o" /> Dashboard v1</Link></li>
                <li><Link to="/dashboardv2"><i className="fa fa-circle-o" /> Dashboard v2</Link></li>
              </ul>
            </li>
            <li className="treeview">
              <a href="#">
                <i className="fa fa-files-o" />
                <span>Layout Options</span>
                <span className="pull-right-container">
                  <span className="label label-primary pull-right">4</span>
                </span>
              </a>
              <ul className="treeview-menu">
                <li><Link to="topNav"><i className="fa fa-circle-o" /> Top Navigation</Link></li>
                <li><Link to="boxed"><i className="fa fa-circle-o" /> Boxed</Link></li>
                <li><Link to="fixed"><i className="fa fa-circle-o" /> Fixed</Link></li>
                <li><Link to="collapsedSidebar"><i className="fa fa-circle-o" /> Collapsed Sidebar</Link></li>
              </ul>
            </li>
            <li>
              <Link to="widgets">
                <i className="fa fa-th" /> <span>Widgets</span>
                <span className="pull-right-container">
                  <small className="label pull-right bg-green">new</small>
                </span>
              </Link>
            </li>
            <li className="treeview">
              <a href="#">
                <i className="fa fa-pie-chart" />
                <span>Charts</span>
                <span className="pull-right-container">
                  <i className="fa fa-angle-left pull-right" />
                </span>
              </a>
              <ul className="treeview-menu">
                <li><Link to="charts"><i className="fa fa-circle-o" /> ChartJS</Link></li>
                <li><Link to="morris"><i className="fa fa-circle-o" /> Morris</Link></li>
                <li><Link to="flotCharts"><i className="fa fa-circle-o" /> Flot</Link></li>
                <li><Link to="inlineCharts"><i className="fa fa-circle-o" /> Inline charts</Link></li>
              </ul>
            </li>
            <li className="treeview">
              <a href="#">
                <i className="fa fa-laptop" />
                <span>UI Elements</span>
                <span className="pull-right-container">
                  <i className="fa fa-angle-left pull-right" />
                </span>
              </a>
              <ul className="treeview-menu">
                <li><Link to="generalUi"><i className="fa fa-circle-o" /> General</Link></li>
                <li><Link to="iconsUi"><i className="fa fa-circle-o" /> Icons</Link></li>
                <li><Link to="buttonsUi"><i className="fa fa-circle-o" /> Buttons</Link></li>
                <li><Link to="slidersUi"><i className="fa fa-circle-o" /> Sliders</Link></li>
                <li><Link to="timelineUi"><i className="fa fa-circle-o" /> Timeline</Link></li>
                <li><Link to="modalsUi"><i className="fa fa-circle-o" /> Modals</Link></li>
              </ul>
            </li>
            <li className="treeview">
              <a href="#">
                <i className="fa fa-edit" /> <span>Forms</span>
                <span className="pull-right-container">
                  <i className="fa fa-angle-left pull-right" />
                </span>
              </a>
              <ul className="treeview-menu">
                <li><Link to="generalForm"><i className="fa fa-circle-o" /> General Elements</Link></li>
                <li><Link to="advancedForm"><i className="fa fa-circle-o" /> Advanced Elements</Link></li>
                <li><Link to="editorsForm"><i className="fa fa-circle-o" /> Editors</Link></li>
              </ul>
            </li>
            <li className="treeview">
              <a href="#">
                <i className="fa fa-table" /> <span>Tables</span>
                <span className="pull-right-container">
                  <i className="fa fa-angle-left pull-right" />
                </span>
              </a>
              <ul className="treeview-menu">
                <li><Link to="/dataTable"><i className="fa fa-circle-o" /> Simple tables</Link></li>
                <li><Link to="/simpleTable"><i className="fa fa-circle-o" /> Data tables</Link></li>
              </ul>
            </li>
            <li>
              <Link to="calendar">
                <i className="fa fa-calendar" /> <span>Calendar</span>
                <span className="pull-right-container">
                  <small className="label pull-right bg-red">3</small>
                  <small className="label pull-right bg-blue">17</small>
                </span>
              </Link>
            </li>

            <li>
              <Link to="mailbox">
                <i className="fa fa-envelope" /> <span>Mailbox</span>
                <span className="pull-right-container">
                  <small className="label pull-right bg-yellow">12</small>
                  <small className="label pull-right bg-green">16</small>
                  <small className="label pull-right bg-red">5</small>
                </span>
              </Link>
            </li>
            <li className="treeview">
              <a href="#">
                <i className="fa fa-folder" /> <span>Examples</span>
                <span className="pull-right-container">
                  <i className="fa fa-angle-left pull-right" />
                </span>
              </a>
              <ul className="treeview-menu">
                <li><Link to="invoice"><i className="fa fa-circle-o" /> Invoice</Link></li>
                <li><Link to="profile"><i className="fa fa-circle-o" /> Profile</Link></li>
                <li><Link to="login"><i className="fa fa-circle-o" /> Login</Link></li>
                <li><Link to="register"><i className="fa fa-circle-o" /> Register</Link></li>
                <li><Link to="lockscreen"><i className="fa fa-circle-o" /> Lockscreen</Link></li>
                <li><Link to="page_404"><i className="fa fa-circle-o" /> 404 Error</Link></li>
                <li><Link to="page_500"><i className="fa fa-circle-o" /> 500 Error</Link></li>
                <li><Link to="blank"><i className="fa fa-circle-o" /> Blank Page</Link></li>
                <li><Link to="pace"><i className="fa fa-circle-o" /> Pace Page</Link></li>
              </ul>
            </li>
            <li className="treeview">
              <a href="#">
                <i className="fa fa-share" /> <span>Multilevel</span>
                <span className="pull-right-container">
                  <i className="fa fa-angle-left pull-right" />
                </span>
              </a>
              <ul className="treeview-menu">
                <li><a href="#"><i className="fa fa-circle-o" /> Level One</a></li>
                <li className="treeview">
                  <a href="#"><i className="fa fa-circle-o" /> Level One
                    <span className="pull-right-container">
                      <i className="fa fa-angle-left pull-right" />
                    </span>
                  </a>
                  <ul className="treeview-menu">
                    <li><a href="#"><i className="fa fa-circle-o" /> Level Two</a></li>
                    <li className="treeview">
                      <a href="#"><i className="fa fa-circle-o" /> Level Two
                        <span className="pull-right-container">
                          <i className="fa fa-angle-left pull-right" />
                        </span>
                      </a>
                      <ul className="treeview-menu">
                        <li><a href="#"><i className="fa fa-circle-o" /> Level Three</a></li>
                        <li><a href="#"><i className="fa fa-circle-o" /> Level Three</a></li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li><a href="#"><i className="fa fa-circle-o" /> Level One</a></li>
              </ul>
            </li>
            <li><a href="https://adminlte.io/docs"><i className="fa fa-book" /> <span>Documentation</span></a></li>
            <li className="header">LABELS</li>
            <li><a href="#"><i className="fa fa-circle-o text-red" /> <span>Important</span></a></li>
            <li><a href="#"><i className="fa fa-circle-o text-yellow" /> <span>Warning</span></a></li>
            <li><a href="#"><i className="fa fa-circle-o text-aqua" /> <span>Information</span></a></li>
          </ul>
        </section>
        {/* /.sidebar */}
      </aside>
  );
}
export default SideBar;
