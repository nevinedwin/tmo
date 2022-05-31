import { Logout, Person, Scoreboard } from "@mui/icons-material";

export default {
  Login: {
    mainHeading: 'TMO',
    submit: 'Submit',
    emailLabel: 'Email',
    emailPlaceholder: 'xyz.inapp.com',
    password: 'password',
    description: 'site by TMO',
    getOtpButtonLabel: 'Get OTP',
    submitButtonLabel: 'Submit',
    loginHeading: 'Login  into your Account',
    forgetPassword: 'Forgot Password',
    confirmpassword: 'Confirm Password',
    sigupheading: 'Sign Up',
  },
  dashboard: {
    navItem: ['Profile', 'Logout'],
    navHeading: 'TMO',
    games: ['Tech Wordle', 'Tech Challenge', 'Tech Riddle', 'Tech Crosswords', 'Treasure Hunt', 'Score Board', 'Admin'],
    avatarList: [
      { text: 'Profile', logo: <Person /> },
      { text: 'Score Board', logo: <Scoreboard /> },
      { text: 'Logout', logo: <Logout /> }],
    greetings: 'Welcome'
  }
}