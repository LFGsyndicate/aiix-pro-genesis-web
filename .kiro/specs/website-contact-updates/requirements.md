# Requirements Document

## Introduction

This feature involves updating the AIix Pro website contact information and navigation menu to ensure consistent telegram links across all components and remove any outdated menu items.

## Requirements

### Requirement 1

**User Story:** As a website visitor, I want to have consistent and correct contact links throughout the site, so that I can easily reach the company through the proper channels.

#### Acceptance Criteria

1. WHEN a user clicks on telegram social icons THEN the system SHALL redirect to https://t.me/aiixpro_bot
2. WHEN a user clicks on the contact button THEN the system SHALL redirect to https://t.me/ruhunt
3. WHEN a user views the contact button THEN the system SHALL display "ORDER PROJECT" in English and "ЗАКАЗ ПРОЕКТА" in Russian

### Requirement 2

**User Story:** As a website visitor, I want to see a clean and relevant navigation menu, so that I can easily find the information I need without outdated or irrelevant menu items.

#### Acceptance Criteria

1. WHEN a user views the navigation menu THEN the system SHALL NOT display any "Use Cases" menu items
2. WHEN a user views the mobile navigation menu THEN the system SHALL NOT display any "Use Cases" menu items
3. WHEN a user switches between languages THEN the system SHALL maintain the same menu structure without "Use Cases" items

### Requirement 3

**User Story:** As a website visitor, I want all contact information to be consistent across different sections of the website, so that I don't get confused by different contact methods.

#### Acceptance Criteria

1. WHEN a user views the footer THEN the system SHALL display the same telegram link as the contact section
2. WHEN a user views any social media links THEN the system SHALL use the updated telegram bot link
3. WHEN a user accesses the site in either language THEN the system SHALL maintain consistent contact information