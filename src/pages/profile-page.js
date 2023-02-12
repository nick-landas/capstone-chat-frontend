
import React from "react";
import { PageLayout } from "../components/page-layout";

export const ProfilePage = () => {
  const user = {
    nickname: "Customer",
    name: "One Customer",
    image_url: "https://cdn.auth0.com/blog/hello-auth0/auth0-user.png",
    updated_at: "2021-05-04T21:33:09.415Z",
    email: "customer@example.com",
    email_verified: false,
    sub: "auth0|12345678901234567890",
  };

  return (
    <PageLayout>
      <div className="content-layout">
        <h1 id="page-title" className="content__title">
          Profile Page
        </h1>
        <div className="content__body">
          <p id="page-description">
            <span>
              <strong>Only authenticated users should access this page.</strong>
            </span>
          </p>
          <div className="profile-grid">
            <div className="profile__header">
              <img
                src={user.image_url}
                alt="Profile"
                className="profile__avatar"
              />
              <div className="profile__headline">
                <h2 className="profile__title">{user.name}</h2>
                <span className="profile__description">{user.email}</span>
              </div>
            </div>
            <div className="profile__details"></div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};