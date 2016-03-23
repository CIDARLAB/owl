module.exports = {
    database: 'mongodb://cidarlab:cidarowl@ds019268.mlab.com:19268/owlcad',
    port: 3000,
    secretKey: "Owl$%#!@&",
    
    facebook: {
        clientID: process.env.FACEBOOK_ID || '699495170191334',
        clientSecret: process.env.FACEBOOK_SECRET || '4bcb789cb2f044f05f103c596f755f34',
        profileFields: ['emails', 'displayName'],
        callbackURL: 'http://localhost:3000/auth/facebook/callback'
    },
    
    google: {
        clientID: process.env.GOOGLE_CLIENT_ID || '628981148718-fsm47fh7022a7nk5fonuqhd23ekojuqk.apps.googleusercontent.com',
        clientSecret: process.env.GOOGLE_SECRET || 'wvPAFViyoDXPvPXM7NaRVhPX',
        profileFields: ['emails', 'displayName'],
        callbackURL: 'http://localhost:3000/auth/google/callback'
    }
    
};

