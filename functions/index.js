const admin = require('firebase-admin');
const serviceAccount = require('path-to-serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://your-project-id.firebaseio.com',
});

const sendNotification = (token, title, body) => {
  const message = {
    notification: {
      title: title,
      body: body,
    },
    token: token, // Device token from your Ionic app
  };

  admin.messaging().send(message)
    .then(response => {
      console.log('Successfully sent message:', response);
    })
    .catch(error => {
      console.log('Error sending message:', error);
    });
};
