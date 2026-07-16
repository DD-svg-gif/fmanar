import { defineTool } from "@lovable.dev/mcp-js";

const CATEGORIES = [
  "Dining Room",
  "Living Room",
  "Office Room",
  "Bedroom",
  "Movie & TV room",
  "Kitchen",
  "Full-Service Design-Build",
];

export default defineTool({
  name: "list_categories",
  title: "List product categories",
  description: "List all FMANAR furniture product categories available on the site.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: CATEGORIES.join("\n") }],
    structuredContent: { categories: CATEGORIES },
  }),
});
