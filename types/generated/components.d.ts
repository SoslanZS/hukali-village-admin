import type { Schema, Struct } from '@strapi/strapi';

export interface MainBanner extends Struct.ComponentSchema {
  collectionName: 'components_main_banner';
  info: {
    displayName: '\u0411\u0430\u043D\u043D\u0435\u0440';
  };
  attributes: {
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'\u0414\u043E\u0431\u0440\u043E \u043F\u043E\u0436\u0430\u043B\u043E\u0432\u0430\u0442\u044C \u0432 Hukali Village'>;
    video: Schema.Attribute.Media<'files' | 'videos'> &
      Schema.Attribute.Required;
  };
}

export interface MainChastoZadavaemyeVoprosy extends Struct.ComponentSchema {
  collectionName: 'components_main_chasto_zadavaemye_voprosy';
  info: {
    displayName: '\u0427\u0430\u0441\u0442\u043E \u0437\u0430\u0434\u0430\u0432\u0430\u0435\u043C\u044B\u0435 \u0432\u043E\u043F\u0440\u043E\u0441\u044B';
  };
  attributes: {
    list_item: Schema.Attribute.Component<'main.element-spiska', true>;
    title: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'\u0427\u0430\u0441\u0442\u043E \u0437\u0430\u0434\u0430\u0432\u0430\u0435\u043C\u044B\u0435 \u0432\u043E\u043F\u0440\u043E\u0441\u044B'>;
  };
}

export interface MainChemZanyatsya extends Struct.ComponentSchema {
  collectionName: 'components_main_chem_zanyatsya_s';
  info: {
    displayName: '\u0427\u0435\u043C \u0437\u0430\u043D\u044F\u0442\u0441\u044F?';
  };
  attributes: {
    description: Schema.Attribute.Text;
    list_item: Schema.Attribute.Component<'main.element-spiska', true>;
    title: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'\u0427\u0435\u043C \u0437\u0430\u043D\u044F\u0442\u044C\u0441\u044F?'>;
  };
}

export interface MainElementSpiska extends Struct.ComponentSchema {
  collectionName: 'components_main_element_spiska';
  info: {
    displayName: '\u042D\u043B\u0435\u043C\u0435\u043D\u0442 \u0441\u043F\u0438\u0441\u043A\u0430';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface MainGalereya extends Struct.ComponentSchema {
  collectionName: 'components_main_galereya';
  info: {
    displayName: '\u0413\u0430\u043B\u0435\u0440\u0435\u044F';
  };
  attributes: {
    images: Schema.Attribute.Media<'images', true> & Schema.Attribute.Required;
  };
}

export interface MainGlemping extends Struct.ComponentSchema {
  collectionName: 'components_main_glemping';
  info: {
    displayName: '\u0413\u043B\u044D\u043C\u043F\u0438\u043D\u0433';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'\u0413\u043B\u044D\u043C\u043F\u0438\u043D\u0433 \u043D\u0430\u0434 \u043E\u0431\u043B\u0430\u043A\u0430\u043C\u0438'>;
  };
}

export interface MainNashiNomera extends Struct.ComponentSchema {
  collectionName: 'components_main_nashi_nomera';
  info: {
    displayName: '\u041D\u0430\u0448\u0438 \u043D\u043E\u043C\u0435\u0440\u0430';
  };
  attributes: {
    rooms: Schema.Attribute.Component<'main.nomera', true>;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'\u041D\u0430\u0448\u0438 \u043D\u043E\u043C\u0435\u0440\u0430'>;
  };
}

export interface MainNomera extends Struct.ComponentSchema {
  collectionName: 'components_main_nomera';
  info: {
    displayName: '\u041D\u043E\u043C\u0435\u0440';
  };
  attributes: {
    description: Schema.Attribute.Text;
    images: Schema.Attribute.Media<'images' | 'files', true> &
      Schema.Attribute.Required;
    price: Schema.Attribute.String;
    quantity_people: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    pricePerNight: Schema.Attribute.Integer;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'main.banner': MainBanner;
      'main.chasto-zadavaemye-voprosy': MainChastoZadavaemyeVoprosy;
      'main.chem-zanyatsya': MainChemZanyatsya;
      'main.element-spiska': MainElementSpiska;
      'main.galereya': MainGalereya;
      'main.glemping': MainGlemping;
      'main.nashi-nomera': MainNashiNomera;
      'main.nomera': MainNomera;
      'shared.seo': SharedSeo;
    }
  }
}
