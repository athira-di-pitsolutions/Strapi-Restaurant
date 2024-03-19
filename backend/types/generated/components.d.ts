import type { Schema, Attribute } from '@strapi/strapi';

export interface FormContactForm extends Schema.Component {
  collectionName: 'components_form_contact_forms';
  info: {
    displayName: 'Contact Form';
    icon: 'envelop';
    description: '';
  };
  attributes: {
    Name: Attribute.String & Attribute.Required;
    Email: Attribute.Email;
    Message: Attribute.RichText;
  };
}

export interface OtherAccordion extends Schema.Component {
  collectionName: 'components_other_accordions';
  info: {
    displayName: 'Accordion';
    icon: 'filter';
    description: '';
  };
  attributes: {
    Section1: Attribute.RichText;
    Section2: Attribute.RichText;
    Section3: Attribute.RichText;
    Section1Title: Attribute.String;
    Section2Title: Attribute.String;
    Section3Title: Attribute.String;
  };
}

export interface OtherTabContent extends Schema.Component {
  collectionName: 'components_other_tab_contents';
  info: {
    displayName: 'TabContent';
    icon: 'filter';
  };
  attributes: {
    Title: Attribute.String;
    Heading: Attribute.String;
    Content: Attribute.Blocks;
  };
}

export interface OtherTab extends Schema.Component {
  collectionName: 'components_other_tabs';
  info: {
    displayName: 'Tab';
    icon: 'filter';
  };
  attributes: {
    Tab: Attribute.Component<'other.tab-content', true>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'form.contact-form': FormContactForm;
      'other.accordion': OtherAccordion;
      'other.tab-content': OtherTabContent;
      'other.tab': OtherTab;
    }
  }
}
