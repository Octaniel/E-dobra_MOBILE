export const environment = {
  production: true,
  apiUrl: "",
  tokenWhitelistedDomains: [ new RegExp('localhost:8080') ],
  tokenBlacklistedRoutes: [ new RegExp('\/oauth\/token') ]
};
