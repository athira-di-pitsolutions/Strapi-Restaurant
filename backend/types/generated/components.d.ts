import type { Schema, Attribute } from '@strapi/strapi';

export interface FormContactForm extends Schema.Component {
  collectionName: 'components_form_contact_forms';
  info: {
    displayName: 'Contact Form';
    icon: 'envelop';
  };
  attributes: {
    Name: Attribute.String & Attribute.Required;
    Email: Attribute.Email;
    Message: Attribute.Blocks;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'form.contact-form': FormContactForm;
    }
  }
}
