import React from 'react';
import BlogLayoutContainer from '../../components/blogs/BlogLayoutContainer';
import {
  BlogTitle,
  BlogDesc,
  BlogHeader,
  BlogParagraph,
  BlogTip,
  BlogCodeBlock,
  BlogTerminal,
  BlogAuthor,
  WhiteBoldHighlight,
} from '../../components/blogs/components';

export default function HowToPlanAProject() {
  return (
    <BlogLayoutContainer>
      <BlogTitle>How to Plan, Architect, and Execute a Full-Stack SaaS Project</BlogTitle>
      <BlogDesc>
        Building production-grade web applications requires intentional planning before writing code. Here is the architectural methodology I followed while building Optical Manager.
      </BlogDesc>

      <BlogParagraph>
        When starting a complex SaaS application, jumping straight into UI design or database tables often leads to costly rewrites. A structured engineering blueprint prevents technical debt and ensures seamless scaling.
      </BlogParagraph>

      <BlogHeader>1. Schema Design First</BlogHeader>
      <BlogParagraph>
        Start by mapping out business domain models on paper or in DB diagram tools. In <WhiteBoldHighlight>Optical Manager</WhiteBoldHighlight>, we had over 15 interconnected relational entities (tenants, store branches, inventory variants, clinical ophthalmic records, and GST-compliant invoices).
      </BlogParagraph>

      <BlogCodeBlock
        language="typescript"
        filename="schema.ts"
        code={`// Example relational schema mapping with Drizzle ORM
import { pgTable, uuid, text, timestamp, decimal } from 'drizzle-orm/pg-core';

export const products = pgTable('products', {
  id: uuid('id').primaryKey().defaultRandom(),
  tenantId: uuid('tenant_id').notNull(),
  sku: text('sku').notNull().unique(),
  name: text('name').notNull(),
  price: decimal('price', { precision: 10, scale: 2 }).notNull(),
  createdAt: timestamp('created_at').defaultNow(),
});`}
      />

      <BlogHeader>2. Establish Rigorous Development Workflows</BlogHeader>
      <BlogParagraph>
        Ensure local environments, database migrations, and typecheck scripts are fully reproducible from day one.
      </BlogParagraph>

      <BlogTerminal
        title="Project Setup"
        commands={[
          'npm install',
          'npx drizzle-kit generate',
          'npx drizzle-kit migrate',
          'npm run dev',
        ]}
      />

      <BlogTip title="Engineering Advice">
        Always implement multi-tenant data isolation at the ORM layer or database row-level security (RLS) early. Retrofitting tenant safety later is significantly harder.
      </BlogTip>

      <BlogHeader>3. Iterate with Real End-Users</BlogHeader>
      <BlogParagraph>
        Building for 5+ retail optical stores in Delhi NCR taught us that speed and usability trump unnecessary features. Every millisecond shaved off the billing workflow directly boosts retail efficiency.
      </BlogParagraph>

      <BlogAuthor name="Gaurav Tiwari" avatar="/images/profile/pfp-latest.jpg">
        Software Developer & Full-Stack Engineer building real-world applications and SaaS platforms.
      </BlogAuthor>
    </BlogLayoutContainer>
  );
}
