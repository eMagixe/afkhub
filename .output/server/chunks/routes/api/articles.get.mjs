import { d as defineEventHandler, g as getQuery, u as useRuntimeConfig, c as createError } from '../../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import '@iconify/utils';
import 'consola';

const articles_get = defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  const query = getQuery(event);
  const response = await fetch(
    config.public.API + "/items/articles?limit=" + query.limit + "&offset=" + query.offset + "&fields=*,categories.*",
    { method: "get" }
  );
  if (response.ok) {
    return response.json().then((res) => res.data);
  } else {
    const error = await response.json();
    throw createError({
      statusCode: response.status,
      statusMessage: error.message || "Failed to fetch posts"
    });
  }
});

export { articles_get as default };
//# sourceMappingURL=articles.get.mjs.map
