import {
  ComponentParams,
  ComponentRendering,
  ImageField,
  LinkField,
  Placeholder,
  RichTextField,
  Text,
  TextField,
} from '@sitecore-content-sdk/nextjs';
import React from 'react';

interface Fields {
  TitleOne: TextField;
  TitleTwo: TextField;
  TitleThree: TextField;
  TitleFour: TextField;
  TitleFive: TextField;
  CopyrightText: TextField;
  PolicyText: LinkField;
  TermsText: LinkField;
  Logo: ImageField;
  Description: RichTextField;
}

type FooterProps = {
  rendering: ComponentRendering & { params: ComponentParams };
  params: { [key: string]: string };
  fields: Fields;
};

export const Default = (props: FooterProps) => {
  // rendering item id
  const id = props.params.RenderingIdentifier;

  // placeholders keys
  const phKeyOne = `footer-list-first-${props?.params?.DynamicPlaceholderId}`;
  const phKeyTwo = `footer-list-second-${props?.params?.DynamicPlaceholderId}`;
  const phKeyThree = `footer-list-third-${props?.params?.DynamicPlaceholderId}`;

  return (
    <section className={`component footer relative ${props.params.styles} overflow-hidden`} id={id}>
      <div className="bg-[#003366] py-8 text-white">
        <div className="container mx-auto">
          {/* Quick Links Section */}
          <div className="mb-6">
            <h3 className="mb-4 text-xl font-semibold text-white">
              <Text field={props.fields.TitleThree} />
            </h3>

            {/* Quick Links Buttons - Wrapped in flex container for pill buttons */}
            <div className="flex flex-wrap gap-3 [&_.component.link-list]:contents [&_.component.link-list_a]:inline-block [&_.component.link-list_a]:rounded-full [&_.component.link-list_a]:bg-gray-200 [&_.component.link-list_a]:px-4 [&_.component.link-list_a]:py-2 [&_.component.link-list_a]:text-sm [&_.component.link-list_a]:font-medium [&_.component.link-list_a]:text-gray-800 [&_.component.link-list_a]:no-underline [&_.component.link-list_a]:transition-colors [&_.component.link-list_a]:hover:bg-gray-300 [&_.component.link-list_li]:m-0 [&_.component.link-list_ul]:m-0 [&_.component.link-list_ul]:flex [&_.component.link-list_ul]:list-none [&_.component.link-list_ul]:flex-wrap [&_.component.link-list_ul]:gap-3 [&_.component.link-list_ul]:p-0">
              <Placeholder name={phKeyOne} rendering={props.rendering} />
              <Placeholder name={phKeyTwo} rendering={props.rendering} />
            </div>
          </div>

          {/* Separator */}
          <hr className="my-6 border-white" />

          {/* Footer Labels Section */}
          <div className="flex flex-wrap gap-6 text-white">
            <div>
              <Text field={props.fields.TitleOne} />
            </div>
            <div>
              <Text field={props.fields.TitleTwo} />
            </div>
            <div>
              <Placeholder name={phKeyThree} rendering={props.rendering} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
