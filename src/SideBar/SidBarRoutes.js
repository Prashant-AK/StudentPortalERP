import React from 'react';

import { FaHome, FaUser } from 'react-icons/fa';
import { AiFillHeart } from 'react-icons/ai';
import { BsCartCheck } from 'react-icons/bs';

export const SideBarRoutes = {
  SuperAdmin: [
    {
      path: '/dashboard',
      name: 'Dashboard',
      icon: <FaHome />,
    },
    {
      path: '/daily-attendance',
      name: 'Daily Attendance',
      icon: <FaUser />,
    },

    {
      path: '/student',
      name: 'Student',
      icon: <FaUser />,
      subRoutes: [
        {
          path: '/student-attendance',
          name: 'Attendance',
          // icon: <FaLock />,
        },
        {
          path: '/student-profile',
          name: 'Profile ',
          // icon: <FaUser />,
        },
      ],
    },
    {
      path: '/teacher',
      name: 'Teacher',
      icon: <FaUser />,
      subRoutes: [
        {
          path: '/teacher-attendance',
          name: 'Attendance',
          // icon: <FaLock />,
        },
        {
          path: '/teacher-profile',
          name: 'Profile ',
          // icon: <FaUser />,
        },
      ],
    },
    {
      path: '/class-schedule',
      name: 'Class/Schedule',
      icon: <FaHome />,
    },
    {
      path: '/assign-class',
      name: 'Assign Class',
      icon: <FaHome />,
    },
    {
      path: '/documents',
      name: 'Documents',
      icon: <BsCartCheck />,
    },
    {
      path: '/events',
      name: 'Events',
      icon: <AiFillHeart />,
    },
    {
      path: '/contact-enquiry',
      name: 'Contact Enquiry',
      icon: <AiFillHeart />,
    },
  ],
  Student: [],
  Teacher: [
    {
      path: '/teacher',
      name: 'Dashboard',
      icon: <FaHome />,
    },
    {
      path: '/teacher/daily-attendance',
      name: 'Daily Attendance',
      icon: <FaUser />,
    },

    {
      path: '/teacher/student',
      name: 'Student',
      icon: <FaUser />,
      subRoutes: [
        {
          path: '/teacher/student-attendance',
          name: 'Attendance',
          // icon: <FaLock />,
        },
        {
          path: '/teacher/student-profile',
          name: 'Profile ',
          // icon: <FaUser />,
        },
      ],
    },
    {
      path: '/teacher/documents',
      name: 'Documents',
      icon: <BsCartCheck />,
    },
    {
      path: '/teacher/events',
      name: 'Events',
      icon: <AiFillHeart />,
    },
  ],
};
