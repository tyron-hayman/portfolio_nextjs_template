// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

type LandingDocumentDataSlicesSlice =
  | TestimonialsSlice
  | ServicesSlice
  | AboutSlice
  | ContactSlice
  | CustomerLogosSlice
  | WorkspaceSlice
  | HeroTextSlice;

/**
 * Content for Landing documents
 */
interface LandingDocumentData {
  /**
   * Hero Text field in *Landing*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: landing.hero_text
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  hero_text: prismic.KeyTextField;

  /**
   * Slice Zone field in *Landing*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: landing.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<LandingDocumentDataSlicesSlice> /**
   * Meta Description field in *Landing*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: landing.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Landing*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: landing.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;

  /**
   * Meta Title field in *Landing*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: landing.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_title: prismic.KeyTextField;

  /**
   * Logo Text field in *Landing*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: landing.logo_text
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  logo_text: prismic.KeyTextField;

  /**
   * Global Email field in *Landing*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: landing.global_email
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  global_email: prismic.KeyTextField;

  /**
   * Is Hiring field in *Landing*
   *
   * - **Field Type**: Boolean
   * - **Placeholder**: *None*
   * - **Default Value**: false
   * - **API ID Path**: landing.is_hiring
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#boolean
   */
  is_hiring: prismic.BooleanField;
}

/**
 * Landing document from Prismic
 *
 * - **API ID**: `landing`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type LandingDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<LandingDocumentData>,
    "landing",
    Lang
  >;

export type AllDocumentTypes = LandingDocument;

/**
 * Item in *About → Default → Primary → Skills*
 */
export interface AboutSliceDefaultPrimarySkillsItem {
  /**
   * Skill field in *About → Default → Primary → Skills*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: about.default.primary.skills[].skill
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  skill: prismic.KeyTextField;

  /**
   * Description field in *About → Default → Primary → Skills*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: about.default.primary.skills[].description
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  description: prismic.KeyTextField;
}

/**
 * Primary content in *About → Default → Primary*
 */
export interface AboutSliceDefaultPrimary {
  /**
   * Title field in *About → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: about.default.primary.title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.RichTextField;

  /**
   * Content field in *About → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: about.default.primary.content
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  content: prismic.RichTextField;

  /**
   * Image field in *About → Default → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: about.default.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * Skills field in *About → Default → Primary*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: about.default.primary.skills[]
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  skills: prismic.GroupField<Simplify<AboutSliceDefaultPrimarySkillsItem>>;

  /**
   * Subheading field in *About → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: about.default.primary.subheading
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  subheading: prismic.KeyTextField;
}

/**
 * Default variation for About Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type AboutSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<AboutSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *About*
 */
type AboutSliceVariation = AboutSliceDefault;

/**
 * About Shared Slice
 *
 * - **API ID**: `about`
 * - **Description**: About
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type AboutSlice = prismic.SharedSlice<"about", AboutSliceVariation>;

/**
 * Primary content in *Contact → Default → Primary*
 */
export interface ContactSliceDefaultPrimary {
  /**
   * Title field in *Contact → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: contact.default.primary.title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Content field in *Contact → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: contact.default.primary.content
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  content: prismic.RichTextField;

  /**
   * Link field in *Contact → Default → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: contact.default.primary.link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField;
}

/**
 * Default variation for Contact Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ContactSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<ContactSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Contact*
 */
type ContactSliceVariation = ContactSliceDefault;

/**
 * Contact Shared Slice
 *
 * - **API ID**: `contact`
 * - **Description**: Contact
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ContactSlice = prismic.SharedSlice<
  "contact",
  ContactSliceVariation
>;

/**
 * Item in *CustomerLogos → Default → Primary → logos*
 */
export interface CustomerLogosSliceDefaultPrimaryLogosItem {
  /**
   * image field in *CustomerLogos → Default → Primary → logos*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: customer_logos.default.primary.logos[].image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * link field in *CustomerLogos → Default → Primary → logos*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: customer_logos.default.primary.logos[].link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField;
}

/**
 * Primary content in *CustomerLogos → Default → Primary*
 */
export interface CustomerLogosSliceDefaultPrimary {
  /**
   * eyebrowHeadline field in *CustomerLogos → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: customer_logos.default.primary.eyebrowHeadline
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  eyebrowHeadline: prismic.RichTextField;

  /**
   * callToActionLabel field in *CustomerLogos → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: customer_logos.default.primary.callToActionLabel
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  callToActionLabel: prismic.KeyTextField;

  /**
   * callToActionLink field in *CustomerLogos → Default → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: customer_logos.default.primary.callToActionLink
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  callToActionLink: prismic.LinkField;

  /**
   * logos field in *CustomerLogos → Default → Primary*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: customer_logos.default.primary.logos[]
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  logos: prismic.GroupField<
    Simplify<CustomerLogosSliceDefaultPrimaryLogosItem>
  >;
}

/**
 * Default variation for CustomerLogos Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type CustomerLogosSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<CustomerLogosSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *CustomerLogos*
 */
type CustomerLogosSliceVariation = CustomerLogosSliceDefault;

/**
 * CustomerLogos Shared Slice
 *
 * - **API ID**: `customer_logos`
 * - **Description**: CustomerLogos
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type CustomerLogosSlice = prismic.SharedSlice<
  "customer_logos",
  CustomerLogosSliceVariation
>;

/**
 * Primary content in *HeroText → Default → Primary*
 */
export interface HeroTextSliceDefaultPrimary {
  /**
   * Hero Text field in *HeroText → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero_text.default.primary.hero_text
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  hero_text: prismic.KeyTextField;

  /**
   * Hero Subtext field in *HeroText → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero_text.default.primary.hero_subtext
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  hero_subtext: prismic.RichTextField;

  /**
   * Hero Link field in *HeroText → Default → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: hero_text.default.primary.hero_link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  hero_link: prismic.LinkField;
}

/**
 * Default variation for HeroText Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroTextSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<HeroTextSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *HeroText*
 */
type HeroTextSliceVariation = HeroTextSliceDefault;

/**
 * HeroText Shared Slice
 *
 * - **API ID**: `hero_text`
 * - **Description**: HeroText
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroTextSlice = prismic.SharedSlice<
  "hero_text",
  HeroTextSliceVariation
>;

/**
 * Item in *Services → Default → Primary → Services*
 */
export interface ServicesSliceDefaultPrimaryServicesItem {
  /**
   * Monthly field in *Services → Default → Primary → Services*
   *
   * - **Field Type**: Boolean
   * - **Placeholder**: *None*
   * - **Default Value**: false
   * - **API ID Path**: services.default.primary.services[].monthly
   * - **Documentation**: https://prismic.io/docs/field#boolean
   */
  monthly: prismic.BooleanField;

