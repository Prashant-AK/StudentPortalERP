import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import SideBar from '../src/SideBar/SideBar';
import DashBoard from './components/DashBoard/DashBoard';
import DailyAttendance from './components/DailyAttendance/DailyAttendance';
import StudentAttendance from './components/Student/StudentAttendance';
import Login from './components/Login/Login';
import ForgotPassword from './components/Login/ForgotPassword';
import OTP from './components/Login/OTP';
import ResetPassword from './components/Login/ResetPassword';
import PrivateRoutes from './utils/PrivateRoutes';
import { FacultyAttendance } from './components/Faculty/FacultyAttendance';

import Header from './components/DashBoard/Header';
import { FacultyProfile } from './components/Faculty/FacultyProfile';
import { StudentProfile } from './components/Student/StudentProfile';
import StudentProfileForm from './components/Student/StudentProfileForm';
import { Contact } from './components/ContactUs/Contact';
import FacultyProfileForm from './components/Faculty/FacultyProfileForm';
import ClassSchedule from './components/classSchedule/ClassSchedule';
import AssignClass from './components/assignClass/AssignClass';
import Events from './components/Events/Events';
import Documents from './components/documents/Documents';
import ContactEnquiry from './components/contactEnquiry/ContactEnquiry';
import UploadSchedule from './components/classSchedule/UploadSchedule';
import AssignClassForm from './components/assignClass/AssignClassForm';
import CreateEvents from './components/Events/CreateEvents';
import UploadDocument from './components/documents/UploadDocument';
import TeacherDashBoard from './components/DashBoard/teacher/TeacherDashBoard';

function App() {
  const { isAuthenticated, user } = useSelector((state) => state.loginState);
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/ForgotPassword" element={<ForgotPassword />} />
          <Route path="/OTP" element={<OTP />} />
          <Route path="/ResetPassword" element={<ResetPassword />} />

          {/* Admin Routes START */}
          <Route element={<PrivateRoutes />}>
            {/* <SideBar />
            <Header /> */}
            <Route
              path="/dashboard"
              element={
                <>
                  <div
                    style={{
                      backgroundColor: '#EAF4FF',
                      paddingBottom: '60px',
                    }}
                  >
                    <SideBar />
                    <Header />
                    <DashBoard />
                  </div>
                </>
              }
            />
            <Route
              path="/daily-attendance"
              element={
                <>
                  <SideBar />
                  <Header />
                  <DailyAttendance />
                </>
              }
            />
            <Route
              path="/student-attendance"
              element={
                <>
                  <SideBar />
                  <Header />
                  <StudentAttendance />
                </>
              }
            />
            <Route
              path="/teacher-attendance"
              element={
                <>
                  <SideBar />
                  <Header />
                  <FacultyAttendance />
                </>
              }
            />
            <Route
              path="/student-profile"
              element={
                <>
                  <SideBar />
                  <Header />
                  <StudentProfile />
                </>
              }
            />
            <Route
              path="/teacher-profile"
              element={
                <>
                  <SideBar />
                  <Header />
                  <FacultyProfile />
                </>
              }
            />
            <Route
              path="/create-student-profile"
              element={
                <>
                  <SideBar />
                  <Header />
                  <StudentProfileForm />
                </>
              }
            />
            <Route
              path="/create-faculty-profile"
              element={
                <>
                  <SideBar />
                  <Header />
                  <FacultyProfileForm />
                </>
              }
            />
            <Route
              path="/class-schedule"
              element={
                <>
                  <SideBar />
                  <Header />
                  <ClassSchedule />
                </>
              }
            />
            <Route
              path="/upload-schedule"
              element={
                <>
                  <SideBar />
                  <Header />
                  <UploadSchedule />
                </>
              }
            />
            <Route
              path="/assign-class"
              element={
                <>
                  <SideBar />
                  <Header />
                  <AssignClass />
                </>
              }
            />
            <Route
              path="/assign-class-schedule"
              element={
                <>
                  <SideBar />
                  <Header />
                  <AssignClassForm />
                </>
              }
            />
            <Route
              path="/events"
              element={
                <>
                  <SideBar />
                  <Header />
                  <Events />
                </>
              }
            />
            <Route
              path="/create-event"
              element={
                <>
                  <SideBar />
                  <Header />
                  <CreateEvents />
                </>
              }
            />
            <Route
              path="/documents"
              element={
                <>
                  <SideBar />
                  <Header />
                  <Documents />
                </>
              }
            />
            <Route
              path="/upload-document"
              element={
                <>
                  <SideBar />
                  <Header />
                  <UploadDocument />
                </>
              }
            />
            <Route
              path="/contact-enquiry"
              element={
                <>
                  <SideBar />
                  <Header />
                  <ContactEnquiry />
                </>
              }
            />
            <Route
              path="/contact"
              element={
                <>
                  {/* <SideBar /> <Header />  */}
                  <Contact />
                </>
              }
            />
          </Route>
          {/* Admin Routes END */}
        </Routes>
        <Routes element={<PrivateRoutes />}>
          <Route path="teacher">
            <Route
              index
              element={
                <>
                  <div
                    style={{
                      backgroundColor: '#EAF4FF',
                      paddingBottom: '60px',
                    }}
                  >
                    {/* <h1>Hello dude I am teacher dashboard</h1> */}
                    <SideBar role="teacher" />
                    <Header />
                    <TeacherDashBoard />
                  </div>
                </>
              }
            />
            <Route
              path="daily-attendance"
              element={
                <>
                  <SideBar role="teacher" />
                  <Header />
                  <DailyAttendance />
                </>
              }
            />
            <Route
              path="student-attendance"
              element={
                <>
                  <SideBar role="teacher" />
                  <Header />
                  <StudentAttendance />
                </>
              }
            />
            <Route
              path="student-profile"
              element={
                <>
                  <SideBar role="teacher" />
                  <Header />
                  <StudentProfile />
                </>
              }
            />
            <Route
              path="events"
              element={
                <>
                  <SideBar role="teacher" />
                  <Header />
                  <Events />
                </>
              }
            />
            <Route
              path="create-event"
              element={
                <>
                  <SideBar role="teacher" />
                  <Header />
                  <CreateEvents />
                </>
              }
            />
            <Route
              path="documents"
              element={
                <>
                  <SideBar role="teacher" />
                  <Header />
                  <Documents />
                </>
              }
            />
            <Route
              path="upload-document"
              element={
                <>
                  <SideBar role="teacher" />
                  <Header />
                  <UploadDocument />
                </>
              }
            />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
