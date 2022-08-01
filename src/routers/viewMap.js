import React from "react";
import {LoginPage, NotFoundPage, PaymentsList, HomePageLayout, PaymentsListUpdated} from "../pages";

export const viewMap = {
    home: <HomePageLayout/>,
    login : <LoginPage/>,
    notFound : <NotFoundPage/>,
    paymentsList : <PaymentsList/>,
    paymentsListUpdated : <PaymentsListUpdated/>
}

