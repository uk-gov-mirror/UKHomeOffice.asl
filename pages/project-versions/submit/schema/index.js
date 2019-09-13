const { omit, isEmpty, cloneDeep } = require('lodash');
const content = require('../content');

const conditionalRequired = (field, expected = 'Yes') => (value, model) => {
  if (model[field] === expected) {
    return !isEmpty(value);
  }
  return true;
};

const schema = {
  authority: {
    inputType: 'radioGroup',
    inline: true,
    className: 'smaller',
    options: [
      {
        value: 'Yes',
        label: 'Yes',
        reveal: [
          {
            name: 'authority-pelholder-name',
            inputType: 'inputText',
            label: content.fields['authority-pelholder-name'].label,
            validate: [
              {
                customValidate: conditionalRequired('authority')
              }
            ]
          },
          {
            name: 'authority-endorsement-date',
            inputType: 'inputText',
            label: content.fields['authority-endorsement-date'].label,
            validate: [
              {
                customValidate: conditionalRequired('authority')
              }
            ]
          }
        ]
      },
      {
        value: 'Not yet',
        label: 'Not yet'
      }
    ],
    validate: ['required']
  },
  awerb: {
    inputType: 'radioGroup',
    inline: true,
    className: 'smaller',
    options: [
      {
        value: 'Yes',
        label: 'Yes',
        reveal: [
          {
            name: 'awerb-review-date',
            inputType: 'textarea',
            label: content.fields['awerb-review-date'].label,
            validate: [
              {
                customValidate: conditionalRequired('awerb')
              }
            ]
          }
        ]
      },
      {
        value: 'Not yet',
        label: 'Not yet'
      }
    ],
    validate: ['required']
  },
  ready: {
    inputType: 'radioGroup',
    inline: true,
    className: 'smaller',
    options: [
      {
        value: 'Yes',
        label: 'Yes'
      },
      {
        value: 'No',
        label: 'No'
      }
    ],
    validate: ['required']
  },
  comments: {
    inputType: 'textarea',
    validate: ['required']
  }
};

const getSchema = type => {
  if (type === 'application') {
    return omit(schema, 'comments');
  }

  const amendmentSchema = cloneDeep(omit(schema, 'ready'));
  amendmentSchema.awerb.options[1] = {
    label: 'No',
    value: 'No',
    reveal: [
      {
        name: 'awerb-no-review-reason',
        label: content.fields['awerb-no-review-reason'].label,
        inputType: 'textarea',
        validate: [
          {
            customValidate: conditionalRequired('awerb', 'No')
          }
        ]
      }
    ]
  };

  return amendmentSchema;
};

module.exports = getSchema;
