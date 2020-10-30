export default {
  widgets: [
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
                  buildHookId: '5f9b5e0a3a1da80129116a62',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-tiqitbk6',
                  apiId: '875650d1-18a6-43b4-8f37-2e378bc7c863'
                },
                {
                  buildHookId: '5f9b5e0a3a1da8013b1170f7',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-cyyu9by8',
                  apiId: '6cde1880-4886-4841-988c-2f93265de7cf'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/lewis-lin/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-cyyu9by8.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