  /**
   * Service field in *Services → Default → Primary → Services*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: services.default.primary.services[].service
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  service: prismic.KeyTextField;

  /**
   * Content field in *Services → Default → Primary → Services*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: services.default.primary.services[].content
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  content: prismic.KeyTextField;

  /**
   * Price field in *Services → Default → Primary → Services*
   *
   * - **Field Type**: Number
   * - **Placeholder**: *None*
   * - **API ID Path**: services.default.primary.services[].price
   * - **Documentation**: https://prismic.io/docs/field#number
   */
  price: prismic.NumberField;

  /**
   * Button Text field in *Services → Default → Primary → Services*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: services.default.primary.services[].button_text
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  button_text: prismic.KeyTextField;
}

/**
 * Primary content in *Services → Default → Primary*
 */
export interface ServicesSliceDefaultPrimary {
  /**
   * Text field in *Services → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: services.default.primary.text
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  text: prismic.KeyTextField;

  /**
   * Content field in *Services → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: services.default.primary.content
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  content: prismic.KeyTextField;

  /**
   * Services field in *Services → Default → Primary*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: services.default.primary.services[]
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  services: prismic.GroupField<
    Simplify<ServicesSliceDefaultPrimaryServicesItem>
  >;
}

/**
 * Default variation for Services Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ServicesSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<ServicesSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Services*
 */
type ServicesSliceVariation = ServicesSliceDefault;

/**
 * Services Shared Slice
 *
 * - **API ID**: `services`
 * - **Description**: Services
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ServicesSlice = prismic.SharedSlice<
  "services",
  ServicesSliceVariation
>;

/**
 * Item in *Testimonials → Default → Primary → Testimonials*
 */
export interface TestimonialsSliceDefaultPrimaryTestimonialsItem {
  /**
   * Content field in *Testimonials → Default → Primary → Testimonials*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: testimonials.default.primary.testimonials[].content
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  content: prismic.RichTextField;

  /**
   * Author field in *Testimonials → Default → Primary → Testimonials*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: testimonials.default.primary.testimonials[].author
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  author: prismic.KeyTextField;

  /**
   * Company field in *Testimonials → Default → Primary → Testimonials*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: testimonials.default.primary.testimonials[].company
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  company: prismic.KeyTextField;

  /**
   * Image field in *Testimonials → Default → Primary → Testimonials*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: testimonials.default.primary.testimonials[].image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;
}

/**
 * Primary content in *Testimonials → Default → Primary*
 */
export interface TestimonialsSliceDefaultPrimary {
  /**
   * Testimonials field in *Testimonials → Default → Primary*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: testimonials.default.primary.testimonials[]
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  testimonials: prismic.GroupField<
    Simplify<TestimonialsSliceDefaultPrimaryTestimonialsItem>
  >;
}

/**
 * Default variation for Testimonials Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TestimonialsSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<TestimonialsSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Testimonials*
 */
type TestimonialsSliceVariation = TestimonialsSliceDefault;

/**
 * Testimonials Shared Slice
 *
 * - **API ID**: `testimonials`
 * - **Description**: Testimonials
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TestimonialsSlice = prismic.SharedSlice<
  "testimonials",
  TestimonialsSliceVariation
>;

/**
 * Item in *Workspace → Default → Primary → Work*
 */
export interface WorkspaceSliceDefaultPrimaryWorkItem {
  /**
   * Title field in *Workspace → Default → Primary → Work*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: workspace.default.primary.work[].title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Description field in *Workspace → Default → Primary → Work*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: workspace.default.primary.work[].description
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  description: prismic.KeyTextField;

  /**
   * Image field in *Workspace → Default → Primary → Work*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: workspace.default.primary.work[].image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * Link field in *Workspace → Default → Primary → Work*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: workspace.default.primary.work[].link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField;

  /**
   * Date field in *Workspace → Default → Primary → Work*
   *
   * - **Field Type**: Timestamp
   * - **Placeholder**: *None*
   * - **API ID Path**: workspace.default.primary.work[].date
   * - **Documentation**: https://prismic.io/docs/field#timestamp
   */
  date: prismic.TimestampField;

