module.exports = {
    routes: [
      {
        method: "GET",
        path: "/custom-restaurant",
        handler: "custom-restaurant.index",
        config: {
            /**
              Before executing the find action in the Restaurant.js controller,
              we call the global 'is-authenticated' policy,
              found at ./src/policies/is-authenticated.js.
             */
            // policies: ['global::is-authenticated']
            auth: false
          }
      },
    ],
  };