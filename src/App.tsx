/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/sections/HeroSection';
import { BrandLogosSection } from './components/sections/BrandLogosSection';
import { DynamicStream48 } from './components/sections/DynamicStream48';
import { PortfolioSection } from './components/sections/PortfolioSection';
import { ServicesSection } from './components/sections/ServicesSection';
import { DynamicStream22 } from './components/sections/DynamicStream22';
import { TestimonialsSection } from './components/sections/TestimonialsSection';
import { ContactSection } from './components/sections/ContactSection';

import { ItemDetailsModal } from './components/ItemDetailsModal';
import { BookingModal } from './components/BookingModal';
import { FavouritesDrawer } from './components/FavouritesDrawer';
import { ChatbotModal } from './components/ChatbotModal';
import { FloatingActions } from './components/FloatingActions';

import { PORTFOLIO_CARDS } from './data/portfolioData';
import { SERVICES_CARDS } from './data/servicesData';
import { BRAND_WATCHES_DATA } from './data/brandWatchesData';
import { WatchCard } from './types/watch';
import { CheckCircle2, ShoppingBag } from 'lucide-react';

const STORAGE_KEY = 'bertocchi_luxury_favourites';
const CART_STORAGE_KEY = 'bertocchi_luxury_cart';

export default function App() {
  // 1. Favourites State with safe LocalStorage handling
  const [favouriteIds, setFavouriteIds] = useState<Set<string>>(() => {
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        const stored = window.localStorage.getItem(STORAGE_KEY);
        if (stored) {
          const parsed = JSON.parse(stored);
          if (Array.isArray(parsed)) {
            return new Set<string>(parsed);
          }
        }
      }
    } catch {
      // Graceful fallback
    }
    return new Set<string>();
  });

  // 2. Consultation Cart State
  const [cartIds, setCartIds] = useState<Set<string>>(() => {
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        const stored = window.localStorage.getItem(CART_STORAGE_KEY);
        if (stored) {
          const parsed = JSON.parse(stored);
          if (Array.isArray(parsed)) {
            return new Set<string>(parsed);
          }
        }
      }
    } catch {
      // Graceful fallback
    }
    return new Set<string>();
  });

  // Toast Notification State
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Sync favourites to localStorage
  useEffect(() => {
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        window.localStorage.setItem(
          STORAGE_KEY,
          JSON.stringify(Array.from(favouriteIds))
        );
      }
    } catch {
      // Safe error handling
    }
  }, [favouriteIds]);

  // Sync cart to localStorage
  useEffect(() => {
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        window.localStorage.setItem(
          CART_STORAGE_KEY,
          JSON.stringify(Array.from(cartIds))
        );
      }
    } catch {
      // Safe error handling
    }
  }, [cartIds]);

  const toggleFavourite = useCallback((id: string, e?: React.MouseEvent) => {
    if (e) {
      e.stopPropagation();
    }
    setFavouriteIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  }, []);

  const clearFavourites = useCallback(() => {
    setFavouriteIds(new Set<string>());
  }, []);

  const handleAddToCart = useCallback((card: WatchCard, e?: React.MouseEvent) => {
    if (e) {
      e.stopPropagation();
    }
    setCartIds((prev) => {
      const next = new Set(prev);
      next.add(card.id);
      return next;
    });

    setToastMessage(`"${card.name}" added to consultation cart`);
    setTimeout(() => {
      setToastMessage(null);
    }, 3200);
  }, []);

  // Combined item catalog across portfolio, services, and all brand watches
  const allCardsMap = useMemo(() => {
    const map = new Map<string, WatchCard>();
    PORTFOLIO_CARDS.forEach((c) => map.set(c.id, c));
    SERVICES_CARDS.forEach((c) => map.set(c.id, c));
    Object.values(BRAND_WATCHES_DATA).forEach((brand) => {
      brand.watches.forEach((w) => map.set(w.id, w));
    });
    return map;
  }, []);

  const favouriteItemsList = useMemo(() => {
    const list: WatchCard[] = [];
    favouriteIds.forEach((id) => {
      const card = allCardsMap.get(id);
      if (card) list.push(card);
    });
    return list;
  }, [favouriteIds, allCardsMap]);

  // Modals & Interactive View States
  const [activeDetailsItem, setActiveDetailsItem] = useState<WatchCard | null>(null);
  const [activeBookingItem, setActiveBookingItem] = useState<WatchCard | null>(null);
  const [isFavouritesDrawerOpen, setIsFavouritesDrawerOpen] = useState(false);
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);

  // Navigation helper
  const navigateToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  }, []);

  const handleOpenBooking = useCallback((card?: WatchCard) => {
    if (card) {
      setActiveBookingItem(card);
    } else {
      setActiveBookingItem(SERVICES_CARDS[34]); // Appointment Enquiries
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#fcfbfa] text-[#0c1b33]">
      {/* Toast Notification Alert */}
      {toastMessage && (
        <div className="fixed top-24 right-4 sm:right-8 z-50 flex items-center gap-2.5 px-4 py-3 rounded-xl bg-[#0c1b33] text-white border border-[#c5a059] shadow-2xl animate-fade-in text-xs font-semibold">
          <CheckCircle2 className="w-4 h-4 text-[#c5a059]" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Navigation Header */}
      <Header
        favouritesCount={favouriteIds.size}
        onOpenFavourites={() => setIsFavouritesDrawerOpen(true)}
        onNavigateSection={navigateToSection}
      />

      {/* Main Content Layout */}
      <main className="flex-1">
        {/* 1. Hero Section with Background Video */}
        <HeroSection
          onExplorePortfolio={() => navigateToSection('brands')}
          onNavigateContact={() => navigateToSection('contact')}
        />

        {/* 2. Brand Logos Section (Replacing old block below hero with 8 brands & 10 watches each) */}
        <BrandLogosSection
          favouriteIds={favouriteIds}
          onToggleFavourite={toggleFavourite}
          onViewDetails={(card) => setActiveDetailsItem(card)}
          onBookingView={(card) => setActiveBookingItem(card)}
        />

        {/* 3. 48-Card Dynamic Motion Horology Stream (Top row gliding right, bottom row gliding left) */}
        <DynamicStream48
          favouriteIds={favouriteIds}
          onToggleFavourite={toggleFavourite}
          onViewDetails={(card) => setActiveDetailsItem(card)}
        />

        {/* 5. Portfolio Section (Exactly 3 cards per row on desktop) */}
        <PortfolioSection
          cards={PORTFOLIO_CARDS}
          favouriteIds={favouriteIds}
          onToggleFavourite={toggleFavourite}
          onViewDetails={(card) => setActiveDetailsItem(card)}
        />

        {/* 6. Services Section (36 cards, 3 per row on desktop) */}
        <ServicesSection
          cards={SERVICES_CARDS}
          favouriteIds={favouriteIds}
          onToggleFavourite={toggleFavourite}
          onViewDetails={(card) => setActiveDetailsItem(card)}
          onBookingView={(card) => setActiveBookingItem(card)}
          onAddToCart={handleAddToCart}
        />

        {/* 7. 22-Card Dynamic Animation Section (Placed right before reviews) */}
        <DynamicStream22
          favouriteIds={favouriteIds}
          onToggleFavourite={toggleFavourite}
          onViewDetails={(card) => setActiveDetailsItem(card)}
        />

        {/* 8. Testimonials & Customer Trust Section (4.6 / 5, 30 Reviews) */}
        <TestimonialsSection
          onContactClick={() => navigateToSection('contact')}
        />

        {/* 9. Contact Section & Footer with exact Instagram and active social icons */}
        <ContactSection
          onNavigateSection={navigateToSection}
          onOpenBooking={() => handleOpenBooking()}
        />
      </main>

      {/* Shared Modals & Dialogs */}
      {/* 1. Item Details Modal with exact images & specifications */}
      <ItemDetailsModal
        item={activeDetailsItem}
        onClose={() => setActiveDetailsItem(null)}
        onBookAppointment={(item) => setActiveBookingItem(item)}
        onAddToCart={(item) => handleAddToCart(item)}
        isFavourited={activeDetailsItem ? favouriteIds.has(activeDetailsItem.id) : false}
        onToggleFavourite={(id) => toggleFavourite(id)}
      />

      {/* 2. Shared Booking View Modal */}
      <BookingModal
        item={activeBookingItem}
        onClose={() => setActiveBookingItem(null)}
      />

      {/* 3. Favourites & Consultation Drawer */}
      <FavouritesDrawer
        isOpen={isFavouritesDrawerOpen}
        onClose={() => setIsFavouritesDrawerOpen(false)}
        favouriteItems={favouriteItemsList}
        onRemoveFavourite={(id) => toggleFavourite(id)}
        onClearFavourites={clearFavourites}
        onViewDetails={(item) => setActiveDetailsItem(item)}
        onBookAppointment={(item) => setActiveBookingItem(item)}
      />

      {/* 5. Interactive Boutique Chatbot Assistant */}
      <ChatbotModal
        isOpen={isChatbotOpen}
        onClose={() => setIsChatbotOpen(false)}
        onNavigateSection={navigateToSection}
      />

      {/* 6. Fixed Floating Contact Interface (Chatbot, WhatsApp, Phone) */}
      <FloatingActions
        onToggleChatbot={() => setIsChatbotOpen((prev) => !prev)}
        isChatbotOpen={isChatbotOpen}
      />
    </div>
  );
}
