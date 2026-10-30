# DIH / $DayOne Asset Usage Plan

Status: planning based on the filename inventory. Assets have not all been visually inspected yet; verify the rendered content before final integration.

## Design direction
Build the DIH website as a living pixel-art world inspired by the supplied $DayOne campaign posters: dense golden city, deep-space backdrops, construction motifs, pixel typography, and the official beaver mascot. Use the supplied art as source material rather than recreating existing assets in CSS. Keep page content accessible and readable on mobile.

## Section-to-asset mapping

| Website section | Candidate assets | Planned use | Integration decision |
|---|---|---|---|
| Hero / The Resurgence | `DayOne_Roadmap_WebP_Assets/01_hero_banner.webp`; `DayOne_Complete_Asset_Library/01_Brand_Reference/reference_poster_epic.webp`; `DayOne_Complete_Asset_Library/05_Backgrounds/01_night_sky.webp`; `DayOne_Complete_Asset_Library/05_Backgrounds/02_deep_space.webp`; `DIH_New_Pixel_Assets/dih_beaver_pixel_static.webp` | Inspect banner/poster as art direction; use background and mascot as layered elements if assets are suitable and legible at mobile sizes. Do not simply use a full poster as the whole page. | Candidate; visual review needed |
| Brand identity / header | `DayOne_Roadmap_WebP_Assets/02_header_logo_banner.webp`; `DayOne_Complete_Asset_Library/01_Brand_Reference/brand_visual_rules.webp` | Extract rules and inspect whether banner is a composite image or usable logo. Prefer text/SVG logo for crisp responsive navigation if no isolated logo exists. | Candidate; inspect composition |
| Manifesto / build philosophy | `DayOne_Complete_Asset_Library/01_Brand_Reference/concept_asset_board_02_reference.webp`; `concept_asset_board_03_reference.webp` | Use as visual references, not automatically as embedded UI. Build editorial scene around real brand motifs. | Reference only pending review |
| Ecosystem / project locations | `DayOne_Roadmap_WebP_Assets/04_ecosystem_card.webp`; `DayOne_Complete_Asset_Library/04_UI_Icons/03_gamepad_icon.webp`; `02_community_icon.webp`; `01_rocket_icon.webp` | Use gamepad/rocket/community icon only where semantic meaning matches; favour scene panels over generic cards. | Candidate |
| Roadmap / journey | `DayOne_Complete_Asset_Library/03_Roadmap_Assets/00_roadmap_milestones_overview.webp`; `01_milestone_10k_card.webp` through `05_milestone_1m_card.webp`; `DayOne_Roadmap_WebP_Assets/06_roadmap_milestone_cards.webp`; `10_milestone_signs_and_labels.webp` | Compare individual milestone art with composite sheets; avoid duplicating the same artwork. Validate milestone wording and values against the current approved roadmap before publication. | High priority; content verification required |
| Community / social | `DayOne_Complete_Asset_Library/02_Social_Assets/02_follow_card_1080x1080.webp`; `03_telegram_join_card_1080x1080.webp`; `DayOne_Roadmap_WebP_Assets/14_telegram_qr_card_reference.webp`; `15_social_info_card.webp` | Use as visual inspiration or downloadable social assets. Do not rely on a QR image as the only join route; keep accessible Telegram/X links as real HTML links. | Candidate; verify links/QR |
| Token / contract | `DayOne_Roadmap_WebP_Assets/16_solana_contract_card_reference.webp`; `07_token_badges_and_icons.webp` | Treat as decorative/reference artwork only. Contract address must remain selectable text, copyable and independently verified. | Candidate; contract must be checked |
| Background / atmosphere | `05_Backgrounds/01_night_sky.webp`; `02_deep_space.webp`; `03_moon_horizon.webp`; `04_community_glow.webp`; `DayOne_Roadmap_WebP_Assets/13_background_panels.webp`; `11_decorative_elements.webp` | Layer carefully with gradients and CSS; ensure text contrast and avoid stacking too many large images. | Candidate; inspect sizes and transparency |
| Mascot / character | `DIH_New_Pixel_Assets/dih_beaver_pixel_static.webp`; `DayOne_Roadmap_WebP_Assets/12_mascot_poses_and_stickers.webp` | Use the official beaver in the hero and selected scenes. Inspect sprite sheet layout before cropping; do not stretch or alter identity. | High priority; inspect sheet layout |
| UI icons | `DayOne_Complete_Asset_Library/04_UI_Icons/*`; `DayOne_Roadmap_WebP_Assets/08_ui_icons.webp`; `09_action_buttons.webp`; `07_token_badges_and_icons.webp` | Determine whether these are isolated icons or contact sheets. Use individual assets only when they are crisp at target sizes and consistent in style. | Candidate; inspect sheet vs individual |
| Brand/campaign reference | `reference_poster_epic.webp`; `reference_poster_minimal.webp`; `01_resurgence_announcement_1080x1350.webp`; `04_creator_campaign_1600x900.webp`; `00_master_asset_sheet.webp`; `roadmap_asset_sheet_reference.webp` | Reference/preview sheets should not be shipped as UI unless there is a deliberate reason. Prefer their original component assets. | Reference only by default |

## Assets apparently unused by the current homepage
A source scan of the current `index.html` found only one local image reference: `assets/dih_beaver_pixel_static.webp`. Therefore, all other bundle assets appear unused by the current homepage at the time of this audit. This does not mean every file should be added; some are contact sheets, social exports, reference posters, or duplicates/variants.

## Required technical QA before integrating
1. Extract image dimensions, file size, alpha/transparency, colour mode, and image hashes for all raster files.
2. Build a contact sheet so every visual asset can be reviewed, including large sprite/contact sheets.
3. Detect byte-identical duplicates and likely near-duplicates; review manually before removing anything.
4. Inspect the 12-mascot pose sheet and icon sheets before cropping.
5. Verify all text embedded in graphics, especially roadmap milestones, project names, social handles, QR destination, and contract address. Treat embedded copy as non-authoritative until verified.
6. Test each selected asset on a narrow mobile viewport and use lazy loading for below-the-fold artwork.
7. Preserve the existing documents, CNAME, robots.txt, sitemap.xml, and current official mascot path.

## Priority order
- P0: Generate image metadata + contact sheet; inspect roadmap, mascot and brand sheets.
- P1: Select hero background, mascot composition and one coherent environment style.
- P2: Rebuild roadmap using verified milestone assets/content.
- P3: Add ecosystem, community and supporting icons only where they strengthen the story.
- P4: Run mobile/performance/accessibility checks; do not remove original bundle files.

## Safety/content note
The supplied posters contain token marketing and market-cap milestones. Only publish target figures or claims if they are still approved and clearly presented as goals, not guarantees. Never imply returns are guaranteed.
