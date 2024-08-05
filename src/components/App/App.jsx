import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { selectIsRefreshing } from '../../redux/auth/selectors';
import { refreshUser } from '../../redux/auth/operations';

import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "../Layout/Layout"
import RestrictedRoute from '../RestrictedRoute/RestrictedRoute';
import PrivateRoute from '../PrivateRoute/PrivateRoute';

const HomePage = lazy(() => import('../../pages/HomePage/HomePage'));
const ContactsPage = lazy(() => import('../../pages/ContactsPage/ContactsPage'));
const LoginPage = lazy(() => import('../../pages/LoginPage/LoginPage'));
const RegistrationPage = lazy(() => import('../../pages/RegistrationPage/RegistrationPage'));





export default function App() {

    const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
    
    return isRefreshing ? (
    <div>Refreshing user please wait...</div>
  ) :
    (
        <Layout>
    <Suspense fallback={null}>
        <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/contacts" element={<PrivateRoute component={<ContactsPage />} redirectTo="/login"/>} />
                <Route path="/login" element={<RestrictedRoute component={<LoginPage/>} redirectTo="/contacts"/>} />
                <Route path="/registration" element={<RestrictedRoute component={<RegistrationPage/>} redirectTo="/contacts"/>}/>
        </Routes>
            </Suspense >
            </Layout>
)}