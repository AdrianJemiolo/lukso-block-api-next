'use client';

import dynamicImport from 'next/dynamic';
import 'swagger-ui-react/swagger-ui.css';

const SwaggerUI = dynamicImport(() => import('swagger-ui-react'), { ssr: false });

export const dynamicRendering = 'force-dynamic';

export default function ApiDocs() {
  return (
    <SwaggerUI
      url="/swagger.json" // Directory swagger.json
      docExpansion="none"
      defaultModelsExpandDepth={-1}
    />
  );
}
