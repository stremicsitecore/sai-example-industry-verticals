import React, { JSX } from 'react';
import {
  ComponentParams,
  ComponentRendering,
  ImageField,
  LinkField,
  Placeholder,
  RichTextField,
  TextField,
  Text as ContentSdkText,
  Link as ContentSdkLink,
  RichText,
  NextImage as ContentSdkImage,
} from '@sitecore-content-sdk/nextjs';

interface Fields {
  TitleOne: TextField;
  TitleTwo: TextField;
  TitleThree: TextField;
  CopyrightText: TextField;
  PolicyText: LinkField;
  CookiesText: LinkField;
  ContactText: LinkField;
  TermsText: LinkField;
  Logo: ImageField;
  Description: RichTextField;
}

type FooterProps = {
  rendering: ComponentRendering & { params: ComponentParams };
  params: { [key: string]: string };
  fields: Fields;
};

const Footer = (props: FooterProps): JSX.Element => {
  // styles
  const sxaStyles = `${props.params?.styles || ''}`;

  // rendering item id
  const id = props.params.RenderingIdentifier;

  // placeholders keys
  const phKeyOne = `footer-list-first-${props?.params?.DynamicPlaceholderId}`;
  const phKeyTwo = `footer-list-second-${props?.params?.DynamicPlaceholderId}`;
  const phKeyThree = `footer-list-third-${props?.params?.DynamicPlaceholderId}`;
  const phKeyFour = `footer-list-fourth-${props?.params?.DynamicPlaceholderId}`;

  const sections = [
    {
      key: 'first_nav',
      title: <ContentSdkText field={props.fields.TitleOne} />,
      content: <Placeholder name={phKeyOne} rendering={props.rendering} />,
    },
    {
      key: 'second_nav',
      title: <ContentSdkText field={props.fields.TitleTwo} />,
      content: <Placeholder name={phKeyTwo} rendering={props.rendering} />,
    },
    {
      key: 'third_nav',
      title: <ContentSdkText field={props.fields.TitleThree} />,
      content: <Placeholder name={phKeyThree} rendering={props.rendering} />,
    },
  ];

  return (
    <div className={`bg-[#003366] py-8 text-white ${sxaStyles}`} id={id}>
      <div className="container mx-auto">
        {/* Quick Links Section */}
        <div className="mb-6">
          <h3 className="mb-4 text-xl font-semibold text-white">
            <ContentSdkText field={props.fields.TitleThree} />
          </h3>
          
          {/* Quick Links Buttons - Wrapped in flex container for pill buttons */}
          <div className="flex flex-wrap gap-3 [&_.component.link-list]:contents [&_.component.link-list_ul]:flex [&_.component.link-list_ul]:flex-wrap [&_.component.link-list_ul]:gap-3 [&_.component.link-list_ul]:list-none [&_.component.link-list_li]:m-0 [&_.component.link-list_a]:rounded-full [&_.component.link-list_a]:bg-gray-200 [&_.component.link-list_a]:px-4 [&_.component.link-list_a]:py-2 [&_.component.link-list_a]:text-sm [&_.component.link-list_a]:font-medium [&_.component.link-list_a]:text-gray-800 [&_.component.link-list_a]:hover:bg-gray-300 [&_.component.link-list_a]:transition-colors [&_.component.link-list_a]:no-underline">
            <Placeholder name={phKeyOne} rendering={props.rendering} />
            <Placeholder name={phKeyTwo} rendering={props.rendering} />
          </div>
        </div>

        {/* Separator */}
        <hr className="border-white my-6" />

        {/* Footer Labels Section */}
        <div className="flex flex-wrap gap-6 text-white">
          <div>
            <ContentSdkText field={props.fields.TitleOne} />
          </div>
          <div>
            <ContentSdkText field={props.fields.TitleTwo} />
          </div>
          <div>
            <Placeholder name={phKeyThree} rendering={props.rendering} />
          </div>
        </div>
      </div>
    </div>
  );
};

export const Default = Footer;
