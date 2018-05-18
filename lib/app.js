const ui = require('@asl/service/ui');
const { crumbs } = require('@asl/service/ui/middleware');
const {
  establishment,
  details,
  places,
  profile
} = require('@asl/service/pages');

module.exports = settings => {
  const app = ui(settings);

  app.use('/', (req, res, next) => {
    req.establishment = req.user.get('establishment');
    next();
  });

  app.use('/places',
    places(),
    crumbs(['Licenced Premises'])
  );

  app.use('/details',
    details(),
    crumbs(['Establishment Details'])
  );

  app.use('/profile/:profile',
    (req, res, next) => {
      req.profile = req.params.profile;
      next()
    },
    profile(),
    crumbs([{ href: '/profiles', label: 'Profiles' }, '{{profile.name}}'])
  );

  app.use('/', establishment());

  return app;
};
