# Design Document

## Overview

This design outlines the updates needed for the AIix Pro website to ensure consistent contact information and clean navigation. The changes focus on updating telegram links across components and removing outdated menu items while maintaining the existing bilingual functionality.

## Architecture

The website uses a React-based architecture with:
- Language context for bilingual support (English/Russian)
- Component-based structure with separate Header, ContactSection, and Footer components
- Conditional rendering based on language selection using `en-content` and `ru-content` CSS classes

## Components and Interfaces

### ContactSection Component
- **Current State**: Already contains correct telegram link (https://t.me/aiixpro_bot) and contact button (https://t.me/ruhunt)
- **Required Changes**: None - already meets requirements
- **Interface**: Uses `useLanguage` hook for bilingual content

### Footer Component  
- **Current State**: Contains outdated telegram link (https://t.me/aiixprof)
- **Required Changes**: Update telegram link to match ContactSection (https://t.me/aiixpro_bot)
- **Interface**: Uses `useLanguage` hook for bilingual content

### Header Component
- **Current State**: Navigation menu without "Use Cases" items
- **Required Changes**: None - already meets requirements
- **Interface**: Uses `useLanguage` hook for navigation labels

## Data Models

### Language Context
```typescript
type Language = 'en' | 'ru';

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
}
```

### Contact Links Configuration
```typescript
interface ContactLinks {
  telegram: string; // https://t.me/aiixpro_bot
  contactButton: string; // https://t.me/ruhunt
  whatsapp: string; // https://wa.me/79097878786 (unchanged)
}
```

## Error Handling

- **Link Validation**: All external links use `target="_blank"` and `rel="noopener noreferrer"` for security
- **Language Fallback**: System defaults to English if language preference is not set
- **Component Error Boundaries**: Existing React error handling maintains component isolation

## Testing Strategy

### Manual Testing
1. **Link Verification**: Test all telegram links redirect to correct destinations
2. **Language Switching**: Verify consistent contact information across both languages  
3. **Responsive Testing**: Ensure links work correctly on mobile and desktop
4. **Cross-Component Consistency**: Verify Footer and ContactSection use same telegram link

### Automated Testing
1. **Component Rendering**: Test that components render without errors
2. **Link Attributes**: Verify all external links have proper security attributes
3. **Language Context**: Test language switching functionality
4. **Accessibility**: Ensure links have proper ARIA labels and are keyboard accessible

## Implementation Notes

- The website uses CSS classes `en-content` and `ru-content` for language-specific content display
- All components import and use the `useLanguage` hook from `../context/LanguageContext`
- Social media icons use Lucide React icons (Send, MessageCircle, etc.)
- The design maintains existing styling and layout while only updating link destinations