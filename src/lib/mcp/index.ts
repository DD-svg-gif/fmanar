import { defineMcp } from "@lovable.dev/mcp-js";
import listCategoriesTool from "./tools/list-categories";
import listProductsTool from "./tools/list-products";
import submitRequestInfoTool from "./tools/submit-request-info";

export default defineMcp({
  name: "fmanar-mcp",
  title: "FMANAR MCP",
  version: "0.1.0",
  instructions:
    "Tools for the FMANAR luxury Italian furniture site. Use `list_categories` and `list_products` to browse the public catalog. Use `submit_request_info` to send an inquiry (equivalent to the public Request Info form).",
  tools: [listCategoriesTool, listProductsTool, submitRequestInfoTool],
});
