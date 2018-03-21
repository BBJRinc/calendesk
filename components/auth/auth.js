import Auth0 from 'react-native-auth0';
const auth0 = new Auth0({ domain: 'jordanshort.auth0.com', clientId: 'lweefN4FiP7_eOg_sh2F-GcVkh53PDzm' });

auth0
    .webAuth
    .authorize({scope: 'openid profile email', audience: 'https://jordanshort.auth0.com/userinfo'})
    .then(credentials =>
      console.log(credentials)
      // Successfully authenticated
      // Store the accessToken
    )
    .catch(error => console.log(error));

    export default auth;