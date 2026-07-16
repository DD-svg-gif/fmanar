import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";

const PRODUCTS: Record<string, string[]> = {
  "Dining Room": [
    "08-01 Dining table",
    "08-02 Dining chair",
    "08-03 Sideboard",
    "08-04 Display cabinet",
    "08-05 Bar cart",
    "08-06 Round table",
    "08-07 Wine console",
    "08-08 Buffet",
  ],
  "Living Room": [
    "07-04 Lounge chair", "12-09A TV cabinet", "07-02 Single chair", "12-102 Console",
    "12-12 TV cabinet", "12-08 Sideboard", "12-06 Media unit", "12-05 Sideboard",
    "12-03 Console", "12-02 TV cabinet", "10-02 Entryway", "10-01B Entryway",
    "11-01 Lounge sofa", "11-02 Accent chair", "11-03 Tufted sofa", "11-04 Salon set",
    "11-05 Baroque suite", "11-06 Marble lounge", "11-07 Corner suite", "11-08 Modular sofa",
    "11-09 Velvet lounge", "11-10 Signature sofa", "11-11 Marble lounge suite",
    "11-12 Velvet chesterfield", "12-01 Curved suite", "12-02 Modular lounge",
    "12-03 Chesterfield pair", "12-04 Pink salon", "12-05 Striped ensemble",
    "12-06 Butterfly lounge", "12-07 Teal accent suite", "12-08 Curved sofa set",
    "12-09 Tufted living set", "12-10 Grand sectional", "12-11 Leopard salon",
    "12-12 Fringe & noir suite",
  ],
  "Office Room": [
    "05-01 Executive desk", "05-02 Office chair", "05-03 Bookshelf",
    "05-04 Filing cabinet", "05-05 Reading lamp", "05-06 Side table",
  ],
  Bedroom: [
    "03-01 King bed", "03-02 Nightstand", "03-03 Wardrobe", "03-04 Dresser",
    "03-05 Bench", "03-06 Mirror", "03-07 Lounge chair", "03-08 Vanity",
  ],
  "Movie & TV room": [
    "15-01 Cinema sofa", "15-02 Recliner", "15-03 Media console", "15-04 Side table",
  ],
  Kitchen: [
    "20-01 Kitchen island", "20-02 Bar stool", "20-03 Pantry cabinet",
    "20-04 Breakfast table", "20-05 Wall unit",
  ],
  "Full-Service Design-Build": [
    "Project — Villa Como", "Project — Penthouse Milano",
    "Project — Riad Marrakech", "Project — Hôtel Particulier",
  ],
};

export default defineTool({
  name: "list_products",
  title: "List products",
  description:
    "List FMANAR furniture products. Optionally filter by category (see list_categories for valid values).",
  inputSchema: {
    category: z
      .string()
      .optional()
      .describe("Optional category name, e.g. 'Living Room', 'Bedroom', 'Dining Room'."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ category }) => {
    if (category) {
      const items = PRODUCTS[category];
      if (!items) {
        return {
          content: [
            {
              type: "text",
              text: `Unknown category: ${category}. Valid categories: ${Object.keys(PRODUCTS).join(", ")}`,
            },
          ],
          isError: true,
        };
      }
      return {
        content: [{ type: "text", text: items.join("\n") }],
        structuredContent: { category, products: items },
      };
    }
    const all = Object.entries(PRODUCTS).map(([cat, items]) => ({ category: cat, products: items }));
    const text = all
      .map(({ category: c, products }) => `## ${c}\n${products.join("\n")}`)
      .join("\n\n");
    return {
      content: [{ type: "text", text }],
      structuredContent: { catalog: all },
    };
  },
});
