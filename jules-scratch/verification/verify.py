from playwright.sync_api import sync_playwright

def run(playwright):
    browser = playwright.chromium.launch(headless=True)
    page = browser.new_page()

    # 1. Arrange: Go to the application.
    page.goto("http://127.0.0.1:8080")

    # Set a mobile viewport to test responsiveness
    page.set_viewport_size({"width": 375, "height": 812})

    # 2. Assert: Check that "Use Cases" is not in the header.
    header = page.locator("header")
    # Corrected assertion
    assert not header.get_by_text("Use Cases").is_visible()
    assert not header.get_by_text("Применения").is_visible()

    # 3. Screenshot: Capture the initial (English) view.
    page.screenshot(path="jules-scratch/verification/verification_en.png")

    # 4. Act: Switch to Russian.
    ru_button = page.get_by_role("button", name="RU")
    ru_button.click()

    # 5. Assert: Check the contact button text and link in Russian.
    contact_button = page.get_by_role("link", name="ЗАКАЗ ПРОЕКТА")
    assert contact_button.is_visible()
    assert contact_button.get_attribute("href") == "https://t.me/ruhunt"

    # 6. Screenshot: Capture the Russian view.
    page.screenshot(path="jules-scratch/verification/verification_ru.png")

    # 7. Assert: Check the telegram link in Russian.
    telegram_link = page.locator('a[href="https://t.me/aiixpro_bot"]')
    assert telegram_link.is_visible()

    # 8. Act: Switch back to English
    en_button = page.get_by_role("button", name="EN")
    en_button.click()

    # 9. Assert: Check the contact button text and link in English.
    contact_button_en = page.get_by_role("link", name="ORDER PROJECT")
    assert contact_button_en.is_visible()
    assert contact_button_en.get_attribute("href") == "https://t.me/ruhunt"

    # 10. Assert: Check the telegram link in English.
    telegram_link_en = page.locator('a[href="https://t.me/aiixpro_bot"]')
    assert telegram_link_en.is_visible()

    # 11. Screenshot: Capture the final (English) view.
    page.screenshot(path="jules-scratch/verification/verification_en_final.png")

    browser.close()

with sync_playwright() as playwright:
    run(playwright)
