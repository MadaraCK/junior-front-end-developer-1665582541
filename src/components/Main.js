function Main() {
  return (
    <main className="two_columns">
      <section className="left_column both_column">
        <p className="list_tasks">your tasks</p>
        <div className="all_tasks">
          <div className="check_arrow">
            <i class="fa-solid fa-check"></i>
            <li className="correct_task">Application Setup</li>
          </div>
          <div className="check_arrow check_arrow_middle">
            <i class="fa-solid fa-check"></i>
            <li className="correct_task">Static Books List </li>
          </div>
          <div className="check_arrow">
            <i class="fa-solid fa-check"></i>
            <li className="correct_task">Administration Panel </li>
          </div>
          <div className="check_arrow check_arrow_fourth">
            <i class="fa-solid fa-arrow-right"></i>
            <li className="right_arrow_task correct_task">
              Connect Admin with Frontend
            </li>
          </div>
          <div className="locked check_arrow">
            <i class="fa-solid fa-lock"></i>
            <li className="locked_task correct_task">Book Review Feature</li>
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
                <p className="new_button">new</p>
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
          <section className="small_right_column">
            <h1 className="title_app">Application has been accepted 🎉 🙌</h1>
            <section className="img_message">
              <div className="profil_img">
                <div className="profil" />
              </div>
              <div className="message_name">
                <div className="name_date">
                  <p className="nick_name">Kirsten Aniston</p>
                  <p className="date_nick">• Today, 17th December • 11:20</p>
                </div>
                <p className="text_kirsten kirsten_first">Hello!</p>
                <p className="text_kirsten">
                  My name is Kirsten, and I'm super happy to announce that your
                  application to join Coders Family has been accepted! 🎉 🙌
                </p>
                <p className="text_kirsten">
                  You really impressed us during the interview process, and we'd
                  like to offer you a project with nerds.family. We've been
                  working with nerds.family for quite some time, and it's
                  important for us to keep them satisfied with our services —
                  hence why we believe you'll be a great fit for this job.
                </p>
                <p className="text_kirsten">
                  Here's the project overview: You'll be responsible for
                  building a database and page for recording and displaying book
                  ratings. We'd like to work in two week-long sprints, we've
                  already given you a head start and prepared your tasks to
                  deliver in your first sprint.
                </p>
              </div>
            </section>
          </section>
        </div>
      </section>
    </main>
  );
}
export default Main;
