import React, { JSX, useId } from 'react';
import { ComponentProps } from '@/lib/component-props';
import { Text, Field, LinkField, Link } from '@sitecore-content-sdk/nextjs';
import { isParamEnabled } from '@/helpers/isParamEnabled';
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Autoplay, Keyboard, Navigation } from 'swiper/modules';
import { ProductCard } from '../non-sitecore/ProductCard';
import { SitecoreItem } from '@/types/common';
import { Product } from '@/types/products';
import { calculateAverageRating } from '@/helpers/productUtils';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Fields {
  Title: Field<string>;
  ProductsLink: LinkField;
  ProductsList: SitecoreItem<Product>[];
}

interface RelatedProductsProps extends ComponentProps {
  fields: Fields;
}

export const Default = (props: RelatedProductsProps): JSX.Element => {
  const { styles, RenderingIdentifier: id } = props.params;
  const autoPlay = isParamEnabled(props.params.Autoplay);
  const loop = isParamEnabled(props.params.Loop);
  const uid = useId();

  const products = props.fields.ProductsList.filter(
    (product) => Object.keys(product.fields).length > 0
  );

  // Hardcoded image URLs for the 4 products
  const hardcodedImages = [
    'https://assets.omega.com/images/DO-Brand-Carousel/Brand-Carousel-Products/Dwyer/6.2000-Magnehelic.jpg?imwidth=138',
    'https://assets.omega.com/images/DO-Brand-Carousel/Brand-Carousel-Products/Omega/Omega-PX309.jpg?imwidth=138',
    'https://assets.omega.com/images/DO-Brand-Carousel/Brand-Carousel-Products/Dwyer/4.RateMaster.jpg?imwidth=138',
    'https://assets.omega.com/images/DO-Brand-Carousel/Brand-Carousel-Products/Omega/4.Ready-made-Insulated-Miniature-Connector.jpg?imwidth=138',
  ];

  // Override product images with hardcoded URLs
  const productsWithHardcodedImages = products.slice(0, 4).map((product, index) => ({
    ...product,
    fields: {
      ...product.fields,
      Image1: {
        value: {
          src: hardcodedImages[index] || hardcodedImages[0],
          alt: product.fields.Title?.value || 'Product image',
          width: '138',
          height: '138',
        },
      },
    },
  }));

  return (
    <section className={`component related-products ${styles}`} id={id || undefined}>
      <div className="container mx-auto px-4 py-8 md:py-12">
        {/* Title */}
        <h2 className="text-foreground mb-8 text-center text-3xl font-bold md:mb-10">
          <Text field={props.fields?.Title} />
        </h2>

        {/* Product Carousel with Navigation Arrows */}
        <div className="relative mb-8 flex items-center justify-center gap-4 md:mb-10">
          {/* Left Arrow Button */}
          <button
            className={`product-carousel-prev-${uid} bg-background-accent text-foreground-muted hover:bg-background-muted hover:text-foreground flex h-12 w-12 items-center justify-center rounded-full shadow-md transition-colors`}
            name="previous-product"
            aria-label="Previous product"
          >
            <ChevronLeft className="size-5" />
          </button>

          {/* Swiper Carousel */}
          <div className="flex-1">
            <Swiper
              modules={[Navigation, Autoplay, Keyboard, A11y]}
              navigation={{
                prevEl: `.product-carousel-prev-${uid}`,
                nextEl: `.product-carousel-next-${uid}`,
                disabledClass: 'pointer-events-none opacity-50',
              }}
              slidesPerView={1}
              breakpoints={{
                640: { slidesPerView: 2, spaceBetween: 20 },
                1024: { slidesPerView: 4, spaceBetween: 20 },
              }}
              a11y={{ enabled: true }}
              keyboard={{ enabled: true }}
              loop={loop}
              autoplay={
                autoPlay
                  ? {
                      delay: 5000,
                      pauseOnMouseEnter: true,
                    }
                  : false
              }
            >
              {productsWithHardcodedImages.map((product) => (
                <SwiperSlide key={product.id}>
                  <ProductCard
                    product={{
                      ...product.fields,
                      Rating: calculateAverageRating(product.fields.Reviews || []),
                    }}
                    url={product.url}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Right Arrow Button */}
          <button
            className={`product-carousel-next-${uid} bg-background-accent text-foreground-muted hover:bg-background-muted hover:text-foreground flex h-12 w-12 items-center justify-center rounded-full shadow-md transition-colors`}
            name="next-product"
            aria-label="Next product"
          >
            <ChevronRight className="size-5" />
          </button>
        </div>

        {/* Browse all Products Button */}
        {props.fields.ProductsLink && (
          <div className="flex justify-center">
            <Link
              field={props.fields.ProductsLink}
              className="main-btn inline-flex w-auto justify-center px-6 py-2 text-base"
            />
          </div>
        )}
      </div>
    </section>
  );
};
