import kit from '@mrmartineau/kit/oxfmt' with { type: 'json' }

export default { ...kit, ignorePatterns: ['**/dist', 'src/routeTree.gen.ts', 'src/types/supabase.ts', '**/*.md', '**/*.mdx', '**/*.yml', '**/*.yaml', '**/*.html'] }
