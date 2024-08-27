import endpoint from "shared/endpoint";

/**
 * Get Overviews
 */
export function getOverviews() {
  return endpoint.get("/overview");
}
