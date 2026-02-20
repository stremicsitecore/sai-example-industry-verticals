'use client';

import React, { JSX, useState, useEffect } from 'react';
import { ComponentProps } from '@/lib/component-props';
import { Placeholder, Link } from '@sitecore-content-sdk/nextjs';
import { Search, ShoppingCart, User, ChevronDown, Menu, ChevronUp } from 'lucide-react';
import { getCart } from '@/lib/cart';
import { Popover, PopoverContent, PopoverTrigger } from '@/shadcn/components/ui/popover';
import { MiniCart } from '../non-sitecore/MiniCart';
import PreviewSearch from '../non-sitecore/search/PreviewSearch';
import { PREVIEW_WIDGET_ID } from '@/constants/search';
import { usePathname, useSearchParams } from 'next/navigation';
import LanguageSwitcher from '../language-switcher/LanguageSwitcher';

export type HeaderProps = ComponentProps & {
  params: { [key: string]: string };
  fields?: {
    CheckoutPage?: {
      value: {
        href: string;
        title?: string;
      };
    };
    ContactUsPage?: {
      value: {
        href: string;
        title?: string;
      };
    };
  };
};

export const Default = (props: HeaderProps): JSX.Element => {
  const { styles, RenderingIdentifier: id, DynamicPlaceholderId } = props.params;
  const [cartCount, setCartCount] = useState(0);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isAllProductsOpen, setIsAllProductsOpen] = useState(false);
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Update cart count
  useEffect(() => {
    const updateCartCount = () => {
      const cart = getCart();
      const count = cart.reduce((sum, item) => sum + item.quantity, 0);
      setCartCount(count);
    };

    updateCartCount();
    window.addEventListener('storage', updateCartCount);
    return () => window.removeEventListener('storage', updateCartCount);
  }, []);

  // Close search when route changes
  useEffect(() => {
    setIsSearchOpen(false);
  }, [pathname, searchParams]);

  return (
    <>
      <div className={`component header bg-background ${styles}`} id={id}>
        {/* Top Bar - White Background */}
        <div className="bg-background border-border border-b">
          <div className="container flex items-center gap-4 py-3">
            {/* Logo on the left */}
            <div className="flex-shrink-0">
              <Link
                field={{
                  value: {
                    href: '/',
                    title: 'DwyerOmega',
                  },
                }}
                className="flex items-center"
              >
                <img
                  src="https://assets.omega.com/icons/DO-logo.png"
                  alt="DwyerOmega"
                  className="h-auto w-auto max-w-[180px]"
                />
              </Link>
            </div>

            {/* Search bar in center-left */}
            <div className="max-w-md flex-1">
              <div className="relative">
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    const form = e.target as HTMLFormElement;
                    const input = form.querySelector('input') as HTMLInputElement;
                    if (input?.value) {
                      window.location.href = `/search?q=${encodeURIComponent(input.value)}`;
                    }
                  }}
                  className="flex items-center"
                >
                  <input
                    type="search"
                    placeholder="Search DwyerOmega"
                    className="border-border bg-background focus:border-primary focus:ring-primary w-full rounded border px-4 py-2 pr-10 text-sm focus:ring-1 focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="text-foreground-muted hover:text-foreground absolute right-2"
                    aria-label="Search"
                  >
                    <Search className="size-5" />
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Us link in center-right */}
            <div className="hidden lg:block">
              <Link
                field={
                  props.fields?.ContactUsPage || {
                    value: {
                      href: '/contact',
                      title: 'Contact Us',
                    },
                  }
                }
                className="text-foreground-link hover:text-primary-dark text-sm font-medium whitespace-nowrap transition-colors"
              >
                Contact Us
              </Link>
            </div>

            {/* Cart and Account on the right */}
            <div className="flex items-center gap-4">
              {/* Shopping Cart with badge */}
              <Popover>
                <PopoverTrigger className="text-foreground-link hover:text-primary-dark relative transition-colors">
                  <ShoppingCart className="size-6" />
                  {cartCount > 0 && (
                    <span className="bg-primary text-background absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full text-xs font-bold">
                      {cartCount > 99 ? '99+' : cartCount}
                    </span>
                  )}
                </PopoverTrigger>
                <PopoverContent className="w-96 p-0">
                  <MiniCart
                    showWishlist={false}
                    checkoutPage={props.fields?.CheckoutPage || { value: { href: '/checkout' } }}
                  />
                </PopoverContent>
              </Popover>

              {/* My Account dropdown */}
              <Popover>
                <PopoverTrigger className="text-foreground-link hover:text-primary-dark flex items-center gap-1 transition-colors">
                  <span className="hidden text-sm font-medium lg:inline">My Account</span>
                  <User className="size-6" />
                  <ChevronDown className="size-4" />
                </PopoverTrigger>
                <PopoverContent className="w-64">
                  <div className="p-4">
                    <p className="text-foreground-muted text-sm">You are not logged in.</p>
                    <Link
                      field={{
                        value: {
                          href: '/account',
                          title: 'Sign In',
                        },
                      }}
                      className="text-primary mt-4 block text-sm font-medium hover:underline"
                    >
                      Sign In
                    </Link>
                  </div>
                </PopoverContent>
              </Popover>
            </div>
          </div>
        </div>

        {/* Bottom Bar - Dark Blue Background */}
        <div className="text-background bg-[#003366]">
          <div className="container flex items-center gap-4 py-1">
            {/* All Products button on the left */}
            <div className="relative">
              <button
                onClick={() => setIsAllProductsOpen(!isAllProductsOpen)}
                className="text-background flex items-center gap-2 rounded-full bg-[#dc143c] px-4 py-1.5 text-sm font-semibold shadow-sm transition-colors hover:bg-[#b81235]"
              >
                <Menu className="size-5 stroke-[2.5]" />
                <span className="font-bold">All Products</span>
                {isAllProductsOpen ? (
                  <ChevronUp className="size-4 stroke-[2.5]" />
                ) : (
                  <ChevronDown className="size-4 stroke-[2.5]" />
                )}
              </button>
              {/* All Products dropdown menu would go here */}
            </div>

            {/* Navigation links in center */}
            <div className="[&_.component.navigation]:text-background [&_.component.navigation_a]:text-background [&_.component.navigation_a:hover]:text-background/80 [&_.component.navigation_svg]:text-background flex-1">
              <Placeholder
                name={`header-nav-${DynamicPlaceholderId}`}
                rendering={props.rendering}
              />
            </div>

            {/* Language selector on the right */}
            <div className="[&_*]:text-background [&_button]:text-background [&_svg]:text-background flex-shrink-0">
              <LanguageSwitcher
                params={{ RenderingIdentifier: `${id}-language`, styles: '' }}
                rendering={props.rendering}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Search overlay */}
      {isSearchOpen && (
        <div className="border-border bg-background absolute top-full right-0 left-0 z-50 border-b shadow-lg">
          <div className="mx-auto max-w-7xl px-4 py-4">
            <div className="flex items-center gap-2">
              <PreviewSearch
                rfkId={PREVIEW_WIDGET_ID}
                isOpen={isSearchOpen}
                setIsSearchOpen={setIsSearchOpen}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};
