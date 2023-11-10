import {
    createBrowserRouter
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Authentication/Login";
import Quiz from "../Pages/Quiz/Quiz";
import QuizDetails from "../Pages/QuizDetails/QuizDetails";
import QuizScore from "../Pages/QuizScore/QuizScore";


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
                path: "/quiz",
                element: <Quiz />
            },     
            {
                path: "/quizdetails/:id",
                element: <QuizDetails />
            },     
            {
                path: "/quizscore",
                element: <QuizScore />
            },     
        ]
    },
    // {
    //     path: "/dashboard",
    //     element: <PrivetRoute><Dashboard /></PrivetRoute>,
    //     errorElement: <NotFound/>,
    //     children: [
    //         {
    //             path: "requestforbook",
    //             element: <BrowBookRequestList />
    //         },
    //         {
    //             path: "addbook",
    //             element: <AddBooks />
    //         },
    //         {
    //             path: "collectbook",
    //             element: <CollectBooks />
    //         },
    //         {
    //             path: "allbooks",
    //             element: <AllBookList />
    //         },
    //         {
    //             path: "updateBook/:id",
    //             element: <UpdateBooks />
    //         },

    //     ]

    // },
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