import {
  Field,
  ImageField,
  LinkField,
  NextImage as ContentSdkImage,
  useSitecore,
} from '@sitecore-content-sdk/nextjs';
import { ComponentProps } from '@/lib/component-props';
import { HeroBannerStyles } from '@/types/styleFlags';
import clsx from 'clsx';
import { ShoppingCart } from 'lucide-react';
import { useState } from 'react';

interface Fields {
  Image: ImageField;
  Video: ImageField;
  Title: Field<string>;
  Description: Field<string>;
  CtaLink: LinkField;
}

interface HeroBannerProps extends ComponentProps {
  fields: Fields;
}

const HeroBannerCommon = ({
  params,
  fields,
  children,
}: HeroBannerProps & {
  children: React.ReactNode;
}) => {
  const { page } = useSitecore();
  const { styles, RenderingIdentifier: id } = params;
  const isPageEditing = page.mode.isEditing;
  const hideGradientOverlay = styles?.includes(HeroBannerStyles.HideGradientOverlay);

  if (!fields) {
    return isPageEditing ? (
      <div className={`component hero-banner ${styles}`} id={id}>
        [HERO BANNER]
      </div>
    ) : (
      <></>
    );
  }

  return (
    <div
      className={`component hero-banner ${styles} relative flex max-h-[600px] min-h-[300px] items-center md:min-h-[400px] lg:min-h-[500px]`}
      id={id}
    >
      {/* Background Media */}
      <div className="absolute inset-0 z-0">
        {!isPageEditing && fields?.Video?.value?.src ? (
          <video
            className="h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            poster={fields.Image?.value?.src}
          >
            <source src={fields.Video?.value?.src} type="video/webm" />
          </video>
        ) : (
          <>
            <ContentSdkImage
              field={fields.Image}
              className="h-full w-full object-cover md:object-bottom"
              priority
            />
          </>
        )}
        {/* Gradient overlay to fade image/video at bottom */}
        {!hideGradientOverlay && (
          <div className="absolute inset-0 bg-gradient-to-b from-transparent from-85% to-white"></div>
        )}
      </div>

      {children}
    </div>
  );
};

export const Default = ({ params, fields, rendering }: HeroBannerProps) => {
  const styles = params.styles || '';
  const screenLayer = styles.includes(HeroBannerStyles.ScreenLayer);

  const [partNumbers, setPartNumbers] = useState(['', '']);
  const [quantities, setQuantities] = useState(['', '']);

  const handlePartNumberChange = (index: number, value: string) => {
    const newPartNumbers = [...partNumbers];
    newPartNumbers[index] = value;
    setPartNumbers(newPartNumbers);
  };

  const handleQuantityChange = (index: number, value: string) => {
    const newQuantities = [...quantities];
    newQuantities[index] = value;
    setQuantities(newQuantities);
  };

  const handleAddToCart = () => {
    // TODO: Implement add to cart functionality
    console.log('Add to cart:', { partNumbers, quantities });
  };

  return (
    <HeroBannerCommon params={params} fields={fields} rendering={rendering}>
      {/* Content Container */}
      <div className="relative w-full">
        <div className="container mx-auto px-4">
          <div className="flex min-h-[250px] w-full py-6 md:min-h-[350px] md:items-center md:justify-end md:py-8 lg:min-h-[400px] lg:py-10">
            <div className="w-full md:absolute md:right-0 md:mr-4 md:max-w-xs lg:mr-6 lg:max-w-sm">
              <div className={clsx({ shim: screenLayer })}>
                {/* Quick Order Form */}
                <div className="rounded-lg bg-gradient-to-b from-white to-gray-50 p-3 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_10px_15px_-3px_rgba(0,0,0,0.1),0_0_20px_rgba(0,0,0,0.15)] md:p-4 lg:p-5">
                  {/* Title */}
                  <h2 className="mb-2 text-xl font-bold text-[var(--color-primary)] md:mb-3 md:text-2xl lg:text-2xl">
                    Quick Order
                  </h2>

                  {/* Instructions */}
                  <p className="text-foreground mb-1 text-xs">
                    Enter part numbers to order or quote
                  </p>
                  <p className="text-foreground-muted mb-3 text-xs md:mb-4">
                    Need more entry fields?
                  </p>

                  {/* Input Rows */}
                  <div className="mb-3 space-y-2 md:mb-4 md:space-y-3">
                    {[0, 1].map((index) => (
                      <div key={index} className="flex gap-3">
                        <input
                          type="text"
                          placeholder="Part #"
                          value={partNumbers[index]}
                          onChange={(e) => handlePartNumberChange(index, e.target.value)}
                          className="border-border bg-background-accent placeholder:text-foreground-muted flex-1 rounded border px-4 py-2 text-sm focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)] focus:outline-none"
                        />
                        <input
                          type="number"
                          placeholder="Qty"
                          value={quantities[index]}
                          onChange={(e) => handleQuantityChange(index, e.target.value)}
                          className="border-border bg-background-accent placeholder:text-foreground-muted w-20 rounded border px-4 py-2 text-sm focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)] focus:outline-none"
                        />
                      </div>
                    ))}
                  </div>

                  {/* Add To Cart Button */}
                  <button
                    onClick={handleAddToCart}
                    className="main-btn flex w-full items-center justify-center gap-2"
                  >
                    <ShoppingCart className="size-5" />
                    <span>Add To Cart</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </HeroBannerCommon>
  );
};

