import sanityClient from '@sanity/client'


const client = sanityClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: 'production',
  apiVersion: '2021-03-25', 
  token: 'sanity-auth-token',
  useCdn: true, 
})