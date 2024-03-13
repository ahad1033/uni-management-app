import OfferedCourse from "../pages/student/OfferedCourse";
import StudentDashboard from "../pages/student/StudentDashboard";

export const studentPaths = [
  {
    name: "Dashbaoard",
    path: "dashboard",
    element: <StudentDashboard />,
  },
  {
    name: "Offered course",
    path: "offered-course",
    element: <OfferedCourse />,
  },
];