export const TopContent = ({ params, fields, rendering }: HeroBannerProps) => {
  const styles = params.styles || '';
  const screenLayer = styles.includes(HeroBannerStyles.ScreenLayer);

  const [partNumbers, setPartNumbers] = useState(['', '']);
  const [quantities, setQuantities] = useState(['', '']);

  const handlePartNumberChange = (index: number, value: string) => {
    const newPartNumbers = [...partNumbers];
    newPartNumbers[index] = value;
    setPartNumbers(newPartNumbers);
  };

  const handleQuantityChange = (index: number, value: string) => {
    const newQuantities = [...quantities];
    newQuantities[index] = value;
    setQuantities(newQuantities);
  };

  const handleAddToCart = () => {
    // TODO: Implement add to cart functionality
    console.log('Add to cart:', { partNumbers, quantities });
  };

  return (
    <HeroBannerCommon params={params} fields={fields} rendering={rendering}>
      {/* Content Container */}
      <div className="relative w-full">
        <div className="relative container mx-auto flex min-h-[250px] px-4 md:min-h-[350px] md:justify-end lg:min-h-[400px]">
          <div className="flex w-full flex-col items-end py-6 md:absolute md:right-0 md:mr-4 md:w-auto md:max-w-xs md:py-10 lg:mr-6 lg:max-w-sm lg:py-20">
            <div className={clsx({ shim: screenLayer })}>
              {/* Quick Order Form */}
              <div className="w-full rounded-lg bg-gradient-to-b from-white to-gray-50 p-3 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_10px_15px_-3px_rgba(0,0,0,0.1),0_0_20px_rgba(0,0,0,0.15)] md:w-auto md:max-w-xs md:p-4 lg:max-w-sm lg:p-5">
                {/* Title */}
                <h2 className="mb-2 text-xl font-bold text-[var(--color-primary)] md:mb-3 md:text-2xl lg:text-2xl">
                  Quick Order
                </h2>

                {/* Instructions */}
                <p className="text-foreground mb-1 text-xs">Enter part numbers to order or quote</p>
                <p className="text-foreground-muted mb-3 text-xs md:mb-4">
                  Need more entry fields?
                </p>

                {/* Input Rows */}
                <div className="mb-3 space-y-2 md:mb-4 md:space-y-3">
                  {[0, 1].map((index) => (
                    <div key={index} className="flex gap-3">
                      <input
                        type="text"
                        placeholder="Part #"
                        value={partNumbers[index]}
                        onChange={(e) => handlePartNumberChange(index, e.target.value)}
                        className="border-border bg-background-accent placeholder:text-foreground-muted flex-1 rounded border px-4 py-2 text-sm focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)] focus:outline-none"
                      />
                      <input
                        type="number"
                        placeholder="Qty"
                        value={quantities[index]}
                        onChange={(e) => handleQuantityChange(index, e.target.value)}
                        className="border-border bg-background-accent placeholder:text-foreground-muted w-20 rounded border px-4 py-2 text-sm focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)] focus:outline-none"
                      />
                    </div>
                  ))}
                </div>

                {/* Add To Cart Button */}
                <button
                  onClick={handleAddToCart}
                  className="main-btn flex w-full items-center justify-center gap-2"
                >
                  <ShoppingCart className="size-5" />
                  <span>Add To Cart</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </HeroBannerCommon>
  );
};
