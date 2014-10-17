Package.describe({
  name: "netanelgilad:node-uuid",
  summary: "Generate RFC compliant UUIDs using node-uuid.",
  version: "1.0.2",
  git: "https://github.com/netanelgilad/node-uuid"
});

Npm.depends({
  'node-uuid': '1.4.1'
});

Package.onUse(function(api) {
  api.versionsFrom('0.9.0');
  
  api.addFiles('netanelgilad:node-uuid.js', 'server');

  api.export('UUID');
});
