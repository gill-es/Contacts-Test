import React from "react";
import MainLayout from "../components/Layout/MainLayout";
import ContactDetails from "../features/contacts/components/ContactDetails";
import ContactDetailsForm from "../features/contacts/components/ContactDetailsForm";
import ContactList from "../features/contacts/components/ContactList";

const routes = [
  {
    path: "/contact",
    element: <MainLayout />,
    children: [
      {
        path: "/contact/list",
        element: <ContactList />,
      },
      {
        path: "/contact/new",
        element: <ContactDetailsForm />,
      },
      {
        path: "/contact/:id",
        element: <ContactDetails />,
      },
      {
        path: "/contact/:id/edit",
        element: <ContactDetailsForm />,
      },
    ],
  },
];

export default routes;
