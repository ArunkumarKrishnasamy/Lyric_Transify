import React from "react";
import logo from "../assets/applogo.png";
import "../Components/Admin_Dashboard.css";
import { useAuth } from "../AuthContext";
import { useNavigate } from "react-router-dom";

function Admin_Dashboard() {
  // const { logout } = useAuth();
  const { logout } = useAuth();
  return (
    <>
      <nav>
        <div className="containerbox">
          <img src={logo} className="logo" />

          <div className="profile-area">
            <div className="search-bar">
              <span className="material-symbols-sharp">search</span>
              <input type="search" placeholder="search..." />
            </div>
            <div className="profile">
              <div className="profile-photo">
                <img
                  src="https://img.icons8.com/ios/100/user-male-circle--v1.png"
                  alt="user-male-circle--v1"
                />
              </div>
            </div>
            <span className="material-symbols-sharp">expand_more</span>

            {/* <button id="menu-btn">
              <span className="material-symbols-sharp">menu</span>
            </button> */}
          </div>
        </div>
      </nav>
      <main>
        <aside>
          {/* <button id="close-btn">
            <span className="material-symbols-sharp">close</span>
          </button> */}

          <div className="sidebar">
            <a href="#" className="active">
              <span className="material-symbols-sharp">home</span>
              <h4>HOME</h4>
            </a>

            <a href="#">
              <span className="material-symbols-sharp">question_mark</span>
              <h4>HELP</h4>
            </a>
            <a href="#">
              <span className="material-symbols-sharp">settings</span>
              <h4>SETTING</h4>
            </a>
            <a onClick={logout}>
              <span className="material-symbols-sharp">logout</span>
              <h4>LOGOUT</h4>
            </a>
          </div>
        </aside>

        <section className="middle">
          <div className="card">
            <p>USERS</p>
            <a href="#">
              <span className="material-symbols-sharp">visibility</span>
              <h4>VIEW USERS</h4>
            </a>
            <a href="#">
              <span className="material-symbols-sharp">person_add</span>
              <h4>ADD USER</h4>
            </a>
            <a href="#">
              <span className="material-symbols-sharp">person_remove</span>
              <h4>DELETE USER</h4>
            </a>
          </div>

          <div className="card">
            <p>DICTIONARY</p>
            <a href="#">
              <span className="material-symbols-sharp">add</span>
              <h4>ADD</h4>
            </a>
            <a href="#">
              <span className="material-symbols-sharp">delete</span>
              <h4>DELETE</h4>
            </a>
            <a href="#">
              <span className="material-symbols-sharp">update</span>
              <h4>UPDATE</h4>
            </a>
          </div>

          <div className="card">
            <p>GROUP</p>
            <a href="#">
              <span className="material-symbols-sharp">add</span>
              <h4>ADD</h4>
            </a>
            <a href="#">
              <span className="material-symbols-sharp">delete</span>
              <h4>DELETE</h4>
            </a>
            <a href="#">
              <span className="material-symbols-sharp">update</span>
              <h4>UPDATE</h4>
            </a>
          </div>

          <div className="card">
            <p>REPORTS</p>
            <a href="#">
              <span className="material-symbols-sharp">pending_actions</span>
              <h4>PENDING REPORTS</h4>
            </a>
            <a href="#">
              <span className="material-symbols-sharp">schedule</span>
              <h4>TURN AROUND TIME</h4>
            </a>
          </div>

          <div className="card" style={{ height: "12.5rem" }}>
            <a href="#">
              <span className="material-symbols-sharp">add_task</span>
              <h4>ASSIGN TASKS</h4>
            </a>
          </div>
        </section>
      </main>
    </>
  );
}

export default Admin_Dashboard;
