const { User } = require('../../models');
const jwt = require('jsonwebtoken');
const { OAuth2Client } = require('google-auth-library');

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

const googleAuth = (req, res) => {
  const { tokenId } = req.body;
  client
    .verifyIdToken({
      idToken: tokenId,
      audience: process.env.GOOGLE_CLIENT_ID,
    })
    .then(response => {
      const { email_verified, name, email } = response.payload;

      if (email_verified) {
        User.findOne({ email }).exec((err, user) => {
          if (err) {
            return res.status(400).json({
              error: 'Something went wrong!',
            });
          } else {
            if (user) {
              const token = jwt.sign(
                { _id: user._id },
                // process.env.GOOGLE_CLIENT_SECRET,
                process.env.JWT_SECRET_KEY,
                {
                  expiresIn: '30d',
                },
              );
              const { _id, name, email } = user;
              res.json({
                token,
                user: { _id, name, email },
              });
            } else {
              let password = process.env.JWT_SECRET_KEY;
              //let password = email + process.env.GOOGLE_CLIENT_SECRET;
              let newUser = new User({ name, email, password });
              newUser.save((err, data) => {
                if (err) {
                  return res.status(400).json({
                    error: 'Something went wrong',
                  });
                }
                const token = jwt.sign(
                  { _id: data._id },
                  process.env.JWT_SECRET_KEY,
                  // process.env.GOOGLE_CLIENT_SECRET,
                  {
                    expiresIn: '30d',
                  },
                );
                const { _id, name, email } = newUser;
                res.json({
                  token,
                  user: { _id, name, email },
                });
              });
            }
          }
        });
      }
    });
};

module.exports = googleAuth;
