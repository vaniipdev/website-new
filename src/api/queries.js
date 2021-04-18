export const queryProjects = `
{
  projectCollection(order: sys_publishedAt_ASC) {
    total
    limit
    items {
      id
      sys {
        id
        spaceId
        environmentId
        publishedAt
        firstPublishedAt
        publishedVersion
      }
      title
      description
      slug
      picture{
        size
        title
        width
        height
        fileName
        url
      }
    }
  }
}
`

export const queryProject = `
query ProjectById($id: String!) {
  project(id:$Id) {
    id
    title
    description
    slug
    picture{
      size
      title
      width
      height
      fileName
      url
    }
  }
}
`