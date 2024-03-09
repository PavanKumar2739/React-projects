export const msalConfig = {
    auth: {
        clientId: "6e488aec-f78a-459b-9744-4dfb70036909", // This is the ONLY mandatory field that you need to supply.
        redirectUri: "http://localhost:3000", // You must register this URI on Azure Portal/App Registration. Defaults to window.location.origin
        scopes:[
            'user.read'
        ],
        authority: "https://login.microsoftonline.com/f8cdef31-a31e-4b4a-93e4-5f571e91255a",
      },
    cache: {
        cacheLocation: "sessionStorage", // Configures cache location. "sessionStorage" is more secure, but "localStorage" gives you SSO between tabs.
        storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
    },
   
};