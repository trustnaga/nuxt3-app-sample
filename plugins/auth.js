import { PublicClientApplication } from "@azure/msal-browser";

export default defineNuxtPlugin((nuxtApp) => {
    const msalConfig = {
        auth: {
            clientId: '<YOUR_APPLICAION_CLIENT_ID>',
            authority: 'https://login.microsoftonline.com/<YOU_APPLICAION_TENANT_ID>',
            redirectUri: '/', // Must be registered as a SPA redirectURI on your app registration
            postLogoutRedirectUri: 'http://localhost:3000/' // Must be registered as a SPA redirectURI on your app registrationregistration
        },
        cache: {
          cacheLocation: 'localStorage', // This configures where your cache will be stored
          storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
        },
      }
    const msalInstance = new PublicClientApplication(msalConfig);
    return {
        provide: {
            msalInstance : msalInstance
        }
    }

})