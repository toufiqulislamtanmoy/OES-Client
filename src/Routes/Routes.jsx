import {
    createBrowserRouter
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Authentication/Login";
import Quiz from "../Pages/Quiz/Quiz";
import QuizDetails from "../Pages/QuizDetails/QuizDetails";
import QuizScore from "../Pages/QuizScore/QuizScore";
import PrivetRoute from "./PrivetRoute";
import Signup from "../Pages/Authentication/Signup";
import RankingList from "../Pages/RankingList/RankingList";
import AddQuiz from "../Pages/InstructorPanel/AddQuiz/AddQuiz";
import ManageQuiz from "../Pages/InstructorPanel/ManageQuiz/ManageQuiz";
import Dashboard from "../Layout/Dashboard";
import MangeQuestion from "../Pages/InstructorPanel/ManageQuiz/MangeQuestion/MangeQuestion";
import DidNotComplete from "../Pages/DidNotComplete/DidNotComplete";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        // errorElement: <NotFound/>,
        children: [
            {
                path: "/",
                element: <Home />
            },     
            {
                path: "/login",
                element: <Login />
            },     
            {
                path: "/signup",
                element: <Signup />
            },     
            {
                path: "/quiz",
                element: <Quiz />
            },     
            {
                path: "/quizdetails/:id",
                element: <PrivetRoute><QuizDetails /></PrivetRoute>
            },     
            {
                path: "/quizscore",
                element: <PrivetRoute><QuizScore /></PrivetRoute>
            },     
            {
                path: "/ranking",
                element: <RankingList />
            },     
            {
                path: "/timeout",
                element: <DidNotComplete />
            },     
        ]
    },
    {
        path: "/dashboard",
        element: <PrivetRoute><Dashboard /></PrivetRoute>,
        // errorElement: <NotFound/>,
        children: [
            {
                path: "addQuiz",
                element: <AddQuiz />
            },
            {
                path: "manageQuiz",
                element: <ManageQuiz />
            },
            {
                path: "addquestions/:quizID",
                element: <MangeQuestion />
            }

        ]

    },
    // {
    //     path: "/userdashboard",
    //     element: <PrivetRoute><UserDashboard /></PrivetRoute>,
    //     errorElement: <NotFound/>,
    //     children: [
    //         {
    //             path: "userCart",
    //             element: <MyCart />
    //         },
    //         {
    //             path: "userBorrowBooks",
    //             element: <MyBorrowBooks />
    //         },
    //         {
    //             path: "checkout/:id",
    //             element: <Payment />
    //         },
    //         {
    //             path: "purchaseHistory",
    //             element: <PaymentHistory />
    //         },
    //         {
    //             path: "myfile",
    //             element: <MyFile />
    //         },

    //     ]

    // }
]);

export default router;