  /**
   * Services field in *Workspace → Default → Primary → Work*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: workspace.default.primary.work[].services
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  services: prismic.KeyTextField;

  /**
   * Latest Tag field in *Workspace → Default → Primary → Work*
   *
   * - **Field Type**: Boolean
   * - **Placeholder**: *None*
   * - **Default Value**: false
   * - **API ID Path**: workspace.default.primary.work[].latest_tag
   * - **Documentation**: https://prismic.io/docs/field#boolean
   */
  latest_tag: prismic.BooleanField;
}

/**
 * Primary content in *Workspace → Default → Primary*
 */
export interface WorkspaceSliceDefaultPrimary {
  /**
   * Title field in *Workspace → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: workspace.default.primary.title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Content field in *Workspace → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: workspace.default.primary.content
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  content: prismic.RichTextField;

  /**
   * Work field in *Workspace → Default → Primary*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: workspace.default.primary.work[]
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  work: prismic.GroupField<Simplify<WorkspaceSliceDefaultPrimaryWorkItem>>;
}

/**
 * Default variation for Workspace Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type WorkspaceSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<WorkspaceSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Workspace*
 */
type WorkspaceSliceVariation = WorkspaceSliceDefault;

/**
 * Workspace Shared Slice
 *
 * - **API ID**: `workspace`
 * - **Description**: Workspace
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type WorkspaceSlice = prismic.SharedSlice<
  "workspace",
  WorkspaceSliceVariation
>;

declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig,
    ): prismic.Client<AllDocumentTypes>;
  }

  namespace Content {
    export type {
      LandingDocument,
      LandingDocumentData,
      LandingDocumentDataSlicesSlice,
      AllDocumentTypes,
      AboutSlice,
      AboutSliceDefaultPrimarySkillsItem,
      AboutSliceDefaultPrimary,
      AboutSliceVariation,
      AboutSliceDefault,
      ContactSlice,
      ContactSliceDefaultPrimary,
      ContactSliceVariation,
      ContactSliceDefault,
      CustomerLogosSlice,
      CustomerLogosSliceDefaultPrimaryLogosItem,
      CustomerLogosSliceDefaultPrimary,
      CustomerLogosSliceVariation,
      CustomerLogosSliceDefault,
      HeroTextSlice,
      HeroTextSliceDefaultPrimary,
      HeroTextSliceVariation,
      HeroTextSliceDefault,
      ServicesSlice,
      ServicesSliceDefaultPrimaryServicesItem,
      ServicesSliceDefaultPrimary,
      ServicesSliceVariation,
      ServicesSliceDefault,
      TestimonialsSlice,
      TestimonialsSliceDefaultPrimaryTestimonialsItem,
      TestimonialsSliceDefaultPrimary,
      TestimonialsSliceVariation,
      TestimonialsSliceDefault,
      WorkspaceSlice,
      WorkspaceSliceDefaultPrimaryWorkItem,
      WorkspaceSliceDefaultPrimary,
      WorkspaceSliceVariation,
      WorkspaceSliceDefault,
    };
  }
}
