module.exports = {
  name: 'ng-sandbox',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/ng-sandbox',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
