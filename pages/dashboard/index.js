const page = require('@asl/pages/lib/page');
const taskList = require('@asl/pages/pages/common/routers/task-list');

module.exports = settings => {
  const app = page({
    ...settings,
    root: __dirname
  });

  app.get('/', (req, res, next) => {
    res.locals.static.profile = req.user.profile;
    next();
  });

  app.use(taskList());

  return app;
};
