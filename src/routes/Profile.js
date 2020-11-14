import { authService, dbService } from "../fBase";
import React, { useState } from "react";
import "./Home.css";
import "./Profile.css";
const Profile = ({ userObj, refreshUser }) => {
  const [newDisplayName, setNewDisplayName] = useState(userObj.displayName);

  /* const getMyNweets = async () => {
    const nweets = await dbService
      .collection("nweets")
      .where("creatorId", "==", userObj.uid)
      .orderBy("createdAt")
      .get();
    console.log(nweets.docs.map((doc) => doc.data()));
  };
  useEffect(() => {
    getMyNweets();
  }, []); */
  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    setNewDisplayName(value);
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    if (userObj.displayName !== newDisplayName) {
      await userObj.updateProfile({
        displayName: newDisplayName,
      });
      setNewDisplayName(userObj.displayName);
      refreshUser();
      window.location.replace("#");
    }
  };
  return (
    <div className="home">
      <section id="header">
        <div className="container">
          <h1 id="logo">Profile</h1>

          <p>
            <strong>{userObj.displayName}</strong>님의
            프로필입니다.
          </p>
        </div>
      </section>
      <body className="homepage is-preload">
        <div id="page-wrapper">
          <section id="features">
            <div>
              <form onSubmit={onSubmit} className="profileForm">
                <input
                  onChange={onChange}
                  type="text"
                  autoFocus
                  placeholder="Display name"
                  value={newDisplayName}
                  className="formInput"
                />
                <input
                  type="submit"
                  value="Update Profile"
                  className="formBtn"
                  style={{
                    marginTop: 10,
                  }}
                />
              </form>
            </div>
          </section>

          <section id="banner">
            <div className="container"></div>
          </section>

          <section id="footer">
            <div id="copyright" className="container">
              <ul className="links">
                <li>&copy; mukjo96. All rights reserved.</li>
                <li>
                  Design: <a href="http://html5up.net">HTML5 UP</a>
                </li>
              </ul>
            </div>
          </section>
        </div>
      </body>
    </div>
  );
};

export default Profile;
