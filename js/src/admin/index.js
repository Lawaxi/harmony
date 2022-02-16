import app from 'flarum/admin/app';

app.initializers.add('lawaxi-harmony', () => {
    app.extensionData.for('lawaxi-harmony').registerSetting({
        label: app.translator.trans('lawaxi-harmony.admin.settings.allown'),
        setting: 'lawaxi-harmony.allown',
        type: 'string',
    });
  app.extensionData.for('lawaxi-harmony').registerSetting({
    label: app.translator.trans('lawaxi-harmony.admin.settings.blogtitle'),
    setting: 'lawaxi-harmony.blogtitle',
    type: 'string',
  });

  app.extensionData.for('lawaxi-harmony').registerSetting({
    label: app.translator.trans('lawaxi-harmony.admin.settings.blogsubtitle'),
    setting: 'lawaxi-harmony.blogsubtitle',
    type: 'string',
  });

  app.extensionData.for('lawaxi-harmony').registerSetting({
    label: app.translator.trans('lawaxi-harmony.admin.settings.ban'),
    setting: 'lawaxi-harmony.ban',
    type: 'string',
  });

  if(app.initializers.has('flarum-tags')) {
    app.extensionData.for('lawaxi-harmony').registerSetting({
      label: app.translator.trans('lawaxi-harmony.admin.settings.bantags'),
      setting: 'lawaxi-harmony.bantags',
      type: 'string',
    });
  }
});
