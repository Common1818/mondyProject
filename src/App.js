import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
// Contexts
import CourseContextProvider from "./contexts/courseContext";
import TopicContextProvider from "./contexts/topicContext";
import VideoContextProvider from "./contexts/videoContext";
import QuizContextProvider from "./contexts/quizContext";
import HomeContextProvider from "./contexts/homeContext";
import BlogContextProvider from "./contexts/blogContext";
import FooterContextProvider from "./contexts/footerContext";
import AuthContextProvider from "./contexts/authContext";
import AdminContextProvider from "./contexts/adminContext";
import CertificateContextProvider from "./contexts/certificateContext";
//
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./components/home/home";
import addCourse from "./components/courses/addCourse.js";
import displayTopicsVideos from "./components/topics-videos/displayTopics-Videos";
import allCourses from "./components/courses/allCourses";

// Blog
import blogHome from "./components/blog/blogHome";
import AddArticle from "./components/blog/articles/addArticle";
import ReadArticle from "./components/blog/articles/readArticle";
//

// edit
import EditHome from "./components/EDIT/editHome/editHome";
import EditArticle from "./components/blog/articles/editArticle";
import EditCourseCard from "./components/EDIT/editCourses/editCourseCard";
//

// Auth
import SignUp from "./components/auth/signUp";
import LoginForm from "./components/auth/login";
//

// Admin
import AdminPanel from "./components/adminPanel/adminPanel";
//

// LiveStream
import LiveStream from "./components/liveStream/liveStream";
import ForgotPassword from "./components/auth/forgotPassword";
import Certificate from "./components/certificate/certificate";
import VerifyCertificate from "./components/certificate/verifyCertificate";

//

// import firebase from "./config/fbConfig";

class App extends Component {
  state = {
    isLoaded: false,
  };

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <CourseContextProvider>
              <TopicContextProvider>
                <VideoContextProvider>
                  <QuizContextProvider>
                    <HomeContextProvider>
                      <AuthContextProvider>
                        <AdminContextProvider>
                          <Navbar />
                          <Route
                            exact
                            path="/adminpanel"
                            component={AdminPanel}
                          />
                          <Route exact path="/" component={Home} />
                          <Route
                            exact
                            path="/edit/homepage"
                            component={EditHome}
                          />
                          <Route exact path="/courses" component={allCourses} />
                          <Route
                            exact
                            path="/courses/add"
                            component={addCourse}
                          />
                          <Route exact path="/signup" component={SignUp} />
                          <Route exact path="/login" component={LoginForm} />
                          <BlogContextProvider>
                            <Route exact path="/blog" component={blogHome} />
                            <Route
                              exact
                              path="/blog/article/add"
                              component={AddArticle}
                            />
                            <Route
                              exact
                              path="/blog/article/:id/read"
                              component={ReadArticle}
                            />
                            <Route
                              exact
                              path="/blog/article/:id/update"
                              component={EditArticle}
                            />
                          </BlogContextProvider>
                          <Route
                            exact
                            path="/courses/topics/:id"
                            component={displayTopicsVideos}
                          />
                          <Route
                            exact
                            path="/livestream"
                            component={LiveStream}
                          />
                          <Route
                            exact
                            path="/course/:id/edit"
                            component={EditCourseCard}
                          />
                          <Route
                            exact
                            path="/login/forget"
                            component={ForgotPassword}
                          />

                          <Route
                            exact
                            path="/certificate/:id"
                            component={Certificate}
                          />

                          <CertificateContextProvider>
                            <Route
                              exact
                              path="/verifycertificate"
                              component={VerifyCertificate}
                            />
                          </CertificateContextProvider>

                          <FooterContextProvider>
                            <Footer />
                          </FooterContextProvider>
                        </AdminContextProvider>
                      </AuthContextProvider>
                    </HomeContextProvider>
                  </QuizContextProvider>
                </VideoContextProvider>
              </TopicContextProvider>
            </CourseContextProvider>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
