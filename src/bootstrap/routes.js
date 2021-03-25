'use strict';

module.exports = app => {
  app.use('/', require('../routes/index.route'));

  app.use('/form', require('../routes/form.route'));
};
