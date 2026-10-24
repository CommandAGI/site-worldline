# Worldline site

The about page’s ecosystem diagram uses the horizontal SVG above 700 px. At 700 px and below, the same nodes
read top to bottom. Its labels and notes inherit the body text size, and the boxes grow with their text.

From the CommandAGI checkout that holds this site, run:

```sh
ORG_SITE=org-worldline/sites/worldline node tests/workbench/browser_org_diagrams.mjs
```

The browser check opens the site at 390 px and 1280 px, measures label fit, phone text size and reading order,
and saves screenshots and measurements under `test-results/org-diagrams/`.
