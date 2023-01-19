import { signInWithGooglePopUp, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utls';

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopUp();

    const userDocRef = createUserDocumentFromAuth(user);
  };
  return (
    <div>
      <h1>Sign In page</h1>
      <button onClick={logGoogleUser}>Sign with Google Popup</button>
    </div>
  );
};

export default SignIn;
