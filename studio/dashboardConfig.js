export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f843448d4a8da799755d7cf',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-eqoz9pi3',
                  apiId: 'e00d7668-8e2b-4285-a439-b103b923543a'
                },
                {
                  buildHookId: '5f84344850faf0795ea5f267',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-s5gxuzpg',
                  apiId: 'cc7c3da6-3f7e-438f-bfdf-7d1bd6552ebc'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/igork1/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-s5gxuzpg.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
