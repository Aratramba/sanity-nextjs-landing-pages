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
                  buildHookId: '5ee0c8552096b05ec15714a7',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-vhnzkvxf',
                  apiId: 'e7a356a6-b863-4388-8d48-17e9473eb61e'
                },
                {
                  buildHookId: '5ee0c856bb3da4b43829260c',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-3jjrrmjv',
                  apiId: 'e19db6f3-b2e9-4e27-8437-3ec808380795'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Aratramba/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-3jjrrmjv.netlify.app', category: 'apps'}
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
