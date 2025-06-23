// import './styles/styles.css';
// import { Route, Routes } from 'react-router-dom';
// import HomePage from './pages/HomePage';
// import LoginPage from './pages/LoginPage';
// import SignUpPage from './pages/SignUpPage';
// import Layout from './layout/Layout';
// import Settings from './pages/Settings';
// import Community from './pages/Community.jsx';
// import CreateIdea from './pages/Create.jsx';
// import Saved from './pages/Saved';
// import PremiumSubscription from './pages/Premium.jsx';
// import Profile from './pages/Profile';
// import HelpDesk from './pages/HelpDesk.jsx';
// import FeedbackPage from './pages/Feedback.jsx';
// import ActivityPage from './pages/Activity.jsx';
// import SavedIdeasPage from './pages/SavedIdeasPage.jsx';
// import ScrollToTop from './components/ScrollToTop';
// import { useState } from 'react';

// function App() {
//   const [isSignUp, setIsSignUp] = useState(false);

//   return (
//     <>
//       <ScrollToTop />
//       <Routes>
//         <Route
//           path="/"
//           element={
//             <Layout>
//               <HomePage />
//             </Layout>
//           }
//         />
//         <Route
//           path="/settings"
//           element={
//             <Layout>
//               <Settings />
//             </Layout>
//           }
//         />
//         <Route
//           path="/create"
//           element={
//             <Layout>
//               <CreateIdea />
//             </Layout>
//           }
//         />
//         <Route
//           path="/Premium"
//           element={
//             <Layout>
//               <PremiumSubscription />
//             </Layout>
//           }
//         />
//         <Route
//           path="/login"
//           element={
//             <Layout>
//               <LoginPage setIsSignUp={setIsSignUp} />
//             </Layout>
//           }
//         />
//         <Route
//           path="/signup"
//           element={
//             <Layout>
//               <SignUpPage setIsSignUp={setIsSignUp} />
//             </Layout>
//           }
//         />
//         <Route
//           path="/profile/:username"
//           element={
//             <Layout>
//               <Profile />
//             </Layout>
//           }
//         />
//         <Route
//           path="/community"
//           element={
//             <Layout>
//               <Community />
//             </Layout>
//           }
//         />
//         <Route
//           path="/saved"
//           element={
//             <Layout>
//               <SavedIdeasPage />
//             </Layout>
//           }
//         />
//         <Route
//           path="/help"
//           element={
//             <Layout>
//               <HelpDesk />
//             </Layout>
//           }
//         />
//         <Route
//           path="/feedback"
//           element={
//             <Layout>
//               <FeedbackPage />
//             </Layout>
//           }
//         />
//         <Route
//           path="/activity"
//           element={
//             <Layout>
//               <ActivityPage />
//             </Layout>
//           }
//         />
//       </Routes>
      
//     </>
//   );
// }

// export default App;


import './styles/styles.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import Layout from './layout/Layout';
import Settings from './pages/Settings';
import Community from './pages/Community.jsx';
import Create from './pages/Create'; // <-- import your new Create.jsx
import Saved from './pages/Saved';
import PremiumSubscription from './pages/Premium.jsx';
import Profile from './pages/Profile';
import HelpDesk from './pages/HelpDesk.jsx';
import FeedbackPage from './pages/Feedback.jsx';
import ActivityPage from './pages/Activity.jsx';
import SavedIdeasPage from './pages/SavedIdeasPage.jsx';
import ScrollToTop from './components/ScrollToTop';
import { useState } from 'react';

function App() {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <HomePage />
            </Layout>
          }
        />
        <Route
          path="/settings"
          element={
            <Layout>
              <Settings />
            </Layout>
          }
        />
        <Route
          path="/create"
          element={
            <Layout>
              <Create />  {/* <-- using your new Create page */}
            </Layout>
          }
        />
        <Route
          path="/Premium"
          element={
            <Layout>
              <PremiumSubscription />
            </Layout>
          }
        />
        <Route
          path="/login"
          element={
            <Layout>
              <LoginPage setIsSignUp={setIsSignUp} />
            </Layout>
          }
        />
        <Route
          path="/signup"
          element={
            <Layout>
              <SignUpPage setIsSignUp={setIsSignUp} />
            </Layout>
          }
        />
        <Route
          path="/profile/:username"
          element={
            <Layout>
              <Profile />
            </Layout>
          }
        />
        <Route
          path="/community"
          element={
            <Layout>
              <Community />
            </Layout>
          }
        />
        <Route
          path="/saved"
          element={
            <Layout>
              <SavedIdeasPage />
            </Layout>
          }
        />
        <Route
          path="/help"
          element={
            <Layout>
              <HelpDesk />
            </Layout>
          }
        />
        <Route
          path="/feedback"
          element={
            <Layout>
              <FeedbackPage />
            </Layout>
          }
        />
        <Route
          path="/activity"
          element={
            <Layout>
              <ActivityPage />
            </Layout>
          }
        />
      </Routes>
    </>
  );
}

export default App;
