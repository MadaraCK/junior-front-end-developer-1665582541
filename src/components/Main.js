import { Link, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Application from "../pages/Application";
import Panel from "../pages/Panel";
import StaticList from "../pages/StaticList";
import Admin from "../pages/Admin";
import Locked from "../pages/Locked";
function Main() {
  const [remove, setRemove] = useState(true);
  const removeButton = () => {
    setRemove((prev) => !prev);
  };
  return (
    <main className="two_columns">
      <section className="left_column both_column">
        <p className="list_tasks">your tasks</p>
        <div className="all_tasks">
          <div className="check_arrow">
            <i class="fa-solid fa-check"></i>
            <li className="correct_task">
              <Link to="/" className="link_router">
                Application Setup
              </Link>
            </li>
          </div>
          <div className="check_arrow check_arrow_middle">
            <i class="fa-solid fa-check"></i>
            <li className="correct_task">
              <Link to="/staticList" className="link_router">
                Static Books List
              </Link>
            </li>
          </div>
          <div className="check_arrow">
            <i class="fa-solid fa-check"></i>
            <li className="correct_task">
              <Link to="/Panel" className="link_router">
                Administration Panel
              </Link>
            </li>
          </div>
          <div className="check_arrow check_arrow_fourth">
            <i class="fa-solid fa-arrow-right"></i>
            <li className="right_arrow_task correct_task">
              <Link to="/Admin" className="link_router">
                Connect Admin with Frontend
              </Link>
            </li>
          </div>
          <div className="locked check_arrow">
            <i class="fa-solid fa-lock"></i>
            <li className="locked_task correct_task">
              <Link to="/Locked" className="link_router">
                Book Review Feature
              </Link>
            </li>
          </div>
        </div>
      </section>
      <section className="right_column both_column">
        <div className="header_business_context">
          <i class="fa-regular fa-compass"></i>
          <li className="context">business context</li>
        </div>
        <div className="both_column_right">
          <section className="small_left_column_box">
            <div className="new_task">
              <div className="up_text_task">
                {remove && (
                  <button className="new_button" onClick={removeButton}>
                    new
                  </button>
                )}
                <p className="name_task">Olga Nelson</p>
                <p className="date_send">Dec 17</p>
              </div>
              <p className="new_text_task ">
                New sprint, tasks and intro information.
              </p>
              <p className="text_task">
                Hi Eric, congratulations on completing the previous assignment.
                This time you will have to focus on..
              </p>
            </div>
            <div className="new_task">
              <div className="up_text_task">
                <p className="name_task">Kristen Aniston</p>
                <p className="date_send">Dec 17</p>
              </div>
              <p className="text_task_title">
                Application has been accepted 🎉 🙌
              </p>
              <p className="text_task">
                Hi Eric, congratulations on completing the previous assignment.
                This time you will have to focus on..
              </p>
            </div>
            <div className="new_task">
              <div className="up_text_task">
                <p className="name_task">Olga Nelson</p>
                <p className="date_send">Dec 17</p>
              </div>
              <p className="text_task_title">
                New sprint, tasks and intro information.
              </p>
              <p className="text_task">
                Hi Eric, congratulations on completing the previous assignment.
                This time you will have to focus on..
              </p>
            </div>
          </section>
          <Routes>
            <Route path="/" element={<Application />} />
            <Route path="/staticList" element={<StaticList />} />
            <Route path="/panel" element={<Panel />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/locked" element={<Locked />} />
          </Routes>
        </div>
      </section>
    </main>
  );
}
export default Main;
